
import { useState, useEffect, useMemo, useCallback } from 'react';
import { SDLCTemplate, SDLCTask, ProjectHealth, TeamMember, ProjectMetrics } from '@/types/sdlc';
import { useSDLC } from '@/hooks/useSDLC';

export const useSDLCRealtime = () => {
  const sdlc = useSDLC();
  const [isRealTimeEnabled, setIsRealTimeEnabled] = useState(true);
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date());
  const [notifications, setNotifications] = useState<string[]>([]);

  // Real-time data synchronization
  useEffect(() => {
    if (!isRealTimeEnabled) return;

    const interval = setInterval(() => {
      // Simulate real-time updates
      const now = new Date();
      setLastUpdateTime(now);
      
      // Check for overdue tasks and create notifications
      const overdueTasks = sdlc.tasks.filter(task => 
        new Date(task.dueDate) < now && task.status !== 'completed'
      );
      
      if (overdueTasks.length > 0) {
        const newNotifications = overdueTasks.map(task => 
          `Task "${task.title}" is overdue by ${Math.ceil((now.getTime() - new Date(task.dueDate).getTime()) / (1000 * 60 * 60 * 24))} days`
        );
        setNotifications(prev => [...new Set([...prev, ...newNotifications])]);
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isRealTimeEnabled, sdlc.tasks]);

  // Enhanced metrics with real-time calculations
  const realtimeMetrics = useMemo(() => {
    const baseMetrics = sdlc.projectMetrics;
    const now = new Date();
    
    // Calculate velocity trend
    const completedThisWeek = sdlc.tasks.filter(task => {
      if (!task.completedDate) return false;
      const completed = new Date(task.completedDate);
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return completed >= weekAgo;
    }).length;

    // Calculate productivity score
    const totalEstimatedHours = sdlc.tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
    const completedEstimatedHours = sdlc.tasks
      .filter(task => task.status === 'completed')
      .reduce((sum, task) => sum + task.estimatedHours, 0);
    
    const productivityScore = totalEstimatedHours > 0 
      ? Math.round((completedEstimatedHours / totalEstimatedHours) * 100)
      : 0;

    return {
      ...baseMetrics,
      completedThisWeek,
      productivityScore,
      lastUpdated: lastUpdateTime,
      criticalTasksCount: sdlc.tasks.filter(task => 
        task.priority === 'critical' && task.status !== 'completed'
      ).length,
      teamUtilization: calculateTeamUtilization(sdlc.teamMembers, sdlc.tasks)
    };
  }, [sdlc.projectMetrics, sdlc.tasks, sdlc.teamMembers, lastUpdateTime]);

  // Enhanced project health with real-time risk assessment
  const realtimeProjectHealth = useMemo(() => {
    const baseHealth = sdlc.projectHealth;
    const now = new Date();
    
    // Real-time risk assessment
    const criticalOverdueCount = sdlc.tasks.filter(task => 
      task.priority === 'critical' && 
      new Date(task.dueDate) < now && 
      task.status !== 'completed'
    ).length;

    const blockedCriticalCount = sdlc.tasks.filter(task => 
      task.priority === 'critical' && task.status === 'blocked'
    ).length;

    // Adjust health score based on real-time factors
    let adjustedScore = baseHealth.score;
    adjustedScore -= criticalOverdueCount * 15; // Heavy penalty for critical overdue
    adjustedScore -= blockedCriticalCount * 10; // Penalty for blocked critical tasks
    adjustedScore = Math.max(0, Math.min(100, adjustedScore));

    // Dynamic recommendations
    const realtimeRecommendations = [...baseHealth.recommendations];
    if (criticalOverdueCount > 0) {
      realtimeRecommendations.unshift(`URGENT: ${criticalOverdueCount} critical tasks are overdue`);
    }
    if (blockedCriticalCount > 0) {
      realtimeRecommendations.unshift(`HIGH PRIORITY: ${blockedCriticalCount} critical tasks are blocked`);
    }

    return {
      ...baseHealth,
      score: Math.round(adjustedScore),
      recommendations: realtimeRecommendations,
      lastUpdated: lastUpdateTime,
      alerts: {
        criticalOverdue: criticalOverdueCount,
        blockedCritical: blockedCriticalCount,
        teamOverutilized: sdlc.teamMembers.filter(member => 
          getAssignedHours(member, sdlc.tasks) > member.capacity
        ).length
      }
    };
  }, [sdlc.projectHealth, sdlc.tasks, sdlc.teamMembers, lastUpdateTime]);

  const calculateTeamUtilization = useCallback((members: TeamMember[], tasks: SDLCTask[]) => {
    return members.map(member => {
      const assignedHours = getAssignedHours(member, tasks);
      const utilization = (assignedHours / member.capacity) * 100;
      return {
        memberId: member.id,
        memberName: member.name,
        assignedHours,
        capacity: member.capacity,
        utilization: Math.round(utilization),
        status: utilization > 100 ? 'overloaded' : utilization > 80 ? 'high' : 'normal'
      };
    });
  }, []);

  const getAssignedHours = (member: TeamMember, tasks: SDLCTask[]) => {
    return tasks
      .filter(task => task.assignee === member.name && task.status !== 'completed')
      .reduce((sum, task) => sum + task.estimatedHours, 0);
  };

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const toggleRealTime = useCallback(() => {
    setIsRealTimeEnabled(prev => !prev);
  }, []);

  return {
    ...sdlc,
    realtimeMetrics,
    realtimeProjectHealth,
    notifications,
    isRealTimeEnabled,
    lastUpdateTime,
    clearNotifications,
    toggleRealTime,
    teamUtilization: realtimeMetrics.teamUtilization || []
  };
};
