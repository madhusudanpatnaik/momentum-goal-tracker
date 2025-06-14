
export interface SDLCTemplate {
  id: string;
  name: string;
  description: string;
  type: 'mvp' | 'product-launch' | 'fundraising' | 'enterprise' | 'mobile-app' | 'saas';
  phases: SDLCPhase[];
  estimatedDuration: number; // in weeks
  teamSize: number;
  budget?: number;
  tags: string[];
}

export interface SDLCPhase {
  id: string;
  name: string;
  description: string;
  duration: number; // in weeks
  tasks: SDLCTask[];
  dependencies: string[]; // phase IDs
  order: number;
  milestones: string[];
  deliverables: string[];
}

export interface SDLCTask {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  actualHours?: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked' | 'on-hold';
  dueDate: string;
  completedDate?: string;
  dependencies: string[]; // task IDs
  tags: string[];
  category: 'development' | 'design' | 'testing' | 'deployment' | 'documentation' | 'research' | 'marketing' | 'management';
  complexity: 'simple' | 'medium' | 'complex';
}

export interface ProjectHealth {
  score: number; // 0-100
  status: 'excellent' | 'good' | 'warning' | 'critical';
  factors: {
    taskCompletion: number;
    overdueItems: number;
    teamActivity: number;
    budgetUtilization: number;
    scheduleAdherence: number;
    riskAreas: string[];
  };
  recommendations: string[];
  trends: {
    weeklyProgress: number[];
    velocityTrend: 'increasing' | 'stable' | 'decreasing';
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  skills: string[];
  capacity: number; // hours per week
}

export interface ProjectMetrics {
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  blockedTasks: number;
  averageCompletionTime: number;
  burndownData: { week: number; planned: number; actual: number }[];
  velocityData: { week: number; completed: number; }[];
}
