import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import AccountsPage from '../pages/AccountsPage';
import TransactPage from '../pages/TransactPage';
import LoansPage from '../pages/LoansPage';
import MorePage from '../pages/MorePage';
import TransactionHistoryPage from '../pages/TransactionHistoryPage';
import ProfilePage from '../pages/ProfilePage';
import SendMoneyPage from '../pages/SendMoneyPage';
import BillPaymentPage from '../pages/BillPaymentPage';
import LoanApplicationPage from '../pages/LoanApplicationPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/transact" element={<TransactPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/transactions" element={<TransactionHistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/send-money" element={<SendMoneyPage />} />
          <Route path="/pay-bills" element={<BillPaymentPage />} />
          <Route path="/apply-loan" element={<LoanApplicationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
