
import React from 'react';
import { useGoals } from '@/hooks/useGoals';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import MetricsCards from '@/components/dashboard/MetricsCards';
import QuickAccessCards from '@/components/dashboard/QuickAccessCards';
import RecentGoals from '@/components/dashboard/RecentGoals';

const Dashboard = () => {
  const { goals, userStats } = useGoals();
  
  // Add null checks and default values with complete UserStats interface
  const safeUserStats = userStats || { 
    totalGoals: 0,
    completedGoals: 0,
    totalSaved: 0,
    currentStreak: 0,
    xp: 0,
    level: 1,
    badges: []
  };
  const safeGoals = goals || [];
  
  const activeGoals = safeGoals.filter(goal => goal.status === 'active');
  const completedGoals = safeGoals.filter(goal => goal.status === 'completed');
  const personalGoals = safeGoals.filter(goal => goal.category === 'personal');
  const workGoals = safeGoals.filter(goal => goal.category === 'work');

  const totalProgress = safeGoals.length > 0 
    ? safeGoals.reduce((sum, goal) => {
        const current = goal.currentAmount || 0;
        const target = goal.targetAmount || 1;
        return sum + (current / target * 100);
      }, 0) / safeGoals.length
    : 0;

  const todaysTasks = activeGoals.filter(goal => {
    if (!goal.deadline) return false;
    const deadline = new Date(goal.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        <DashboardHeader />
        
        <MetricsCards 
          userStats={safeUserStats}
          goals={safeGoals}
          todaysTasks={todaysTasks}
          totalProgress={totalProgress}
          completedGoals={completedGoals}
        />

        <QuickAccessCards 
          personalGoals={personalGoals}
          workGoals={workGoals}
          activeGoals={activeGoals}
          totalProgress={totalProgress}
        />

        <RecentGoals goals={safeGoals} />
      </div>
    </div>
  );
};

export default Dashboard;
