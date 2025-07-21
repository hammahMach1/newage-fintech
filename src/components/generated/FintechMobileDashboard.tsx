import React, { useState } from 'react';
import { Bell, Eye, EyeOff, Send, Wallet, CreditCard, Plus, Headphones, Users, ChevronRight, Home, Building2, ArrowUpDown, Banknote, Menu, Loader2, User, Settings, TrendingUp, ArrowUpRight, ArrowDownLeft, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
const FintechMobileDashboard: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const quickActions = [{
    icon: Send,
    label: 'Send money',
    description: 'Transfer funds instantly to any account',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    isNew: false,
    mpid: "96294f90-5181-4454-b3da-634748323d8f"
  }, {
    icon: Wallet,
    label: 'Deposit into account',
    description: 'Add funds via mobile money or card',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    isNew: false,
    mpid: "47e759e5-7701-46f2-9d7d-e6260fec8f2b"
  }, {
    icon: CreditCard,
    label: 'Make payment',
    description: 'Pay bills and merchants seamlessly',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    isNew: true,
    mpid: "ac0fd6df-0afa-41d2-857f-08774097fb4f"
  }, {
    icon: Plus,
    label: 'Add account',
    description: 'Link new bank or mobile money account',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    isNew: false,
    mpid: "a9e5e01e-2a27-408e-b446-f4346da8d978"
  }] as any[];
  const recentTransactions = [{
    id: 1,
    type: 'received',
    amount: '+GHS 2,500.00',
    description: 'Salary deposit',
    time: '2 hours ago',
    icon: ArrowDownLeft,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
    mpid: "76dde36d-c142-450e-b4d0-f8121fda4bff"
  }, {
    id: 2,
    type: 'sent',
    amount: '-GHS 150.00',
    description: 'Grocery shopping',
    time: '5 hours ago',
    icon: ArrowUpRight,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    mpid: "0b2e9cbd-7542-42a3-9075-bb767028dcc5"
  }, {
    id: 3,
    type: 'received',
    amount: '+GHS 75.00',
    description: 'Cashback reward',
    time: '1 day ago',
    icon: Star,
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    mpid: "b2cc6525-a6ea-4441-a4f9-12f93a4a8a86"
  }] as any[];
  const highlights = [{
    icon: Headphones,
    title: 'Contact us',
    bgColor: 'bg-gray-50',
    mpid: "b0d28a42-29b0-49a1-b4cc-70fba93655f3"
  }, {
    icon: Users,
    title: 'Refer and earn',
    bgColor: 'bg-gray-50',
    mpid: "b0dd6f72-5ab6-4448-8810-553ef081d3f8"
  }] as any[];
  const navItems = [{
    icon: Home,
    label: 'Home',
    active: true,
    mpid: "a10b633b-27c0-4630-ad6d-3e53ad48e4f4"
  }, {
    icon: Building2,
    label: 'Accounts',
    active: false,
    mpid: "568af63d-02b8-4221-8793-856409b00f37"
  }, {
    icon: ArrowUpDown,
    label: 'Transact',
    active: false,
    mpid: "0b3f7a52-cd57-4bbf-ba94-e733eb6338c3"
  }, {
    icon: Banknote,
    label: 'Loans',
    active: false,
    mpid: "368e87fe-d6db-4327-b237-b70ee7409746"
  }, {
    icon: Menu,
    label: 'More',
    active: false,
    mpid: "bd3df6c0-7131-4530-9072-81807fed50a2"
  }] as any[];
  return <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative" data-magicpath-id="0" data-magicpath-path="FintechMobileDashboard.tsx">
      {/* Enhanced Header with Deeper Gradient */}
      <header className="relative px-6 pt-12 pb-8 bg-gradient-to-br from-red-700 via-pink-600 to-purple-700 rounded-b-3xl" data-magicpath-id="1" data-magicpath-path="FintechMobileDashboard.tsx">
        {/* Top Row with User Info and Notifications */}
        <div className="flex justify-between items-start mb-6" data-magicpath-id="2" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="flex items-center space-x-4" data-magicpath-id="3" data-magicpath-path="FintechMobileDashboard.tsx">
            <div className="relative" data-magicpath-id="4" data-magicpath-path="FintechMobileDashboard.tsx">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30" data-magicpath-id="5" data-magicpath-path="FintechMobileDashboard.tsx">
                <User className="w-6 h-6 text-white" data-magicpath-id="6" data-magicpath-path="FintechMobileDashboard.tsx" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" data-magicpath-id="7" data-magicpath-path="FintechMobileDashboard.tsx"></div>
            </div>
            <div data-magicpath-id="8" data-magicpath-path="FintechMobileDashboard.tsx">
              <h1 className="text-lg font-semibold text-white/90" data-magicpath-id="9" data-magicpath-path="FintechMobileDashboard.tsx">Good evening,</h1>
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="10" data-magicpath-path="FintechMobileDashboard.tsx">Kwesi Asante</h2>
              <p className="text-sm text-white/80 mt-1" data-magicpath-id="11" data-magicpath-path="FintechMobileDashboard.tsx">Premium Member • Verified</p>
            </div>
          </div>
          <div className="flex items-center space-x-3" data-magicpath-id="12" data-magicpath-path="FintechMobileDashboard.tsx">
            <motion.button whileTap={{
            scale: 0.95
          }} className="bg-white/20 backdrop-blur-sm rounded-full p-3 relative" data-magicpath-id="13" data-magicpath-path="FintechMobileDashboard.tsx">
              <Bell className="w-6 h-6 text-white" data-magicpath-id="14" data-magicpath-path="FintechMobileDashboard.tsx" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" data-magicpath-id="15" data-magicpath-path="FintechMobileDashboard.tsx"></div>
            </motion.button>
            <motion.button whileTap={{
            scale: 0.95
          }} className="bg-white/20 backdrop-blur-sm rounded-full p-3" data-magicpath-id="16" data-magicpath-path="FintechMobileDashboard.tsx">
              <Settings className="w-6 h-6 text-white" data-magicpath-id="17" data-magicpath-path="FintechMobileDashboard.tsx" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Balance Card with Additional Details */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20" data-magicpath-id="18" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="flex justify-between items-start mb-4" data-magicpath-id="19" data-magicpath-path="FintechMobileDashboard.tsx">
            <div data-magicpath-id="20" data-magicpath-path="FintechMobileDashboard.tsx">
              <p className="text-sm text-gray-600 mb-2" data-magicpath-id="21" data-magicpath-path="FintechMobileDashboard.tsx">Total balance</p>
              <p className="text-3xl font-bold text-gray-900 mb-1" data-magicpath-id="22" data-magicpath-path="FintechMobileDashboard.tsx">
                {balanceVisible ? 'GHS 12,450.00' : 'GHS *****'}
              </p>
              <div className="flex items-center space-x-4 text-sm" data-magicpath-id="23" data-magicpath-path="FintechMobileDashboard.tsx">
                <span className="text-gray-600" data-magicpath-id="24" data-magicpath-path="FintechMobileDashboard.tsx">Account: ****2847</span>
                <div className="flex items-center text-green-600" data-magicpath-id="25" data-magicpath-path="FintechMobileDashboard.tsx">
                  <TrendingUp className="w-4 h-4 mr-1" data-magicpath-id="26" data-magicpath-path="FintechMobileDashboard.tsx" />
                  <span data-magicpath-id="27" data-magicpath-path="FintechMobileDashboard.tsx">+12.5%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3" data-magicpath-id="28" data-magicpath-path="FintechMobileDashboard.tsx">
              <motion.button whileTap={{
              scale: 0.95
            }} onClick={() => setBalanceVisible(!balanceVisible)} className="p-2 hover:bg-gray-100 rounded-full transition-colors" data-magicpath-id="29" data-magicpath-path="FintechMobileDashboard.tsx">
                {balanceVisible ? <EyeOff className="w-6 h-6 text-gray-600" data-magicpath-id="30" data-magicpath-path="FintechMobileDashboard.tsx" /> : <Eye className="w-6 h-6 text-gray-600" data-magicpath-id="31" data-magicpath-path="FintechMobileDashboard.tsx" />}
              </motion.button>
              {/* Mini Chart Placeholder */}
              <div className="w-16 h-8 bg-gradient-to-r from-green-200 to-green-300 rounded-md flex items-end justify-center space-x-1 p-1" data-magicpath-id="32" data-magicpath-path="FintechMobileDashboard.tsx">
                <div className="w-1 h-2 bg-green-600 rounded-full" data-magicpath-id="33" data-magicpath-path="FintechMobileDashboard.tsx"></div>
                <div className="w-1 h-4 bg-green-600 rounded-full" data-magicpath-id="34" data-magicpath-path="FintechMobileDashboard.tsx"></div>
                <div className="w-1 h-3 bg-green-600 rounded-full" data-magicpath-id="35" data-magicpath-path="FintechMobileDashboard.tsx"></div>
                <div className="w-1 h-6 bg-green-600 rounded-full" data-magicpath-id="36" data-magicpath-path="FintechMobileDashboard.tsx"></div>
                <div className="w-1 h-4 bg-green-600 rounded-full" data-magicpath-id="37" data-magicpath-path="FintechMobileDashboard.tsx"></div>
              </div>
            </div>
          </div>
          
          {/* Account Details Row */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100" data-magicpath-id="38" data-magicpath-path="FintechMobileDashboard.tsx">
            <div className="text-sm" data-magicpath-id="39" data-magicpath-path="FintechMobileDashboard.tsx">
              <span className="text-gray-600" data-magicpath-id="40" data-magicpath-path="FintechMobileDashboard.tsx">Available: </span>
              <span className="font-semibold text-gray-900" data-magicpath-id="41" data-magicpath-path="FintechMobileDashboard.tsx">
                {balanceVisible ? 'GHS 11,200.00' : 'GHS *****'}
              </span>
            </div>
            <div className="flex items-center space-x-2" data-magicpath-id="42" data-magicpath-path="FintechMobileDashboard.tsx">
              <Shield className="w-4 h-4 text-green-600" data-magicpath-id="43" data-magicpath-path="FintechMobileDashboard.tsx" />
              <span className="text-xs text-green-600 font-medium" data-magicpath-id="44" data-magicpath-path="FintechMobileDashboard.tsx">Secured</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 space-y-8" data-magicpath-id="45" data-magicpath-path="FintechMobileDashboard.tsx">
        {/* Enhanced Quick Actions */}
        <section data-magicpath-id="46" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="47" data-magicpath-path="FintechMobileDashboard.tsx">Quick actions</h3>
          <div className="grid grid-cols-2 gap-4" data-magicpath-id="48" data-magicpath-path="FintechMobileDashboard.tsx">
            {quickActions.map((action, index) => <motion.button key={action.label} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} whileTap={{
            scale: 0.98
          }} className={`${action.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 relative`} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="FintechMobileDashboard.tsx">
                {action.isNew && <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="FintechMobileDashboard.tsx">
                    <Zap className="w-3 h-3 mr-1" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="FintechMobileDashboard.tsx" />
                    NEW
                  </div>}
                <action.icon className={`w-8 h-8 ${action.iconColor} mb-4`} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="FintechMobileDashboard.tsx" />
                <p className="text-gray-800 font-medium text-sm leading-tight mb-2" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="53" data-magicpath-path="FintechMobileDashboard.tsx">
                  {action.label}
                </p>
                <p className="text-gray-600 text-xs leading-tight" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="54" data-magicpath-path="FintechMobileDashboard.tsx">
                  {action.description}
                </p>
              </motion.button>)}
          </div>
        </section>

        {/* Transaction History Preview */}
        <section data-magicpath-id="55" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="flex justify-between items-center mb-6" data-magicpath-id="56" data-magicpath-path="FintechMobileDashboard.tsx">
            <h3 className="text-xl font-semibold text-foreground" data-magicpath-id="57" data-magicpath-path="FintechMobileDashboard.tsx">Recent transactions</h3>
            <motion.button whileTap={{
            scale: 0.95
          }} className="text-sm text-purple-600 font-medium flex items-center" data-magicpath-id="58" data-magicpath-path="FintechMobileDashboard.tsx">
              View all
              <ChevronRight className="w-4 h-4 ml-1" data-magicpath-id="59" data-magicpath-path="FintechMobileDashboard.tsx" />
            </motion.button>
          </div>
          <div className="space-y-3" data-magicpath-id="60" data-magicpath-path="FintechMobileDashboard.tsx">
            {recentTransactions.map((transaction, index) => <motion.div key={transaction.id} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200" data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="FintechMobileDashboard.tsx">
                <div className="flex items-center justify-between" data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="FintechMobileDashboard.tsx">
                  <div className="flex items-center space-x-4" data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="FintechMobileDashboard.tsx">
                    <div className={`${transaction.bgColor} rounded-full p-2`} data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="FintechMobileDashboard.tsx">
                      <transaction.icon className={`w-5 h-5 ${transaction.iconColor}`} data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="FintechMobileDashboard.tsx" />
                    </div>
                    <div data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="FintechMobileDashboard.tsx">
                      <p className="font-medium text-gray-900 text-sm" data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="67" data-magicpath-path="FintechMobileDashboard.tsx">{transaction.description}</p>
                      <p className="text-xs text-gray-500" data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:string" data-magicpath-id="68" data-magicpath-path="FintechMobileDashboard.tsx">{transaction.time}</p>
                    </div>
                  </div>
                  <p className={`font-semibold text-sm ${transaction.type === 'received' ? 'text-green-600' : 'text-red-600'}`} data-magicpath-uuid={(transaction as any)["mpid"] ?? "unsafe"} data-magicpath-field="amount:string" data-magicpath-id="69" data-magicpath-path="FintechMobileDashboard.tsx">
                    {transaction.amount}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </section>

        {/* Highlights */}
        <section data-magicpath-id="70" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="71" data-magicpath-path="FintechMobileDashboard.tsx">Highlights</h3>
          <div className="grid grid-cols-2 gap-4" data-magicpath-id="72" data-magicpath-path="FintechMobileDashboard.tsx">
            {highlights.map((highlight, index) => <motion.button key={highlight.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6 + index * 0.1
          }} whileTap={{
            scale: 0.98
          }} className={`${highlight.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 flex items-center justify-between`} data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="FintechMobileDashboard.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="FintechMobileDashboard.tsx">
                  <div className="bg-white rounded-full p-3" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="FintechMobileDashboard.tsx">
                    <highlight.icon className="w-6 h-6 text-gray-600" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="FintechMobileDashboard.tsx" />
                  </div>
                  <p className="text-gray-800 font-medium" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="77" data-magicpath-path="FintechMobileDashboard.tsx">{highlight.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="FintechMobileDashboard.tsx" />
              </motion.button>)}
          </div>
        </section>

        {/* Enhanced Insights */}
        <section data-magicpath-id="79" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="80" data-magicpath-path="FintechMobileDashboard.tsx">Insights</h3>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 relative overflow-hidden border border-purple-100" data-magicpath-id="81" data-magicpath-path="FintechMobileDashboard.tsx">
            <div className="absolute top-4 right-4" data-magicpath-id="82" data-magicpath-path="FintechMobileDashboard.tsx">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center" data-magicpath-id="83" data-magicpath-path="FintechMobileDashboard.tsx">
                <Zap className="w-3 h-3 mr-1" data-magicpath-id="84" data-magicpath-path="FintechMobileDashboard.tsx" />
                Coming soon
              </span>
            </div>
            <div className="flex items-center space-x-4" data-magicpath-id="85" data-magicpath-path="FintechMobileDashboard.tsx">
              <div className="bg-white rounded-full p-3 shadow-sm" data-magicpath-id="86" data-magicpath-path="FintechMobileDashboard.tsx">
                <Loader2 className="w-6 h-6 text-purple-600 animate-spin" data-magicpath-id="87" data-magicpath-path="FintechMobileDashboard.tsx" />
              </div>
              <div data-magicpath-id="88" data-magicpath-path="FintechMobileDashboard.tsx">
                <p className="text-gray-800 font-semibold text-lg" data-magicpath-id="89" data-magicpath-path="FintechMobileDashboard.tsx">AI-Powered Insights</p>
                <p className="text-gray-600 text-sm mt-1" data-magicpath-id="90" data-magicpath-path="FintechMobileDashboard.tsx">
                  Smart analytics for your spending patterns and financial goals
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-6 py-4 mt-auto" data-magicpath-id="91" data-magicpath-path="FintechMobileDashboard.tsx">
        <div className="flex justify-between items-center" data-magicpath-id="92" data-magicpath-path="FintechMobileDashboard.tsx">
          {navItems.map(item => <motion.button key={item.label} whileTap={{
          scale: 0.95
        }} onClick={() => setActiveTab(item.label)} className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${activeTab === item.label ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:text-gray-700'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="FintechMobileDashboard.tsx">
              <item.icon className="w-6 h-6" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="FintechMobileDashboard.tsx" />
              <span className="text-xs font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="95" data-magicpath-path="FintechMobileDashboard.tsx">{item.label}</span>
            </motion.button>)}
        </div>
        {/* Active Tab Indicator */}
        <div className="flex justify-center mt-2" data-magicpath-id="96" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" data-magicpath-id="97" data-magicpath-path="FintechMobileDashboard.tsx" />
        </div>
      </nav>
    </div>;
};
export default FintechMobileDashboard;