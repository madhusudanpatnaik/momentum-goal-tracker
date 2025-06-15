
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-royal-green-900 via-slate-900 to-royal-green-800">
      {/* Flowing gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-green-900/40 via-slate-900 to-royal-green-800/40"></div>
        
        {/* Flowing curves */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 400C240 300, 480 500, 720 400C960 300, 1200 500, 1440 400V800H0V400Z"
              fill="url(#greenGradient1)"
              opacity="0.1"
            />
            <path
              d="M0 500C240 400, 480 600, 720 500C960 400, 1200 600, 1440 500V800H0V500Z"
              fill="url(#greenGradient2)"
              opacity="0.05"
            />
            
            <defs>
              <linearGradient id="greenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
              <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="50%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#052e16" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-white">
          MOMENTUM
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 bg-royal-green-900/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-royal-green-400/20">
          <span className="text-royal-green-100/80 hover:text-white cursor-pointer transition-colors text-sm">Features</span>
          <span className="text-royal-green-100/80 hover:text-white cursor-pointer transition-colors text-sm">How It Works</span>
          <span className="text-royal-green-100/80 hover:text-white cursor-pointer transition-colors text-sm">Pricing</span>
          <span className="text-royal-green-100/80 hover:text-white cursor-pointer transition-colors text-sm">Community</span>
          <span className="text-royal-green-100/80 hover:text-white cursor-pointer transition-colors text-sm">Contact</span>
        </div>

        <Button
          onClick={handleBookDemo}
          className="bg-royal-green-500 hover:bg-royal-green-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-royal-green-500/25"
        >
          Start your free trial →
        </Button>
      </nav>

      {/* Social proof */}
      <div className="relative z-10 text-center mt-16 mb-8">
        <div className="inline-flex items-center gap-3 bg-royal-green-900/20 backdrop-blur-md px-4 py-2 rounded-full border border-royal-green-400/20">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-royal-green-400 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-royal-green-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-royal-green-600 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-royal-green-100/80 text-sm">Trusted by 10,000+ others</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8 tracking-tight">
            Know Your Goals Before<br />
            <span className="font-normal bg-gradient-to-r from-royal-green-300 to-royal-green-500 bg-clip-text text-transparent">They Know You</span>
          </h1>
          
          <p className="text-royal-green-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Generate real, data-backed progress tracking with AI and market<br />
            with precision from day one.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-white text-royal-green-900 hover:bg-royal-green-50 px-8 py-4 text-lg rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start your free trial →
          </Button>

          <div className="flex justify-center gap-12 mt-8 text-sm text-royal-green-200/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>14 days free trial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="flex justify-center items-center gap-12 opacity-50">
          <div className="text-royal-green-300/60 font-medium text-lg">perplexity</div>
          <div className="text-royal-green-300/60 font-medium text-lg">deepseek</div>
          <div className="text-royal-green-300/60 font-medium text-lg">OpenAI</div>
          <div className="text-royal-green-300/60 font-medium text-lg">Google</div>
          <div className="text-royal-green-300/60 font-medium text-lg">Grok</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-royal-green-100/70 text-xl max-w-2xl mx-auto">
            Built for action, built for success. For founders, entrepreneurs, and anyone ready to turn their biggest dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl p-8 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-royal-green-400" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Goal Tracking</h3>
            <p className="text-royal-green-100/70">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl p-8 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-royal-green-400" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Data Analytics</h3>
            <p className="text-royal-green-100/70">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl p-8 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-royal-green-400" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Project Management</h3>
            <p className="text-royal-green-100/70">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl p-8 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 bg-royal-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-royal-green-400" />
            </div>
            <h3 className="text-white text-xl font-medium mb-3">Smart Reminders</h3>
            <p className="text-royal-green-100/70">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* Connect with Developer Section */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-8">
            Connect with the Developer
          </h3>
          <p className="text-royal-green-100/70 text-lg mb-8">
            Built with passion by Madhusudan Patnaik. Connect with me for collaboration, feedback, or just to say hello!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/madhusudanpatnaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl px-8 py-4 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6 text-royal-green-400" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            <a
              href="https://x.com/madhusudan91263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-royal-green-900/20 backdrop-blur-md border border-royal-green-400/20 rounded-2xl px-8 py-4 hover:bg-royal-green-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Twitter className="w-6 h-6 text-royal-green-400" />
              <span className="text-white font-medium">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-royal-green-600/20 to-royal-green-800/20 backdrop-blur-md border border-royal-green-400/20 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-light text-white mb-4">
            Ready to build momentum?
          </h3>
          <p className="text-royal-green-100/70 text-xl mb-8">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-royal-green-900 hover:bg-royal-green-50 px-10 py-5 text-xl rounded-xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
