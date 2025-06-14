
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useSDLC } from '@/hooks/useSDLC';
import { 
  Rocket, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target,
  TrendingUp,
  Calendar,
  Users,
  Activity
} from 'lucide-react';

export const SDLCManager = () => {
  const { templates, activeTemplate, tasks, projectHealth, startProject, updateTask } = useSDLC();
  const [showTemplates, setShowTemplates] = useState(!activeTemplate);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'blocked': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (showTemplates || !activeTemplate) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">SDLC Templates</h2>
            <p className="text-slate-600 dark:text-slate-400">Choose a template to start your project</p>
          </div>
          {activeTemplate && (
            <Button
              variant="outline"
              onClick={() => setShowTemplates(false)}
            >
              Back to Project
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {template.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{template.estimatedDuration} weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4" />
                    <span>{template.phases.length} phases</span>
                  </div>
                  <Button
                    onClick={() => {
                      startProject(template.id);
                      setShowTemplates(false);
                    }}
                    className="w-full"
                  >
                    Start Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {activeTemplate.name}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {activeTemplate.description}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowTemplates(true)}
        >
          Change Template
        </Button>
      </div>

      {/* Project Health Score */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Project Health Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {projectHealth.score}%
                </div>
                <Badge className={getStatusColor(projectHealth.status)}>
                  {projectHealth.status.charAt(0).toUpperCase() + projectHealth.status.slice(1)}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Task Completion: {projectHealth.factors.taskCompletion}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Overdue Items: {projectHealth.factors.overdueItems}
                </div>
              </div>
            </div>

            <Progress value={projectHealth.score} className="h-2" />

            {projectHealth.factors.riskAreas.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  Risk Areas
                </h4>
                <ul className="space-y-1">
                  {projectHealth.factors.riskAreas.map((risk, index) => (
                    <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {projectHealth.recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  Recommendations
                </h4>
                <ul className="space-y-1">
                  {projectHealth.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Project Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-8 rounded ${getPriorityColor(task.priority)}`}></div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      {task.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {task.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs text-slate-500">
                        {task.estimatedHours}h • Due {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getTaskStatusColor(task.status)}>
                    {task.status.replace('-', ' ')}
                  </Badge>
                  <select
                    value={task.status}
                    onChange={(e) => updateTask(task.id, { status: e.target.value as any })}
                    className="text-xs border rounded px-2 py-1"
                  >
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
