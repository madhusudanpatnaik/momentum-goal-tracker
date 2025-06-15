
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ProjectMetrics as MetricsType } from '@/types/sdlc';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  LineChart, 
  Line, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';

interface ProjectMetricsProps {
  metrics: MetricsType;
}

export const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ metrics }) => {
  const completionRate = metrics.totalTasks > 0 ? (metrics.completedTasks / metrics.totalTasks) * 100 : 0;
  const overdueRate = metrics.totalTasks > 0 ? (metrics.overdueTasks / metrics.totalTasks) * 100 : 0;
  
  const taskStatusData = [
    { name: 'Completed', value: metrics.completedTasks, color: '#10b981' },
    { name: 'Overdue', value: metrics.overdueTasks, color: '#ef4444' },
    { name: 'Blocked', value: metrics.blockedTasks, color: '#f59e0b' },
    { name: 'In Progress', value: metrics.totalTasks - metrics.completedTasks - metrics.overdueTasks - metrics.blockedTasks, color: '#3b82f6' }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-200">Completion Rate</p>
                <p className="text-2xl font-bold text-green-400">{completionRate.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-green-500/20 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-200">Avg Completion Time</p>
                <p className="text-2xl font-bold text-blue-400">{metrics.averageCompletionTime.toFixed(1)} days</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-200">Overdue Tasks</p>
                <p className="text-2xl font-bold text-red-400">{metrics.overdueTasks}</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
            </div>
            <div className="mt-2 text-sm text-blue-300">
              {overdueRate.toFixed(1)}% of total tasks
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-200">Blocked Tasks</p>
                <p className="text-2xl font-bold text-yellow-400">{metrics.blockedTasks}</p>
              </div>
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Target className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Burndown Chart */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingDown className="w-5 h-5" />
              Burndown Chart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={metrics.burndownData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #3B82F6',
                    borderRadius: '8px',
                    color: '#F8FAFC'
                  }} 
                />
                <Line type="monotone" dataKey="planned" stroke="#3b82f6" name="Planned" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="actual" stroke="#10b981" name="Actual" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Velocity Chart */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingUp className="w-5 h-5" />
              Team Velocity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metrics.velocityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #3B82F6',
                    borderRadius: '8px',
                    color: '#F8FAFC'
                  }} 
                />
                <Bar dataKey="completed" fill="#3b82f6" name="Tasks Completed" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Status Distribution */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardHeader>
            <CardTitle className="text-white">Task Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #3B82F6',
                    borderRadius: '8px',
                    color: '#F8FAFC'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Timeline */}
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardHeader>
            <CardTitle className="text-white">Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Overall Progress</span>
                <span className="text-sm text-blue-300">{completionRate.toFixed(1)}%</span>
              </div>
              <Progress value={completionRate} className="h-3" />
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{metrics.completedTasks}</div>
                  <div className="text-sm text-blue-200">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{metrics.totalTasks - metrics.completedTasks}</div>
                  <div className="text-sm text-blue-200">Remaining</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
