
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGoals } from '@/hooks/useGoals';
import { GoalCard } from '@/components/GoalCard';
import { CreateGoalForm } from '@/components/CreateGoalForm';
import { Target, TrendingUp, Trophy, Zap, Users, Calendar, Plus, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const { goals, userStats, addGoal, updateGoal, deleteGoal, addTransaction } = useGoals();
  const [activeMode, setActiveMode] = useState<'personal' | 'work'>('personal');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const filteredGoals = goals.filter(goal => goal.category === activeMode);
  const activeGoals = filteredGoals.filter(goal => goal.status === 'active');
  const completedGoals = filteredGoals.filter(goal => goal.status === 'completed');

  const totalProgress = filteredGoals.length > 0 
    ? filteredGoals.reduce((sum, goal) => sum + (goal.currentAmount / goal.targetAmount * 100), 0) / filteredGoals.length
    : 0;

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #4c1d95 0%, #312e81 25%, #1e1b4b 50%, #0f172a 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 mb-2">
              GOALUX Dashboard
            </h1>
            <p className="text-purple-200/80">Track your journey to success</p>
          </div>
          
          {/* Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
            <Button
              onClick={() => setActiveMode('personal')}
              className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                activeMode === 'personal' 
                  ? 'bg-purple-500/50 text-white shadow-lg' 
                  : 'bg-transparent text-purple-200 hover:bg-white/10'
              }`}
            >
              <Target className="w-4 h-4 mr-2" />
              Personal
            </Button>
            <Button
              onClick={() => setActiveMode('work')}
              className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                activeMode === 'work' 
                  ? 'bg-blue-500/50 text-white shadow-lg' 
                  : 'bg-transparent text-purple-200 hover:bg-white/10'
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Work
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Target className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-purple-200/70 text-sm">Active Goals</p>
                  <p className="text-white text-2xl font-bold">{activeGoals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Trophy className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <p className="text-purple-200/70 text-sm">Completed</p>
                  <p className="text-white text-2xl font-bold">{completedGoals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-purple-200/70 text-sm">Avg Progress</p>
                  <p className="text-white text-2xl font-bold">{totalProgress.toFixed(0)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <Zap className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <p className="text-purple-200/70 text-sm">Level</p>
                  <p className="text-white text-2xl font-bold">{userStats.level}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Goal Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {activeMode === 'personal' ? 'Personal Goals' : 'Work Goals'}
          </h2>
          <Button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400/90 hover:to-purple-500/90 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Goal
          </Button>
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
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardContent className="p-12 text-center">
              <Target className="w-16 h-16 text-purple-300/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No {activeMode} goals yet
              </h3>
              <p className="text-purple-200/70 mb-6">
                Create your first goal to start tracking your progress
              </p>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400/90 hover:to-purple-500/90 text-white"
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

        {/* User Progress */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{userStats.xp}</div>
                <div className="text-purple-200/70 text-sm">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{userStats.level}</div>
                <div className="text-purple-200/70 text-sm">Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{userStats.currentStreak}</div>
                <div className="text-purple-200/70 text-sm">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{userStats.badges.length}</div>
                <div className="text-purple-200/70 text-sm">Badges</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
