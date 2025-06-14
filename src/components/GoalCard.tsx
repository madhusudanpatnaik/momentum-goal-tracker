
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Goal } from '@/types';
import { Target, Calendar, TrendingUp, Plus, Minus, Trophy } from 'lucide-react';

interface GoalCardProps {
  goal: Goal;
  onUpdate: (id: string, updates: Partial<Goal>) => void;
  onAddTransaction: (goalId: string, transaction: { amount: number; note: string; date: string; type: 'deposit' | 'withdrawal' }) => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal, onUpdate, onAddTransaction }) => {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const isCompleted = progress >= 100;

  const handleAddMoney = (type: 'deposit' | 'withdrawal') => {
    if (!amount) return;
    
    onAddTransaction(goal.id, {
      amount: Number(amount),
      note: note || `${type === 'deposit' ? 'Added to' : 'Withdrawn from'} ${goal.title}`,
      date: new Date().toISOString(),
      type
    });

    setAmount('');
    setNote('');
    setShowAddMoney(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            {goal.category === 'work' ? <TrendingUp className="w-5 h-5 text-blue-400" /> : <Target className="w-5 h-5 text-purple-400" />}
            {goal.title}
            {isCompleted && <Trophy className="w-5 h-5 text-yellow-400 animate-pulse" />}
          </CardTitle>
          <div className={`px-2 py-1 rounded-full text-xs ${
            goal.category === 'work' ? 'bg-blue-400/20 text-blue-300' : 'bg-purple-400/20 text-purple-300'
          }`}>
            {goal.type}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-purple-200/80">Progress</span>
            <span className="text-white font-semibold">{formatCurrency(goal.currentAmount)} / {formatCurrency(goal.targetAmount)}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-3 bg-white/10"
          />
          <div className="text-right text-xs text-purple-200/70">
            {progress.toFixed(1)}% complete
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-purple-200/80">
          <Calendar className="w-4 h-4" />
          <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
        </div>

        {goal.description && (
          <p className="text-purple-200/70 text-sm">{goal.description}</p>
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => setShowAddMoney(!showAddMoney)}
            size="sm"
            className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Money
          </Button>
          {goal.currentAmount > 0 && (
            <Button
              onClick={() => handleAddMoney('withdrawal')}
              size="sm"
              variant="outline"
              className="border-red-500/30 text-red-300 hover:bg-red-500/20"
            >
              <Minus className="w-4 h-4 mr-1" />
              Withdraw
            </Button>
          )}
        </div>

        {showAddMoney && (
          <div className="space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/50"
            />
            <input
              type="text"
              placeholder="Note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/50"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => handleAddMoney('deposit')}
                size="sm"
                className="bg-emerald-500/30 hover:bg-emerald-500/40 text-emerald-200"
              >
                Add
              </Button>
              <Button
                onClick={() => setShowAddMoney(false)}
                size="sm"
                variant="outline"
                className="border-white/20 text-purple-200"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
