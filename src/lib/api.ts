import axios from 'axios';
import type {
  LoginCredentials,
  RegisterData,
  UpdateProfileData,
  CreateAccountData,
  UpdateAccountData,
  CreateTransactionData,
  SendMoneyData,
  ReceiveMoneyData,
  LoanApplicationData,
  PayBillData,
  NotificationSettings,
  ChangePasswordData
} from './types';

// Base API URL - update this when you have a real backend
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance with default config
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const api = {
  // Authentication
  auth: {
    login: (credentials: { email: string; password: string }) =>
      apiClient.post('/auth/login', credentials),
    register: (userData: { name: string; email: string; password: string }) =>
      apiClient.post('/auth/register', userData),
    logout: () => apiClient.post('/auth/logout'),
    refreshToken: () => apiClient.post('/auth/refresh'),
  },

  // User profile
  user: {
    getProfile: () => apiClient.get('/user/profile'),
    updateProfile: (data: UpdateProfileData) => apiClient.put('/user/profile', data),
    changePassword: (data: ChangePasswordData) =>
      apiClient.put('/user/change-password', data),
  },

  // Accounts
  accounts: {
    getAll: () => apiClient.get('/accounts'),
    getById: (id: string) => apiClient.get(`/accounts/${id}`),
    create: (data: CreateAccountData) => apiClient.post('/accounts', data),
    update: (id: string, data: UpdateAccountData) => apiClient.put(`/accounts/${id}`, data),
    delete: (id: string) => apiClient.delete(`/accounts/${id}`),
    getBalance: (id: string) => apiClient.get(`/accounts/${id}/balance`),
  },

  // Transactions
  transactions: {
    getAll: (accountId?: string) => 
      apiClient.get('/transactions', { params: { accountId } }),
    getById: (id: string) => apiClient.get(`/transactions/${id}`),
    create: (data: CreateTransactionData) => apiClient.post('/transactions', data),
    send: (data: SendMoneyData) => apiClient.post('/transactions/send', data),
    receive: (data: ReceiveMoneyData) => apiClient.post('/transactions/receive', data),
  },

  // Loans
  loans: {
    getAll: () => apiClient.get('/loans'),
    getById: (id: string) => apiClient.get(`/loans/${id}`),
    apply: (data: LoanApplicationData) => apiClient.post('/loans/apply', data),
    getEligibility: () => apiClient.get('/loans/eligibility'),
    getCreditScore: () => apiClient.get('/loans/credit-score'),
    makePayment: (loanId: string, amount: number) =>
      apiClient.post(`/loans/${loanId}/payment`, { amount }),
  },

  // Bills
  bills: {
    getProviders: () => apiClient.get('/bills/providers'),
    pay: (data: PayBillData) => apiClient.post('/bills/pay', data),
    getHistory: () => apiClient.get('/bills/history'),
  },

  // Notifications
  notifications: {
    getAll: () => apiClient.get('/notifications'),
    markAsRead: (id: string) => apiClient.put(`/notifications/${id}/read`),
    markAllAsRead: () => apiClient.put('/notifications/read-all'),
    updateSettings: (settings: NotificationSettings) => 
      apiClient.put('/notifications/settings', settings),
  },
};
