
import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          Get a quick overview of your goals, projects, and progress.
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default DashboardHeader;
