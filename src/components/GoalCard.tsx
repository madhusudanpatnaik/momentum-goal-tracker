
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
    <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-900 text-lg flex items-center gap-2 font-semibold tracking-tight">
            {goal.category === 'work' ? <TrendingUp className="w-5 h-5 text-blue-600" /> : <Target className="w-5 h-5 text-emerald-600" />}
            {goal.title}
            {isCompleted && <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" />}
          </CardTitle>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            goal.category === 'work' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
          }`}>
            {goal.type}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 font-medium">Progress</span>
            <span className="text-slate-900 font-semibold">{formatCurrency(goal.currentAmount)} / {formatCurrency(goal.targetAmount)}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-slate-100"
          />
          <div className="text-right text-xs text-slate-500 font-medium">
            {progress.toFixed(1)}% complete
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">Due: {new Date(goal.deadline).toLocaleDateString()}</span>
        </div>

        {goal.description && (
          <p className="text-slate-600 text-sm font-medium">{goal.description}</p>
        )}

        <div className="flex gap-2">
          <Button
            onClick={() => setShowAddMoney(!showAddMoney)}
            size="sm"
            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-medium"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Money
          </Button>
          {goal.currentAmount > 0 && (
            <Button
              onClick={() => handleAddMoney('withdrawal')}
              size="sm"
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50 font-medium"
            >
              <Minus className="w-4 h-4 mr-1" />
              Withdraw
            </Button>
          )}
        </div>

        {showAddMoney && (
          <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
            />
            <input
              type="text"
              placeholder="Note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
            />
            <div className="flex gap-2">
              <Button
                onClick={() => handleAddMoney('deposit')}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
              >
                Add
              </Button>
              <Button
                onClick={() => setShowAddMoney(false)}
                size="sm"
                variant="outline"
                className="border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
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
