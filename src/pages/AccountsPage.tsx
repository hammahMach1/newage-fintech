import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Plus, ChevronRight, Eye, EyeOff, CreditCard, Building2, Smartphone, Wallet2, ArrowUpRight, ArrowDownLeft, MoreHorizontal, Lock, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AccountsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showBalances, setShowBalances] = useState(true);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);

  // Handle URL parameters
  useEffect(() => {
    const action = searchParams.get('action');
    if (action === 'add') {
      setShowAddAccountModal(true);
    }
  }, [searchParams]);

  const accounts = [
    {
      id: 1,
      name: 'Main Checking',
      type: 'checking',
      bank: 'GCB Bank',
      accountNumber: '****1234',
      balance: 45230.50,
      currency: 'GHS',
      icon: Building2,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      name: 'Savings Account',
      type: 'savings',
      bank: 'Ecobank Ghana',
      accountNumber: '****5678',
      balance: 12750.00,
      currency: 'GHS',
      icon: Wallet2,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      name: 'MTN Mobile Money',
      type: 'mobile_money',
      bank: 'MTN MoMo',
      accountNumber: '****9012',
      balance: 850.75,
      currency: 'GHS',
      icon: Smartphone,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 4,
      name: 'Business Account',
      type: 'business',
      bank: 'Zenith Bank',
      accountNumber: '****3456',
      balance: 25600.00,
      currency: 'GHS',
      icon: Building2,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      account: 'Main Checking',
      type: 'credit',
      amount: 2500.00,
      description: 'Salary Deposit',
      time: '2 hours ago',
      icon: ArrowDownLeft,
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      account: 'MTN Mobile Money',
      type: 'debit',
      amount: 150.00,
      description: 'Utility Payment',
      time: '5 hours ago',
      icon: ArrowUpRight,
      iconColor: 'text-red-600'
    },
    {
      id: 3,
      account: 'Savings Account',
      type: 'credit',
      amount: 500.00,
      description: 'Transfer from Checking',
      time: '1 day ago',
      icon: ArrowDownLeft,
      iconColor: 'text-green-600'
    }
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Accounts</h1>
            <p className="text-gray-600 text-sm">Manage all your financial accounts</p>
          </div>
          <button className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Total Balance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="text-purple-100 text-sm">Total Balance</p>
            <button 
              onClick={() => setShowBalances(!showBalances)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {showBalances ? 
                <Eye className="w-4 h-4 text-white" /> : 
                <EyeOff className="w-4 h-4 text-white" />
              }
            </button>
          </div>
          <h2 className="text-3xl font-bold">
            {showBalances ? `GHS ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••••'}
          </h2>
          <p className="text-purple-100 text-sm mt-1">Across {accounts.length} accounts</p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Accounts List */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Accounts</h3>
          <div className="space-y-4">
            {accounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${account.bgColor} rounded-full p-3`}>
                      <account.icon className={`w-6 h-6 ${account.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{account.name}</h4>
                      <p className="text-gray-600 text-sm">{account.bank}</p>
                      <p className="text-gray-500 text-xs">{account.accountNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-bold text-lg">
                      {showBalances ? 
                        `${account.currency} ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : 
                        '••••••••'
                      }
                    </p>
                    <button className="mt-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="bg-blue-50 rounded-full p-3 w-fit mb-4">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-gray-900 font-semibold mb-1">Add Account</h4>
              <p className="text-gray-600 text-sm">Link a new bank or mobile money account</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="bg-green-50 rounded-full p-3 w-fit mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-gray-900 font-semibold mb-1">Request Card</h4>
              <p className="text-gray-600 text-sm">Get a debit card for your account</p>
            </motion.button>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
              View all
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`flex items-center justify-between p-4 ${index !== recentActivity.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors cursor-pointer`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-50 rounded-full p-2">
                    <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm">{activity.description}</p>
                    <p className="text-gray-600 text-xs">{activity.account} • {activity.time}</p>
                  </div>
                </div>
                <p className={`font-semibold text-sm ${
                  activity.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.type === 'credit' ? '+' : '-'}GHS {activity.amount.toFixed(2)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-3 shadow-sm">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold">Your accounts are secure</h4>
              <p className="text-gray-600 text-sm mt-1">
                Protected by 256-bit encryption and multi-factor authentication
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AccountsPage;
