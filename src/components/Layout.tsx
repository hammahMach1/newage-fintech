import React from 'react';
import { Home, Building2, ArrowUpDown, Banknote, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: 'Home',
      id: 'home',
      path: '/'
    },
    {
      icon: Building2,
      label: 'Accounts',
      id: 'accounts',
      path: '/accounts'
    },
    {
      icon: ArrowUpDown,
      label: 'Transact',
      id: 'transact',
      path: '/transact'
    },
    {
      icon: Banknote,
      label: 'Loans',
      id: 'loans',
      path: '/loans'
    },
    {
      icon: Menu,
      label: 'More',
      id: 'more',
      path: '/more'
    }
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    return activeItem?.id || 'home';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      {children}

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-6 py-4 mt-auto">
        <div className="flex justify-between items-center">
          {navItems.map(item => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => item.path && navigate(item.path)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                  getActiveTab() === item.id 
                    ? 'text-purple-600 bg-purple-50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {IconComponent && <IconComponent className="w-6 h-6" />}
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
        {/* Active Tab Indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
        {/* Powered by Ouzatech */}
        <div className="flex justify-center mt-2">
          <p className="text-xs text-gray-400">Powered by Ouzatech</p>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
