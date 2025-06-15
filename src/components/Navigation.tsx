
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Target, BarChart, Rocket, Home, Calendar } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-royal-green-200/50 dark:border-royal-green-700/50 sticky top-0 z-50 shadow-lg shadow-royal-green-100/20 dark:shadow-royal-green-900/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-royal-green-600 to-royal-green-800 dark:from-royal-green-400 dark:to-royal-green-600 bg-clip-text text-transparent tracking-tight hover:from-royal-green-700 hover:to-royal-green-900 dark:hover:from-royal-green-300 dark:hover:to-royal-green-500 transition-all duration-200">
              MOMENTUM
            </Link>
            
            <div className="flex items-center gap-1">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/dashboard') 
                      ? 'bg-gradient-to-r from-royal-green-100 to-royal-green-200 dark:from-royal-green-900/70 dark:to-royal-green-800/70 text-royal-green-900 dark:text-royal-green-200 border border-royal-green-300/50 dark:border-royal-green-600/50 shadow-md shadow-royal-green-200/50 dark:shadow-royal-green-800/50' 
                      : 'text-royal-green-600 dark:text-royal-green-400 hover:text-royal-green-800 dark:hover:text-royal-green-200 hover:bg-gradient-to-r hover:from-royal-green-50 hover:to-royal-green-100 dark:hover:from-royal-green-900/30 dark:hover:to-royal-green-800/30'
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
                      ? 'bg-gradient-to-r from-royal-green-100 to-royal-green-200 dark:from-royal-green-900/70 dark:to-royal-green-800/70 text-royal-green-900 dark:text-royal-green-200 border border-royal-green-300/50 dark:border-royal-green-600/50 shadow-md shadow-royal-green-200/50 dark:shadow-royal-green-800/50' 
                      : 'text-royal-green-600 dark:text-royal-green-400 hover:text-royal-green-800 dark:hover:text-royal-green-200 hover:bg-gradient-to-r hover:from-royal-green-50 hover:to-royal-green-100 dark:hover:from-royal-green-900/30 dark:hover:to-royal-green-800/30'
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
                      ? 'bg-gradient-to-r from-royal-green-100 to-royal-green-200 dark:from-royal-green-900/70 dark:to-royal-green-800/70 text-royal-green-900 dark:text-royal-green-200 border border-royal-green-300/50 dark:border-royal-green-600/50 shadow-md shadow-royal-green-200/50 dark:shadow-royal-green-800/50' 
                      : 'text-royal-green-600 dark:text-royal-green-400 hover:text-royal-green-800 dark:hover:text-royal-green-200 hover:bg-gradient-to-r hover:from-royal-green-50 hover:to-royal-green-100 dark:hover:from-royal-green-900/30 dark:hover:to-royal-green-800/30'
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
                      ? 'bg-gradient-to-r from-royal-green-100 to-royal-green-200 dark:from-royal-green-900/70 dark:to-royal-green-800/70 text-royal-green-900 dark:text-royal-green-200 border border-royal-green-300/50 dark:border-royal-green-600/50 shadow-md shadow-royal-green-200/50 dark:shadow-royal-green-800/50' 
                      : 'text-royal-green-600 dark:text-royal-green-400 hover:text-royal-green-800 dark:hover:text-royal-green-200 hover:bg-gradient-to-r hover:from-royal-green-50 hover:to-royal-green-100 dark:hover:from-royal-green-900/30 dark:hover:to-royal-green-800/30'
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
                      ? 'bg-gradient-to-r from-royal-green-100 to-royal-green-200 dark:from-royal-green-900/70 dark:to-royal-green-800/70 text-royal-green-900 dark:text-royal-green-200 border border-royal-green-300/50 dark:border-royal-green-600/50 shadow-md shadow-royal-green-200/50 dark:shadow-royal-green-800/50' 
                      : 'text-royal-green-600 dark:text-royal-green-400 hover:text-royal-green-800 dark:hover:text-royal-green-200 hover:bg-gradient-to-r hover:from-royal-green-50 hover:to-royal-green-100 dark:hover:from-royal-green-900/30 dark:hover:to-royal-green-800/30'
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
