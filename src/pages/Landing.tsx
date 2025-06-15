
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, Zap, Linkedin, Twitter, Users, CheckCircle } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleBookDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Flowing gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/90 to-indigo-950/80"></div>
        
        {/* Animated flowing curves */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full animate-pulse"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 400C240 300, 480 500, 720 400C960 300, 1200 500, 1440 400V800H0V400Z"
              fill="url(#blueGradient1)"
              opacity="0.1"
              className="animate-fade-in"
            />
            <path
              d="M0 500C240 400, 480 600, 720 500C960 400, 1200 600, 1440 500V800H0V500Z"
              fill="url(#blueGradient2)"
              opacity="0.05"
              className="animate-fade-in"
            />
            
            <defs>
              <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-white animate-fade-in">
          MOMENTUM
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 bg-slate-950/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-blue-800/30 shadow-xl shadow-blue-900/20 animate-scale-in">
          <span className="text-blue-200 hover:text-white cursor-pointer transition-all duration-300 text-sm hover:scale-105">Features</span>
          <span className="text-blue-200 hover:text-white cursor-pointer transition-all duration-300 text-sm hover:scale-105">How It Works</span>
          <span className="text-blue-200 hover:text-white cursor-pointer transition-all duration-300 text-sm hover:scale-105">Pricing</span>
          <span className="text-blue-200 hover:text-white cursor-pointer transition-all duration-300 text-sm hover:scale-105">Community</span>
          <span className="text-blue-200 hover:text-white cursor-pointer transition-all duration-300 text-sm hover:scale-105">Contact</span>
        </div>

        <Button
          onClick={handleBookDemo}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 border border-blue-500/50"
        >
          Start your free trial →
        </Button>
      </nav>

      {/* Social proof */}
      <div className="relative z-10 text-center mt-16 mb-8">
        <div className="inline-flex items-center gap-3 bg-slate-950/80 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-800/30 shadow-xl shadow-blue-900/20 animate-slide-in-right">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white animate-pulse"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
            <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <span className="text-blue-200 text-sm">Trusted by 10,000+ others</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8 tracking-tight animate-fade-in">
            Know Your Goals Before<br />
            <span className="font-normal bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent animate-scale-in">They Know You</span>
          </h1>
          
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-200">
            Generate real, data-backed progress tracking with AI and market<br />
            with precision from day one.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-white text-slate-950 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-scale-in delay-300"
          >
            Start your free trial →
          </Button>

          <div className="flex justify-center gap-12 mt-8 text-sm text-blue-300 animate-fade-in delay-500">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <CheckCircle className="w-4 h-4" />
              <span>14 days free trial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="flex justify-center items-center gap-12 opacity-50 animate-fade-in delay-700">
          <div className="text-blue-300/60 font-medium text-lg hover:text-blue-200 transition-colors duration-300 hover:scale-105">perplexity</div>
          <div className="text-blue-300/60 font-medium text-lg hover:text-blue-200 transition-colors duration-300 hover:scale-105">deepseek</div>
          <div className="text-blue-300/60 font-medium text-lg hover:text-blue-200 transition-colors duration-300 hover:scale-105">OpenAI</div>
          <div className="text-blue-300/60 font-medium text-lg hover:text-blue-200 transition-colors duration-300 hover:scale-105">Google</div>
          <div className="text-blue-300/60 font-medium text-lg hover:text-blue-200 transition-colors duration-300 hover:scale-105">Grok</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Built for action, built for success. For founders, entrepreneurs, and anyone ready to turn their biggest dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group animate-scale-in">
            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
              <Target className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Goal Tracking</h3>
            <p className="text-blue-200">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group animate-scale-in delay-100">
            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
              <BarChart3 className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Data Analytics</h3>
            <p className="text-blue-200">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group animate-scale-in delay-200">
            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
              <TrendingUp className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Project Management</h3>
            <p className="text-blue-200">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 group animate-scale-in delay-300">
            <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
              <Zap className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Smart Reminders</h3>
            <p className="text-blue-200">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* Connect with Developer Section */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-8">
            Connect with the Developer
          </h3>
          <p className="text-blue-200 text-lg mb-8">
            Built with passion by Madhusudan Patnaik. Connect with me for collaboration, feedback, or just to say hello!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/madhusudanpatnaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl px-8 py-4 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 group"
            >
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            <a
              href="https://x.com/madhusudan91263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-xl border border-blue-800/30 rounded-2xl px-8 py-4 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 group"
            >
              <Twitter className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-slate-950/80 to-blue-950/80 backdrop-blur-xl border border-blue-800/30 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl shadow-blue-900/30 hover:shadow-blue-500/20 transition-all duration-500 animate-scale-in">
          <h3 className="text-4xl md:text-5xl font-light text-white mb-4">
            Ready to build momentum?
          </h3>
          <p className="text-blue-200 text-xl mb-8">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-slate-950 hover:bg-blue-50 px-10 py-5 text-xl rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
