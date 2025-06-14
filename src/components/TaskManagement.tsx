
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
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'blocked': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: SDLCTask['category']) => {
    switch (category) {
      case 'development': return 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200';
      case 'design': return 'bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200';
      case 'testing': return 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200';
      case 'deployment': return 'bg-orange-50 text-orange-700 dark:bg-orange-900 dark:text-orange-200';
      case 'research': return 'bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-200';
      case 'marketing': return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200';
      case 'management': return 'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200';
      default: return 'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200';
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Task Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-white"
              />
            </div>
            
            <Select value={filter} onValueChange={(value) => setFilter(value as any)}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-slate-800">
                <SelectValue placeholder="Filter tasks" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="my-tasks">My Tasks</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-slate-800">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-slate-800">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="not-started">Not Started</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Task Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{tasks.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {tasks.filter(t => t.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {tasks.filter(t => t.status === 'in-progress').length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">
              {tasks.filter(t => isOverdue(t.dueDate, t.status)).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overdue</div>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle>Tasks ({filteredTasks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div key={task.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors dark:border-slate-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-1 h-12 rounded ${getPriorityColor(task.priority)}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getStatusIcon(task.status)}
                          <h4 className="font-medium dark:text-white">{task.title}</h4>
                          {isOverdue(task.dueDate, task.status) && (
                            <Badge variant="destructive" className="text-xs">Overdue</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{task.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
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
                      <SelectTrigger className="w-[120px] h-8 text-xs bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 z-50">
                        <SelectItem value="not-started">Not Started</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="blocked">Blocked</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Assignee Dropdown */}
                    <Select value={task.assignee || ''} onValueChange={(value) => handleAssigneeChange(task.id, value)}>
                      <SelectTrigger className="w-[140px] h-8 text-xs bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600">
                        <SelectValue placeholder="Unassigned" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 z-50">
                        <SelectItem value="">Unassigned</SelectItem>
                        {teamMembers.map(member => (
                          <SelectItem key={member.id} value={member.id}>
                            {member.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Task Actions Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 z-50">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => console.log('Edit task:', task.id)} className="hover:bg-gray-100 dark:hover:bg-slate-700">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Task
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log('Assign task:', task.id)} className="hover:bg-gray-100 dark:hover:bg-slate-700">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Reassign
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => console.log('Delete task:', task.id)} 
                          className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
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
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {filteredTasks.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No tasks match the current filters
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
