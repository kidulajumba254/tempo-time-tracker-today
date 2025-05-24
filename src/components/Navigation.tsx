
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Info, Settings, CheckSquare, FolderKanban } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Tasks', icon: CheckSquare },
    { path: '/projects', label: 'Projects', icon: FolderKanban },
    { path: '/about', label: 'About', icon: Info },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
      <div className="flex items-center justify-center space-x-8">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
              location.pathname === path
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
