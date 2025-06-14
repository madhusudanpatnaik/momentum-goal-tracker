
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Web-like background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flowing lines */}
          <path
            d="M50 200C150 150, 250 250, 350 200C450 150, 550 300, 650 250C750 200, 850 350, 950 300C1050 250, 1150 400, 1250 350"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M100 400C200 350, 300 450, 400 400C500 350, 600 500, 700 450C800 400, 900 550, 1000 500C1100 450, 1200 600, 1300 550"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M0 300C100 250, 200 350, 300 300C400 250, 500 400, 600 350C700 300, 800 450, 900 400C1000 350, 1100 500, 1200 450"
            stroke="url(#gradient3)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          
          {/* Connected nodes */}
          <circle cx="150" cy="180" r="8" fill="url(#nodeGradient)" opacity="0.7" />
          <circle cx="350" cy="200" r="6" fill="url(#nodeGradient)" opacity="0.6" />
          <circle cx="650" cy="250" r="10" fill="url(#nodeGradient)" opacity="0.8" />
          <circle cx="950" cy="300" r="7" fill="url(#nodeGradient)" opacity="0.7" />
          
          <circle cx="200" cy="380" r="6" fill="url(#nodeGradient2)" opacity="0.6" />
          <circle cx="400" cy="400" r="8" fill="url(#nodeGradient2)" opacity="0.7" />
          <circle cx="700" cy="450" r="9" fill="url(#nodeGradient2)" opacity="0.8" />
          <circle cx="1000" cy="500" r="7" fill="url(#nodeGradient2)" opacity="0.6" />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15654849" />
              <stop offset="50%" stopColor="#10b98149" />
              <stop offset="100%" stopColor="#15654849" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b98139" />
              <stop offset="50%" stopColor="#15654839" />
              <stop offset="100%" stopColor="#10b98139" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15654829" />
              <stop offset="50%" stopColor="#10b98129" />
              <stop offset="100%" stopColor="#15654829" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#156548" />
              <stop offset="100%" stopColor="#10b981" />
            </radialGradient>
            <radialGradient id="nodeGradient2">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#156548" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold text-slate-900 tracking-tight">
          MOMENTUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors font-medium">Features</span>
          <span className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors font-medium">Pricing</span>
          <span className="text-slate-600 hover:text-slate-900 cursor-pointer transition-colors font-medium">Community</span>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-medium"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-600 text-xl md:text-2xl mb-8 font-medium tracking-wide">
            Clarity and focus for your goals
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-none mb-6 tracking-tight">
              Stay on track,<br />
              <span className="text-slate-600">hit your targets</span>
            </h2>
          </div>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Momentum brings clarity and focus to your goals with elegant dashboards, 
            project tracking, and data-driven insights that keep you moving forward.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 font-medium"
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
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3 tracking-tight">Goal Tracking</h3>
            <p className="text-slate-600 font-medium">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3 tracking-tight">Data Analytics</h3>
            <p className="text-slate-600 font-medium">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3 tracking-tight">Project Management</h3>
            <p className="text-slate-600 font-medium">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-slate-700" />
            </div>
            <h3 className="text-slate-900 text-lg font-semibold mb-3 tracking-tight">Smart Reminders</h3>
            <p className="text-slate-600 font-medium">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-slate-900 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to build momentum?
          </h3>
          <p className="text-slate-300 text-lg mb-8 font-medium">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
