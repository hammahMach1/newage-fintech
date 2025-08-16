import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Eye, EyeOff, Send, Wallet, CreditCard, Plus, Headphones, Users, ChevronRight, ArrowUpRight, ArrowDownLeft, Star, Shield, Zap, Loader2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: Send,
      label: 'Send money',
      description: 'Transfer funds instantly to any account',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      isNew: false,
      onClick: () => navigate('/send-money')
    },
    {
      icon: Wallet,
      label: 'Deposit into account',
      description: 'Add funds via mobile money or card',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      isNew: false,
      onClick: () => navigate('/transact?action=deposit')
    },
    {
      icon: CreditCard,
      label: 'Make payment',
      description: 'Pay bills and merchants seamlessly',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      isNew: true,
      onClick: () => navigate('/pay-bills')
    },
    {
      icon: Plus,
      label: 'Add account',
      description: 'Link new bank or mobile money account',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      isNew: false,
      onClick: () => navigate('/accounts?action=add')
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'received',
      amount: '+GHS 2,500.00',
      description: 'Salary deposit',
      time: '2 hours ago',
      icon: ArrowDownLeft,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      type: 'sent',
      amount: '-GHS 150.00',
      description: 'Grocery shopping',
      time: '5 hours ago',
      icon: ArrowUpRight,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 3,
      type: 'received',
      amount: '+GHS 75.00',
      description: 'Cashback reward',
      time: '1 day ago',
      icon: Star,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const highlights = [
    {
      icon: Headphones,
      title: 'Contact us',
      bgColor: 'bg-gray-50'
    },
    {
      icon: Users,
      title: 'Refer and earn',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Enhanced Header with Deeper Gradient */}
      <header className="relative px-6 pt-12 pb-8 bg-gradient-to-br from-red-700 via-pink-600 to-purple-700 rounded-b-3xl">
        {/* Top Row with User Info and Notifications */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">JD</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="text-white/80 text-sm">Good morning,</p>
              <p className="text-white font-semibold text-lg">Mr. Hammah</p>
            </div>
          </div>
          <div className="relative">
            <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">3</span>
            </div>
          </div>
        </div>

        {/* Enhanced Balance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-white/80 text-sm font-medium">Total Balance</p>
            <button 
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {balanceVisible ? 
                <Eye className="w-4 h-4 text-white" /> : 
                <EyeOff className="w-4 h-4 text-white" />
              }
            </button>
          </div>
          <div className="flex items-baseline space-x-2">
            <h2 className="text-3xl font-bold text-white">
              {balanceVisible ? 'GHS 45,230.50' : '••••••••'}
            </h2>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span className="text-green-300 text-sm font-medium">+12.5%</span>
            </div>
          </div>
          <p className="text-white/60 text-sm mt-2">Available balance</p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={action.onClick}
                className={`${action.bgColor} rounded-2xl p-4 text-left hover:shadow-lg transition-all duration-200 relative`}
              >
                {action.isNew && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <div className={`${action.iconColor} mb-3`}>
                  <action.icon className="w-8 h-8" />
                </div>
                <p className="text-gray-800 font-semibold text-sm mb-1">{action.label}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{action.description}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Recent Transactions */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Transactions</h3>
            <button 
              onClick={() => navigate('/transactions')}
              className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${transaction.bgColor} rounded-full p-3`}>
                    <transaction.icon className={`w-5 h-5 ${transaction.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">{transaction.description}</p>
                    <p className="text-gray-500 text-xs">{transaction.time}</p>
                  </div>
                </div>
                <p className={`font-semibold text-sm ${
                  transaction.type === 'received' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">Highlights</h3>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.button
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className={`${highlight.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 flex items-center justify-between`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white rounded-full p-3">
                    <highlight.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{highlight.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>
            ))}
          </div>
        </section>

        {/* AI Insights */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">AI Insights</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 relative overflow-hidden border border-purple-100"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                Coming soon
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-lg">AI-Powered Insights</p>
                <p className="text-gray-600 text-sm mt-1">
                  Smart analytics for your spending patterns and financial goals
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
