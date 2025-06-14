
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Calendar, BarChart3, CheckCircle } from 'lucide-react';
import { UserStats, Goal } from '@/types';

interface MetricsCardsProps {
  userStats: UserStats | null;
  goals: Goal[];
  todaysTasks: number;
  totalProgress: number;
  completedGoals: Goal[];
}

const MetricsCards = ({ userStats, goals, todaysTasks, totalProgress, completedGoals }: MetricsCardsProps) => {
  const safeUserStats = userStats || { totalSaved: 0 };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Total Saved</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                ${(safeUserStats.totalSaved || 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Due Soon</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{todaysTasks}</p>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Avg Progress</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalProgress.toFixed(0)}%</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Completed</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{completedGoals.length}</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsCards;
