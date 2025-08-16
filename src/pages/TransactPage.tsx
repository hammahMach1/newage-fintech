import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Send, Download, QrCode, Users, CreditCard, Smartphone, Building2, Plus, Filter, Search, Calendar, ArrowUpRight, ArrowDownLeft, Star, RefreshCw, MapPin, Zap, ShoppingBag, Car, Home, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const TransactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('send');

  // Handle URL parameters to set initial state
  useEffect(() => {
    const action = searchParams.get('action');
    if (action && ['send', 'deposit', 'payment'].includes(action)) {
      setActiveTab(action);
    }
  }, [searchParams]);

  const quickSendContacts = [
    { id: 1, name: 'Mr. Hammah', initials: 'MH', color: 'bg-blue-500' },
    { id: 2, name: 'Sarah Wilson', initials: 'SW', color: 'bg-green-500' },
    { id: 3, name: 'Mike Johnson', initials: 'MJ', color: 'bg-purple-500' },
    { id: 4, name: 'Add Contact', initials: '+', color: 'bg-gray-300' }
  ];

  const sendMethods = [
    {
      icon: Smartphone,
      title: 'Mobile Number',
      description: 'Send to any mobile money account',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      onClick: () => navigate('/send-money')
    },
    {
      icon: Building2,
      title: 'Bank Account',
      description: 'Transfer to any bank account',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      onClick: () => navigate('/send-money')
    },
    {
      icon: QrCode,
      title: 'QR Code',
      description: 'Scan to send instantly',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      onClick: () => navigate('/send-money')
    },
    {
      icon: Users,
      title: 'Contact',
      description: 'Send to saved contacts',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      onClick: () => navigate('/send-money')
    }
  ];

  const paymentCategories = [
    {
      icon: CreditCard,
      title: 'Bills & Utilities',
      description: 'Electricity, water, internet',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Top-up',
      description: 'Airtime and data bundles',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Building2,
      title: 'Government',
      description: 'Taxes, permits, licenses',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Merchants',
      description: 'Shops, restaurants, services',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  const depositMethods = [
    {
      icon: CreditCard,
      title: 'Debit/Credit Card',
      description: 'Instant deposit from your card',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Building2,
      title: 'Bank Transfer',
      description: 'Transfer from your bank account',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Deposit from mobile wallet',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: QrCode,
      title: 'Agent Deposit',
      description: 'Find nearest agent location',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  const tabs = [
    { id: 'send', label: 'Send', icon: Send },
    { id: 'receive', label: 'Receive', icon: Download },
    { id: 'pay', label: 'Pay Bills', icon: CreditCard },
    { id: 'deposit', label: 'Deposit', icon: Plus }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'send':
        return (
          <div className="space-y-8">
            {/* Quick Send */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Send</h3>
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {quickSendContacts.map((contact, index) => (
                  <motion.button
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 text-center"
                  >
                    <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mb-2`}>
                      <span className="text-white font-semibold">{contact.initials}</span>
                    </div>
                    <p className="text-xs text-gray-600">{contact.name}</p>
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Send Methods */}
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Money To</h3>
              <div className="grid grid-cols-2 gap-4">
                {sendMethods.map((method, index) => (
                  <motion.button
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={method.onClick}
                    className={`${method.bgColor} rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-200`}
                  >
                    <div className={`${method.iconColor} mb-3`}>
                      <method.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{method.title}</h4>
                    <p className="text-gray-600 text-xs">{method.description}</p>
                  </motion.button>
                ))}
              </div>
            </section>
          </div>
        );

      case 'receive':
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-100"
            >
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <div className="w-32 h-32 bg-gray-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-gray-600" />
                </div>
                <p className="text-gray-600 text-sm">Your QR Code</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Money</h3>
              <p className="text-gray-600 mb-6">Share your QR code or account details to receive payments</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Share QR Code
                </button>
                <button className="bg-purple-600 text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-purple-700 transition-colors">
                  Share Details
                </button>
              </div>
            </motion.div>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Account Name</p>
                    <p className="text-gray-900 font-semibold">Mr. Hammah</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Account Number</p>
                    <p className="text-gray-900 font-semibold">1234567890</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Mobile Number</p>
                    <p className="text-gray-900 font-semibold">+233 24 123 4567</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'pay':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pay Bills & Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {paymentCategories.map((category, index) => (
                  <motion.button
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${category.bgColor} rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-200`}
                  >
                    <div className={`${category.iconColor} mb-3`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{category.title}</h4>
                    <p className="text-gray-600 text-xs">{category.description}</p>
                  </motion.button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bills</h3>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-50 rounded-full p-2">
                      <CreditCard className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Electricity Bill</p>
                      <p className="text-gray-600 text-xs">ECG - Due in 3 days</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-semibold">GHS 250.00</p>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-50 rounded-full p-2">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Internet Bill</p>
                      <p className="text-gray-600 text-xs">Vodafone - Due in 7 days</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-semibold">GHS 150.00</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'deposit':
        return (
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Money to Your Account</h3>
              <div className="grid grid-cols-2 gap-4">
                {depositMethods.map((method, index) => (
                  <motion.button
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${method.bgColor} rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-200`}
                  >
                    <div className={`${method.iconColor} mb-3`}>
                      <method.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{method.title}</h4>
                    <p className="text-gray-600 text-xs">{method.description}</p>
                  </motion.button>
                ))}
              </div>
            </section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">Quick Deposit</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Set up auto-deposits from your salary account
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Transact</h1>
        <p className="text-gray-600 text-sm">Send, receive, and manage your money</p>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default TransactPage;
