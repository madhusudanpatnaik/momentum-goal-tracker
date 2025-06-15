
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGoals } from '@/hooks/useGoals';
import { GoalCard } from '@/components/GoalCard';
import { CreateGoalForm } from '@/components/CreateGoalForm';
import { Target, TrendingUp, Plus, Search } from 'lucide-react';

const Goals = () => {
  const { goals, addGoal, updateGoal, addTransaction } = useGoals();
  const [activeMode, setActiveMode] = useState<'personal' | 'work'>('personal');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGoals = goals.filter(goal => 
    goal.category === activeMode && 
    goal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Enhanced Header */}
        <div className="mb-8 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl shadow-slate-900/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                  Goals Management
                </h1>
                <p className="text-slate-300 text-lg font-medium">
                  Track and manage your personal and work goals with precision.
                </p>
              </div>
            </div>
            
            {/* Header Actions */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search goals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-600 dark:border-slate-500 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-700/50 dark:bg-slate-800/50 backdrop-blur text-white placeholder-slate-400 font-medium"
                />
              </div>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg border border-slate-600/50 dark:border-slate-500/50"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Goal
              </Button>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2 bg-slate-700/50 dark:bg-slate-800/50 rounded-2xl p-1 w-fit border border-slate-600/50 dark:border-slate-500/50">
            <Button
              onClick={() => setActiveMode('personal')}
              className={`px-6 py-2 rounded-xl transition-all duration-200 font-semibold ${
                activeMode === 'personal' 
                  ? 'bg-white dark:bg-slate-300 text-slate-900 shadow-md border border-slate-500' 
                  : 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-600/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Target className="w-4 h-4 mr-2" />
              Personal
            </Button>
            <Button
              onClick={() => setActiveMode('work')}
              className={`px-6 py-2 rounded-xl transition-all duration-200 font-semibold ${
                activeMode === 'work' 
                  ? 'bg-white dark:bg-slate-300 text-slate-900 shadow-md border border-slate-500' 
                  : 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-600/50 dark:hover:bg-slate-700/50'
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

        {/* Goals Content */}
        {filteredGoals.length === 0 ? (
          <Card className="bg-slate-800/95 dark:bg-slate-900/95 border border-slate-700/50 dark:border-slate-600/50 shadow-xl backdrop-blur-lg">
            <CardContent className="p-12 text-center">
              <Target className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                No {activeMode} goals yet
              </h3>
              <p className="text-slate-300 dark:text-slate-400 mb-6 font-medium">
                Create your first goal to start tracking your progress
              </p>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-slate-700 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500 text-white font-semibold shadow-lg border border-slate-600/50"
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

export default Goals;
