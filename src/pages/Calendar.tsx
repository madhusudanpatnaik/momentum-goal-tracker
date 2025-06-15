
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useGoals } from '@/hooks/useGoals';
import { format, isSameDay, parseISO } from 'date-fns';
import { CalendarDays, Target, Clock, Link } from 'lucide-react';

const CalendarPage = () => {
  const { goals } = useGoals();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const goalsWithDeadlines = goals.filter(goal => goal.deadline);
  
  const selectedDateGoals = selectedDate 
    ? goalsWithDeadlines.filter(goal => 
        isSameDay(parseISO(goal.deadline), selectedDate)
      )
    : [];

  const upcomingGoals = goalsWithDeadlines
    .filter(goal => new Date(goal.deadline) >= new Date())
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  const getDeadlineStatus = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { status: 'overdue', color: 'text-red-400', bgColor: 'bg-red-900/30 border-red-500/50' };
    if (diffDays <= 7) return { status: 'urgent', color: 'text-orange-400', bgColor: 'bg-orange-900/30 border-orange-500/50' };
    if (diffDays <= 30) return { status: 'upcoming', color: 'text-yellow-400', bgColor: 'bg-yellow-900/30 border-yellow-500/50' };
    return { status: 'future', color: 'text-green-400', bgColor: 'bg-green-900/30 border-green-500/50' };
  };

  const handleGoogleCalendarConnect = () => {
    console.log('Connecting to Google Calendar...');
    alert('Google Calendar integration coming soon! This would connect to your Google Calendar account.');
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Enhanced Header */}
        <div className="mb-8 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl shadow-slate-900/20">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                  Calendar & Deadlines
                </h1>
                <p className="text-slate-300 text-lg font-medium">
                  View your goals and their deadlines in calendar format.
                </p>
              </div>
            </div>
            <Button 
              onClick={handleGoogleCalendarConnect} 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg border border-blue-500/50 font-semibold"
            >
              <Link className="w-4 h-4 mr-2" />
              Connect Google Calendar
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-400" />
                <div className="text-slate-300 text-sm font-medium">Total Goals</div>
              </div>
              <div className="text-2xl font-bold text-white">{goals.length}</div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays className="w-4 h-4 text-green-400" />
                <div className="text-slate-300 text-sm font-medium">With Deadlines</div>
              </div>
              <div className="text-2xl font-bold text-white">{goalsWithDeadlines.length}</div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <div className="text-slate-300 text-sm font-medium">Upcoming</div>
              </div>
              <div className="text-2xl font-bold text-white">{upcomingGoals.length}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="bg-slate-800/95 dark:bg-slate-900/95 border border-slate-700/50 dark:border-slate-600/50 shadow-xl backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white flex items-center">
                <CalendarDays className="w-5 h-5 mr-3 text-blue-400" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0 text-white"
                modifiers={{
                  hasGoal: goalsWithDeadlines.map(goal => parseISO(goal.deadline))
                }}
                modifiersStyles={{
                  hasGoal: {
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    fontWeight: 'bold'
                  }
                }}
              />
            </CardContent>
          </Card>

          {/* Selected Date Goals */}
          <Card className="bg-slate-800/95 dark:bg-slate-900/95 border border-slate-700/50 dark:border-slate-600/50 shadow-xl backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateGoals.length === 0 ? (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-300">
                    No goals due on this date
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedDateGoals.map((goal) => {
                    const currentAmount = goal.currentAmount || 0;
                    const targetAmount = goal.targetAmount || 1;
                    const progressPercentage = ((currentAmount / targetAmount) * 100).toFixed(0);
                    
                    return (
                      <div key={goal.id} className="p-4 bg-slate-700/50 dark:bg-slate-800/50 rounded-xl border border-slate-600/50 dark:border-slate-500/50">
                        <h4 className="font-medium text-white mb-1">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-slate-300 mb-2">
                          {goal.category} • {progressPercentage}% complete
                        </p>
                        <div className="text-sm text-slate-200">
                          ${currentAmount.toLocaleString()} / ${targetAmount.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="bg-slate-800/95 dark:bg-slate-900/95 border border-slate-700/50 dark:border-slate-600/50 shadow-xl backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 mr-3 text-orange-400" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingGoals.length === 0 ? (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-300">
                    No upcoming deadlines
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {upcomingGoals.map((goal) => {
                    const deadlineInfo = getDeadlineStatus(goal.deadline);
                    const currentAmount = goal.currentAmount || 0;
                    const targetAmount = goal.targetAmount || 1;
                    const progressPercentage = ((currentAmount / targetAmount) * 100).toFixed(0);
                    
                    return (
                      <div key={goal.id} className={`p-3 rounded-xl border ${deadlineInfo.bgColor}`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-white text-sm">
                            {goal.title}
                          </h4>
                          <span className={`text-xs font-medium ${deadlineInfo.color}`}>
                            {format(parseISO(goal.deadline), 'MMM d')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-300">
                            {progressPercentage}% complete
                          </span>
                          <span className="text-slate-300">
                            {goal.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
