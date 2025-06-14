
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, Zap } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleBookDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated wavy background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated flowing waves */}
          <path
            d="M0 400C150 350, 300 450, 450 400C600 350, 750 500, 900 450C1050 400, 1200 550, 1400 500"
            stroke="url(#waveGradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0 400C150 350, 300 450, 450 400C600 350, 750 500, 900 450C1050 400, 1200 550, 1400 500;
                      M0 450C150 400, 300 500, 450 450C600 400, 750 550, 900 500C1050 450, 1200 600, 1400 550;
                      M0 400C150 350, 300 450, 450 400C600 350, 750 500, 900 450C1050 400, 1200 550, 1400 500"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0 500C200 450, 400 550, 600 500C800 450, 1000 600, 1400 550"
            stroke="url(#waveGradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0 500C200 450, 400 550, 600 500C800 450, 1000 600, 1400 550;
                      M0 550C200 500, 400 600, 600 550C800 500, 1000 650, 1400 600;
                      M0 500C200 450, 400 550, 600 500C800 450, 1000 600, 1400 550"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M0 300C100 250, 250 350, 400 300C550 250, 700 400, 850 350C1000 300, 1150 450, 1400 400"
            stroke="url(#waveGradient3)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              values="M0 300C100 250, 250 350, 400 300C550 250, 700 400, 850 350C1000 300, 1150 450, 1400 400;
                      M0 350C100 300, 250 400, 400 350C550 300, 700 450, 850 400C1000 350, 1150 500, 1400 450;
                      M0 300C100 250, 250 350, 400 300C550 250, 700 400, 850 350C1000 300, 1150 450, 1400 400"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold text-white tracking-tight">
          MOMENTUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Features</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Pricing</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Community</span>
          <Button
            variant="outline"
            className="border-slate-500 text-slate-300 hover:bg-slate-800 hover:text-white font-medium"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-400 text-xl md:text-2xl mb-8 font-medium tracking-wide">
            Clarity and focus for your goals
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 tracking-tight">
              Stay on track,<br />
              <span className="text-slate-300">hit your targets</span>
            </h2>
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Momentum brings clarity and focus to your goals with elegant dashboards, 
            project tracking, and data-driven insights that keep you moving forward.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 font-medium"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-orange-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Goal Tracking</h3>
            <p className="text-slate-400 font-medium">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Data Analytics</h3>
            <p className="text-slate-400 font-medium">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Project Management</h3>
            <p className="text-slate-400 font-medium">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Smart Reminders</h3>
            <p className="text-slate-400 font-medium">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to build momentum?
          </h3>
          <p className="text-slate-400 text-lg mb-8 font-medium">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
