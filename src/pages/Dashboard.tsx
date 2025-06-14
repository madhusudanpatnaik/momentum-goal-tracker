
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Target, TrendingUp, Calendar, Coins, Trophy, Star, ArrowLeft, Crown } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  savedAmount: number;
  monthlyInvestment: number;
  category: string;
  createdAt: string;
  targetDate?: string;
}

const Dashboard = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [filter, setFilter] = useState('all');
  const { toast } = useToast();
  const navigate = useNavigate();

  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    savedAmount: '',
    monthlyInvestment: '',
    category: 'transport',
    targetDate: ''
  });

  useEffect(() => {
    const savedGoals = localStorage.getItem('goalux-goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    } else {
      const sampleGoals: Goal[] = [
        {
          id: '1',
          name: 'Premium Mountain Bike',
          targetAmount: 2500,
          savedAmount: 1200,
          monthlyInvestment: 300,
          category: 'transport',
          createdAt: '2024-01-15',
          targetDate: '2024-08-15'
        },
        {
          id: '2',
          name: 'Ultimate Gaming Setup',
          targetAmount: 3500,
          savedAmount: 1800,
          monthlyInvestment: 400,
          category: 'entertainment',
          createdAt: '2024-02-01',
          targetDate: '2024-12-01'
        }
      ];
      setGoals(sampleGoals);
      localStorage.setItem('goalux-goals', JSON.stringify(sampleGoals));
    }
  }, []);

  const saveGoals = (updatedGoals: Goal[]) => {
    setGoals(updatedGoals);
    localStorage.setItem('goalux-goals', JSON.stringify(updatedGoals));
  };

  const addGoal = () => {
    if (!newGoal.name || !newGoal.targetAmount) {
      toast({
        title: "Error",
        description: "Please fill in goal name and target amount",
        variant: "destructive"
      });
      return;
    }

    const goal: Goal = {
      id: Date.now().toString(),
      name: newGoal.name,
      targetAmount: parseFloat(newGoal.targetAmount),
      savedAmount: parseFloat(newGoal.savedAmount) || 0,
      monthlyInvestment: parseFloat(newGoal.monthlyInvestment) || 0,
      category: newGoal.category,
      createdAt: new Date().toISOString().split('T')[0],
      targetDate: newGoal.targetDate || undefined
    };

    saveGoals([...goals, goal]);
    setNewGoal({ name: '', targetAmount: '', savedAmount: '', monthlyInvestment: '', category: 'transport', targetDate: '' });
    setShowAddGoal(false);
    
    toast({
      title: "Goal Created!",
      description: `Your premium goal "${goal.name}" has been created`,
    });
  };

  const updateSavings = (goalId: string, amount: number) => {
    const updatedGoals = goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, savedAmount: Math.max(0, goal.savedAmount + amount) }
        : goal
    );
    saveGoals(updatedGoals);
    
    toast({
      title: "Savings Updated!",
      description: `Added $${amount} to your goal`,
    });
  };

  const deleteGoal = (goalId: string) => {
    const updatedGoals = goals.filter(goal => goal.id !== goalId);
    saveGoals(updatedGoals);
    
    toast({
      title: "Goal Deleted",
      description: "Goal has been removed from your dashboard",
    });
  };

  const getProgressPercentage = (saved: number, target: number) => {
    return Math.min((saved / target) * 100, 100);
  };

  const getTimeToGoal = (saved: number, target: number, monthly: number) => {
    if (monthly <= 0) return 'Set monthly investment';
    const remaining = target - saved;
    if (remaining <= 0) return 'Goal achieved!';
    const months = Math.ceil(remaining / monthly);
    return `${months} months remaining`;
  };

  const filteredGoals = goals.filter(goal => 
    filter === 'all' || goal.category === filter
  );

  const categories = ['all', 'transport', 'entertainment', 'travel', 'education', 'home', 'other'];
  const categoryEmojis = {
    transport: '🚲',
    entertainment: '🎮',
    travel: '✈️',
    education: '📚',
    home: '🏠',
    other: '🎯'
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #4c1d95 0%, #312e81 25%, #1e1b4b 50%, #0f172a 100%)'
    }}>
      {/* Premium Starfield Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
              boxShadow: '0 0 6px rgba(255,255,255,0.8)'
            }}
          />
        ))}
      </div>

      {/* Elegant Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Premium Header with Back Button */}
        <div className="flex items-center justify-between mb-12">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-white/20 text-purple-200 hover:bg-white/10 hover:text-white backdrop-blur-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-purple-300 animate-pulse" />
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 tracking-wide">
                GOALUX DASHBOARD
              </h1>
              <Crown className="w-8 h-8 text-purple-300 animate-pulse" />
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-4 h-4 text-purple-300 animate-pulse" />
              <span className="text-purple-300/90 text-sm tracking-wider">YOUR PREMIUM GOAL MANAGEMENT CENTER</span>
              <Star className="w-4 h-4 text-purple-300 animate-pulse" />
            </div>
          </div>
          
          <div className="w-32"></div> {/* Spacer for center alignment */}
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-purple-200 transition-all duration-300 rounded-lg">
              <Target className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="investments" className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-purple-200 transition-all duration-300 rounded-lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              Investments
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-purple-200 transition-all duration-300 rounded-lg">
              <Calendar className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            {/* Premium Filter Bar */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`capitalize border-0 backdrop-blur-xl transition-all duration-300 ${
                    filter === category 
                      ? 'bg-white/20 text-white shadow-lg shadow-white/10' 
                      : 'bg-white/5 text-purple-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category !== 'all' && categoryEmojis[category as keyof typeof categoryEmojis]} {category}
                </Button>
              ))}
            </div>

            {/* Premium Add Goal Button */}
            <div className="flex justify-center mb-12">
              <Button
                onClick={() => setShowAddGoal(!showAddGoal)}
                className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400/90 hover:to-purple-500/90 backdrop-blur-xl border border-white/20 text-white px-10 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Premium Goal
              </Button>
            </div>

            {/* Premium Add Goal Form */}
            {showAddGoal && (
              <Card className="mb-12 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-white text-2xl">Create Premium Goal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-purple-200 text-sm font-medium">Goal Name</Label>
                      <Input
                        value={newGoal.name}
                        onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-lg mt-2"
                        placeholder="e.g., Premium Mountain Bike"
                      />
                    </div>
                    <div>
                      <Label className="text-purple-200 text-sm font-medium">Target Amount ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.targetAmount}
                        onChange={(e) => setNewGoal({...newGoal, targetAmount: e.target.value})}
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-lg mt-2"
                        placeholder="2500"
                      />
                    </div>
                    <div>
                      <Label className="text-purple-200 text-sm font-medium">Current Savings ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.savedAmount}
                        onChange={(e) => setNewGoal({...newGoal, savedAmount: e.target.value})}
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-lg mt-2"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className="text-purple-200 text-sm font-medium">Monthly Investment ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.monthlyInvestment}
                        onChange={(e) => setNewGoal({...newGoal, monthlyInvestment: e.target.value})}
                        className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/50 rounded-lg mt-2"
                        placeholder="300"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowAddGoal(false)}
                      className="border-white/20 text-purple-200 hover:bg-white/10 hover:text-white backdrop-blur-xl"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={addGoal}
                      className="bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 hover:from-emerald-400/90 hover:to-emerald-500/90 backdrop-blur-xl border border-white/20 text-white shadow-lg"
                    >
                      Create Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Premium Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGoals.map((goal) => {
                const progress = getProgressPercentage(goal.savedAmount, goal.targetAmount);
                const isCompleted = progress >= 100;
                
                return (
                  <Card key={goal.id} className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15 rounded-2xl ${
                    isCompleted ? 'ring-2 ring-emerald-400/50' : ''
                  }`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-xl flex items-center gap-2">
                          <span className="text-2xl">{categoryEmojis[goal.category as keyof typeof categoryEmojis]}</span>
                          {goal.name}
                        </CardTitle>
                        {isCompleted && <Trophy className="w-6 h-6 text-yellow-400 animate-pulse" />}
                      </div>
                      <Badge variant="outline" className="w-fit border-white/30 text-purple-200 bg-white/10 backdrop-blur-xl">
                        {goal.category.toUpperCase()}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-purple-200 font-medium">Progress</span>
                          <span className="text-white font-semibold">{progress.toFixed(1)}%</span>
                        </div>
                        <Progress 
                          value={progress} 
                          className={`h-4 bg-white/10 rounded-full ${
                            isCompleted ? '[&>div]:bg-gradient-to-r [&>div]:from-emerald-400 [&>div]:to-emerald-500' : '[&>div]:bg-gradient-to-r [&>div]:from-purple-400 [&>div]:to-purple-500'
                          }`}
                        />
                        <div className="flex justify-between text-sm">
                          <span className="text-emerald-300 font-semibold">${goal.savedAmount.toLocaleString()}</span>
                          <span className="text-white font-semibold">${goal.targetAmount.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                          <div className="text-purple-200 text-xs font-medium mb-1">Remaining</div>
                          <div className="text-white font-bold text-lg">${(goal.targetAmount - goal.savedAmount).toLocaleString()}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                          <div className="text-purple-200 text-xs font-medium mb-1">Time Left</div>
                          <div className="text-white font-bold text-sm">{getTimeToGoal(goal.savedAmount, goal.targetAmount, goal.monthlyInvestment)}</div>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          onClick={() => updateSavings(goal.id, 100)}
                          className="flex-1 bg-emerald-500/80 hover:bg-emerald-400/90 text-white backdrop-blur-xl border border-white/20 rounded-lg transition-all duration-300"
                        >
                          +$100
                        </Button>
                        <Button
                          onClick={() => updateSavings(goal.id, goal.monthlyInvestment)}
                          className="flex-1 bg-purple-500/80 hover:bg-purple-400/90 text-white backdrop-blur-xl border border-white/20 rounded-lg transition-all duration-300"
                        >
                          +Monthly
                        </Button>
                      </div>

                      <Button
                        onClick={() => deleteGoal(goal.id)}
                        variant="outline"
                        className="w-full border-red-400/30 text-red-300 hover:bg-red-500/20 hover:text-red-200 backdrop-blur-xl transition-all duration-300"
                      >
                        Delete Goal
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="investments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goals.map((goal) => (
                <Card key={goal.id} className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <Coins className="w-6 h-6 text-purple-300" />
                      {goal.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center">
                        <div className="text-purple-200 text-xs font-medium mb-2">Monthly</div>
                        <div className="text-white font-bold text-2xl">${goal.monthlyInvestment}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center">
                        <div className="text-purple-200 text-xs font-medium mb-2">Total Saved</div>
                        <div className="text-white font-bold text-2xl">${goal.savedAmount}</div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-purple-200/70">
                      Started: {new Date(goal.createdAt).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Portfolio Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{goals.length}</div>
                      <div className="text-purple-200/70 text-sm">Active Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300 mb-2">
                        ${goals.reduce((sum, goal) => sum + goal.savedAmount, 0).toLocaleString()}
                      </div>
                      <div className="text-purple-200/70 text-sm">Total Saved</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Monthly Commitment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-300 mb-2">
                      ${goals.reduce((sum, goal) => sum + goal.monthlyInvestment, 0)}
                    </div>
                    <div className="text-purple-200/70 text-sm">Per Month</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
