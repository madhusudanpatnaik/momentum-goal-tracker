
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
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Welcome back!
          </h1>
          <p className="text-blue-200 font-medium">Here's an overview of your goals and progress.</p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-1">Total Saved</p>
                  <p className="text-2xl font-bold text-white">
                    ${(userStats.totalSaved || 0).toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                  <DollarSign className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-1">Tasks Due Soon</p>
                  <p className="text-2xl font-bold text-white">{todaysTasks}</p>
                </div>
                <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-1">Avg Progress</p>
                  <p className="text-2xl font-bold text-white">{totalProgress.toFixed(0)}%</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-1">Completed Goals</p>
                  <p className="text-2xl font-bold text-white">{completedGoals.length}</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/goals">
            <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    Manage Goals
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-200 text-sm mb-4">
                  Create, edit, and track your personal and work goals
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Personal: {personalGoals.length}</span>
                  <span className="text-blue-300">Work: {workGoals.length}</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/calendar">
            <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    Calendar View
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-200 text-sm mb-4">
                  View deadlines and manage your schedule
                </p>
                <div className="text-sm text-blue-300">
                  Track goal deadlines
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analytics">
            <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors" />
                    View Analytics
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-200 text-sm mb-4">
                  Analyze your progress with detailed charts and insights
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Progress: {totalProgress.toFixed(0)}%</span>
                  <span className="text-blue-300">Active: {activeGoals.length}</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/sdlc">
            <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    SDLC Management
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-blue-200 text-sm mb-4">
                  Manage your software development lifecycle processes
                </p>
                <div className="text-sm text-blue-300">
                  Project workflows & templates
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gradient-to-br from-slate-950/95 to-blue-950/95 border border-blue-800/30 shadow-2xl shadow-blue-900/30 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {goals.length === 0 ? (
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-blue-200 mb-4">No goals created yet</p>
                <Link to="/goals">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30">
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
                    <div key={goal.id} className="flex items-center justify-between p-4 bg-slate-900/60 backdrop-blur rounded-lg border border-blue-700/30">
                      <div>
                        <h4 className="font-medium text-white">{goal.title}</h4>
                        <p className="text-sm text-blue-200">{goal.category} goal</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">
                          ${currentAmount.toLocaleString()} / ${targetAmount.toLocaleString()}
                        </p>
                        <p className="text-xs text-blue-200">
                          {progressPercentage}% complete
                        </p>
                      </div>
                    </div>
                  );
                })}
                {goals.length > 3 && (
                  <Link to="/goals">
                    <Button variant="ghost" className="w-full text-blue-200 hover:text-white hover:bg-blue-800/40">
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
