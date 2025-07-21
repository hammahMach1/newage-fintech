import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, DollarSign, Calculator, FileText, CheckCircle, AlertCircle, Clock, Shield, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoanProduct {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  tenure: string;
  features: string[];
  requirements: string[];
  bgColor: string;
  iconColor: string;
  icon: React.ComponentType<{className?: string}>;
}

const loanProducts: LoanProduct[] = [
  {
    id: 'personal',
    name: 'Personal Loan',
    description: 'Quick cash for personal needs',
    minAmount: 500,
    maxAmount: 50000,
    interestRate: 15.5,
    tenure: '3-36 months',
    features: ['Quick approval', 'Flexible repayment', 'No collateral'],
    requirements: ['Valid ID', 'Proof of income', 'Bank statement'],
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: DollarSign
  },
  {
    id: 'business',
    name: 'Business Loan',
    description: 'Grow your business with affordable credit',
    minAmount: 5000,
    maxAmount: 200000,
    interestRate: 12.5,
    tenure: '6-60 months',
    features: ['Low interest rates', 'Extended tenure', 'Business support'],
    requirements: ['Business registration', 'Financial statements', 'Business plan'],
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: Briefcase
  },
  {
    id: 'emergency',
    name: 'Emergency Loan',
    description: 'Instant loans for urgent needs',
    minAmount: 100,
    maxAmount: 5000,
    interestRate: 18.0,
    tenure: '1-12 months',
    features: ['Instant approval', '24/7 available', 'Minimal documentation'],
    requirements: ['Valid ID', 'Phone verification', 'Basic income proof'],
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    icon: AlertCircle
  },
  {
    id: 'salary',
    name: 'Salary Advance',
    description: 'Get your salary in advance',
    minAmount: 200,
    maxAmount: 10000,
    interestRate: 8.5,
    tenure: '1-6 months',
    features: ['Low interest', 'Salary-based', 'Quick processing'],
    requirements: ['Employment letter', 'Salary slip', 'Valid ID'],
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: Clock
  }
];

const LoanApplicationPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedLoan, setSelectedLoan] = useState<LoanProduct | null>(null);
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    tenure: '',
    employment: '',
    income: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    guarantorName: '',
    guarantorPhone: '',
    guarantorRelation: ''
  });

  // Initialize with loan type from URL parameter
  React.useEffect(() => {
    const loanType = searchParams.get('type');
    if (loanType) {
      const loan = loanProducts.find(p => p.id === loanType);
      if (loan) {
        setSelectedLoan(loan);
        setStep(2);
      }
    }
  }, [searchParams]);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      if (step === 2 && !searchParams.get('type')) {
        navigate('/loans');
        return;
      }
      setStep(step - 1);
    } else {
      navigate('/loans');
    }
  };

  const calculateMonthlyPayment = () => {
    if (!selectedLoan || !formData.amount || !formData.tenure) return 0;
    
    const principal = parseFloat(formData.amount);
    const monthlyRate = selectedLoan.interestRate / 100 / 12;
    const months = parseInt(formData.tenure);
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    return monthlyPayment;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Choose Loan Type</h2>
      <div className="space-y-4">
        {loanProducts.map((loan, index) => (
          <motion.button
            key={loan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedLoan(loan);
              handleNext();
            }}
            className={`w-full ${loan.bgColor} rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-purple-200`}
          >
            <div className="flex items-start space-x-4">
              <div className={`${loan.iconColor} p-3 rounded-xl bg-white`}>
                <loan.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{loan.name}</h3>
                <p className="text-gray-600 mb-3">{loan.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-700">
                  <span>GHS {loan.minAmount.toLocaleString()} - GHS {loan.maxAmount.toLocaleString()}</span>
                  <span>•</span>
                  <span>{loan.interestRate}% APR</span>
                  <span>•</span>
                  <span>{loan.tenure}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {loan.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-white/60 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{selectedLoan?.name}</h2>
        <p className="text-gray-600">{selectedLoan?.description}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (GHS)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder={`${selectedLoan?.minAmount} - ${selectedLoan?.maxAmount}`}
            min={selectedLoan?.minAmount}
            max={selectedLoan?.maxAmount}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-2xl font-bold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Purpose</label>
          <select
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select purpose</option>
            <option value="personal">Personal expenses</option>
            <option value="business">Business expansion</option>
            <option value="education">Education</option>
            <option value="medical">Medical expenses</option>
            <option value="home">Home improvement</option>
            <option value="debt">Debt consolidation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Repayment Period (Months)</label>
          <select
            value={formData.tenure}
            onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select tenure</option>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="18">18 months</option>
            <option value="24">24 months</option>
            <option value="36">36 months</option>
          </select>
        </div>

        {formData.amount && formData.tenure && (
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Loan Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-semibold">GHS {parseFloat(formData.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Rate:</span>
                <span className="font-semibold">{selectedLoan?.interestRate}% APR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Payment:</span>
                <span className="font-semibold text-lg">GHS {calculateMonthlyPayment().toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={!formData.amount || !formData.purpose || !formData.tenure}
        className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        Continue Application
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+233 XX XXX XXXX"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status</label>
        <select
          value={formData.employment}
          onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">Select employment status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="business">Business owner</option>
          <option value="freelancer">Freelancer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (GHS)</label>
        <input
          type="number"
          value={formData.income}
          onChange={(e) => setFormData({ ...formData, income: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <button
        onClick={handleNext}
        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.employment || !formData.income}
        className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
      >
        Submit Application
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
        <p className="text-gray-600">Your loan application is being processed</p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 text-left">
        <h3 className="font-semibold text-gray-900 mb-4">Application Summary</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Loan Type:</span>
            <span className="font-semibold">{selectedLoan?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold">GHS {parseFloat(formData.amount).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Payment:</span>
            <span className="font-semibold">GHS {calculateMonthlyPayment().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Application ID:</span>
            <span className="font-mono font-semibold">#LN{Date.now().toString().slice(-8)}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 text-left">
        <h4 className="font-semibold text-blue-900 mb-2">What's Next?</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• We'll review your application within 24 hours</li>
          <li>• You'll receive an SMS/email with the decision</li>
          <li>• If approved, funds will be disbursed to your account</li>
        </ul>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => navigate('/loans')}
          className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
        >
          Back to Loans
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
            <h1 className="text-xl font-bold text-gray-900">
              {step === 1 ? 'Apply for Loan' : selectedLoan?.name || 'Loan Application'}
            </h1>
            <p className="text-sm text-gray-600">
              {step === 4 ? 'Application Complete' : `Step ${step} of 4`}
            </p>
          </div>
        </div>
        
        {/* Progress Bar */}
        {step < 4 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}
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

export default LoanApplicationPage;
