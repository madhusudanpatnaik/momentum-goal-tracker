
import React from 'react';
import { useGoals } from '@/hooks/useGoals';
import { Analytics } from '@/components/Analytics';

const AnalyticsPage = () => {
  const { goals } = useGoals();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            View detailed analytics and insights about your goals progress.
          </p>
        </div>

        {/* Analytics Content */}
        <Analytics goals={goals} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
