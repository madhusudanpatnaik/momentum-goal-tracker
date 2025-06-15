
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-royal-green-50 via-white to-royal-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Enhanced topological pattern with royal green */}
      <div className="absolute inset-0 opacity-8">
        {/* Main container - Topology with royal green */}
        <div className="absolute w-[647px] h-[658px] left-[960px] top-[151px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl"></div>
        
        {/* Nested shapes creating spiral pattern */}
        <div className="absolute w-[597px] h-[606px] left-[987px] top-[176px] border-2 border-royal-green-300 dark:border-royal-green-600 rounded-2xl"></div>
        <div className="absolute w-[546px] h-[552px] left-[1014px] top-[202px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl"></div>
        <div className="absolute w-[496px] h-[500px] left-[1041px] top-[227px] border-2 border-royal-green-300 dark:border-royal-green-600 rounded-2xl"></div>
        <div className="absolute w-[446px] h-[448px] left-[1068px] top-[252px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl"></div>
        <div className="absolute w-[395px] h-[395px] left-[1096px] top-[278px] border-2 border-royal-green-300 dark:border-royal-green-600 rounded-2xl"></div>
        <div className="absolute w-[345px] h-[343px] left-[1123px] top-[303px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl"></div>
        <div className="absolute w-[294px] h-[291px] left-[1150px] top-[328px] border-2 border-royal-green-300 dark:border-royal-green-600 rounded-2xl"></div>
        
        {/* Mirror pattern on the left side for balance */}
        <div className="absolute w-[647px] h-[658px] left-[-400px] top-[300px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl transform rotate-45 opacity-40"></div>
        <div className="absolute w-[546px] h-[552px] left-[-350px] top-[330px] border-2 border-royal-green-300 dark:border-royal-green-600 rounded-2xl transform rotate-45 opacity-30"></div>
        <div className="absolute w-[446px] h-[448px] left-[-300px] top-[360px] border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl transform rotate-45 opacity-20"></div>
      </div>

      {/* Enhanced background pattern with royal green */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 200C150 150, 250 250, 350 200C450 150, 550 300, 650 250C750 200, 850 350, 950 300C1050 250, 1150 400, 1250 350"
            stroke="url(#royalGradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M100 400C200 350, 300 450, 400 400C500 350, 600 500, 700 450C800 400, 900 550, 1000 500C1100 450, 1200 600, 1300 550"
            stroke="url(#royalGradient2)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />
          
          {/* Royal green nodes */}
          <circle cx="150" cy="180" r="10" fill="url(#royalNodeGradient)" opacity="0.9" stroke="rgba(5, 46, 22, 0.3)" strokeWidth="2" />
          <circle cx="350" cy="200" r="8" fill="url(#royalNodeGradient)" opacity="0.8" stroke="rgba(5, 46, 22, 0.3)" strokeWidth="2" />
          <circle cx="650" cy="250" r="12" fill="url(#royalNodeGradient)" opacity="1" stroke="rgba(5, 46, 22, 0.3)" strokeWidth="2" />
          <circle cx="950" cy="300" r="9" fill="url(#royalNodeGradient)" opacity="0.9" stroke="rgba(5, 46, 22, 0.3)" strokeWidth="2" />

          <defs>
            <linearGradient id="royalGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#052e16" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#052e16" />
            </linearGradient>
            <linearGradient id="royalGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="50%" stopColor="#052e16" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <radialGradient id="royalNodeGradient">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#052e16" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation with enhanced royal green styling */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-royal-green-200/50 dark:border-royal-green-700/50 shadow-sm">
        <div className="text-3xl font-black text-royal-green-900 dark:text-royal-green-400 tracking-tight">
          MOMENTUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-royal-green-700 dark:text-royal-green-300 hover:text-royal-green-900 dark:hover:text-royal-green-400 cursor-pointer transition-colors font-bold">Features</span>
          <span className="text-royal-green-700 dark:text-royal-green-300 hover:text-royal-green-900 dark:hover:text-royal-green-400 cursor-pointer transition-colors font-bold">Pricing</span>
          <span className="text-royal-green-700 dark:text-royal-green-300 hover:text-royal-green-900 dark:hover:text-royal-green-400 cursor-pointer transition-colors font-bold">Community</span>
          <Button
            variant="outline"
            className="border-royal-green-300 dark:border-royal-green-600 text-royal-green-700 dark:text-royal-green-300 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30 font-bold border-2 transition-all duration-200"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="gradient-royal-green hover:opacity-90 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition-all duration-300"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section with enhanced royal green typography */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-royal-green-700 dark:text-royal-green-300 text-xl md:text-2xl mb-8 font-black tracking-wide uppercase">
            Clarity and focus for your goals
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-royal-green-900 dark:text-royal-green-400 leading-none mb-6 tracking-tighter">
              Stay on track,<br />
              <span className="text-royal-green-600 dark:text-royal-green-500">hit your targets</span>
            </h2>
          </div>

          <p className="text-royal-green-700 dark:text-royal-green-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-bold">
            Built for action, built for success. For founders, entrepreneurs, and anyone ready to turn their biggest dreams into reality.
          </p>

          <Button
            onClick={handleGetStarted}
            className="gradient-royal-green hover:opacity-90 text-white px-10 py-5 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 font-black"
          >
            Get Started
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Features Section with enhanced royal green cards */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl p-8 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:border-royal-green-300 dark:hover:border-royal-green-600 hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-100 dark:bg-royal-green-900/50 rounded-xl flex items-center justify-center mb-6 border-2 border-royal-green-200 dark:border-royal-green-600">
              <Target className="w-8 h-8 text-royal-green-700 dark:text-royal-green-400" />
            </div>
            <h3 className="text-royal-green-900 dark:text-royal-green-400 text-xl font-black mb-3 tracking-tight">Goal Tracking</h3>
            <p className="text-royal-green-700 dark:text-royal-green-300 font-bold">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl p-8 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:border-royal-green-300 dark:hover:border-royal-green-600 hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-100 dark:bg-royal-green-900/50 rounded-xl flex items-center justify-center mb-6 border-2 border-royal-green-200 dark:border-royal-green-600">
              <BarChart3 className="w-8 h-8 text-royal-green-700 dark:text-royal-green-400" />
            </div>
            <h3 className="text-royal-green-900 dark:text-royal-green-400 text-xl font-black mb-3 tracking-tight">Data Analytics</h3>
            <p className="text-royal-green-700 dark:text-royal-green-300 font-bold">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl p-8 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:border-royal-green-300 dark:hover:border-royal-green-600 hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-100 dark:bg-royal-green-900/50 rounded-xl flex items-center justify-center mb-6 border-2 border-royal-green-200 dark:border-royal-green-600">
              <TrendingUp className="w-8 h-8 text-royal-green-700 dark:text-royal-green-400" />
            </div>
            <h3 className="text-royal-green-900 dark:text-royal-green-400 text-xl font-black mb-3 tracking-tight">Project Management</h3>
            <p className="text-royal-green-700 dark:text-royal-green-300 font-bold">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 border-2 border-royal-green-200 dark:border-royal-green-700 rounded-2xl p-8 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:border-royal-green-300 dark:hover:border-royal-green-600 hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-100 dark:bg-royal-green-900/50 rounded-xl flex items-center justify-center mb-6 border-2 border-royal-green-200 dark:border-royal-green-600">
              <Zap className="w-8 h-8 text-royal-green-700 dark:text-royal-green-400" />
            </div>
            <h3 className="text-royal-green-900 dark:text-royal-green-400 text-xl font-black mb-3 tracking-tight">Smart Reminders</h3>
            <p className="text-royal-green-700 dark:text-royal-green-300 font-bold">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA Section with enhanced royal green contrast */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="gradient-royal-green rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl border-2 border-royal-green-600">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Ready to build momentum?
          </h3>
          <p className="text-royal-green-100 text-xl mb-8 font-bold">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-royal-green-900 hover:bg-royal-green-50 px-10 py-5 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-black border-2 border-royal-green-200"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
