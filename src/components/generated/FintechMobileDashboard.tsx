import React, { useState } from 'react';
import { Bell, Eye, EyeOff, Send, Wallet, CreditCard, Plus, Headphones, Users, ChevronRight, Home, Building2, ArrowUpDown, Banknote, Menu, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
const FintechMobileDashboard: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const quickActions = [{
    icon: Send,
    label: 'Send money',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    mpid: "b931f284-1dba-4750-8255-aeffb87fcfb6"
  }, {
    icon: Wallet,
    label: 'Deposit into account',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    mpid: "4c9c18e8-1306-4be4-b606-018b2e35d2b7"
  }, {
    icon: CreditCard,
    label: 'Make payment',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    mpid: "8d7b0e71-d1e3-4670-bc58-a89a3d0be9ff"
  }, {
    icon: Plus,
    label: 'Add account',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    mpid: "f482a9e6-589d-4afc-9d49-46dee684bd21"
  }] as any[];
  const highlights = [{
    icon: Headphones,
    title: 'Contact us',
    bgColor: 'bg-gray-50',
    mpid: "76475138-18df-434b-a9b5-049eef9b7ac1"
  }, {
    icon: Users,
    title: 'Refer and earn',
    bgColor: 'bg-gray-50',
    mpid: "0bb820c0-7749-4882-b1a5-c5998995b5d2"
  }] as any[];
  const navItems = [{
    icon: Home,
    label: 'Home',
    active: true,
    mpid: "25f60f93-4f6b-4b7b-a48d-5d5d2cf68d6c"
  }, {
    icon: Building2,
    label: 'Accounts',
    active: false,
    mpid: "188c0977-c10c-4c81-808d-bfabb5f29729"
  }, {
    icon: ArrowUpDown,
    label: 'Transact',
    active: false,
    mpid: "8ac5206e-9095-43df-9e9e-57b57865f57c"
  }, {
    icon: Banknote,
    label: 'Loans',
    active: false,
    mpid: "7eb826ef-c748-49ed-b73a-f04356f41078"
  }, {
    icon: Menu,
    label: 'More',
    active: false,
    mpid: "e8545f89-9f58-4036-bb0b-87ec373269fd"
  }] as any[];
  return <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative" data-magicpath-id="0" data-magicpath-path="FintechMobileDashboard.tsx">
      {/* Header with Gradient Background */}
      <header className="relative px-6 pt-12 pb-8 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-b-3xl" data-magicpath-id="1" data-magicpath-path="FintechMobileDashboard.tsx">
        <div className="flex justify-between items-start mb-8" data-magicpath-id="2" data-magicpath-path="FintechMobileDashboard.tsx">
          <div data-magicpath-id="3" data-magicpath-path="FintechMobileDashboard.tsx">
            <h1 className="text-2xl font-bold text-white mb-1" data-magicpath-id="4" data-magicpath-path="FintechMobileDashboard.tsx">Hello,</h1>
            <h2 className="text-2xl font-bold text-white" data-magicpath-id="5" data-magicpath-path="FintechMobileDashboard.tsx">Kwesi</h2>
          </div>
          <motion.button whileTap={{
          scale: 0.95
        }} className="bg-white/20 backdrop-blur-sm rounded-full p-3" data-magicpath-id="6" data-magicpath-path="FintechMobileDashboard.tsx">
            <Bell className="w-6 h-6 text-white" data-magicpath-id="7" data-magicpath-path="FintechMobileDashboard.tsx" />
          </motion.button>
        </div>

        {/* Balance Card */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg" data-magicpath-id="8" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="flex justify-between items-center" data-magicpath-id="9" data-magicpath-path="FintechMobileDashboard.tsx">
            <div data-magicpath-id="10" data-magicpath-path="FintechMobileDashboard.tsx">
              <p className="text-sm text-gray-600 mb-2" data-magicpath-id="11" data-magicpath-path="FintechMobileDashboard.tsx">Total balance</p>
              <p className="text-2xl font-bold text-gray-900" data-magicpath-id="12" data-magicpath-path="FintechMobileDashboard.tsx">
                {balanceVisible ? 'GHS 12,450.00' : 'GHS *****'}
              </p>
            </div>
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setBalanceVisible(!balanceVisible)} className="p-2 hover:bg-gray-100 rounded-full transition-colors" data-magicpath-id="13" data-magicpath-path="FintechMobileDashboard.tsx">
              {balanceVisible ? <EyeOff className="w-6 h-6 text-gray-600" data-magicpath-id="14" data-magicpath-path="FintechMobileDashboard.tsx" /> : <Eye className="w-6 h-6 text-gray-600" data-magicpath-id="15" data-magicpath-path="FintechMobileDashboard.tsx" />}
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 space-y-8" data-magicpath-id="16" data-magicpath-path="FintechMobileDashboard.tsx">
        {/* Quick Actions */}
        <section data-magicpath-id="17" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="18" data-magicpath-path="FintechMobileDashboard.tsx">Quick actions</h3>
          <div className="grid grid-cols-2 gap-4" data-magicpath-id="19" data-magicpath-path="FintechMobileDashboard.tsx">
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
          }} className={`${action.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200`} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="FintechMobileDashboard.tsx">
                <action.icon className={`w-8 h-8 ${action.iconColor} mb-4`} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="FintechMobileDashboard.tsx" />
                <p className="text-gray-800 font-medium text-sm leading-tight" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="22" data-magicpath-path="FintechMobileDashboard.tsx">
                  {action.label}
                </p>
              </motion.button>)}
          </div>
        </section>

        {/* Highlights */}
        <section data-magicpath-id="23" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="24" data-magicpath-path="FintechMobileDashboard.tsx">Highlights</h3>
          <div className="grid grid-cols-2 gap-4" data-magicpath-id="25" data-magicpath-path="FintechMobileDashboard.tsx">
            {highlights.map((highlight, index) => <motion.button key={highlight.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4 + index * 0.1
          }} whileTap={{
            scale: 0.98
          }} className={`${highlight.bgColor} rounded-2xl p-6 text-left hover:shadow-md transition-all duration-200 flex items-center justify-between`} data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="FintechMobileDashboard.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="FintechMobileDashboard.tsx">
                  <div className="bg-white rounded-full p-3" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="FintechMobileDashboard.tsx">
                    <highlight.icon className="w-6 h-6 text-gray-600" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="FintechMobileDashboard.tsx" />
                  </div>
                  <p className="text-gray-800 font-medium" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="30" data-magicpath-path="FintechMobileDashboard.tsx">{highlight.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" data-magicpath-uuid={(highlight as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="FintechMobileDashboard.tsx" />
              </motion.button>)}
          </div>
        </section>

        {/* Insights */}
        <section data-magicpath-id="32" data-magicpath-path="FintechMobileDashboard.tsx">
          <h3 className="text-xl font-semibold text-foreground mb-6" data-magicpath-id="33" data-magicpath-path="FintechMobileDashboard.tsx">Insights</h3>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden" data-magicpath-id="34" data-magicpath-path="FintechMobileDashboard.tsx">
            <div className="absolute top-4 right-4" data-magicpath-id="35" data-magicpath-path="FintechMobileDashboard.tsx">
              <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full" data-magicpath-id="36" data-magicpath-path="FintechMobileDashboard.tsx">
                Coming soon
              </span>
            </div>
            <div className="flex items-center space-x-4" data-magicpath-id="37" data-magicpath-path="FintechMobileDashboard.tsx">
              <div className="bg-white rounded-full p-3" data-magicpath-id="38" data-magicpath-path="FintechMobileDashboard.tsx">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" data-magicpath-id="39" data-magicpath-path="FintechMobileDashboard.tsx" />
              </div>
              <div data-magicpath-id="40" data-magicpath-path="FintechMobileDashboard.tsx">
                <p className="text-gray-800 font-semibold text-lg" data-magicpath-id="41" data-magicpath-path="FintechMobileDashboard.tsx">Personal dashboard</p>
                <p className="text-gray-600 text-sm mt-1" data-magicpath-id="42" data-magicpath-path="FintechMobileDashboard.tsx">
                  Get insights into your spending patterns
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-6 py-4 mt-auto" data-magicpath-id="43" data-magicpath-path="FintechMobileDashboard.tsx">
        <div className="flex justify-between items-center" data-magicpath-id="44" data-magicpath-path="FintechMobileDashboard.tsx">
          {navItems.map(item => <motion.button key={item.label} whileTap={{
          scale: 0.95
        }} onClick={() => setActiveTab(item.label)} className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${activeTab === item.label ? 'text-primary bg-primary/10' : 'text-gray-500 hover:text-gray-700'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="FintechMobileDashboard.tsx">
              <item.icon className="w-6 h-6" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="FintechMobileDashboard.tsx" />
              <span className="text-xs font-medium" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="47" data-magicpath-path="FintechMobileDashboard.tsx">{item.label}</span>
            </motion.button>)}
        </div>
        {/* Active Tab Indicator */}
        <div className="flex justify-center mt-2" data-magicpath-id="48" data-magicpath-path="FintechMobileDashboard.tsx">
          <div className="w-12 h-1 bg-primary rounded-full" data-magicpath-id="49" data-magicpath-path="FintechMobileDashboard.tsx" />
        </div>
      </nav>
    </div>;
};
export default FintechMobileDashboard;