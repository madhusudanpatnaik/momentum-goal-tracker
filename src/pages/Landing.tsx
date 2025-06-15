
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, Zap, Linkedin, Twitter } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleBookDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Decorative Line Patterns */}
      <div className="absolute inset-0">
        {/* Vertical lines on the right */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 opacity-50">
          <div className="flex gap-2.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-[78px] h-[1px] bg-white transform rotate-90"></div>
            ))}
          </div>
        </div>
        
        {/* Horizontal lines at the bottom */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-50">
          <div className="flex gap-2.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-[78px] h-[1px] bg-white"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-white font-geist font-medium text-lg tracking-wide">
          MetricHub
        </div>
        
        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-6 bg-black/10 backdrop-blur-[20px] rounded-2xl px-6 py-3 border border-white/5">
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors font-geist font-light text-[17px] leading-[130%]">Product</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors font-geist font-light text-[17px] leading-[130%]">Templates</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors font-geist font-light text-[17px] leading-[130%]">Use Cases</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors font-geist font-light text-[17px] leading-[130%]">Pricing</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors font-geist font-light text-[17px] leading-[130%]">Docs</span>
        </div>

        {/* CTA Button */}
        <div className="relative">
          <Button
            onClick={handleBookDemo}
            className="relative bg-black/20 backdrop-blur-[20px] border border-blue-500/15 text-white px-6 py-3 rounded-2xl font-geist font-medium text-[17px] hover:bg-black/30 transition-all duration-300 shadow-[-15px_15px_54px_-20px_rgba(49,139,215,0.4)]"
          >
            <span className="relative z-10">Get Started</span>
            {/* Glowing orbs */}
            <div className="absolute w-16 h-14 bg-[#5EB5FF]/40 opacity-80 blur-[27px] rounded-full right-2 top-1/2 transform -translate-y-1/2 translate-y-5"></div>
            <div className="absolute w-[74px] h-14 bg-[#5EB5FF]/40 opacity-50 blur-[27px] rounded-full left-1 top-1/2 transform -translate-y-1/2 translate-y-2 scale-y-[-1]"></div>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 pt-32 pb-20 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Hero Title */}
          <div className="relative mb-8">
            <h1 className="font-archivo font-light text-6xl leading-[100%] tracking-[-0.03em] text-[#DDDDDD] mb-8">
              Build better<br />
              products faster
            </h1>
          </div>

          {/* Description */}
          <p className="font-geist font-light text-[17px] leading-[130%] text-[#DDDDDD] max-w-md mx-auto mb-16">
            The all-in-one platform for product teams to track metrics, analyze data, and make informed decisions.
          </p>

          {/* Main CTA */}
          <div className="relative inline-block">
            <Button
              onClick={handleGetStarted}
              className="relative bg-black/20 backdrop-blur-[10px] border border-blue-500/15 text-white px-8 py-4 rounded-2xl font-geist font-medium text-[17px] hover:bg-black/30 transition-all duration-300 shadow-[-15px_15px_54px_-20px_#318BD7]"
            >
              <span className="relative z-10">Start Building Today</span>
              {/* Glowing orbs */}
              <div className="absolute w-16 h-14 bg-[#5EB5FF] opacity-80 blur-[27px] rounded-full right-4 top-1/2 transform -translate-y-1/2 translate-y-5"></div>
              <div className="absolute w-[74px] h-14 bg-[#5EB5FF] opacity-50 blur-[27px] rounded-full left-1 top-1/2 transform -translate-y-1/2 translate-y-2 scale-y-[-1]"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section with Dark Aesthetic */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-geist font-medium text-xl mb-3">Goal Tracking</h3>
            <p className="text-white/60 font-geist font-light">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-geist font-medium text-xl mb-3">Data Analytics</h3>
            <p className="text-white/60 font-geist font-light">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-geist font-medium text-xl mb-3">Project Management</h3>
            <p className="text-white/60 font-geist font-light">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white font-geist font-medium text-xl mb-3">Smart Reminders</h3>
            <p className="text-white/60 font-geist font-light">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* Connect with Developer Section */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-archivo font-light text-3xl md:text-4xl text-white mb-8">
            Connect with the Developer
          </h3>
          <p className="text-white/60 font-geist font-light text-lg mb-8">
            Built with passion by Madhusudan Patnaik. Connect with me for collaboration, feedback, or just to say hello!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/madhusudanpatnaik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl px-8 py-4 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span className="text-white font-geist font-medium">LinkedIn</span>
            </a>
            <a
              href="https://x.com/madhusudan91263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/20 backdrop-blur-[20px] border border-white/10 rounded-2xl px-8 py-4 hover:bg-black/30 transition-all duration-300 hover:border-blue-500/20"
            >
              <Twitter className="w-6 h-6 text-blue-400" />
              <span className="text-white font-geist font-medium">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-black/30 backdrop-blur-[20px] border border-blue-500/20 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-archivo font-light text-4xl md:text-5xl text-white mb-4">
            Ready to build momentum?
          </h3>
          <p className="text-white/60 font-geist font-light text-xl mb-8">
            Join thousands of product teams building better experiences.
          </p>
          <div className="relative inline-block">
            <Button
              onClick={handleGetStarted}
              className="relative bg-white/10 backdrop-blur-[10px] border border-white/20 text-white px-10 py-5 text-xl rounded-2xl hover:bg-white/20 transition-all duration-300 font-geist font-medium"
            >
              <span className="relative z-10">Start Your Journey</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
