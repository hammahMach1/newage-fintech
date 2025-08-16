import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Bell, Shield, HelpCircle, FileText, Star, Users, Headphones, LogOut, ChevronRight, Moon, Sun, Globe, Lock, CreditCard, Download, Share2, Gift, TrendingUp, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const MorePage: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const profileStats = {
    memberSince: '2023',
    transactionsCount: 1247,
    referralsCount: 12,
    rewardsPoints: 2580
  };

  const menuSections = [
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: 'Profile Settings',
          description: 'Manage your personal information',
          hasChevron: true,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          onClick: () => navigate('/profile')
        },
        {
          icon: Shield,
          label: 'Security & Privacy',
          description: 'Password, biometric, and privacy settings',
          hasChevron: true,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          onClick: () => navigate('/profile?tab=security')
        },
        {
          icon: Bell,
          label: 'Notifications',
          description: 'Manage your notification preferences',
          hasChevron: true,
          toggle: true,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          onClick: () => navigate('/profile?tab=notifications')
        },
        {
          icon: CreditCard,
          label: 'Payment Methods',
          description: 'Manage cards and payment options',
          hasChevron: true,
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          onClick: () => navigate('/accounts')
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Globe,
          label: 'Language & Region',
          description: 'English (Ghana)',
          hasChevron: true,
          color: 'text-indigo-600',
          bgColor: 'bg-indigo-50',
          onClick: () => navigate('/profile?tab=preferences')
        },
        {
          icon: Sun,
          label: 'Theme',
          description: 'Light mode',
          hasChevron: true,
          toggle: true,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          onClick: () => navigate('/profile?tab=appearance')
        }
      ]
    },
    {
      title: 'Support & Legal',
      items: [
        {
          icon: HelpCircle,
          label: 'Help & Support',
          description: 'Get help and contact support',
          hasChevron: true,
          color: 'text-cyan-600',
          bgColor: 'bg-cyan-50',
          onClick: () => navigate('/profile?tab=support')
        },
        {
          icon: FileText,
          label: 'Terms & Privacy',
          description: 'Read our terms and privacy policy',
          hasChevron: true,
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          onClick: () => navigate('/profile?tab=legal')
        },
        {
          icon: Download,
          label: 'Export Data',
          description: 'Download your account data',
          hasChevron: true,
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-50'
        }
      ]
    },
    {
      title: 'Social',
      items: [
        {
          icon: Users,
          label: 'Refer Friends',
          description: 'Invite friends and earn rewards',
          hasChevron: true,
          badge: 'Earn GHS 50',
          color: 'text-pink-600',
          bgColor: 'bg-pink-50'
        },
        {
          icon: Star,
          label: 'Rate Our App',
          description: 'Share your feedback on app stores',
          hasChevron: true,
          color: 'text-amber-600',
          bgColor: 'bg-amber-50'
        },
        {
          icon: Share2,
          label: 'Share App',
          description: 'Tell others about our app',
          hasChevron: true,
          color: 'text-teal-600',
          bgColor: 'bg-teal-50'
        }
      ]
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">More</h1>
        <p className="text-gray-600 text-sm">Settings, support, and account management</p>
      </header>

      {/* Profile Section */}
      <section className="bg-white px-6 py-8 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-6"
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MH</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Mr. Hammah</h3>
            <p className="text-gray-600 text-sm">john.doe@example.com</p>
            <p className="text-purple-600 text-sm font-medium">Premium Member</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Profile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-4 gap-4"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{profileStats.memberSince}</p>
            <p className="text-gray-600 text-xs">Member Since</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{profileStats.transactionsCount}</p>
            <p className="text-gray-600 text-xs">Transactions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{profileStats.referralsCount}</p>
            <p className="text-gray-600 text-xs">Referrals</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{profileStats.rewardsPoints}</p>
            <p className="text-gray-600 text-xs">Points</p>
          </div>
        </motion.div>
      </section>

      {/* Menu Sections */}
      <main className="px-6 py-8 space-y-8">
        {menuSections.map((section, sectionIndex) => (
          <section key={section.title}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                  whileTap={{ scale: 0.98 }}
                  onClick={item.onClick}
                  className="w-full bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${item.bgColor} rounded-full p-3`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-gray-900 font-medium">{item.label}</h4>
                          {item.badge && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.toggle && (
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={item.label === 'Notifications' ? notifications : darkMode}
                            onChange={(e) => {
                              if (item.label === 'Notifications') {
                                setNotifications(e.target.checked);
                              } else {
                                setDarkMode(e.target.checked);
                              }
                            }}
                            className="sr-only"
                          />
                          <div
                            className={`w-11 h-6 rounded-full transition-colors ${
                              (item.label === 'Notifications' ? notifications : darkMode)
                                ? 'bg-purple-600'
                                : 'bg-gray-300'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                                (item.label === 'Notifications' ? notifications : darkMode)
                                  ? 'translate-x-5'
                                  : 'translate-x-0.5'
                              } mt-0.5`}
                            ></div>
                          </div>
                        </div>
                      )}
                      {item.hasChevron && (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="bg-blue-50 rounded-full p-3 w-fit mb-3">
                <Headphones className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-gray-900 font-semibold mb-1">Contact Support</h4>
              <p className="text-gray-600 text-sm">Get help 24/7</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="bg-green-50 rounded-full p-3 w-fit mb-3">
                <Gift className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-gray-900 font-semibold mb-1">Rewards</h4>
              <p className="text-gray-600 text-sm">View your points</p>
            </motion.button>
          </div>
        </section>

        {/* App Info */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 text-center"
          >
            <div className="mb-4">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h4 className="text-gray-900 font-semibold">FinTech App</h4>
              <p className="text-gray-600 text-sm">Version 2.1.0</p>
            </div>
            <p className="text-gray-600 text-xs mb-4">
              Your trusted financial companion for secure and convenient banking.
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <span>© 2025 FinTech</span>
              <span>•</span>
              <span>Made with ❤️ in Ghana</span>
            </div>
          </motion.div>
        </section>

        {/* Sign Out */}
        <section className="pb-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-50 border border-red-200 rounded-2xl p-4 hover:bg-red-100 transition-all duration-200"
          >
            <div className="flex items-center justify-center space-x-3">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Sign Out</span>
            </div>
          </motion.button>
        </section>
      </main>
    </div>
  );
};

export default MorePage;
