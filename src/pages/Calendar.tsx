
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useGoals } from '@/hooks/useGoals';
import { format, isSameDay, parseISO } from 'date-fns';
import { CalendarDays, Target, Clock } from 'lucide-react';

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

    if (diffDays < 0) return { status: 'overdue', color: 'text-red-600', bgColor: 'bg-red-50' };
    if (diffDays <= 7) return { status: 'urgent', color: 'text-orange-600', bgColor: 'bg-orange-50' };
    if (diffDays <= 30) return { status: 'upcoming', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    return { status: 'future', color: 'text-green-600', bgColor: 'bg-green-50' };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
            Calendar & Deadlines
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            View your goals and their deadlines in calendar format.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <CalendarDays className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
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
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateGoals.length === 0 ? (
                <div className="text-center py-8">
                  <Target className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">
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
                      <div key={goal.id} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {goal.category} • {progressPercentage}% complete
                        </p>
                        <div className="text-sm text-slate-900 dark:text-slate-100">
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
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                <Clock className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingGoals.length === 0 ? (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">
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
                      <div key={goal.id} className={`p-3 rounded-lg ${deadlineInfo.bgColor} dark:bg-slate-700`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                            {goal.title}
                          </h4>
                          <span className={`text-xs font-medium ${deadlineInfo.color} dark:text-slate-300`}>
                            {format(parseISO(goal.deadline), 'MMM d')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-600 dark:text-slate-400">
                            {progressPercentage}% complete
                          </span>
                          <span className="text-slate-600 dark:text-slate-400">
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
