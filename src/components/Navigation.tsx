
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Target, BarChart, Rocket, Home } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-slate-100">
              GoalUX
            </Link>
            
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={`${
                    isActive('/dashboard') 
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
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
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
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
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
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
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  SDLC
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
