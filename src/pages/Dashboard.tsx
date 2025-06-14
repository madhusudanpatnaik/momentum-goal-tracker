
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGoals } from '@/hooks/useGoals';
import { Target, TrendingUp, BarChart3, DollarSign, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const { goals, userStats } = useGoals();

  const activeGoals = goals.filter(goal => goal.status === 'active');
  const completedGoals = goals.filter(goal => goal.status === 'completed');
  const personalGoals = goals.filter(goal => goal.category === 'personal');
  const workGoals = goals.filter(goal => goal.category === 'work');

  const totalProgress = goals.length > 0 
    ? goals.reduce((sum, goal) => {
        const current = goal.currentAmount || 0;
        const target = goal.targetAmount || 1;
        return sum + (current / target * 100);
      }, 0) / goals.length
    : 0;

  const todaysTasks = activeGoals.filter(goal => {
    const deadline = new Date(goal.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  }).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
            Welcome back!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Here's an overview of your goals and progress.</p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Total Saved</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    ${(userStats.totalSaved || 0).toLocaleString()}
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
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Tasks Due Soon</p>
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
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Completed Goals</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{completedGoals.length}</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/goals">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                    Manage Goals
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Create, edit, and track your personal and work goals
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Personal: {personalGoals.length}</span>
                  <span className="text-slate-500">Work: {workGoals.length}</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/calendar">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    Calendar View
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  View deadlines and manage your schedule
                </p>
                <div className="text-sm text-slate-500">
                  Track goal deadlines
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analytics">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                    View Analytics
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Analyze your progress with detailed charts and insights
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Progress: {totalProgress.toFixed(0)}%</span>
                  <span className="text-slate-500">Active: {activeGoals.length}</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/sdlc">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                    SDLC Management
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Manage your software development lifecycle processes
                </p>
                <div className="text-sm text-slate-500">
                  Project workflows & templates
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {goals.length === 0 ? (
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400 mb-4">No goals created yet</p>
                <Link to="/goals">
                  <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white">
                    Create Your First Goal
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {goals.slice(0, 3).map((goal) => {
                  const currentAmount = goal.currentAmount || 0;
                  const targetAmount = goal.targetAmount || 1;
                  const progressPercentage = ((currentAmount / targetAmount) * 100).toFixed(0);
                  
                  return (
                    <div key={goal.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100">{goal.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{goal.category} goal</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          ${currentAmount.toLocaleString()} / ${targetAmount.toLocaleString()}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {progressPercentage}% complete
                        </p>
                      </div>
                    </div>
                  );
                })}
                {goals.length > 3 && (
                  <Link to="/goals">
                    <Button variant="ghost" className="w-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                      View All Goals <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
