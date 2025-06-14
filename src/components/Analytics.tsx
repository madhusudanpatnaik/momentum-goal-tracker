
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Goal } from '@/types';
import { TrendingUp, Target, DollarSign, Calendar } from 'lucide-react';

interface AnalyticsProps {
  goals: Goal[];
}

export const Analytics: React.FC<AnalyticsProps> = ({ goals }) => {
  // Generate progress over time data
  const generateProgressData = () => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    });

    return last30Days.map(date => {
      const totalProgress = goals.reduce((sum, goal) => {
        // Simulate progress over time (in real app, you'd store historical data)
        const goalProgress = (goal.currentAmount / goal.targetAmount) * 100;
        return sum + goalProgress;
      }, 0);
      
      return {
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        progress: Math.round(totalProgress / goals.length || 0),
        amount: Math.round(goals.reduce((sum, goal) => sum + goal.currentAmount, 0))
      };
    });
  };

  // Generate completion trends data
  const generateCompletionTrends = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(month => ({
      month,
      completed: Math.floor(Math.random() * 5) + 1,
      created: Math.floor(Math.random() * 8) + 3,
    }));
  };

  // Generate spending patterns data
  const generateSpendingPatterns = () => {
    const categories = goals.reduce((acc, goal) => {
      const category = goal.type;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += goal.currentAmount;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categories).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value: Math.round(value),
    }));
  };

  const progressData = generateProgressData();
  const completionData = generateCompletionTrends();
  const spendingData = generateSpendingPatterns();

  const COLORS = ['#6366F1', '#FBBF24', '#10B981', '#F59E0B', '#8B5CF6'];

  const chartConfig = {
    progress: { label: "Progress", color: "#6366F1" },
    amount: { label: "Amount", color: "#10B981" },
    completed: { label: "Completed", color: "#6366F1" },
    created: { label: "Created", color: "#FBBF24" },
  };

  return (
    <div className="space-y-6">
      {/* Progress Over Time */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Progress Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
              <XAxis 
                dataKey="date" 
                className="text-slate-600 dark:text-slate-400"
              />
              <YAxis className="text-slate-600 dark:text-slate-400" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="progress" 
                stroke="#6366F1" 
                strokeWidth={3}
                dot={{ fill: '#6366F1', strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goal Completion Trends */}
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Goal Completion Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={completionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis 
                  dataKey="month" 
                  className="text-slate-600 dark:text-slate-400"
                />
                <YAxis className="text-slate-600 dark:text-slate-400" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="completed" fill="#6366F1" radius={4} />
                <Bar dataKey="created" fill="#FBBF24" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Spending Patterns */}
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Spending by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
