
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Target, BarChart, Rocket, Home, Calendar } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-950/80 backdrop-blur-xl border-b border-blue-800/30 sticky top-0 z-50 shadow-2xl shadow-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight hover:from-blue-300 hover:to-cyan-300 transition-all duration-200">
              MOMENTUM
            </Link>
            
            <div className="flex items-center gap-1">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/dashboard') 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-blue-300 hover:bg-blue-900/30'
                  } font-semibold transition-all duration-200 rounded-xl`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              
              <Link to="/goals">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/goals') 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-blue-300 hover:bg-blue-900/30'
                  } font-semibold transition-all duration-200 rounded-xl`}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Goals
                </Button>
              </Link>
              
              <Link to="/analytics">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/analytics') 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-blue-300 hover:bg-blue-900/30'
                  } font-semibold transition-all duration-200 rounded-xl`}
                >
                  <BarChart className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </Link>
              
              <Link to="/sdlc">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/sdlc') 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-blue-300 hover:bg-blue-900/30'
                  } font-semibold transition-all duration-200 rounded-xl`}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  SDLC
                </Button>
              </Link>
              
              <Link to="/calendar">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/calendar') 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-blue-300 hover:bg-blue-900/30'
                  } font-semibold transition-all duration-200 rounded-xl`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendar
                </Button>
              </Link>
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
