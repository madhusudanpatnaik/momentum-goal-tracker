
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
    <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">
          Create New {mode === 'personal' ? 'Personal' : 'Work'} Goal
        </CardTitle>
        <Button
          onClick={onClose}
          size="sm"
          variant="outline"
          className="border-white/20 text-purple-200"
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-purple-200 text-sm mb-2">Goal Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={mode === 'personal' ? 'Buy a new bike' : 'Launch MVP'}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/50"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your goal..."
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/50 h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm mb-2">Target Amount</label>
            <input
              type="number"
              value={formData.targetAmount}
              onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
              placeholder="1000"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/50"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm mb-2">Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm mb-2">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
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
              className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400/90 hover:to-purple-500/90 text-white"
            >
              Create Goal
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="border-white/20 text-purple-200"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
