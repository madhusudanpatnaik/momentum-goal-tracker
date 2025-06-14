
import { useState, useEffect } from 'react';
import { Goal, Transaction, Milestone, UserStats } from '@/types';

export const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    totalGoals: 0,
    completedGoals: 0,
    totalSaved: 0,
    currentStreak: 0,
    xp: 0,
    level: 1,
    badges: []
  });

  useEffect(() => {
    loadGoals();
    loadUserStats();
  }, []);

  const loadGoals = () => {
    const savedGoals = localStorage.getItem('goalux-goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  };

  const loadUserStats = () => {
    const savedStats = localStorage.getItem('goalux-stats');
    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }
  };

  const saveGoals = (newGoals: Goal[]) => {
    setGoals(newGoals);
    localStorage.setItem('goalux-goals', JSON.stringify(newGoals));
    updateUserStats(newGoals);
  };

  const updateUserStats = (currentGoals: Goal[]) => {
    const totalGoals = currentGoals.length;
    const completedGoals = currentGoals.filter(g => g.status === 'completed').length;
    const totalSaved = currentGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
    
    const newStats = {
      ...userStats,
      totalGoals,
      completedGoals,
      totalSaved,
      xp: userStats.xp + (completedGoals > userStats.completedGoals ? 100 : 0),
      level: Math.floor((userStats.xp + (completedGoals > userStats.completedGoals ? 100 : 0)) / 500) + 1
    };

    setUserStats(newStats);
    localStorage.setItem('goalux-stats', JSON.stringify(newStats));
  };

  const addGoal = (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newGoal: Goal = {
      ...goal,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveGoals([...goals, newGoal]);
  };

  const updateGoal = (id: string, updates: Partial<Goal>) => {
    const updatedGoals = goals.map(goal =>
      goal.id === id ? { ...goal, ...updates, updatedAt: new Date().toISOString() } : goal
    );
    saveGoals(updatedGoals);
  };

  const deleteGoal = (id: string) => {
    const filteredGoals = goals.filter(goal => goal.id !== id);
    saveGoals(filteredGoals);
  };

  const addTransaction = (goalId: string, transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: crypto.randomUUID()
    };

    const updatedGoals = goals.map(goal => {
      if (goal.id === goalId) {
        const newCurrentAmount = transaction.type === 'deposit' 
          ? goal.currentAmount + transaction.amount
          : goal.currentAmount - transaction.amount;
        
        return {
          ...goal,
          currentAmount: Math.max(0, newCurrentAmount),
          transactions: [...goal.transactions, newTransaction],
          updatedAt: new Date().toISOString()
        };
      }
      return goal;
    });

    saveGoals(updatedGoals);
  };

  return {
    goals,
    userStats,
    addGoal,
    updateGoal,
    deleteGoal,
    addTransaction
  };
};
