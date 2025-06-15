
import React from 'react';
import { useGoals } from '@/hooks/useGoals';
import { Analytics } from '@/components/Analytics';
import { BarChart3, TrendingUp, Target } from 'lucide-react';

const AnalyticsPage = () => {
  const { goals } = useGoals();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Enhanced Header */}
        <div className="mb-8 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl shadow-slate-900/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                Analytics Dashboard
              </h1>
              <p className="text-slate-300 text-lg font-medium">
                View detailed analytics and insights about your goals progress.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-royal-green-400" />
                <div className="text-slate-300 text-sm font-medium">Total Goals</div>
              </div>
              <div className="text-2xl font-bold text-white">{goals.length}</div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-royal-green-400" />
                <div className="text-slate-300 text-sm font-medium">Completed</div>
              </div>
              <div className="text-2xl font-bold text-white">
                {goals.filter(goal => (goal.currentAmount / goal.targetAmount * 100) >= 100).length}
              </div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-royal-green-400" />
                <div className="text-slate-300 text-sm font-medium">Avg Progress</div>
              </div>
              <div className="text-2xl font-bold text-white">
                {goals.length > 0 ? Math.round(goals.reduce((sum, goal) => sum + (goal.currentAmount / goal.targetAmount * 100), 0) / goals.length) : 0}%
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Content */}
        <Analytics goals={goals} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
