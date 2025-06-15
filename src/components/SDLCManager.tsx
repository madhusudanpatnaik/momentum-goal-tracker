
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
      case 'excellent': return 'text-royal-green-700 bg-royal-green-100 dark:text-royal-green-300 dark:bg-royal-green-900/30';
      case 'good': return 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30';
      case 'warning': return 'text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30';
      case 'critical': return 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30';
      default: return 'text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-900/30';
    }
  };

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-5 h-5 text-royal-green-600 dark:text-royal-green-400" />;
      case 'good': return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />;
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default: return <Activity className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getTemplateIcon = (type: string) => {
    switch (type) {
      case 'mvp': return <Rocket className="w-6 h-6 text-royal-green-600 dark:text-royal-green-400" />;
      case 'saas': return <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'mobile-app': return <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'enterprise': return <Settings className="w-6 h-6 text-red-600 dark:text-red-400" />;
      default: return <Rocket className="w-6 h-6 text-royal-green-600 dark:text-royal-green-400" />;
    }
  };

  if (showTemplates || !activeTemplate) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-royal-green-900 dark:text-royal-green-300">SDLC Templates</h2>
            <p className="text-royal-green-700 dark:text-royal-green-400">Choose a template to start your project</p>
          </div>
          {activeTemplate && (
            <Button
              variant="outline"
              onClick={() => setShowTemplates(false)}
              className="border-royal-green-300 text-royal-green-700 hover:bg-royal-green-50 dark:border-royal-green-600 dark:text-royal-green-400 dark:hover:bg-royal-green-900/30"
            >
              Back to Project
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-royal-green-300 dark:hover:border-royal-green-600 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {getTemplateIcon(template.type)}
                  <div>
                    <CardTitle className="text-lg text-royal-green-900 dark:text-royal-green-300">{template.name}</CardTitle>
                    <Badge variant="outline" className="mt-1 border-royal-green-200 text-royal-green-700 dark:border-royal-green-600 dark:text-royal-green-400">
                      {template.type.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-royal-green-600 dark:text-royal-green-400 mb-4">
                  {template.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-royal-green-700 dark:text-royal-green-400">
                      <Calendar className="w-4 h-4" />
                      <span>{template.estimatedDuration} weeks</span>
                    </div>
                    <div className="flex items-center gap-2 text-royal-green-700 dark:text-royal-green-400">
                      <Users className="w-4 h-4" />
                      <span>{template.teamSize} people</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-royal-green-600 dark:text-royal-green-400">
                    <Target className="w-4 h-4" />
                    <span>{template.phases.length} phases</span>
                    <span className="text-royal-green-400">•</span>
                    <span>{template.phases.reduce((sum, phase) => sum + phase.tasks.length, 0)} tasks</span>
                  </div>
                  
                  {template.budget && (
                    <div className="text-sm text-royal-green-600 dark:text-royal-green-400">
                      Budget: ${template.budget.toLocaleString()}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {template.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-royal-green-100 text-royal-green-700 dark:bg-royal-green-900/30 dark:text-royal-green-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => {
                      startProject(template.id);
                      setShowTemplates(false);
                    }}
                    className="w-full mt-4 bg-royal-green-600 hover:bg-royal-green-700 text-white dark:bg-royal-green-500 dark:hover:bg-royal-green-600"
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
            <h2 className="text-3xl font-bold text-royal-green-900 dark:text-royal-green-300">
              {activeTemplate.name}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleRealTime}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-royal-green-300 text-royal-green-700 hover:bg-royal-green-50 dark:border-royal-green-600 dark:text-royal-green-400 dark:hover:bg-royal-green-900/30"
              >
                {isRealTimeEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                {isRealTimeEnabled ? 'Live' : 'Static'}
              </Button>
              {notifications.length > 0 && (
                <Button
                  onClick={clearNotifications}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/30"
                >
                  <Bell className="w-4 h-4" />
                  {notifications.length}
                </Button>
              )}
            </div>
          </div>
          <p className="text-royal-green-700 dark:text-royal-green-400">
            {activeTemplate.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-royal-green-200 text-royal-green-700 dark:border-royal-green-600 dark:text-royal-green-400">
              {activeTemplate.type.replace('-', ' ')}
            </Badge>
            <span className="text-sm text-royal-green-600 dark:text-royal-green-400">
              {activeTemplate.estimatedDuration} weeks • {activeTemplate.teamSize} team members
            </span>
            {isRealTimeEnabled && (
              <span className="text-xs text-royal-green-500 dark:text-royal-green-500">
                Updated: {lastUpdateTime.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowTemplates(true)}
          className="border-royal-green-300 text-royal-green-700 hover:bg-royal-green-50 dark:border-royal-green-600 dark:text-royal-green-400 dark:hover:bg-royal-green-900/30"
        >
          Change Template
        </Button>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
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
              <Button onClick={clearNotifications} variant="ghost" size="sm" className="text-orange-600 hover:bg-orange-100 dark:text-orange-400 dark:hover:bg-orange-900/30">
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-royal-green-100 dark:bg-royal-green-900/30">
          <TabsTrigger value="overview" className="data-[state=active]:bg-royal-green-600 data-[state=active]:text-white">Overview</TabsTrigger>
          <TabsTrigger value="tasks" className="data-[state=active]:bg-royal-green-600 data-[state=active]:text-white">Tasks</TabsTrigger>
          <TabsTrigger value="metrics" className="data-[state=active]:bg-royal-green-600 data-[state=active]:text-white">Metrics</TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-royal-green-600 data-[state=active]:text-white">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Enhanced Project Health Score */}
          <Card className="border-2 border-royal-green-200 dark:border-royal-green-700 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-royal-green-900 dark:text-royal-green-300">
                {getHealthIcon(realtimeProjectHealth.status)}
                Real-time Project Health
                {isRealTimeEnabled && <Zap className="w-4 h-4 text-royal-green-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-royal-green-900 dark:text-royal-green-300">
                      {realtimeProjectHealth.score}%
                    </div>
                    <Badge className={getStatusColor(realtimeProjectHealth.status)}>
                      {realtimeProjectHealth.status.charAt(0).toUpperCase() + realtimeProjectHealth.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm text-royal-green-600 dark:text-royal-green-400">
                      Task Completion: {realtimeProjectHealth.factors.taskCompletion}%
                    </div>
                    <div className="text-sm text-royal-green-600 dark:text-royal-green-400">
                      Overdue Items: {realtimeProjectHealth.factors.overdueItems}
                    </div>
                    <div className="text-sm text-royal-green-600 dark:text-royal-green-400">
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
                      <h4 className="font-medium text-royal-green-900 dark:text-royal-green-300 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        Risk Areas
                      </h4>
                      <ul className="space-y-2">
                        {realtimeProjectHealth.factors.riskAreas.map((risk, index) => (
                          <li key={index} className="text-sm text-royal-green-600 dark:text-royal-green-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {realtimeProjectHealth.recommendations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-royal-green-900 dark:text-royal-green-300 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-royal-green-500" />
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {realtimeProjectHealth.recommendations.slice(0, 5).map((rec, index) => (
                          <li key={index} className="text-sm text-royal-green-600 dark:text-royal-green-400 flex items-center gap-2">
                            <span className="w-2 h-2 bg-royal-green-500 rounded-full"></span>
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
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-royal-green-600 dark:text-royal-green-400">{realtimeMetrics.completedThisWeek}</div>
                <div className="text-sm text-royal-green-600 dark:text-royal-green-400">Completed This Week</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-royal-green-600 dark:text-royal-green-400">{realtimeMetrics.productivityScore}%</div>
                <div className="text-sm text-royal-green-600 dark:text-royal-green-400">Productivity Score</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{realtimeMetrics.criticalTasksCount}</div>
                <div className="text-sm text-royal-green-600 dark:text-royal-green-400">Critical Tasks</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {teamUtilization.filter(t => t.status === 'overloaded').length}
                </div>
                <div className="text-sm text-royal-green-600 dark:text-royal-green-400">Overloaded Members</div>
              </CardContent>
            </Card>
          </div>

          {/* Phase Overview */}
          <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
            <CardHeader>
              <CardTitle className="text-royal-green-900 dark:text-royal-green-300">Project Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeTemplate.phases.map((phase, index) => {
                  const phaseTasks = phase.tasks.map(task => tasks.find(t => t.id === task.id)!).filter(Boolean);
                  const completedTasks = phaseTasks.filter(task => task.status === 'completed').length;
                  const progress = phaseTasks.length > 0 ? (completedTasks / phaseTasks.length) * 100 : 0;
                  
                  return (
                    <div key={phase.id} className="border border-royal-green-200 dark:border-royal-green-700 rounded-lg p-4 bg-royal-green-50/50 dark:bg-royal-green-900/10">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-royal-green-900 dark:text-royal-green-300">{phase.name}</h4>
                          <p className="text-sm text-royal-green-600 dark:text-royal-green-400">{phase.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-royal-green-900 dark:text-royal-green-300">{progress.toFixed(0)}%</div>
                          <div className="text-xs text-royal-green-600 dark:text-royal-green-400">
                            {completedTasks}/{phaseTasks.length} tasks
                          </div>
                        </div>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="flex items-center gap-4 mt-2 text-xs text-royal-green-500 dark:text-royal-green-500">
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
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-green-900 dark:text-royal-green-300">
                  <Activity className="w-5 h-5" />
                  Team Utilization (Real-time)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamUtilization.map((member) => (
                    <div key={member.memberId} className="flex items-center justify-between p-3 border border-royal-green-200 dark:border-royal-green-700 rounded-lg bg-royal-green-50/30 dark:bg-royal-green-900/10">
                      <div>
                        <h4 className="font-medium text-royal-green-900 dark:text-royal-green-300">{member.memberName}</h4>
                        <p className="text-sm text-royal-green-600 dark:text-royal-green-400">
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
                          className={
                            member.status === 'overloaded' ? '' :
                            member.status === 'high' ? 'bg-royal-green-600 text-white' : 'bg-royal-green-100 text-royal-green-700 dark:bg-royal-green-900/30 dark:text-royal-green-400'
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
            <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-royal-green-200 dark:border-royal-green-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-green-900 dark:text-royal-green-300">
                  <Users className="w-5 h-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="border border-royal-green-200 dark:border-royal-green-700 rounded-lg p-4 bg-royal-green-50/30 dark:bg-royal-green-900/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-royal-green-100 dark:bg-royal-green-900/30 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-royal-green-600 dark:text-royal-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-royal-green-900 dark:text-royal-green-300">{member.name}</h4>
                          <p className="text-sm text-royal-green-600 dark:text-royal-green-400">{member.role}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-sm text-royal-green-600 dark:text-royal-green-400">
                          Capacity: {member.capacity}h/week
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {member.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-xs bg-royal-green-100 text-royal-green-700 dark:bg-royal-green-900/30 dark:text-royal-green-400">
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
