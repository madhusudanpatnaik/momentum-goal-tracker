
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, BarChart3, Rocket, ArrowRight } from 'lucide-react';
import { Goal } from '@/types';

interface QuickAccessCardsProps {
  personalGoals: Goal[];
  workGoals: Goal[];
  activeGoals: Goal[];
  totalProgress: number;
}

const QuickAccessCards = ({ personalGoals, workGoals, activeGoals, totalProgress }: QuickAccessCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-blue-600" />
            Goals Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Personal Goals:</span>
              <span className="font-medium">{personalGoals.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Work Goals:</span>
              <span className="font-medium">{workGoals.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Active Goals:</span>
              <span className="font-medium">{activeGoals.length}</span>
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/goals" className="flex items-center justify-center gap-2">
                Manage Goals
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="w-5 h-5 text-green-600" />
            Analytics & Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              View detailed analytics and insights about your progress, trends, and performance metrics.
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Overall Progress</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${totalProgress}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{totalProgress.toFixed(0)}%</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link to="/analytics" className="flex items-center justify-center gap-2">
                View Analytics
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Rocket className="w-5 h-5 text-purple-600" />
            SDLC Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Manage your software development lifecycle with templates, tasks, and project health monitoring.
            </div>
            <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Templates Available</div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-purple-600">4</span>
                <span className="text-sm">Project Templates</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link to="/sdlc" className="flex items-center justify-center gap-2">
                Manage Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickAccessCards;
