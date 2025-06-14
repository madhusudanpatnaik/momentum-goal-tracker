
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGoals } from '@/hooks/useGoals';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  Rocket,
  ArrowRight,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const { goals, userStats } = useGoals();
  
  // Add null checks and default values
  const safeUserStats = userStats || { totalSaved: 0 };
  const safeGoals = goals || [];
  
  const activeGoals = safeGoals.filter(goal => goal.status === 'active');
  const completedGoals = safeGoals.filter(goal => goal.status === 'completed');
  const personalGoals = safeGoals.filter(goal => goal.category === 'personal');
  const workGoals = safeGoals.filter(goal => goal.category === 'work');

  const totalProgress = safeGoals.length > 0 
    ? safeGoals.reduce((sum, goal) => {
        const current = goal.currentAmount || 0;
        const target = goal.targetAmount || 1;
        return sum + (current / target * 100);
      }, 0) / safeGoals.length
    : 0;

  const todaysTasks = activeGoals.filter(goal => {
    if (!goal.deadline) return false;
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

        {/* Key Metrics Row */}
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

        {/* Quick Access Cards */}
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

        {/* Recent Activity */}
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
      </div>
    </div>
  );
};

export default Dashboard;
