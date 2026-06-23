import React from 'react';
import { 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  Mail, 
  Shield,
  CheckCircle,
  Users,
  Server,
  AlertCircle,
  Download,
  Trash2
} from 'lucide-react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-20 mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
            <Lock size={16} className="mr-2" />
            Your Privacy Matters
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We are committed to protecting your personal information and privacy
          </p>
          <p className="mt-2 text-sm text-gray-400">Effective Date: {currentDate}</p>
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
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 top-24">
              <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-300">Privacy Contents</h3>
              <ul className="space-y-2 ">
                <li><a href="#info-collect" className="flex items-center gap-2 text-gray-600 dark:text-gray-300  hover:text-[#228296] transition"><Database size={16} /> Information We Collect</a></li>
                <li><a href="#info-use" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition"><Eye size={16} /> How We Use Information</a></li>
                <li><a href="#info-share" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition"><Users size={16} /> Information Sharing</a></li>
                <li><a href="#cookies" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition"><Cookie size={16} /> Cookies Policy</a></li>
                <li><a href="#security" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition"><Shield size={16} /> Data Security</a></li>
                <li><a href="#rights" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition"><CheckCircle size={16} /> Your Rights</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Information Collection */}
              <div id="info-collect" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Database className="text-[#228296]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">We collect various types of information to provide and improve our services:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">Personal Information</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Full Name & Date of Birth</li>
                        <li>• Contact Information (Email, Phone)</li>
                        <li>• Address Proof (Aadhar, PAN)</li>
                        <li>• Bank Account Details</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">Technical Information</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• IP Address & Device Info</li>
                        <li>• Browser Type & Version</li>
                        <li>• Pages Visited & Time Spent</li>
                        <li>• Cookies & Tracking Data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div id="info-use" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Eye className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">How We Use Your Information</h2>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Account Management</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Create and manage your banking accounts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Transaction Processing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Process deposits, withdrawals, and transfers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Customer Support</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Respond to inquiries and provide assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Legal Compliance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comply with banking regulations and laws</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div id="info-share" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Information Sharing</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                  <ul className="pl-6 space-y-2 text-gray-600 list-disc dark:text-gray-400">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>With service providers who assist our operations</li>
                    <li>To protect our rights and prevent fraud</li>
                  </ul>
                  <div className="p-4 border-l-4 border-yellow-500 rounded bg-yellow-50">
                    <p className="text-sm text-yellow-800">
                      <strong>Third-Party Services:</strong> We may share data with trusted partners for payment processing, KYC verification, and customer support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies Policy */}
              <div id="cookies" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Cookie className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Cookies Policy</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">We use cookies and similar tracking technologies to enhance your browsing experience:</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Essential Cookies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Required for website functionality</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Help us understand user behavior</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Preference Cookies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Remember your settings</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-300">Security Cookies</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400" >Protect against fraud</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div id="security" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Data Security</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">We implement robust security measures to protect your data:</p>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="p-3 text-center rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Lock size={24} className="mx-auto mb-2 text-[#228296]" />
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">256-bit Encryption</p>
                    </div>
                    <div className="p-3 text-center rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Server size={24} className="mx-auto mb-2 text-[#228296]" />
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">Secure Servers</p>
                    </div>
                    <div className="p-3 text-center rounded-lg bg-gray-50 dark:bg-gray-800">
                      <AlertCircle size={24} className="mx-auto mb-2 text-[#228296]" />
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">24/7 Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div id="rights" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <CheckCircle className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Your Data Rights</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-400">You have the following rights regarding your personal information:</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2 p-2">
                      <Download size={16} className="text-[#228296]" />
                      <span className='text-gray-800 dark:text-gray-400'>Right to Access your data</span>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                      <Trash2 size={16} className="text-red-500" />
                      <span className='text-gray-800 dark:text-gray-400'>Right to Delete your data</span>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                      <Mail size={16} className="text-[#228296]" />
                      <span className='text-gray-800 dark:text-gray-400'> Right to Data Portability</span>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                      <AlertCircle size={16} className="text-yellow-500" />
                      <span className='text-gray-800 dark:text-gray-400'>Right to Rectification</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="p-6 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
                <h3 className="mb-2 text-xl font-bold">Privacy Questions?</h3>
                <p className="mb-4">Contact our Data Protection Officer for privacy-related concerns</p>
                <a href="mailto:privacy@ncosl.com" className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg transition">
                  <Mail size={18} /> privacy@ncosl.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;