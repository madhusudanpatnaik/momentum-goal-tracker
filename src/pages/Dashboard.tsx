
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGoals } from '@/hooks/useGoals';
import { GoalCard } from '@/components/GoalCard';
import { CreateGoalForm } from '@/components/CreateGoalForm';
import { Target, TrendingUp, BarChart3, Plus, Search, DollarSign, Calendar, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { goals, userStats, addGoal, updateGoal, deleteGoal, addTransaction } = useGoals();
  const [activeMode, setActiveMode] = useState<'personal' | 'work'>('personal');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGoals = goals.filter(goal => 
    goal.category === activeMode && 
    goal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const activeGoals = filteredGoals.filter(goal => goal.status === 'active');
  const completedGoals = filteredGoals.filter(goal => goal.status === 'completed');

  const totalProgress = filteredGoals.length > 0 
    ? filteredGoals.reduce((sum, goal) => sum + (goal.currentAmount / goal.targetAmount * 100), 0) / filteredGoals.length
    : 0;

  const todaysTasks = activeGoals.filter(goal => {
    const deadline = new Date(goal.deadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7; // Tasks due within a week
  }).length;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              Welcome back!
            </h1>
            <p className="text-slate-600 font-medium">Here's what's happening with your goals today.</p>
          </div>
          
          {/* Search and Quick Add */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search goals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white font-medium"
              />
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Total Saved</p>
                  <p className="text-2xl font-bold text-slate-900">
                    ${userStats.totalSaved.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl">
                  <DollarSign className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Tasks Due Soon</p>
                  <p className="text-2xl font-bold text-slate-900">{todaysTasks}</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Avg Progress</p>
                  <p className="text-2xl font-bold text-slate-900">{totalProgress.toFixed(0)}%</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Completed Goals</p>
                  <p className="text-2xl font-bold text-slate-900">{completedGoals.length}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
            <Button
              onClick={() => setActiveMode('personal')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
                activeMode === 'personal' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'bg-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-4 h-4 mr-2" />
              Personal
            </Button>
            <Button
              onClick={() => setActiveMode('work')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
                activeMode === 'work' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'bg-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Work
            </Button>
          </div>
        </div>

        {/* Create Goal Form */}
        {showCreateForm && (
          <div className="mb-8">
            <CreateGoalForm
              onCreateGoal={addGoal}
              onClose={() => setShowCreateForm(false)}
              mode={activeMode}
            />
          </div>
        )}

        {/* Goals Grid */}
        {filteredGoals.length === 0 ? (
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-12 text-center">
              <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                No {activeMode} goals yet
              </h3>
              <p className="text-slate-600 mb-6 font-medium">
                Create your first goal to start tracking your progress
              </p>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Goal
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGoals.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onUpdate={updateGoal}
                onAddTransaction={addTransaction}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
