
export interface SDLCTemplate {
  id: string;
  name: string;
  description: string;
  type: 'mvp' | 'product-launch' | 'fundraising';
  phases: SDLCPhase[];
  estimatedDuration: number; // in weeks
}

export interface SDLCPhase {
  id: string;
  name: string;
  description: string;
  duration: number; // in weeks
  tasks: SDLCTask[];
  dependencies: string[]; // phase IDs
  order: number;
}

export interface SDLCTask {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked';
  dueDate: string;
  dependencies: string[]; // task IDs
}

export interface ProjectHealth {
  score: number; // 0-100
  status: 'excellent' | 'good' | 'warning' | 'critical';
  factors: {
    taskCompletion: number;
    overdueItems: number;
    teamActivity: number;
    riskAreas: string[];
  };
  recommendations: string[];
}
