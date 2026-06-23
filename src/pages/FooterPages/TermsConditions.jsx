import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  CreditCard, 
  UserCheck, 
  Shield,
  Clock,
  DollarSign,
  Home,
  Car,
  Briefcase,
  XCircle
} from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-20 mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
            <FileText size={16} className="mr-2" />
            Legal Agreement
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Terms & Conditions</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Please read these terms carefully before using our banking services
          </p>
          <p className="mt-2 text-sm text-gray-400">Last Updated: December 2024</p>
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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Account Terms */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UserCheck className="text-[#228296]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Account Terms & Conditions</h2>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>1. You must be at least 18 years old to open an account with NCOSL.</p>
              <p>2. You must provide accurate and complete information during registration.</p>
              <p>3. You are responsible for maintaining the security of your account credentials.</p>
              <p>4. You agree to notify us immediately of any unauthorized account access.</p>
              <p>5. We reserve the right to suspend or terminate accounts that violate our terms.</p>
            </div>
          </div>

          {/* Banking Services */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="text-green-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Banking Services</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <DollarSign className="text-[#228296] mb-2" size={24} />
                <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">Savings Account</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Minimum balance: ₹500</li>
                  <li>• Interest rate: As per RBI guidelines</li>
                  <li>• Free mobile banking included</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <Home className="text-[#228296] mb-2" size={24} />
                <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">Loan Products</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Subject to credit assessment</li>
                  <li>• Documentation required as per norms</li>
                  <li>• Interest rates vary by product</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transaction Terms */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="text-purple-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Transaction Terms</h2>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>• All transactions are subject to verification and approval.</p>
              <p>• Transaction limits apply as per account type and RBI guidelines.</p>
              <p>• We reserve the right to hold or reverse suspicious transactions.</p>
              <p>• Charges may apply for certain types of transactions.</p>
              <div className="p-3 rounded-lg bg-yellow-50">
                <AlertCircle size={16} className="inline mr-2 text-yellow-600" />
                <span className="text-sm text-gray-700">Transaction processing times may vary based on banking hours and holidays.</span>
              </div>
            </div>
          </div>

          {/* Fees & Charges */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <DollarSign className="text-red-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Fees & Charges</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100 dark:bg-gray-500 dark:text-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:text-gray-300">
                  <tr><td className="px-4 py-2">Account Opening</td><td className="px-4 py-2">Free</td></tr>
                  <tr><td className="px-4 py-2">Monthly Maintenance (Below Min Balance)</td><td className="px-4 py-2">₹100 + GST</td></tr>
                  <tr><td className="px-4 py-2">ATM Withdrawal (Beyond free limit)</td><td className="px-4 py-2">₹20 + GST</td></tr>
                  <tr><td className="px-4 py-2">Cheque Book (Additional)</td><td className="px-4 py-2">₹5 per leaf</td></tr>
                  <tr><td className="px-4 py-2">NEFT/RTGS/IMPS</td><td className="px-4 py-2">As per RBI guidelines</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Loan Terms */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Loan Terms</h2>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>• Loan approval is subject to credit assessment and document verification.</p>
              <p>• Interest rates are determined based on risk assessment and market conditions.</p>
              <p>• Late payment penalties apply as per loan agreement terms.</p>
              <p>• Prepayment charges may apply for certain loan products.</p>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-50">
                <Shield size={16} className="text-blue-600" />
                <span className="text-sm text-gray-900">All loans are governed by RBI guidelines and banking regulations.</span>
              </div>
            </div>
          </div>

          {/* Termination Clause */}
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <XCircle className="text-orange-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Account Termination</h2>
            </div>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>• Either party may terminate the account with written notice.</p>
              <p>• Outstanding dues must be cleared before account closure.</p>
              <p>• We may terminate accounts used for fraudulent activities.</p>
              <p>• Inactive accounts may be subject to dormancy charges.</p>
            </div>
          </div>

          {/* Acceptance */}
          <div className="p-6 border border-green-200 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex items-start gap-3">
              <CheckCircle size={24} className="text-green-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-gray-800">Acceptance of Terms</h3>
                <p className="mt-2 text-gray-600">
                  By using our website and banking services, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, 
                  please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;