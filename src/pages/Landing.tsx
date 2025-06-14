
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Target, TrendingUp, Calendar, Zap, Shield, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #4c1d95 0%, #312e81 25%, #1e1b4b 50%, #0f172a 100%)'
    }}>
      {/* Premium Starfield Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
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
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="w-12 h-12 text-purple-300 animate-pulse" />
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 tracking-wide">
              GOALUX
            </h1>
            <Crown className="w-12 h-12 text-purple-300 animate-pulse" />
          </div>
          <p className="text-3xl text-purple-200/90 max-w-4xl mx-auto leading-relaxed mb-8">
            The Ultimate Premium Goal Tracking Experience
          </p>
          <p className="text-xl text-purple-200/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Transform your savings journey with intelligent goal tracking, premium insights, and luxurious design that motivates you to achieve your dreams.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-5 h-5 text-purple-300 animate-pulse" />
            <span className="text-purple-300/90 text-sm tracking-wider">LUXURY • PRECISION • SUCCESS</span>
            <Star className="w-5 h-5 text-purple-300 animate-pulse" />
          </div>

          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-400/90 hover:to-purple-500/90 backdrop-blur-xl border border-white/20 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25"
          >
            <Zap className="w-6 h-6 mr-3" />
            Get Started Now
          </Button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <Target className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <CardTitle className="text-white text-2xl">Smart Goal Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-200/80 leading-relaxed">
                Set ambitious goals and track your progress with intelligent insights and beautiful visualizations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <TrendingUp className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <CardTitle className="text-white text-2xl">Investment Planning</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-200/80 leading-relaxed">
                Plan your monthly investments and see exactly when you'll reach your financial goals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <Calendar className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <CardTitle className="text-white text-2xl">Premium Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-200/80 leading-relaxed">
                Get detailed analytics and insights to optimize your savings strategy and achieve goals faster.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Premium Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200 mb-12">
            Why Choose GOALUX?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <Shield className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">Secure & Private</h3>
                <p className="text-purple-200/70">Your financial data stays on your device</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
              <Zap className="w-8 h-8 text-yellow-400" />
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">Lightning Fast</h3>
                <p className="text-purple-200/70">Instant updates and smooth performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Goals?</h3>
            <p className="text-purple-200/80 text-lg mb-8 leading-relaxed">
              Join thousands of successful goal achievers who trust GOALUX to make their dreams a reality.
            </p>
            <Button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 hover:from-emerald-400/90 hover:to-emerald-500/90 backdrop-blur-xl border border-white/20 text-white px-10 py-4 text-lg rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
