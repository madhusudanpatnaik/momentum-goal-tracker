
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Target, TrendingUp, Calendar, Coins, Trophy, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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

const Index = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [filter, setFilter] = useState('all');
  const { toast } = useToast();

  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    savedAmount: '',
    monthlyInvestment: '',
    category: 'transport',
    targetDate: ''
  });

  useEffect(() => {
    const savedGoals = localStorage.getItem('retro-goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    } else {
      const sampleGoals: Goal[] = [
        {
          id: '1',
          name: 'Mountain Bike',
          targetAmount: 1200,
          savedAmount: 750,
          monthlyInvestment: 150,
          category: 'transport',
          createdAt: '2024-01-15',
          targetDate: '2024-08-15'
        },
        {
          id: '2',
          name: 'Gaming Setup',
          targetAmount: 2500,
          savedAmount: 980,
          monthlyInvestment: 200,
          category: 'entertainment',
          createdAt: '2024-02-01',
          targetDate: '2024-12-01'
        }
      ];
      setGoals(sampleGoals);
      localStorage.setItem('retro-goals', JSON.stringify(sampleGoals));
    }
  }, []);

  const saveGoals = (updatedGoals: Goal[]) => {
    setGoals(updatedGoals);
    localStorage.setItem('retro-goals', JSON.stringify(updatedGoals));
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
      title: "Goal Added!",
      description: `Your goal "${goal.name}" has been created`,
    });
  };

  const updateSavings = (goalId: string, amount: number) => {
    const updatedGoals = goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, savedAmount: Math.max(0, goal.savedAmount + amount) }
        : goal
    );
    saveGoals(updatedGoals);
  };

  const getProgressPercentage = (saved: number, target: number) => {
    return Math.min((saved / target) * 100, 100);
  };

  const getTimeToGoal = (saved: number, target: number, monthly: number) => {
    if (monthly <= 0) return 'Set monthly investment';
    const remaining = target - saved;
    if (remaining <= 0) return 'Goal reached!';
    const months = Math.ceil(remaining / monthly);
    return `${months} months`;
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-mono tracking-wider">
            RETRO GOALS
          </h1>
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-xl">
            <Star className="w-6 h-6 animate-pulse" />
            <span className="font-mono">TRACK • SAVE • ACHIEVE</span>
            <Star className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50 border border-cyan-400/30">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black font-mono">
              <Target className="w-4 h-4 mr-2" />
              DASHBOARD
            </TabsTrigger>
            <TabsTrigger value="investments" className="data-[state=active]:bg-purple-400 data-[state=active]:text-black font-mono">
              <TrendingUp className="w-4 h-4 mr-2" />
              INVESTMENTS
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-pink-400 data-[state=active]:text-black font-mono">
              <Calendar className="w-4 h-4 mr-2" />
              ANALYTICS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`font-mono uppercase border-2 ${
                    filter === category 
                      ? 'bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/50' 
                      : 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20'
                  }`}
                >
                  {category !== 'all' && categoryEmojis[category as keyof typeof categoryEmojis]} {category}
                </Button>
              ))}
            </div>

            {/* Add Goal Button */}
            <div className="flex justify-center mb-8">
              <Button
                onClick={() => setShowAddGoal(!showAddGoal)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-2 border-purple-400 text-white font-mono text-lg px-8 py-3 shadow-lg shadow-purple-500/50"
              >
                <Plus className="w-5 h-5 mr-2" />
                NEW GOAL
              </Button>
            </div>

            {/* Add Goal Form */}
            {showAddGoal && (
              <Card className="mb-8 bg-black/60 border-2 border-cyan-400/50 shadow-xl shadow-cyan-400/20">
                <CardHeader>
                  <CardTitle className="text-cyan-400 font-mono">CREATE NEW GOAL</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-cyan-300 font-mono">GOAL NAME</Label>
                      <Input
                        value={newGoal.name}
                        onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                        className="bg-black/50 border-cyan-400/50 text-white font-mono"
                        placeholder="e.g., Mountain Bike"
                      />
                    </div>
                    <div>
                      <Label className="text-cyan-300 font-mono">TARGET AMOUNT ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.targetAmount}
                        onChange={(e) => setNewGoal({...newGoal, targetAmount: e.target.value})}
                        className="bg-black/50 border-cyan-400/50 text-white font-mono"
                        placeholder="1200"
                      />
                    </div>
                    <div>
                      <Label className="text-cyan-300 font-mono">CURRENT SAVINGS ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.savedAmount}
                        onChange={(e) => setNewGoal({...newGoal, savedAmount: e.target.value})}
                        className="bg-black/50 border-cyan-400/50 text-white font-mono"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <Label className="text-cyan-300 font-mono">MONTHLY INVESTMENT ($)</Label>
                      <Input
                        type="number"
                        value={newGoal.monthlyInvestment}
                        onChange={(e) => setNewGoal({...newGoal, monthlyInvestment: e.target.value})}
                        className="bg-black/50 border-cyan-400/50 text-white font-mono"
                        placeholder="150"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setShowAddGoal(false)}
                      className="border-red-400 text-red-400 hover:bg-red-400/20 font-mono"
                    >
                      CANCEL
                    </Button>
                    <Button
                      onClick={addGoal}
                      className="bg-green-500 hover:bg-green-600 border-2 border-green-400 font-mono shadow-lg shadow-green-500/50"
                    >
                      CREATE GOAL
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Goals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGoals.map((goal) => {
                const progress = getProgressPercentage(goal.savedAmount, goal.targetAmount);
                const isCompleted = progress >= 100;
                
                return (
                  <Card key={goal.id} className={`bg-black/60 border-2 shadow-xl transition-all duration-300 hover:scale-105 ${
                    isCompleted 
                      ? 'border-green-400 shadow-green-400/30' 
                      : 'border-purple-400/50 shadow-purple-400/20'
                  }`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-cyan-400 font-mono text-lg">
                          {categoryEmojis[goal.category as keyof typeof categoryEmojis]} {goal.name}
                        </CardTitle>
                        {isCompleted && <Trophy className="w-6 h-6 text-yellow-400 animate-pulse" />}
                      </div>
                      <Badge variant="outline" className="w-fit border-purple-400 text-purple-400 font-mono">
                        {goal.category.toUpperCase()}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-cyan-300 font-mono">PROGRESS</span>
                          <span className="text-white font-mono">{progress.toFixed(1)}%</span>
                        </div>
                        <Progress 
                          value={progress} 
                          className={`h-3 bg-gray-800 ${
                            isCompleted ? '[&>div]:bg-green-400' : '[&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-purple-400'
                          }`}
                        />
                        <div className="flex justify-between text-sm font-mono">
                          <span className="text-green-400">${goal.savedAmount.toLocaleString()}</span>
                          <span className="text-white">${goal.targetAmount.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-black/40 rounded p-2 border border-cyan-400/30">
                          <div className="text-cyan-400 text-xs font-mono">REMAINING</div>
                          <div className="text-white font-mono">${(goal.targetAmount - goal.savedAmount).toLocaleString()}</div>
                        </div>
                        <div className="bg-black/40 rounded p-2 border border-purple-400/30">
                          <div className="text-purple-400 text-xs font-mono">TIME LEFT</div>
                          <div className="text-white font-mono text-xs">{getTimeToGoal(goal.savedAmount, goal.targetAmount, goal.monthlyInvestment)}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          onClick={() => updateSavings(goal.id, 50)}
                          className="flex-1 bg-green-600 hover:bg-green-700 font-mono text-xs"
                        >
                          +$50
                        </Button>
                        <Button
                          onClick={() => updateSavings(goal.id, goal.monthlyInvestment)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 font-mono text-xs"
                        >
                          +MONTHLY
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="investments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <Card key={goal.id} className="bg-black/60 border-2 border-purple-400/50 shadow-xl shadow-purple-400/20">
                  <CardHeader>
                    <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
                      <Coins className="w-5 h-5" />
                      {goal.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-black/40 rounded p-3 border border-purple-400/30">
                        <div className="text-purple-400 text-xs font-mono">MONTHLY</div>
                        <div className="text-white font-mono text-lg">${goal.monthlyInvestment}</div>
                      </div>
                      <div className="bg-black/40 rounded p-3 border border-cyan-400/30">
                        <div className="text-cyan-400 text-xs font-mono">TOTAL SAVED</div>
                        <div className="text-white font-mono text-lg">${goal.savedAmount}</div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-400 font-mono">
                      Started: {new Date(goal.createdAt).toLocaleDateString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/60 border-2 border-pink-400/50 shadow-xl shadow-pink-400/20">
                <CardHeader>
                  <CardTitle className="text-pink-400 font-mono">TOTAL OVERVIEW</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-mono text-cyan-400">{goals.length}</div>
                      <div className="text-sm text-gray-400 font-mono">ACTIVE GOALS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-mono text-green-400">
                        ${goals.reduce((sum, goal) => sum + goal.savedAmount, 0).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400 font-mono">TOTAL SAVED</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-2 border-yellow-400/50 shadow-xl shadow-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-yellow-400 font-mono">MONTHLY COMMITMENT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-mono text-yellow-400">
                      ${goals.reduce((sum, goal) => sum + goal.monthlyInvestment, 0)}
                    </div>
                    <div className="text-sm text-gray-400 font-mono">PER MONTH</div>
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

export default Index;
