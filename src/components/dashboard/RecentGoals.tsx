
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Plus } from 'lucide-react';
import { Goal } from '@/types';

interface RecentGoalsProps {
  goals: Goal[];
}

const RecentGoals = ({ goals }: RecentGoalsProps) => {
  const safeGoals = goals || [];

  return (
    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recent Goals</span>
          <Button asChild variant="outline" size="sm">
            <Link to="/goals">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {safeGoals.length === 0 ? (
          <div className="text-center py-8">
            <Target className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2">No goals yet</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Create your first goal to start tracking your progress
            </p>
            <Button asChild>
              <Link to="/goals">
                <Plus className="w-4 h-4 mr-2" />
                Create Goal
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {safeGoals.slice(0, 3).map((goal) => (
              <div key={goal.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">{goal.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ${(goal.currentAmount || 0).toLocaleString()} / ${(goal.targetAmount || 0).toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {(((goal.currentAmount || 0) / (goal.targetAmount || 1)) * 100).toFixed(0)}%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                    {goal.category}
                  </div>
                </div>
              </div>
            ))}
            {safeGoals.length > 3 && (
              <Button asChild variant="outline" className="w-full">
                <Link to="/goals">
                  View All Goals ({safeGoals.length})
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentGoals;
