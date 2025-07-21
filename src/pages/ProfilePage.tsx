import React, { useState } from 'react';
import { User, Camera, Edit3, Phone, Mail, MapPin, Calendar, Shield, Key, Bell, Eye, EyeOff, ChevronRight, Save } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+233 24 123 4567',
    dateOfBirth: '1990-05-15',
    address: '123 Main Street, Accra, Ghana',
    occupation: 'Software Engineer',
    monthlyIncome: '5000',
    idNumber: '••••••••••••'
  });

  const securitySettings = [
    {
      icon: Key,
      title: 'Change Password',
      description: 'Update your login password',
      action: 'change'
    },
    {
      icon: Shield,
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security',
      action: 'toggle',
      enabled: true
    },
    {
      icon: Phone,
      title: 'SMS Notifications',
      description: 'Receive SMS alerts for transactions',
      action: 'toggle',
      enabled: false
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Get real-time notifications',
      action: 'toggle',
      enabled: true
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Profile saved:', profile);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
            <p className="text-gray-600 text-sm">Manage your personal information and security</p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Profile Picture & Basic Info */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-gray-200"
          >
            <div className="flex items-center space-x-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </span>
                </div>
                {isEditing && (
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {profile.firstName} {profile.lastName}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{profile.email}</p>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                  Premium Member
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Personal Information */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 py-3">{profile.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 py-3">{profile.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">{profile.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">{profile.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              {isEditing ? (
                <input
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              {isEditing ? (
                <textarea
                  value={profile.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">{profile.address}</p>
              )}
            </div>
          </motion.div>
        </section>

        {/* Financial Information */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Financial Information</h3>
            <button
              onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
              className="flex items-center space-x-2 text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
            >
              {showSensitiveInfo ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showSensitiveInfo ? 'Hide' : 'Show'}</span>
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">{profile.occupation}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (GHS)</label>
              {isEditing ? (
                <input
                  type="number"
                  value={profile.monthlyIncome}
                  onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 py-3">
                  {showSensitiveInfo ? `GHS ${profile.monthlyIncome}` : '••••••••'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ID Number</label>
              <p className="text-gray-900 py-3">
                {showSensitiveInfo ? 'GHA-123456789-0' : profile.idNumber}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Security Settings */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Notifications</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            {securitySettings.map((setting, index) => (
              <div key={setting.title} className={`p-6 ${index !== securitySettings.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-50 rounded-full p-3">
                      <setting.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">{setting.title}</h4>
                      <p className="text-gray-600 text-sm">{setting.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {setting.action === 'toggle' ? (
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={setting.enabled}
                          className="sr-only"
                        />
                        <div
                          className={`w-11 h-6 rounded-full transition-colors ${
                            setting.enabled ? 'bg-purple-600' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                              setting.enabled ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Account Actions */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <button className="w-full bg-red-50 border border-red-200 rounded-2xl p-4 text-left hover:bg-red-100 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-red-700 font-medium">Deactivate Account</h4>
                  <p className="text-red-600 text-sm">Temporarily disable your account</p>
                </div>
                <ChevronRight className="w-5 h-5 text-red-400" />
              </div>
            </button>

            <button className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left hover:bg-gray-100 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-gray-700 font-medium">Delete Account</h4>
                  <p className="text-gray-600 text-sm">Permanently delete your account and data</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
