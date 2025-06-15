
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
        <div className="mb-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-3xl p-8 border border-royal-green-200/50 dark:border-royal-green-700/50 shadow-xl shadow-royal-green-100/20 dark:shadow-royal-green-900/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-royal-green-500 to-royal-green-700 rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-royal-green-600 to-royal-green-800 dark:from-royal-green-400 dark:to-royal-green-600 bg-clip-text text-transparent mb-2 tracking-tight">
                Analytics Dashboard
              </h1>
              <p className="text-royal-green-700/80 dark:text-royal-green-300/80 text-lg font-medium">
                View detailed analytics and insights about your goals progress.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-royal-green-600 dark:text-royal-green-400" />
                <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Total Goals</div>
              </div>
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">{goals.length}</div>
            </div>
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-royal-green-600 dark:text-royal-green-400" />
                <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Completed</div>
              </div>
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">
                {goals.filter(goal => goal.progress >= 100).length}
              </div>
            </div>
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-royal-green-600 dark:text-royal-green-400" />
                <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Avg Progress</div>
              </div>
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">
                {goals.length > 0 ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length) : 0}%
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
