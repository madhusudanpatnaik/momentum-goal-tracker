
export interface Goal {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: 'personal' | 'work';
  type: 'savings' | 'project' | 'revenue' | 'funding';
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
  updatedAt: string;
  milestones: Milestone[];
  transactions: Transaction[];
}

export interface Milestone {
  id: string;
  title: string;
  targetAmount: number;
  completed: boolean;
  completedAt?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  note: string;
  date: string;
  type: 'deposit' | 'withdrawal';
}

export interface UserStats {
  totalGoals: number;
  completedGoals: number;
  totalSaved: number;
  currentStreak: number;
  xp: number;
  level: number;
  badges: string[];
}
