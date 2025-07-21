import React, { useState } from 'react';
import { Search, Filter, Calendar, ArrowUpRight, ArrowDownLeft, Star, MoreHorizontal, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const TransactionHistoryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const transactions = [
    {
      id: 1,
      type: 'credit',
      amount: 2500.00,
      description: 'Salary Deposit',
      merchant: 'Employer Inc.',
      date: '2025-07-20',
      time: '09:30 AM',
      category: 'salary',
      status: 'completed',
      reference: 'TXN001234567',
      balance: 47730.50
    },
    {
      id: 2,
      type: 'debit',
      amount: 150.00,
      description: 'Grocery Shopping',
      merchant: 'ShopRite Ghana',
      date: '2025-07-19',
      time: '02:15 PM',
      category: 'shopping',
      status: 'completed',
      reference: 'TXN001234566',
      balance: 45230.50
    },
    {
      id: 3,
      type: 'debit',
      amount: 45.00,
      description: 'Mobile Top-up',
      merchant: 'MTN Ghana',
      date: '2025-07-19',
      time: '10:45 AM',
      category: 'utilities',
      status: 'completed',
      reference: 'TXN001234565',
      balance: 45380.50
    },
    {
      id: 4,
      type: 'credit',
      amount: 75.00,
      description: 'Cashback Reward',
      merchant: 'FinTech Rewards',
      date: '2025-07-18',
      time: '06:00 PM',
      category: 'rewards',
      status: 'completed',
      reference: 'TXN001234564',
      balance: 45425.50
    },
    {
      id: 5,
      type: 'debit',
      amount: 500.00,
      description: 'Transfer to Savings',
      merchant: 'Internal Transfer',
      date: '2025-07-18',
      time: '11:20 AM',
      category: 'transfer',
      status: 'completed',
      reference: 'TXN001234563',
      balance: 45350.50
    },
    {
      id: 6,
      type: 'debit',
      amount: 250.00,
      description: 'Electricity Bill',
      merchant: 'ECG Ghana',
      date: '2025-07-17',
      time: '03:30 PM',
      category: 'utilities',
      status: 'completed',
      reference: 'TXN001234562',
      balance: 45850.50
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All' },
    { id: 'credit', label: 'Money In' },
    { id: 'debit', label: 'Money Out' },
    { id: 'pending', label: 'Pending' }
  ];

  const periodOptions = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: '3 Months' },
    { id: 'year', label: 'This Year' }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedFilter === 'all') return true;
    return transaction.type === selectedFilter;
  });

  const getTransactionIcon = (transaction: any) => {
    if (transaction.type === 'credit') {
      return transaction.category === 'rewards' ? Star : ArrowDownLeft;
    }
    return ArrowUpRight;
  };

  const getTransactionColor = (transaction: any) => {
    if (transaction.type === 'credit') {
      return transaction.category === 'rewards' ? 'text-yellow-600' : 'text-green-600';
    }
    return 'text-red-600';
  };

  const getTransactionBgColor = (transaction: any) => {
    if (transaction.type === 'credit') {
      return transaction.category === 'rewards' ? 'bg-yellow-50' : 'bg-green-50';
    }
    return 'bg-red-50';
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
            <p className="text-gray-600 text-sm">View all your transactions</p>
          </div>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <div className="flex space-x-2 bg-gray-100 rounded-xl p-1">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedFilter(option.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedFilter === option.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          {periodOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedPeriod(option.id)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedPeriod === option.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>

      {/* Transactions List */}
      <main className="px-6 py-8">
        <div className="space-y-4">
          {filteredTransactions.map((transaction, index) => {
            const Icon = getTransactionIcon(transaction);
            return (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${getTransactionBgColor(transaction)} rounded-full p-3`}>
                      <Icon className={`w-5 h-5 ${getTransactionColor(transaction)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-gray-900 font-medium">{transaction.description}</h4>
                        <p className={`font-bold ${getTransactionColor(transaction)}`}>
                          {transaction.type === 'credit' ? '+' : '-'}GHS {transaction.amount.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">{transaction.merchant}</p>
                          <p className="text-gray-500 text-xs">{transaction.date} • {transaction.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 text-xs">Balance</p>
                          <p className="text-gray-700 text-sm font-medium">
                            GHS {transaction.balance.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Details */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Ref: {transaction.reference}</span>
                      <span className="capitalize">Status: {transaction.status}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
            Load More Transactions
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default TransactionHistoryPage;
