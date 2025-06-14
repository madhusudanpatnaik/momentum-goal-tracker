import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSDLCRealtime } from '@/hooks/useSDLCRealtime';
import { TaskManagement } from '@/components/TaskManagement';
import { ProjectMetrics } from '@/components/ProjectMetrics';
import { 
  Rocket, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target,
  TrendingUp,
  Calendar,
  Users,
  Activity,
  BarChart3,
  Settings,
  Plus,
  Layers,
  Bell,
  Zap,
  Wifi,
  WifiOff
} from 'lucide-react';

export const SDLCManager = () => {
  const { 
    templates, 
    activeTemplate, 
    tasks, 
    teamMembers,
    realtimeProjectHealth, 
    realtimeMetrics,
    notifications,
    isRealTimeEnabled,
    lastUpdateTime,
    teamUtilization,
    startProject, 
    updateTask,
    assignTask,
    addTeamMember,
    clearNotifications,
    toggleRealTime
  } = useSDLCRealtime();
  
  const [showTemplates, setShowTemplates] = useState(!activeTemplate);
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'good': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <Activity className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTemplateIcon = (type: string) => {
    switch (type) {
      case 'mvp': return <Rocket className="w-6 h-6 text-blue-600" />;
      case 'saas': return <Layers className="w-6 h-6 text-purple-600" />;
      case 'mobile-app': return <Target className="w-6 h-6 text-green-600" />;
      case 'enterprise': return <Settings className="w-6 h-6 text-red-600" />;
      default: return <Rocket className="w-6 h-6 text-blue-600" />;
    }
  };

  if (showTemplates || !activeTemplate) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">SDLC Templates</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {getTemplateIcon(template.type)}
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {template.type.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {template.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{template.estimatedDuration} weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{template.teamSize} people</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4" />
                    <span>{template.phases.length} phases</span>
                    <span className="text-gray-400">•</span>
                    <span>{template.phases.reduce((sum, phase) => sum + phase.tasks.length, 0)} tasks</span>
                  </div>
                  
                  {template.budget && (
                    <div className="text-sm text-gray-600">
                      Budget: ${template.budget.toLocaleString()}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {template.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => {
                      startProject(template.id);
                      setShowTemplates(false);
                    }}
                    className="w-full mt-4"
                  >
                    <Plus className="w-4 h-4 mr-2" />
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
      {/* Real-time Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {activeTemplate.name}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleRealTime}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                {isRealTimeEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                {isRealTimeEnabled ? 'Live' : 'Static'}
              </Button>
              {notifications.length > 0 && (
                <Button
                  onClick={clearNotifications}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  {notifications.length}
                </Button>
              )}
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {activeTemplate.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline">{activeTemplate.type.replace('-', ' ')}</Badge>
            <span className="text-sm text-gray-500">
              {activeTemplate.estimatedDuration} weeks • {activeTemplate.teamSize} team members
            </span>
            {isRealTimeEnabled && (
              <span className="text-xs text-gray-400">
                Updated: {lastUpdateTime.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowTemplates(true)}
        >
          Change Template
        </Button>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Active Alerts</h4>
                <ul className="space-y-1">
                  {notifications.slice(0, 3).map((notification, index) => (
                    <li key={index} className="text-sm text-orange-700 dark:text-orange-300">
                      • {notification}
                    </li>
                  ))}
                </ul>
                {notifications.length > 3 && (
                  <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                    +{notifications.length - 3} more alerts
                  </p>
                )}
              </div>
              <Button onClick={clearNotifications} variant="ghost" size="sm">
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Enhanced Project Health Score */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getHealthIcon(realtimeProjectHealth.status)}
                Real-time Project Health
                {isRealTimeEnabled && <Zap className="w-4 h-4 text-blue-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                      {realtimeProjectHealth.score}%
                    </div>
                    <Badge className={getStatusColor(realtimeProjectHealth.status)}>
                      {realtimeProjectHealth.status.charAt(0).toUpperCase() + realtimeProjectHealth.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Task Completion: {realtimeProjectHealth.factors.taskCompletion}%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Overdue Items: {realtimeProjectHealth.factors.overdueItems}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Schedule Adherence: {realtimeProjectHealth.factors.scheduleAdherence}%
                    </div>
                    {realtimeProjectHealth.alerts && (
                      <div className="space-y-1">
                        {realtimeProjectHealth.alerts.criticalOverdue > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {realtimeProjectHealth.alerts.criticalOverdue} Critical Overdue
                          </Badge>
                        )}
                        {realtimeProjectHealth.alerts.blockedCritical > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {realtimeProjectHealth.alerts.blockedCritical} Critical Blocked
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <Progress value={realtimeProjectHealth.score} className="h-3" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {realtimeProjectHealth.factors.riskAreas.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        Risk Areas
                      </h4>
                      <ul className="space-y-2">
                        {realtimeProjectHealth.factors.riskAreas.map((risk, index) => (
                          <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {realtimeProjectHealth.recommendations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {realtimeProjectHealth.recommendations.slice(0, 5).map((rec, index) => (
                          <li key={index} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">{realtimeMetrics.completedThisWeek}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completed This Week</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">{realtimeMetrics.productivityScore}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Productivity Score</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-red-600">{realtimeMetrics.criticalTasksCount}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Critical Tasks</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600">
                  {teamUtilization.filter(t => t.status === 'overloaded').length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Overloaded Members</div>
              </CardContent>
            </Card>
          </div>

          {/* Phase Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Project Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeTemplate.phases.map((phase, index) => {
                  const phaseTasks = phase.tasks.map(task => tasks.find(t => t.id === task.id)!).filter(Boolean);
                  const completedTasks = phaseTasks.filter(task => task.status === 'completed').length;
                  const progress = phaseTasks.length > 0 ? (completedTasks / phaseTasks.length) * 100 : 0;
                  
                  return (
                    <div key={phase.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{phase.name}</h4>
                          <p className="text-sm text-gray-600">{phase.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{progress.toFixed(0)}%</div>
                          <div className="text-xs text-gray-500">
                            {completedTasks}/{phaseTasks.length} tasks
                          </div>
                        </div>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>{phase.duration} weeks</span>
                        <span>{phase.tasks.length} tasks</span>
                        <span>{phase.deliverables.length} deliverables</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <TaskManagement
            tasks={tasks}
            teamMembers={teamMembers}
            onUpdateTask={updateTask}
            onAssignTask={assignTask}
          />
        </TabsContent>

        <TabsContent value="metrics">
          <ProjectMetrics metrics={realtimeMetrics} />
        </TabsContent>

        <TabsContent value="team">
          <div className="space-y-6">
            {/* Team Utilization Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Team Utilization (Real-time)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamUtilization.map((member) => (
                    <div key={member.memberId} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{member.memberName}</h4>
                        <p className="text-sm text-gray-600">
                          {member.assignedHours}h / {member.capacity}h assigned
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24">
                          <Progress value={member.utilization} className="h-2" />
                        </div>
                        <Badge 
                          variant={
                            member.status === 'overloaded' ? 'destructive' : 
                            member.status === 'high' ? 'default' : 'secondary'
                          }
                        >
                          {member.utilization}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Members grid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="border rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-sm text-gray-500">
                          Capacity: {member.capacity}h/week
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
