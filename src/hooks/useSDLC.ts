import { useState, useEffect, useMemo } from 'react';
import { SDLCTemplate, SDLCTask, ProjectHealth, TeamMember, ProjectMetrics } from '@/types/sdlc';
import { sdlcTemplates } from '@/data/sdlcTemplates';

export const useSDLC = () => {
  const [activeTemplate, setActiveTemplate] = useState<SDLCTemplate | null>(null);
  const [tasks, setTasks] = useState<SDLCTask[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [projectStartDate, setProjectStartDate] = useState<Date | null>(null);

  useEffect(() => {
    loadActiveProject();
  }, []);

  const loadActiveProject = () => {
    const savedProject = localStorage.getItem('sdlc-active-project');
    const savedTasks = localStorage.getItem('sdlc-tasks');
    const savedTeam = localStorage.getItem('sdlc-team');
    const savedStartDate = localStorage.getItem('sdlc-start-date');
    
    if (savedProject) {
      setActiveTemplate(JSON.parse(savedProject));
    }
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedTeam) {
      setTeamMembers(JSON.parse(savedTeam));
    }
    if (savedStartDate) {
      setProjectStartDate(new Date(savedStartDate));
    }
  };

  const startProject = (templateId: string) => {
    const template = sdlcTemplates.find(t => t.id === templateId);
    if (template) {
      setActiveTemplate(template);
      const allTasks = template.phases.flatMap(phase => phase.tasks);
      setTasks(allTasks);
      const startDate = new Date();
      setProjectStartDate(startDate);
      
      // Initialize default team members
      const defaultTeam: TeamMember[] = [
        { id: '1', name: 'Project Manager', role: 'PM', email: 'pm@company.com', skills: ['management', 'agile'], capacity: 40 },
        { id: '2', name: 'Lead Developer', role: 'Dev Lead', email: 'dev@company.com', skills: ['react', 'node', 'architecture'], capacity: 40 },
        { id: '3', name: 'UX Designer', role: 'Designer', email: 'design@company.com', skills: ['figma', 'user-research'], capacity: 40 },
        { id: '4', name: 'QA Engineer', role: 'QA', email: 'qa@company.com', skills: ['testing', 'automation'], capacity: 40 }
      ];
      setTeamMembers(defaultTeam);
      
      localStorage.setItem('sdlc-active-project', JSON.stringify(template));
      localStorage.setItem('sdlc-tasks', JSON.stringify(allTasks));
      localStorage.setItem('sdlc-team', JSON.stringify(defaultTeam));
      localStorage.setItem('sdlc-start-date', startDate.toISOString());
    }
  };

  const updateTask = (taskId: string, updates: Partial<SDLCTask>) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, ...updates };
        if (updates.status === 'completed' && !task.completedDate) {
          updatedTask.completedDate = new Date().toISOString();
        }
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('sdlc-tasks', JSON.stringify(updatedTasks));
  };

  const assignTask = (taskId: string, assigneeId: string) => {
    const assignee = teamMembers.find(member => member.id === assigneeId);
    if (assignee) {
      updateTask(taskId, { assignee: assignee.name });
    }
  };

  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString()
    };
    const updatedTeam = [...teamMembers, newMember];
    setTeamMembers(updatedTeam);
    localStorage.setItem('sdlc-team', JSON.stringify(updatedTeam));
  };

  const projectMetrics = useMemo((): ProjectMetrics => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const overdueTasks = tasks.filter(task => {
      const dueDate = new Date(task.dueDate);
      const now = new Date();
      return dueDate < now && task.status !== 'completed';
    }).length;
    const blockedTasks = tasks.filter(task => task.status === 'blocked').length;

    // Calculate average completion time
    const completedTasksWithDates = tasks.filter(task => 
      task.status === 'completed' && task.completedDate
    );
    const avgCompletionTime = completedTasksWithDates.length > 0 
      ? completedTasksWithDates.reduce((sum, task) => {
          const started = new Date(task.dueDate);
          const completed = new Date(task.completedDate!);
          return sum + (completed.getTime() - started.getTime()) / (1000 * 60 * 60 * 24);
        }, 0) / completedTasksWithDates.length
      : 0;

    // Generate burndown data (simplified)
    const burndownData = [];
    const totalWeeks = activeTemplate?.estimatedDuration || 12;
    for (let week = 1; week <= totalWeeks; week++) {
      const planned = totalTasks - Math.floor((totalTasks / totalWeeks) * week);
      const actual = totalTasks - Math.floor((completedTasks / totalWeeks) * week);
      burndownData.push({ week, planned, actual });
    }

    // Generate velocity data
    const velocityData = [];
    for (let week = 1; week <= 8; week++) {
      const completed = Math.floor(Math.random() * 10) + 5; // Simulated data
      velocityData.push({ week, completed });
    }

    return {
      totalTasks,
      completedTasks,
      overdueTasks,
      blockedTasks,
      averageCompletionTime: avgCompletionTime,
      burndownData,
      velocityData
    };
  }, [tasks, activeTemplate]);

  const projectHealth = useMemo((): ProjectHealth => {
    if (!activeTemplate || tasks.length === 0) {
      return {
        score: 100,
        status: 'excellent',
        factors: {
          taskCompletion: 100,
          overdueItems: 0,
          teamActivity: 100,
          budgetUtilization: 0,
          scheduleAdherence: 100,
          riskAreas: []
        },
        recommendations: [],
        trends: {
          weeklyProgress: [100, 95, 90, 85, 80],
          velocityTrend: 'stable'
        }
      };
    }

    const { totalTasks, completedTasks, overdueTasks, blockedTasks } = projectMetrics;
    const taskCompletionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 100;
    const overdueRate = totalTasks > 0 ? (overdueTasks / totalTasks) * 100 : 0;
    const criticalOverdueTasks = tasks.filter(task => 
      task.priority === 'critical' && 
      new Date(task.dueDate) < new Date() && 
      task.status !== 'completed'
    ).length;

    // Calculate schedule adherence
    const expectedProgress = projectStartDate ? 
      Math.min(100, ((Date.now() - projectStartDate.getTime()) / (activeTemplate.estimatedDuration * 7 * 24 * 60 * 60 * 1000)) * 100) : 0;
    const scheduleAdherence = Math.max(0, 100 - Math.abs(expectedProgress - taskCompletionRate));

    // Calculate overall health score
    let score = 100;
    score -= overdueRate * 2; // Penalize overdue items heavily
    score -= (blockedTasks / totalTasks) * 100 * 1.5; // Penalize blocked tasks
    score -= Math.max(0, expectedProgress - taskCompletionRate) * 0.5; // Penalize schedule delays
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
    if (scheduleAdherence < 70) riskAreas.push('Behind schedule');

    // Generate recommendations
    const recommendations: string[] = [];
    if (overdueTasks > 0) {
      recommendations.push(`Focus on ${overdueTasks} overdue tasks`);
    }
    if (blockedTasks > 0) {
      recommendations.push(`Unblock ${blockedTasks} blocked tasks`);
    }
    if (taskCompletionRate < 50) {
      recommendations.push('Increase team productivity and task completion');
    }
    if (scheduleAdherence < 80) {
      recommendations.push('Review timeline and adjust resources');
    }

    // Generate trends
    const weeklyProgress = [100, 95, 90, 85, score]; // Simplified trend
    const velocityTrend: 'increasing' | 'stable' | 'decreasing' = 
      score > 85 ? 'increasing' : score > 70 ? 'stable' : 'decreasing';

    return {
      score: Math.round(score),
      status,
      factors: {
        taskCompletion: Math.round(taskCompletionRate),
        overdueItems: overdueTasks,
        teamActivity: Math.round(100 - (blockedTasks / totalTasks) * 100),
        budgetUtilization: Math.round(Math.random() * 100), // Simulated
        scheduleAdherence: Math.round(scheduleAdherence),
        riskAreas
      },
      recommendations,
      trends: {
        weeklyProgress,
        velocityTrend
      }
    };
  }, [activeTemplate, tasks, projectMetrics, projectStartDate]);

  const getTasksByPhase = (phaseId: string) => {
    const phase = activeTemplate?.phases.find(p => p.id === phaseId);
    return phase ? phase.tasks.map(task => tasks.find(t => t.id === task.id)!).filter(Boolean) : [];
  };

  const getTasksByStatus = (status: SDLCTask['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const getTasksByPriority = (priority: SDLCTask['priority']) => {
    return tasks.filter(task => task.priority === priority);
  };

  const getTasksByAssignee = (assignee: string) => {
    return tasks.filter(task => task.assignee === assignee);
  };

  return {
    // Data
    templates: sdlcTemplates,
    activeTemplate,
    tasks,
    teamMembers,
    projectHealth,
    projectMetrics,
    
    // Actions
    startProject,
    updateTask,
    assignTask,
    addTeamMember,
    
    // Utilities
    getTasksByPhase,
    getTasksByStatus,
    getTasksByPriority,
    getTasksByAssignee
  };
};
