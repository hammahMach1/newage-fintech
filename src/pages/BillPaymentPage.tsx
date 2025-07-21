import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Droplets, Wifi, Smartphone, Car, GraduationCap, Heart, Home, Building2, Search, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BillCategory {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  providers: BillProvider[];
}

interface BillProvider {
  name: string;
  code: string;
  logo: string;
}

const BillPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const billCategories: BillCategory[] = [
    {
      id: 'utilities',
      icon: Zap,
      title: 'Utilities',
      description: 'Electricity, water, gas',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      providers: [
        { name: 'ECG (Electricity Company of Ghana)', code: 'ECG', logo: '⚡' },
        { name: 'Ghana Water Company Limited', code: 'GWCL', logo: '💧' },
        { name: 'National Petroleum Authority', code: 'NPA', logo: '⛽' }
      ]
    },
    {
      id: 'telecom',
      icon: Smartphone,
      title: 'Telecom & Internet',
      description: 'Mobile, internet, cable TV',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      providers: [
        { name: 'MTN Ghana', code: 'MTN', logo: '📱' },
        { name: 'Vodafone Ghana', code: 'VOD', logo: '📶' },
        { name: 'AirtelTigo', code: 'AT', logo: '📡' },
        { name: 'Surfline Communications', code: 'SURF', logo: '🌐' }
      ]
    },
    {
      id: 'insurance',
      icon: Heart,
      title: 'Insurance',
      description: 'Health, life, auto insurance',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      providers: [
        { name: 'Ghana National Insurance Commission', code: 'GNIC', logo: '🏥' },
        { name: 'SIC Insurance Company', code: 'SIC', logo: '🛡️' },
        { name: 'Hollard Insurance Ghana', code: 'HOLLARD', logo: '💝' }
      ]
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      description: 'School fees, university',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      providers: [
        { name: 'University of Ghana', code: 'UG', logo: '🎓' },
        { name: 'KNUST', code: 'KNUST', logo: '📚' },
        { name: 'Ghana Education Service', code: 'GES', logo: '🏫' }
      ]
    },
    {
      id: 'government',
      icon: Building2,
      title: 'Government',
      description: 'Taxes, fees, permits',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      providers: [
        { name: 'Ghana Revenue Authority', code: 'GRA', logo: '🏛️' },
        { name: 'Social Security & National Insurance Trust', code: 'SSNIT', logo: '📋' },
        { name: 'Driver and Vehicle Licensing Authority', code: 'DVLA', logo: '🚗' }
      ]
    },
    {
      id: 'transportation',
      icon: Car,
      title: 'Transportation',
      description: 'Fuel, parking, tolls',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      providers: [
        { name: 'Ghana Highways Authority', code: 'GHA', logo: '🛣️' },
        { name: 'Shell Ghana', code: 'SHELL', logo: '⛽' },
        { name: 'Total Energies Ghana', code: 'TOTAL', logo: '🚗' }
      ]
    }
  ];

  const recentBills = [
    { provider: 'ECG', amount: 'GHS 245.00', due: 'Due in 3 days', status: 'pending' },
    { provider: 'MTN Ghana', amount: 'GHS 50.00', due: 'Due in 7 days', status: 'pending' },
    { provider: 'GWCL', amount: 'GHS 89.50', due: 'Paid', status: 'paid' }
  ];

  const handleCategorySelect = (category: BillCategory) => {
    setSelectedCategory(category.id);
  };

  const handleProviderSelect = (provider: BillProvider) => {
    // Navigate to bill payment form with provider details
    navigate(`/pay-bill?provider=${provider.code}&name=${encodeURIComponent(provider.name)}`);
  };

  const renderCategoryView = () => (
    <div className="space-y-8">
      {/* Recent Bills */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Bills</h3>
          <button 
            onClick={() => navigate('/transactions')}
            className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
          >
            View all
          </button>
        </div>
        <div className="space-y-3">
          {recentBills.map((bill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">{bill.provider.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{bill.provider}</p>
                    <p className="text-sm text-gray-600">{bill.due}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{bill.amount}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    bill.status === 'paid' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {bill.status === 'paid' ? 'Paid' : 'Pending'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bill Categories */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill Categories</h3>
        <div className="grid grid-cols-2 gap-4">
          {billCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategorySelect(category)}
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
    </div>
  );

  const renderProviderView = () => {
    const category = billCategories.find(cat => cat.id === selectedCategory);
    if (!category) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Providers */}
        <div className="space-y-3">
          {category.providers
            .filter(provider => 
              provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              provider.code.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((provider, index) => (
            <motion.button
              key={provider.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProviderSelect(provider)}
              className="w-full bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                  {provider.logo}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                  <p className="text-sm text-gray-600">Code: {provider.code}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">4.5</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/transact')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Pay Bills</h1>
            <p className="text-sm text-gray-600">Pay utilities, telecom, and more</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-8">
        {selectedCategory ? renderProviderView() : renderCategoryView()}
      </main>
    </div>
  );
};

export default BillPaymentPage;
