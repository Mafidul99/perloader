import React from 'react';
import { 
  AlertTriangle, 
  Shield, 
  FileText, 
  ExternalLink, 
  Info, 
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Building2,
  Globe
} from 'lucide-react';

const Disclaimer = () => {
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
        <div className="container relative px-4 pt-10 pb-24 mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
            <AlertTriangle size={16} className="mr-2" />
            Legal Information
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Disclaimer</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Please read this disclaimer carefully before using our website or services
          </p>
          <p className="mt-2 text-sm text-gray-400">Last Updated: {currentDate}</p>
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
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 top-24">
              <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-300">Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#general" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition">
                    <FileText size={16} /> General Information
                  </a>
                </li>
                <li>
                  <a href="#accuracy" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition">
                    <Info size={16} /> Accuracy of Information
                  </a>
                </li>
                <li>
                  <a href="#liability" className="flex items-center gap-2 text-gray-600  dark:text-gray-300 hover:text-[#228296] transition">
                    <Shield size={16} /> Limitation of Liability
                  </a>
                </li>
                <li>
                  <a href="#external" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition">
                    <ExternalLink size={16} /> External Links
                  </a>
                </li>
                <li>
                  <a href="#changes" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#228296] transition">
                    <Clock size={16} /> Changes to Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* General Information */}
              <div id="general" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="text-[#228296]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">General Information</h2>
                </div>
                <div className="space-y-3 prose text-gray-600 dark:text-gray-400 max-w-none">
                  <p>
                    The information provided on the NCOSL (Nofino Co-Operative Credit Society Ltd) website is for general informational purposes only. 
                    All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, 
                    regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                  </p>
                  <div className="p-4 border-l-4 border-yellow-500 rounded bg-yellow-50">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> This disclaimer governs your use of our website. By using our website, you accept this disclaimer in full.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accuracy of Information */}
              <div id="accuracy" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Info className="text-green-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Accuracy of Information</h2>
                </div>
                <div className="space-y-3 prose text-gray-600 dark:text-gray-400 max-w-none">
                  <p>
                    While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, 
                    express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, 
                    products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li>Interest rates are subject to change as per RBI guidelines</li>
                    <li>Terms and conditions apply to all banking products</li>
                    <li>Loan approvals are subject to credit assessment</li>
                    <li>Investment products are subject to market risks</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div id="liability" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Limitation of Liability</h2>
                </div>
                <div className="space-y-3 prose text-gray-600 dark:text-gray-400 max-w-none">
                  <p>
                    In no event shall NCOSL be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, 
                    whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the website or the contents of the website.
                  </p>
                  <div className="grid gap-4 mt-4 md:grid-cols-2">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <XCircle className="mb-2 text-red-500" size={20} />
                      <p className="text-sm text-gray-800 dark:text-gray-300">Loss of profits or revenue</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <XCircle className="mb-2 text-red-500" size={20} />
                      <p className="text-sm text-gray-800 dark:text-gray-300">Loss of data or business interruption</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <XCircle className="mb-2 text-red-500" size={20} />
                      <p className="text-sm text-gray-800 dark:text-gray-300">Unauthorized access to data</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <XCircle className="mb-2 text-red-500" size={20} />
                      <p className="text-sm text-gray-800 dark:text-gray-300">Third-party claims or damages</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* External Links */}
              <div id="external" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <ExternalLink className="text-purple-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">External Links</h2>
                </div>
                <div className="space-y-3 prose text-gray-600 dark:text-gray-400 max-w-none">
                  <p>
                    Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, 
                    relevance, timeliness, or completeness of any information on these external websites.
                  </p>
                  <div className="p-3 rounded-lg bg-blue-50">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Once you leave our website, we have no control over the content and practices of other sites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Disclaimer */}
              <div id="changes" className="p-6 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Changes to Disclaimer</h2>
                </div>
                <div className="space-y-3 prose text-gray-600 dark:text-gray-400 max-w-none">
                  <p>
                    We reserve the right to update or change our disclaimer at any time. You should check this page periodically for changes. 
                    Your continued use of the website after we post any modifications will constitute your acknowledgment of the modifications 
                    and your consent to abide and be bound by the modified disclaimer.
                  </p>
                  <div className="flex items-center justify-between p-4 mt-4 rounded-lg bg-gray-50">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">Current Version</p>
                      <p className="text-xs text-gray-500">Version 1.0 - {currentDate}</p>
                    </div>
                    <CheckCircle className="text-green-500" size={24} />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-6 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
                <h3 className="mb-2 text-xl font-bold">Have Questions?</h3>
                <p className="mb-4">If you have any questions about this disclaimer, please contact us</p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="tel:+917767006627" className="inline-flex items-center justify-center px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg transition">
                    Call Us Now
                  </a>
                  <a href="mailto:legal@ncosl.com" className="inline-flex items-center justify-center px-6 py-2 font-semibold transition border-2 border-white rounded-lg hover:bg-white/10">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;