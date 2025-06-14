
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { Goal } from '@/types';
import { useAnalyticsRealtime } from '@/hooks/useAnalyticsRealtime';
import { TrendingUp, Target, DollarSign, Calendar, Activity, Zap, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface AnalyticsProps {
  goals: Goal[];
}

export const Analytics: React.FC<AnalyticsProps> = ({ goals }) => {
  const { analyticsData, lastUpdate, isLive, toggleLiveMode } = useAnalyticsRealtime(goals);

  const COLORS = ['#6366F1', '#FBBF24', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

  const chartConfig = {
    progress: { label: "Progress", color: "#6366F1" },
    amount: { label: "Amount", color: "#10B981" },
    completed: { label: "Completed", color: "#6366F1" },
    created: { label: "Created", color: "#FBBF24" },
    efficiency: { label: "Efficiency", color: "#10B981" },
  };

  return (
    <div className="space-y-6">
      {/* Real-time Status Header */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm font-medium">
                  {isLive ? 'Live Data' : 'Static View'}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
            <Button onClick={toggleLiveMode} variant="outline" size="sm">
              {isLive ? 'Pause Live' : 'Enable Live'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Success Rate</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {analyticsData.performanceMetrics.successRate}%
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-2">
              <Badge variant={analyticsData.performanceMetrics.successRate > 70 ? "default" : "destructive"}>
                {analyticsData.performanceMetrics.successRate > 70 ? "Excellent" : "Needs Focus"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Avg Completion</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {analyticsData.performanceMetrics.avgCompletionTime} days
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Total Value</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  ${analyticsData.performanceMetrics.totalValue.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">Monthly Growth</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {analyticsData.performanceMetrics.monthlyGrowth > 0 ? '+' : ''}{analyticsData.performanceMetrics.monthlyGrowth}%
                </p>
              </div>
              <div className={`p-3 rounded-xl ${analyticsData.performanceMetrics.monthlyGrowth > 0 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                <TrendingUp className={`w-6 h-6 ${analyticsData.performanceMetrics.monthlyGrowth > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Progress Over Time */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Progress Over Time (90 Days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <AreaChart data={analyticsData.progressOverTime}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
              <XAxis dataKey="date" className="text-slate-600 dark:text-slate-400" />
              <YAxis className="text-slate-600 dark:text-slate-400" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="progress" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} strokeWidth={2} />
              <Area type="monotone" dataKey="amount" stroke="#10B981" fill="#10B981" fillOpacity={0.2} strokeWidth={2} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced Goal Completion Trends */}
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Completion Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={analyticsData.completionTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis dataKey="month" className="text-slate-600 dark:text-slate-400" />
                <YAxis className="text-slate-600 dark:text-slate-400" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="completed" fill="#6366F1" radius={4} />
                <Bar dataKey="created" fill="#FBBF24" radius={4} />
                <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={2} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Enhanced Category Breakdown */}
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Category Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <ChartContainer config={chartConfig} className="h-48">
                <PieChart>
                  <Pie
                    data={analyticsData.categoryBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {analyticsData.categoryBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
              
              <div className="space-y-2">
                {analyticsData.categoryBreakdown.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{category.percentage}%</span>
                      <Badge variant={category.trend === 'up' ? 'default' : category.trend === 'down' ? 'destructive' : 'secondary'}>
                        {category.trend}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            AI-Powered Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analyticsData.insights.map((insight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">{insight}</p>
              </div>
            ))}
            {analyticsData.insights.length === 0 && (
              <p className="text-slate-500 dark:text-slate-400 text-center py-4">
                Add more goals to see personalized insights
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
