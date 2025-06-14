
import React from 'react';
import { Analytics } from '@/components/Analytics';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useGoals } from '@/hooks/useGoals';
import { BarChart3 } from 'lucide-react';

const AnalyticsPage = () => {
  const { goals } = useGoals();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              Analytics Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Insights and analytics for your goals and progress.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Analytics Content */}
        <Analytics goals={goals} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
