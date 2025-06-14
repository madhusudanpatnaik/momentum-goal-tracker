
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Target, 
  BarChart3, 
  Rocket 
} from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/goals', icon: Target, label: 'Goals' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/sdlc', icon: Rocket, label: 'SDLC' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-slate-100">
              GoalTracker
            </Link>
            
            <div className="flex items-center gap-2">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Button
                  key={path}
                  asChild
                  variant={isActive(path) ? "default" : "ghost"}
                  className={`${
                    isActive(path) 
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  <Link to={path} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
