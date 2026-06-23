import React, { useState } from 'react';
import { 
  MessageSquare, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Phone,
  Lock,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  AlertTriangle,
  Bell
} from 'lucide-react';

const SmsBanking = () => {
  const [mobileNumber, setMobileNumber] = useState('');
//   const [smsCode, setSmsCode] = useState('');

  const smsCommands = [
    { command: 'BAL', description: 'Check account balance', example: 'BAL XXXX' },
    { command: 'MINI', description: 'Get mini statement', example: 'MINI XXXX' },
    { command: 'CHQSTAT', description: 'Check cheque status', example: 'CHQSTAT XXXX' },
    { command: 'FD', description: 'FD details', example: 'FD XXXX' }
  ];

  const alerts = [
    { type: 'Transaction Alert', desc: 'Get SMS for all transactions' },
    { type: 'Low Balance Alert', desc: 'Alert when balance goes below threshold' },
    { type: 'Salary Credit', desc: 'Notify when salary is credited' },
    { type: 'Bill Payment Reminder', desc: 'Reminder for upcoming bills' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a4d5e] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <MessageSquare size={16} className="mr-2" />
              Banking Without Internet
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              SMS Banking
            </h1>
            <p className="mb-3 text-lg text-white/90">
              Simple. Fast. Offline. Access banking services via SMS from 
              any mobile phone, anywhere in India.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105">
                Register for SMS Banking
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10">
                View Commands
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#f9fafb"
            className="dark:fill-gray-800"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* SMS Demo */}
        <div className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
              <div className="text-center">
                <Phone size={48} className="mx-auto mb-4 text-[#228296]" />
                <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Try SMS Banking Demo</h3>
                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300"
                  />
                  <div className="flex gap-2">
                    <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300">
                      <option>BAL - Balance Check</option>
                      <option>MINI - Mini Statement</option>
                      <option>CHQSTAT - Cheque Status</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Last 4 digits"
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300"
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg font-semibold">
                    Send SMS (Demo)
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400">*This is a demo. Actual SMS will be sent to your registered number</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">How to Use</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-[#228296]">1</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-300">Register Mobile Number</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Link your mobile number with your account</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-[#228296]">2</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-300">Send SMS to 5676766</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Type command like "BAL XXXX"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-[#228296]">3</div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-300">Get Instant Response</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive account details via SMS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Commands */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-300">SMS {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Commands
              </span>
              </h2>
          <div className="overflow-x-auto rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Command</th>
                  <th className="px-6 py-3 text-left">Description</th>
                  <th className="px-6 py-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                {smsCommands.map((cmd, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-3 font-semibold text-[#228296]">{cmd.command}</td>
                    <td className="px-6 py-3 dark:text-gray-300">{cmd.description}</td>
                    <td className="px-6 py-3 font-mono text-sm dark:text-gray-300">{cmd.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">*XXXX is last 4 digits of your account number or card number</p>
        </div>

        {/* SMS Alerts */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">SMS Alerts & {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Notifications
              </span></h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {alerts.map((alert, index) => (
              <div key={index} className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <Bell size={32} className="mx-auto mb-3 text-[#228296]" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">{alert.type}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{alert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Security */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">Benefits</h3>
            <ul className="space-y-2 dark:text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />No internet required</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />Works on any mobile phone</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />24x7 availability</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />Free SMS service</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />Supports 11 languages</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">Security Features</h3>
            <ul className="space-y-2 dark:text-gray-400">
              <li className="flex items-center gap-2"><Shield size={16} className="text-green-500" />Two-factor authentication</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-green-500" />Sensitive data masked in SMS</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-green-500" />No financial transactions via SMS</li>
              <li className="flex items-center gap-2"><Shield size={16} className="text-green-500" />End-to-end encryption</li>
            </ul>
          </div>
        </div>

        {/* Important Notes */}
        <div className="p-4 mt-8 border-l-4 border-yellow-400 rounded bg-yellow-50">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-800">Important Notes:</p>
              <ul className="mt-1 space-y-1 text-sm text-yellow-700">
                <li>• Standard SMS charges may apply as per your mobile operator</li>
                <li>• Register your mobile number at your home branch</li>
                <li>• Never share your MPIN or OTP with anyone</li>
                <li>• For complaints, SMS "HELP" to 5676766</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsBanking;