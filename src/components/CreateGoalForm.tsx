
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Goal } from '@/types';
import { X } from 'lucide-react';

interface CreateGoalFormProps {
  onCreateGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
  mode: 'personal' | 'work';
}

export const CreateGoalForm: React.FC<CreateGoalFormProps> = ({ onCreateGoal, onClose, mode }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetAmount: '',
    deadline: '',
    type: mode === 'personal' ? 'savings' : 'project'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.targetAmount || !formData.deadline) {
      return;
    }

    onCreateGoal({
      title: formData.title,
      description: formData.description,
      targetAmount: Number(formData.targetAmount),
      currentAmount: 0,
      deadline: formData.deadline,
      category: mode,
      type: formData.type as Goal['type'],
      status: 'active',
      milestones: [],
      transactions: []
    });

    onClose();
  };

  return (
    <Card className="bg-white border border-slate-200 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100">
        <CardTitle className="text-slate-900 font-semibold tracking-tight">
          Create New {mode === 'personal' ? 'Personal' : 'Work'} Goal
        </CardTitle>
        <Button
          onClick={onClose}
          size="sm"
          variant="outline"
          className="border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">Goal Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={mode === 'personal' ? 'Buy a new bike' : 'Launch MVP'}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your goal..."
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 h-20 resize-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
            />
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">Target Amount</label>
            <input
              type="number"
              value={formData.targetAmount}
              onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
              placeholder="1000"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent font-medium"
            >
              {mode === 'personal' ? (
                <option value="savings">Savings</option>
              ) : (
                <>
                  <option value="project">Project</option>
                  <option value="revenue">Revenue</option>
                  <option value="funding">Funding</option>
                </>
              )}
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium"
            >
              Create Goal
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="border-slate-200 text-slate-600 hover:bg-slate-50 font-medium"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
