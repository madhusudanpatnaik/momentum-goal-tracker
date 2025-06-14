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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100">
      {/* Topological Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Main container - Topology-2 */}
        <div className="absolute w-[647px] h-[658px] left-[960px] top-[151px] border-4 border-white rounded-lg"></div>
        
        {/* Vector 92 */}
        <div className="absolute w-[647px] h-[658px] left-[960px] top-[151px] border-4 border-white rounded-lg"></div>
        
        {/* Vector 93 */}
        <div className="absolute w-[98px] h-[101px] left-[1259px] top-[429px] border-4 border-white rounded-lg"></div>
        
        {/* Nested shapes creating spiral pattern */}
        <div className="absolute w-[597px] h-[606px] left-[987px] top-[176px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[546px] h-[552px] left-[1014px] top-[202px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[496px] h-[500px] left-[1041px] top-[227px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[446px] h-[448px] left-[1068px] top-[252px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[395px] h-[395px] left-[1096px] top-[278px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[345px] h-[343px] left-[1123px] top-[303px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[294px] h-[291px] left-[1150px] top-[328px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[245px] h-[239px] left-[1177px] top-[353px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[194px] h-[186px] left-[1204px] top-[379px] border-4 border-white rounded-lg"></div>
        <div className="absolute w-[145px] h-[139px] left-[1232px] top-[404px] border-4 border-white rounded-lg"></div>
        
        {/* Mirror pattern on the left side for balance */}
        <div className="absolute w-[647px] h-[658px] left-[-400px] top-[300px] border-4 border-white rounded-lg transform rotate-45 opacity-50"></div>
        <div className="absolute w-[546px] h-[552px] left-[-350px] top-[330px] border-4 border-white rounded-lg transform rotate-45 opacity-40"></div>
        <div className="absolute w-[446px] h-[448px] left-[-300px] top-[360px] border-4 border-white rounded-lg transform rotate-45 opacity-30"></div>
        <div className="absolute w-[345px] h-[343px] left-[-250px] top-[390px] border-4 border-white rounded-lg transform rotate-45 opacity-20"></div>
        <div className="absolute w-[245px] h-[239px] left-[-200px] top-[420px] border-4 border-white rounded-lg transform rotate-45 opacity-15"></div>
      </div>

      {/* Sharper, more defined background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* More defined flowing lines */}
          <path
            d="M50 200C150 150, 250 250, 350 200C450 150, 550 300, 650 250C750 200, 850 350, 950 300C1050 250, 1150 400, 1250 350"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M100 400C200 350, 300 450, 400 400C500 350, 600 500, 700 450C800 400, 900 550, 1000 500C1100 450, 1200 600, 1300 550"
            stroke="url(#gradient2)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M0 300C100 250, 200 350, 300 300C400 250, 500 400, 600 350C700 300, 800 450, 900 400C1000 350, 1100 500, 1200 450"
            stroke="url(#gradient3)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          
          {/* Sharper, more defined nodes */}
          <circle cx="150" cy="180" r="10" fill="url(#nodeGradient)" opacity="0.9" stroke="rgba(21, 101, 72, 0.3)" strokeWidth="1" />
          <circle cx="350" cy="200" r="8" fill="url(#nodeGradient)" opacity="0.8" stroke="rgba(21, 101, 72, 0.3)" strokeWidth="1" />
          <circle cx="650" cy="250" r="12" fill="url(#nodeGradient)" opacity="1" stroke="rgba(21, 101, 72, 0.3)" strokeWidth="1" />
          <circle cx="950" cy="300" r="9" fill="url(#nodeGradient)" opacity="0.9" stroke="rgba(21, 101, 72, 0.3)" strokeWidth="1" />
          
          <circle cx="200" cy="380" r="8" fill="url(#nodeGradient2)" opacity="0.8" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          <circle cx="400" cy="400" r="10" fill="url(#nodeGradient2)" opacity="0.9" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          <circle cx="700" cy="450" r="11" fill="url(#nodeGradient2)" opacity="1" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          <circle cx="1000" cy="500" r="9" fill="url(#nodeGradient2)" opacity="0.8" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />

          {/* Enhanced gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#156548" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#156548" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#156548" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#156548" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#156548" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#156548" />
            </radialGradient>
            <radialGradient id="nodeGradient2">
              <stop offset="0%" stopColor="#156548" />
              <stop offset="100%" stopColor="#10b981" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle grid pattern for sharpness */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation with enhanced contrast */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="text-3xl font-black text-gray-900 tracking-tight">
          MOMENTUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors font-semibold">Features</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors font-semibold">Pricing</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors font-semibold">Community</span>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold border-2"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section with enhanced typography */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-700 text-xl md:text-2xl mb-8 font-bold tracking-wide uppercase">
            Clarity and focus for your goals
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none mb-6 tracking-tighter">
              Stay on track,<br />
              <span className="text-gray-600">hit your targets</span>
            </h2>
          </div>

          <p className="text-gray-700 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-semibold">
            Built for action, built for success. For founders, entrepreneurs, and anyone ready to turn their biggest dreams into reality.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 font-bold"
          >
            Get Started
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Features Section with enhanced cards */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border-2 border-gray-200">
              <Target className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-3 tracking-tight">Goal Tracking</h3>
            <p className="text-gray-700 font-semibold">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border-2 border-gray-200">
              <BarChart3 className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-3 tracking-tight">Data Analytics</h3>
            <p className="text-gray-700 font-semibold">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border-2 border-gray-200">
              <TrendingUp className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-3 tracking-tight">Project Management</h3>
            <p className="text-gray-700 font-semibold">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 border-2 border-gray-200">
              <Zap className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-3 tracking-tight">Smart Reminders</h3>
            <p className="text-gray-700 font-semibold">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA Section with enhanced contrast */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-gray-900 rounded-3xl p-12 text-center max-w-4xl mx-auto shadow-2xl border-2 border-gray-800">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Ready to build momentum?
          </h3>
          <p className="text-gray-300 text-xl mb-8 font-semibold">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-bold border-2 border-gray-200"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
