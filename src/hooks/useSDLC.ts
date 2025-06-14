
import { useState, useEffect, useMemo } from 'react';
import { SDLCTemplate, SDLCTask, ProjectHealth } from '@/types/sdlc';
import { sdlcTemplates } from '@/data/sdlcTemplates';

export const useSDLC = () => {
  const [activeTemplate, setActiveTemplate] = useState<SDLCTemplate | null>(null);
  const [tasks, setTasks] = useState<SDLCTask[]>([]);

  useEffect(() => {
    loadActiveProject();
  }, []);

  const loadActiveProject = () => {
    const savedProject = localStorage.getItem('sdlc-active-project');
    const savedTasks = localStorage.getItem('sdlc-tasks');
    
    if (savedProject) {
      setActiveTemplate(JSON.parse(savedProject));
    }
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  const startProject = (templateId: string) => {
    const template = sdlcTemplates.find(t => t.id === templateId);
    if (template) {
      setActiveTemplate(template);
      const allTasks = template.phases.flatMap(phase => phase.tasks);
      setTasks(allTasks);
      
      localStorage.setItem('sdlc-active-project', JSON.stringify(template));
      localStorage.setItem('sdlc-tasks', JSON.stringify(allTasks));
    }
  };

  const updateTask = (taskId: string, updates: Partial<SDLCTask>) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('sdlc-tasks', JSON.stringify(updatedTasks));
  };

  const projectHealth = useMemo((): ProjectHealth => {
    if (!activeTemplate || tasks.length === 0) {
      return {
        score: 100,
        status: 'excellent',
        factors: {
          taskCompletion: 100,
          overdueItems: 0,
          teamActivity: 100,
          riskAreas: []
        },
        recommendations: []
      };
    }

    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const totalTasks = tasks.length;
    const taskCompletionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 100;

    const now = new Date();
    const overdueTasks = tasks.filter(task => 
      new Date(task.dueDate) < now && task.status !== 'completed'
    );
    const overdueRate = totalTasks > 0 ? (overdueTasks.length / totalTasks) * 100 : 0;

    const blockedTasks = tasks.filter(task => task.status === 'blocked').length;
    const criticalOverdueTasks = overdueTasks.filter(task => task.priority === 'critical').length;

    // Calculate overall health score
    let score = 100;
    score -= overdueRate * 2; // Penalize overdue items heavily
    score -= (blockedTasks / totalTasks) * 100 * 1.5; // Penalize blocked tasks
    score = Math.max(0, Math.min(100, score));

    // Determine status
    let status: ProjectHealth['status'] = 'excellent';
    if (score < 60) status = 'critical';
    else if (score < 75) status = 'warning';
    else if (score < 90) status = 'good';

    // Identify risk areas
    const riskAreas: string[] = [];
    if (overdueRate > 20) riskAreas.push('High number of overdue tasks');
    if (criticalOverdueTasks > 0) riskAreas.push('Critical tasks are overdue');
    if (blockedTasks > 0) riskAreas.push('Tasks are blocked');
    if (taskCompletionRate < 30) riskAreas.push('Low task completion rate');

    // Generate recommendations
    const recommendations: string[] = [];
    if (overdueTasks.length > 0) {
      recommendations.push(`Focus on ${overdueTasks.length} overdue tasks`);
    }
    if (blockedTasks > 0) {
      recommendations.push(`Unblock ${blockedTasks} blocked tasks`);
    }
    if (taskCompletionRate < 50) {
      recommendations.push('Increase team productivity and task completion');
    }

    return {
      score: Math.round(score),
      status,
      factors: {
        taskCompletion: Math.round(taskCompletionRate),
        overdueItems: overdueTasks.length,
        teamActivity: Math.round(100 - (blockedTasks / totalTasks) * 100),
        riskAreas
      },
      recommendations
    };
  }, [activeTemplate, tasks]);

  return {
    templates: sdlcTemplates,
    activeTemplate,
    tasks,
    projectHealth,
    startProject,
    updateTask
  };
};
