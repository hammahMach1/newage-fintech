import React, { useState } from 'react';
import { Bell, Eye, EyeOff, Send, Wallet, CreditCard, Plus, Headphones, Users, ChevronRight, Home, Building2, ArrowUpDown, Banknote, Menu, Loader2, User, Settings, TrendingUp, ArrowUpRight, ArrowDownLeft, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
const FintechMobileDashboard: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const quickActions = [{
    icon: Send,
    label: 'Send money',
    description: 'Transfer funds instantly to any account',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    isNew: false
  }, {
    icon: Wallet,
    label: 'Deposit into account',
    description: 'Add funds via mobile money or card',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    isNew: false
  }, {
    icon: CreditCard,
    label: 'Make payment',
    description: 'Pay bills and merchants seamlessly',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    isNew: true
  }, {
    icon: Plus,
    label: 'Add account',
    description: 'Link new bank or mobile money account',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    isNew: false
  }] as any[];
  const recentTransactions = [{
    id: 1,
    type: 'received',
    amount: '+GHS 2,500.00',
    description: 'Salary deposit',
    time: '2 hours ago',
    icon: ArrowDownLeft,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50'
  }, {
    id: 2,
    type: 'sent',
    amount: '-GHS 150.00',
    description: 'Grocery shopping',
    time: '5 hours ago',
    icon: ArrowUpRight,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50'
  }, {
    id: 3,
    type: 'received',
    amount: '+GHS 75.00',
    description: 'Cashback reward',
    time: '1 day ago',
    icon: Star,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }] as any[];
  const highlights = [{
    icon: Headphones,
    title: 'Contact us',
    bgColor: 'bg-gray-50'
  }, {
    icon: Users,
    title: 'Refer and earn',
    bgColor: 'bg-gray-50'
  }] as any[];
  const navItems = [{
    icon: Home,
    label: 'Home',
    active: true
  }, {
    icon: Building2,
    label: 'Accounts',
    active: false
  }, {
    icon: ArrowUpDown,
    label: 'Transact',
    active: false
  }, {
    icon: Banknote,
    label: 'Loans',
    active: false
  }, {
    icon: Menu,
    label: 'More',
    active: false
  }] as any[];
  return <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Enhanced Header with Deeper Gradient */}
      <header className="relative px-6 pt-12 pb-8 bg-gradient-to-br from-red-700 via-pink-600 to-purple-700 rounded-b-3xl">
        {/* Top Row with User Info and Notifications */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white/90">Good evening,</h1>
              <h2 className="text-2xl font-bold text-white">Kwesi Asante</h2>
              <p className="text-sm text-white/80 mt-1">Premium Member • Verified</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <motion.button whileTap={{
            scale: 0.95
          }} className="bg-white/20 backdrop-blur-sm rounded-full p-3 relative">
              <Bell className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </motion.button>
            <motion.button whileTap={{
            scale: 0.95
          }} className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Settings className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Balance Card with Additional Details */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total balance</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                {balanceVisible ? 'GHS 12,450.00' : 'GHS *****'}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-600">Account: ****2847</span>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
              <motion.button whileTap={{
              scale: 0.95
            }} onClick={() => setBalanceVisible(!balanceVisible)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                {balanceVisible ? <EyeOff className="w-6 h-6 text-gray-600" /> : <Eye className="w-6 h-6 text-gray-600" />}
              </motion.button>
              {/* Mini Chart Placeholder */}
              <div className="w-16 h-8 bg-gradient-to-r from-green-200 to-green-300 rounded-md flex items-end justify-center space-x-1 p-1">
                <div className="w-1 h-2 bg-green-600 rounded-full"></div>
                <div className="w-1 h-4 bg-green-600 rounded-full"></div>
                <div className="w-1 h-3 bg-green-600 rounded-full"></div>
                <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                <div className="w-1 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Account Details Row */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="text-sm">
              <span className="text-gray-600">Available: </span>
              <span className="font-semibold text-gray-900">
                {balanceVisible ? 'GHS 11,200.00' : 'GHS *****'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Secured</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 space-y-8">
        {/* Enhanced Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">Quick actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => <motion.button key={action.label} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} whileTap={{
            scale: 0.98
          }} className={`${action.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 relative`}>
                {action.isNew && <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    NEW
                  </div>}
                <action.icon className={`w-8 h-8 ${action.iconColor} mb-4`} />
                <p className="text-gray-800 font-medium text-sm leading-tight mb-2">
                  {action.label}
                </p>
                <p className="text-gray-600 text-xs leading-tight">
                  {action.description}
                </p>
              </motion.button>)}
          </div>
        </section>

        {/* Transaction History Preview */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">Recent transactions</h3>
            <motion.button whileTap={{
            scale: 0.95
          }} className="text-sm text-purple-600 font-medium flex items-center">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${transaction.bgColor} rounded-full p-2`}>
                      <transaction.icon className={`w-5 h-5 ${transaction.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  <p className={`font-semibold text-sm ${transaction.type === 'received' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </section>

        {/* Highlights */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">Highlights</h3>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => <motion.button key={highlight.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6 + index * 0.1
          }} whileTap={{
            scale: 0.98
          }} className={`${highlight.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 flex items-center justify-between`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white rounded-full p-3">
                    <highlight.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{highlight.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.button>)}
          </div>
        </section>

        {/* Enhanced Insights */}
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6">Insights</h3>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 relative overflow-hidden border border-purple-100">
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

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-6 py-4 mt-auto">
        <div className="flex justify-between items-center">
          {navItems.map(item => <motion.button key={item.label} whileTap={{
          scale: 0.95
        }} onClick={() => setActiveTab(item.label)} className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${activeTab === item.label ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:text-gray-700'}`}>
              <item.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>)}
        </div>
        {/* Active Tab Indicator */}
        <div className="flex justify-center mt-2">
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
      </nav>
    </div>;
};
export default FintechMobileDashboard;