import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Smartphone, Building2, QrCode, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SendMoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recipientType: '',
    recipient: '',
    amount: '',
    description: '',
    pin: ''
  });

  const sendMethods = [
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Number',
      description: 'Send to any mobile money account',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'bank',
      icon: Building2,
      title: 'Bank Account',
      description: 'Transfer to any bank account',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'qr',
      icon: QrCode,
      title: 'QR Code',
      description: 'Scan to send instantly',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'contact',
      icon: User,
      title: 'Contact',
      description: 'Send to saved contacts',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/transact');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Choose Send Method</h2>
      <div className="grid grid-cols-2 gap-4">
        {sendMethods.map((method) => (
          <motion.button
            key={method.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setFormData({ ...formData, recipientType: method.id });
              handleNext();
            }}
            className={`${method.bgColor} rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-200`}
          >
            <div className={`${method.iconColor} mb-4`}>
              <method.icon className="w-8 h-8" />
            </div>
            <h3 className="text-gray-800 font-semibold text-sm mb-2">{method.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{method.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Enter Recipient</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formData.recipientType === 'mobile' ? 'Mobile Number' : 
             formData.recipientType === 'bank' ? 'Account Number' : 'Recipient'}
          </label>
          <input
            type="text"
            value={formData.recipient}
            onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
            placeholder={formData.recipientType === 'mobile' ? '+233 XX XXX XXXX' : 'Enter details'}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amount (GHS)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder="0.00"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-2xl font-bold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What's this for?"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={!formData.recipient || !formData.amount}
        className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        Review Transfer
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Review Transfer</h2>
      <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">To:</span>
          <span className="font-semibold">{formData.recipient}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Amount:</span>
          <span className="font-semibold text-2xl">GHS {formData.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Fee:</span>
          <span className="font-semibold">GHS 2.50</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between">
          <span className="text-gray-900 font-semibold">Total:</span>
          <span className="font-bold text-xl">GHS {(parseFloat(formData.amount) + 2.50).toFixed(2)}</span>
        </div>
        {formData.description && (
          <div className="flex justify-between">
            <span className="text-gray-600">Description:</span>
            <span className="font-semibold">{formData.description}</span>
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter PIN</label>
        <input
          type="password"
          value={formData.pin}
          onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
          placeholder="••••"
          maxLength={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center text-2xl tracking-widest"
        />
      </div>
      <button
        onClick={handleNext}
        disabled={formData.pin.length !== 4}
        className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        Send Money
      </button>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
      >
        <CheckCircle className="w-10 h-10 text-green-600" />
      </motion.div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Transfer Successful!</h2>
        <p className="text-gray-600">GHS {formData.amount} sent to {formData.recipient}</p>
      </div>
      <div className="bg-gray-50 rounded-2xl p-6">
        <p className="text-sm text-gray-600 mb-2">Transaction ID</p>
        <p className="font-mono text-lg font-semibold">#TXN{Date.now().toString().slice(-8)}</p>
      </div>
      <div className="space-y-3">
        <button
          onClick={() => navigate('/transactions')}
          className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
        >
          View Transaction
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">Send Money</h1>
            <p className="text-sm text-gray-600">Step {step} of 4</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-8">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </main>
    </div>
  );
};

export default SendMoneyPage;
