
import { useState, useEffect, useMemo } from 'react';
import { Goal } from '@/types';

interface AnalyticsData {
  progressOverTime: Array<{
    date: string;
    progress: number;
    amount: number;
    goals: number;
  }>;
  completionTrends: Array<{
    month: string;
    completed: number;
    created: number;
    efficiency: number;
  }>;
  categoryBreakdown: Array<{
    name: string;
    value: number;
    percentage: number;
    trend: 'up' | 'down' | 'stable';
  }>;
  performanceMetrics: {
    avgCompletionTime: number;
    successRate: number;
    totalValue: number;
    monthlyGrowth: number;
  };
  insights: string[];
}

export const useAnalyticsRealtime = (goals: Goal[]) => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isLive]);

  const analyticsData: AnalyticsData = useMemo(() => {
    // Generate comprehensive progress data for the last 90 days
    const progressData = Array.from({ length: 90 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (89 - i));
      
      // Simulate realistic progress growth
      const dayProgress = goals.reduce((sum, goal) => {
        const timeProgress = i / 89; // 0 to 1
        const goalProgress = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100 * timeProgress);
        return sum + goalProgress;
      }, 0);

      const avgProgress = goals.length > 0 ? dayProgress / goals.length : 0;
      
      return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        progress: Math.round(avgProgress),
        amount: Math.round(goals.reduce((sum, goal) => sum + (goal.currentAmount * timeProgress), 0)),
        goals: goals.length
      };
    });

    // Enhanced completion trends with efficiency metrics
    const completionData = Array.from({ length: 12 }, (_, i) => {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const completed = Math.floor(Math.random() * 8) + 2;
      const created = Math.floor(Math.random() * 12) + 4;
      const efficiency = created > 0 ? Math.round((completed / created) * 100) : 0;
      
      return {
        month: monthNames[i],
        completed,
        created,
        efficiency
      };
    });

    // Category breakdown with trends
    const categoryData = goals.reduce((acc, goal) => {
      const category = goal.type || goal.category;
      if (!acc[category]) {
        acc[category] = { value: 0, count: 0 };
      }
      acc[category].value += goal.currentAmount;
      acc[category].count += 1;
      return acc;
    }, {} as Record<string, { value: number; count: number }>);

    const totalValue = Object.values(categoryData).reduce((sum, cat) => sum + cat.value, 0);
    
    const categoryBreakdown = Object.entries(categoryData).map(([name, data]) => {
      const percentage = totalValue > 0 ? (data.value / totalValue) * 100 : 0;
      const trend = Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'stable' : 'down';
      
      return {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value: Math.round(data.value),
        percentage: Math.round(percentage),
        trend
      };
    });

    // Performance metrics
    const completedGoals = goals.filter(goal => goal.status === 'completed');
    const activeGoals = goals.filter(goal => goal.status === 'active');
    
    const avgCompletionTime = completedGoals.length > 0 
      ? completedGoals.reduce((sum, goal) => {
          const created = new Date(goal.createdAt || Date.now());
          const deadline = new Date(goal.deadline);
          return sum + (deadline.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
        }, 0) / completedGoals.length
      : 0;

    const successRate = goals.length > 0 
      ? (completedGoals.length / goals.length) * 100 
      : 0;

    const monthlyGrowth = progressData.length > 30 
      ? ((progressData[progressData.length - 1].amount - progressData[progressData.length - 31].amount) / 
         Math.max(1, progressData[progressData.length - 31].amount)) * 100
      : 0;

    // Generate insights
    const insights: string[] = [];
    
    if (successRate > 75) {
      insights.push('Excellent goal completion rate! You\'re on track for success.');
    } else if (successRate < 30) {
      insights.push('Consider breaking down larger goals into smaller, achievable milestones.');
    }
    
    if (monthlyGrowth > 20) {
      insights.push('Outstanding monthly growth! Your momentum is accelerating.');
    } else if (monthlyGrowth < 0) {
      insights.push('Focus on consistency to maintain positive growth trends.');
    }
    
    const overdueGoals = activeGoals.filter(goal => new Date(goal.deadline) < new Date()).length;
    if (overdueGoals > 0) {
      insights.push(`${overdueGoals} goals are past their deadline. Consider revising timelines.`);
    }

    if (categoryBreakdown.length > 0) {
      const topCategory = categoryBreakdown.reduce((max, cat) => 
        cat.percentage > max.percentage ? cat : max
      );
      insights.push(`${topCategory.name} goals represent ${topCategory.percentage}% of your focus.`);
    }

    return {
      progressOverTime: progressData,
      completionTrends: completionData,
      categoryBreakdown,
      performanceMetrics: {
        avgCompletionTime: Math.round(avgCompletionTime),
        successRate: Math.round(successRate),
        totalValue: Math.round(totalValue),
        monthlyGrowth: Math.round(monthlyGrowth)
      },
      insights
    };
  }, [goals, lastUpdate]);

  const toggleLiveMode = () => setIsLive(!isLive);

  return {
    analyticsData,
    lastUpdate,
    isLive,
    toggleLiveMode
  };
};
