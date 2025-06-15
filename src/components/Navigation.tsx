
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Target, BarChart, Rocket, Home, Calendar } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-royal-green-200 dark:border-slate-700 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-black text-royal-green-900 dark:text-royal-green-500 tracking-tight">
              MOMENTUM
            </Link>
            
            <div className="flex items-center gap-1">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/dashboard') 
                      ? 'bg-royal-green-100 dark:bg-royal-green-900/50 text-royal-green-900 dark:text-royal-green-400 border border-royal-green-200' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-royal-green-700 dark:hover:text-royal-green-400 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30'
                  } font-semibold transition-all duration-200`}
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
                      ? 'bg-royal-green-100 dark:bg-royal-green-900/50 text-royal-green-900 dark:text-royal-green-400 border border-royal-green-200' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-royal-green-700 dark:hover:text-royal-green-400 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30'
                  } font-semibold transition-all duration-200`}
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
                      ? 'bg-royal-green-100 dark:bg-royal-green-900/50 text-royal-green-900 dark:text-royal-green-400 border border-royal-green-200' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-royal-green-700 dark:hover:text-royal-green-400 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30'
                  } font-semibold transition-all duration-200`}
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
                      ? 'bg-royal-green-100 dark:bg-royal-green-900/50 text-royal-green-900 dark:text-royal-green-400 border border-royal-green-200' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-royal-green-700 dark:hover:text-royal-green-400 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30'
                  } font-semibold transition-all duration-200`}
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
                      ? 'bg-royal-green-100 dark:bg-royal-green-900/50 text-royal-green-900 dark:text-royal-green-400 border border-royal-green-200' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-royal-green-700 dark:hover:text-royal-green-400 hover:bg-royal-green-50 dark:hover:bg-royal-green-900/30'
                  } font-semibold transition-all duration-200`}
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
