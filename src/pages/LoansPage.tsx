import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote, CreditCard, Calculator, Clock, CheckCircle, AlertCircle, TrendingUp, Shield, Users, Award, ChevronRight, Eye, EyeOff, FileText, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const LoansPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLoanBalance, setShowLoanBalance] = useState(true);

  const loanProducts = [
    {
      id: 1,
      name: 'Personal Loan',
      description: 'Quick cash for personal needs',
      minAmount: 500,
      maxAmount: 50000,
      interestRate: 15.5,
      tenure: '3-36 months',
      features: ['Quick approval', 'Flexible repayment', 'No collateral'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      icon: Banknote
    },
    {
      id: 2,
      name: 'Business Loan',
      description: 'Grow your business with affordable credit',
      minAmount: 5000,
      maxAmount: 200000,
      interestRate: 12.5,
      tenure: '6-60 months',
      features: ['Low interest rates', 'Extended tenure', 'Business support'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      icon: TrendingUp
    },
    {
      id: 3,
      name: 'Emergency Loan',
      description: 'Instant loans for urgent needs',
      minAmount: 100,
      maxAmount: 5000,
      interestRate: 18.0,
      tenure: '1-12 months',
      features: ['Instant approval', '24/7 available', 'Minimal documentation'],
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      icon: AlertCircle
    },
    {
      id: 4,
      name: 'Salary Advance',
      description: 'Get your salary in advance',
      minAmount: 200,
      maxAmount: 10000,
      interestRate: 8.5,
      tenure: '1-6 months',
      features: ['Low interest', 'Salary-based', 'Quick processing'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      icon: CreditCard
    }
  ];

  const currentLoans = [
    {
      id: 1,
      type: 'Personal Loan',
      amount: 15000,
      outstandingBalance: 8500,
      monthlyPayment: 750,
      nextPaymentDate: '2025-08-15',
      progress: 43,
      status: 'active'
    },
    {
      id: 2,
      type: 'Emergency Loan',
      amount: 3000,
      outstandingBalance: 1200,
      monthlyPayment: 300,
      nextPaymentDate: '2025-08-10',
      progress: 60,
      status: 'active'
    }
  ];

  const loanHistory = [
    {
      id: 1,
      type: 'Personal Loan',
      amount: 20000,
      status: 'completed',
      completedDate: '2024-12-15',
      duration: '24 months'
    },
    {
      id: 2,
      type: 'Business Loan',
      amount: 50000,
      status: 'completed',
      completedDate: '2024-08-20',
      duration: '36 months'
    }
  ];

  const creditScore = {
    score: 750,
    rating: 'Excellent',
    factors: [
      { name: 'Payment History', score: 95, status: 'excellent' },
      { name: 'Credit Utilization', score: 78, status: 'good' },
      { name: 'Length of History', score: 85, status: 'good' },
      { name: 'Types of Credit', score: 72, status: 'fair' }
    ]
  };

  const totalOutstanding = currentLoans.reduce((sum, loan) => sum + loan.outstandingBalance, 0);
  const totalMonthlyPayment = currentLoans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Loans</h1>
            <p className="text-gray-600 text-sm">Manage your loans and apply for new credit</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors">
            Apply for Loan
          </button>
        </div>

        {/* Loan Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-purple-100 text-sm">Total Outstanding</p>
            <button 
              onClick={() => setShowLoanBalance(!showLoanBalance)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {showLoanBalance ? 
                <Eye className="w-4 h-4 text-white" /> : 
                <EyeOff className="w-4 h-4 text-white" />
              }
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {showLoanBalance ? `GHS ${totalOutstanding.toLocaleString()}` : '••••••••'}
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-purple-100 text-sm">Monthly Payment</p>
              <p className="text-white font-semibold">
                {showLoanBalance ? `GHS ${totalMonthlyPayment}` : '••••••'}
              </p>
            </div>
            <div>
              <p className="text-purple-100 text-sm">Active Loans</p>
              <p className="text-white font-semibold">{currentLoans.length}</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Current Loans */}
        {currentLoans.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Loans</h3>
            <div className="space-y-4">
              {currentLoans.map((loan, index) => (
                <motion.div
                  key={loan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-gray-900 font-semibold">{loan.type}</h4>
                      <p className="text-gray-600 text-sm">Loan Amount: GHS {loan.amount.toLocaleString()}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Outstanding Balance</p>
                      <p className="text-gray-900 font-semibold">GHS {loan.outstandingBalance.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Monthly Payment</p>
                      <p className="text-gray-900 font-semibold">GHS {loan.monthlyPayment}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-600 text-sm">Progress</p>
                      <p className="text-gray-900 text-sm font-medium">{loan.progress}% paid</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${loan.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 text-sm">Next Payment</p>
                      <p className="text-gray-900 font-medium">{loan.nextPaymentDate}</p>
                    </div>
                    <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
                      Make Payment
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Credit Score */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Credit Score</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-2">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#8b5cf6"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${(creditScore.score / 850) * 251.2} 251.2`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{creditScore.score}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 font-semibold">{creditScore.rating}</p>
                <p className="text-gray-600 text-sm">Credit Score</p>
              </div>
              
              <div className="flex-1 ml-8">
                {creditScore.factors.map((factor, index) => (
                  <div key={factor.name} className="flex justify-between items-center mb-3">
                    <p className="text-gray-700 text-sm">{factor.name}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            factor.status === 'excellent' ? 'bg-green-500' :
                            factor.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${factor.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 w-8">{factor.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Available Loan Products */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Loan Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => navigate(`/apply-loan?type=${product.id}`)}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${product.bgColor} rounded-full p-3`}>
                    <product.icon className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/apply-loan?type=${product.id}`);
                    }}
                    className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
                
                <h4 className="text-gray-900 font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600 text-xs">Amount Range</p>
                    <p className="text-gray-900 font-medium text-sm">
                      GHS {product.minAmount.toLocaleString()} - {product.maxAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Interest Rate</p>
                    <p className="text-gray-900 font-medium text-sm">{product.interestRate}% p.a.</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-xs mb-2">Tenure</p>
                  <p className="text-gray-900 font-medium text-sm">{product.tenure}</p>
                </div>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <p className="text-gray-700 text-xs">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Loan History */}
        {loanHistory.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Loan History</h3>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {loanHistory.map((loan, index) => (
                <motion.div
                  key={loan.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center justify-between p-4 ${
                    index !== loanHistory.length - 1 ? 'border-b border-gray-100' : ''
                  } hover:bg-gray-50 transition-colors cursor-pointer`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-50 rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">{loan.type}</p>
                      <p className="text-gray-600 text-xs">
                        Completed on {loan.completedDate} • {loan.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-semibold text-sm">
                      GHS {loan.amount.toLocaleString()}
                    </p>
                    <p className="text-green-600 text-xs font-medium">Completed</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Loan Calculator */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Loan Calculator</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Calculate Your Loan</h4>
                <p className="text-gray-600 text-sm">
                  Use our calculator to estimate your monthly payments
                </p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors">
              Open Calculator
            </button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default LoansPage;
