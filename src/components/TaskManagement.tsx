
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { SDLCTask, TeamMember } from '@/types/sdlc';
import { 
  Clock, 
  User, 
  Flag, 
  Calendar,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
  Pause,
  Play,
  MoreVertical,
  Edit,
  Trash2,
  UserPlus
} from 'lucide-react';

interface TaskManagementProps {
  tasks: SDLCTask[];
  teamMembers: TeamMember[];
  onUpdateTask: (taskId: string, updates: Partial<SDLCTask>) => void;
  onAssignTask: (taskId: string, assigneeId: string) => void;
}

export const TaskManagement: React.FC<TaskManagementProps> = ({
  tasks,
  teamMembers,
  onUpdateTask,
  onAssignTask
}) => {
  const [filter, setFilter] = useState<'all' | 'my-tasks' | 'overdue' | 'blocked'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const getStatusIcon = (status: SDLCTask['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress': return <Play className="w-4 h-4 text-blue-500" />;
      case 'blocked': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'on-hold': return <Pause className="w-4 h-4 text-yellow-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: SDLCTask['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: SDLCTask['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200';
      case 'blocked': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: SDLCTask['category']) => {
    switch (category) {
      case 'development': return 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200';
      case 'design': return 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200';
      case 'testing': return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200';
      case 'deployment': return 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-200';
      case 'research': return 'bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-200';
      case 'marketing': return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-200';
      case 'management': return 'bg-gray-50 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200';
      default: return 'bg-gray-50 text-gray-700 dark:bg-gray-700/30 dark:text-gray-200';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    
    let matchesFilter = true;
    switch (filter) {
      case 'overdue':
        matchesFilter = new Date(task.dueDate) < new Date() && task.status !== 'completed';
        break;
      case 'blocked':
        matchesFilter = task.status === 'blocked';
        break;
      case 'my-tasks':
        matchesFilter = task.assignee === 'Lead Developer'; // Simplified for demo
        break;
    }
    
    return matchesSearch && matchesPriority && matchesStatus && matchesFilter;
  });

  const isOverdue = (dueDate: string, status: SDLCTask['status']) => {
    return new Date(dueDate) < new Date() && status !== 'completed';
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    console.log(`Updating task ${taskId} status to ${newStatus}`);
    onUpdateTask(taskId, { status: newStatus as SDLCTask['status'] });
  };

  const handleAssigneeChange = (taskId: string, assigneeId: string) => {
    console.log(`Assigning task ${taskId} to ${assigneeId}`);
    onAssignTask(taskId, assigneeId);
  };

  const handlePriorityChange = (taskId: string, newPriority: string) => {
    console.log(`Updating task ${taskId} priority to ${newPriority}`);
    onUpdateTask(taskId, { priority: newPriority as SDLCTask['priority'] });
  };

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Filter className="w-5 h-5" />
            Task Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-300" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 border border-blue-700/30 rounded-lg text-sm bg-slate-800/60 backdrop-blur text-white placeholder-blue-300"
              />
            </div>
            
            <Select value={filter} onValueChange={(value) => setFilter(value as any)}>
              <SelectTrigger className="w-[180px] bg-slate-800/60 backdrop-blur border-blue-700/30 text-white">
                <SelectValue placeholder="Filter tasks" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800/95 backdrop-blur border border-blue-700/30">
                <SelectItem value="all" className="text-white hover:bg-blue-700/30">All Tasks</SelectItem>
                <SelectItem value="my-tasks" className="text-white hover:bg-blue-700/30">My Tasks</SelectItem>
                <SelectItem value="overdue" className="text-white hover:bg-blue-700/30">Overdue</SelectItem>
                <SelectItem value="blocked" className="text-white hover:bg-blue-700/30">Blocked</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger className="w-[180px] bg-slate-800/60 backdrop-blur border-blue-700/30 text-white">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800/95 backdrop-blur border border-blue-700/30">
                <SelectItem value="all" className="text-white hover:bg-blue-700/30">All Priorities</SelectItem>
                <SelectItem value="critical" className="text-white hover:bg-blue-700/30">Critical</SelectItem>
                <SelectItem value="high" className="text-white hover:bg-blue-700/30">High</SelectItem>
                <SelectItem value="medium" className="text-white hover:bg-blue-700/30">Medium</SelectItem>
                <SelectItem value="low" className="text-white hover:bg-blue-700/30">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px] bg-slate-800/60 backdrop-blur border-blue-700/30 text-white">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800/95 backdrop-blur border border-blue-700/30">
                <SelectItem value="all" className="text-white hover:bg-blue-700/30">All Statuses</SelectItem>
                <SelectItem value="not-started" className="text-white hover:bg-blue-700/30">Not Started</SelectItem>
                <SelectItem value="in-progress" className="text-white hover:bg-blue-700/30">In Progress</SelectItem>
                <SelectItem value="completed" className="text-white hover:bg-blue-700/30">Completed</SelectItem>
                <SelectItem value="blocked" className="text-white hover:bg-blue-700/30">Blocked</SelectItem>
                <SelectItem value="on-hold" className="text-white hover:bg-blue-700/30">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Task Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-white">{tasks.length}</div>
            <div className="text-sm text-blue-200">Total Tasks</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-400">
              {tasks.filter(t => t.status === 'completed').length}
            </div>
            <div className="text-sm text-blue-200">Completed</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-400">
              {tasks.filter(t => t.status === 'in-progress').length}
            </div>
            <div className="text-sm text-blue-200">In Progress</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-400">
              {tasks.filter(t => isOverdue(t.dueDate, t.status)).length}
            </div>
            <div className="text-sm text-blue-200">Overdue</div>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      <Card className="bg-slate-900/80 backdrop-blur-xl border-blue-700/30 shadow-xl shadow-blue-900/20">
        <CardHeader>
          <CardTitle className="text-white">Tasks ({filteredTasks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div key={task.id} className="border border-blue-700/30 rounded-lg p-4 hover:bg-slate-800/60 transition-colors backdrop-blur">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-1 h-12 rounded ${getPriorityColor(task.priority)}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(task.status)}
                          <h4 className="font-medium text-white">{task.title}</h4>
                          {isOverdue(task.dueDate, task.status) && (
                            <Badge variant="destructive" className="text-xs">Overdue</Badge>
                          )}
                        </div>
                        <p className="text-sm text-blue-200 mb-2">{task.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-blue-300">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.estimatedHours}h estimated
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Due {new Date(task.dueDate).toLocaleDateString()}
                          </div>
                          {task.assignee && (
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {task.assignee}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Badge className={getCategoryColor(task.category)}>
                      {task.category}
                    </Badge>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status.replace('-', ' ')}
                    </Badge>
                    
                    {/* Status Dropdown */}
                    <Select value={task.status} onValueChange={(value) => handleStatusChange(task.id, value)}>
                      <SelectTrigger className="w-[120px] h-8 text-xs bg-slate-800/60 backdrop-blur border-blue-700/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 backdrop-blur border border-blue-700/30 z-50">
                        <SelectItem value="not-started" className="text-white hover:bg-blue-700/30">Not Started</SelectItem>
                        <SelectItem value="in-progress" className="text-white hover:bg-blue-700/30">In Progress</SelectItem>
                        <SelectItem value="completed" className="text-white hover:bg-blue-700/30">Completed</SelectItem>
                        <SelectItem value="blocked" className="text-white hover:bg-blue-700/30">Blocked</SelectItem>
                        <SelectItem value="on-hold" className="text-white hover:bg-blue-700/30">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Assignee Dropdown */}
                    <Select value={task.assignee || ''} onValueChange={(value) => handleAssigneeChange(task.id, value)}>
                      <SelectTrigger className="w-[140px] h-8 text-xs bg-slate-800/60 backdrop-blur border-blue-700/30 text-white">
                        <SelectValue placeholder="Unassigned" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800/95 backdrop-blur border border-blue-700/30 z-50">
                        <SelectItem value="" className="text-white hover:bg-blue-700/30">Unassigned</SelectItem>
                        {teamMembers.map(member => (
                          <SelectItem key={member.id} value={member.id} className="text-white hover:bg-blue-700/30">
                            {member.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Task Actions Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-200 hover:bg-blue-700/30">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-slate-800/95 backdrop-blur border border-blue-700/30 z-50">
                        <DropdownMenuLabel className="text-white">Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-blue-700/30" />
                        <DropdownMenuItem onClick={() => console.log('Edit task:', task.id)} className="text-white hover:bg-blue-700/30">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Task
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Assign task:', task.id)} className="text-white hover:bg-blue-700/30">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Reassign
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-blue-700/30" />
                        <DropdownMenuItem 
                          onClick={() => console.log('Delete task:', task.id)} 
                          className="text-red-400 hover:bg-red-900/30"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Task
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                {task.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {task.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs border-blue-700/50 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {filteredTasks.length === 0 && (
              <div className="text-center py-8 text-blue-300">
                No tasks match the current filters
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
