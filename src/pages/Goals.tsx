
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
              Goals Management
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Track and manage your personal and work goals.</p>
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
                className="pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 focus:border-transparent bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-slate-100"
              />
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Goal
            </Button>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-1 mb-6 w-fit">
          <Button
            onClick={() => setActiveMode('personal')}
            className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
              activeMode === 'personal' 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm' 
                : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <Target className="w-4 h-4 mr-2" />
            Personal
          </Button>
          <Button
            onClick={() => setActiveMode('work')}
            className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
              activeMode === 'work' 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm' 
                : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Work
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

        {/* Goals Content */}
        {filteredGoals.length === 0 ? (
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardContent className="p-12 text-center">
              <Target className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
                No {activeMode} goals yet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                Create your first goal to start tracking your progress
              </p>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium"
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
