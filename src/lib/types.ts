// API Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'mobile-money' | 'business';
  balance: number;
  currency: string;
  accountNumber: string;
  isActive: boolean;
  createdAt: string;
}

export interface Transaction {
  id: string;
  fromAccountId?: string;
  toAccountId?: string;
  amount: number;
  currency: string;
  type: 'send' | 'receive' | 'deposit' | 'withdrawal' | 'bill-payment';
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  description?: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
}

export interface Loan {
  id: string;
  type: 'personal' | 'business' | 'emergency' | 'salary-advance';
  amount: number;
  currency: string;
  interestRate: number;
  term: number; // in months
  status: 'pending' | 'approved' | 'active' | 'completed' | 'defaulted';
  monthlyPayment: number;
  remainingBalance: number;
  nextPaymentDate: string;
  createdAt: string;
}

export interface CreditScore {
  score: number;
  rating: 'poor' | 'fair' | 'good' | 'very-good' | 'excellent';
  factors: {
    paymentHistory: number;
    creditUtilization: number;
    creditAge: number;
    creditMix: number;
  };
  lastUpdated: string;
}

export interface BillProvider {
  id: string;
  name: string;
  category: 'utilities' | 'mobile' | 'internet' | 'government' | 'merchant';
  logo?: string;
  isActive: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

// Request/Response Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  avatar?: string;
}

export interface CreateAccountData {
  name: string;
  type: Account['type'];
  initialDeposit?: number;
}

export interface UpdateAccountData {
  name?: string;
  isActive?: boolean;
}

export interface CreateTransactionData {
  accountId: string;
  amount: number;
  type: Transaction['type'];
  description?: string;
  recipientId?: string;
}

export interface SendMoneyData {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description?: string;
}

export interface ReceiveMoneyData {
  accountId: string;
  amount: number;
  description?: string;
}

export interface LoanApplicationData {
  type: Loan['type'];
  amount: number;
  term: number;
  purpose: string;
  employmentInfo: {
    employer: string;
    position: string;
    monthlyIncome: number;
    employmentLength: number;
  };
  personalInfo: {
    address: string;
    city: string;
    zipCode: string;
    monthlyExpenses: number;
  };
}

export interface PayBillData {
  providerId: string;
  accountNumber: string;
  amount: number;
  accountId: string;
  customerName?: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  transactionAlerts: boolean;
  loanReminders: boolean;
  securityAlerts: boolean;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}
