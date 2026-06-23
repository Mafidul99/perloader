import React, { useState } from 'react';
import { Search, MapPin, Building, Copy, CheckCircle, Download, Printer, Briefcase } from 'lucide-react';

const IFSCCode = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [copied, setCopied] = useState(false);
  const [filterState, setFilterState] = useState('all');

  const branches = [
    { 
      id: 1,
      ifsc: 'NCOS0000001',
      branch: 'Head Office',
      address: 'N-4 Cidco, Near Kamgar Chowk, High Court Road, Chh. Sambhajinagar',
      city: 'Chh. Sambhajinagar',
      state: 'Maharashtra',
      district: 'Chh. Sambhajinagar',
      micr: '431002001',
      phone: '0240-2345678',
      email: 'ho@ncosl.com',
      manager: 'Mr. Rajesh Sharma'
    },
    {
      id: 2,
      ifsc: 'NCOS0000002',
      branch: 'MG Road Branch',
      address: 'MG Road, Near Gandhi Maidan, Patna',
      city: 'Patna',
      state: 'Bihar',
      district: 'Patna',
      micr: '800002001',
      phone: '0612-2345678',
      email: 'patna@ncosl.com',
      manager: 'Mrs. Priya Singh'
    },
    {
      id: 3,
      ifsc: 'NCOS0000003',
      branch: 'Banjara Hills',
      address: 'Road No. 12, Banjara Hills, Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      district: 'Hyderabad',
      micr: '500002001',
      phone: '040-2345678',
      email: 'hyderabad@ncosl.com',
      manager: 'Mr. Amit Kumar'
    },
    {
      id: 4,
      ifsc: 'NCOS0000004',
      branch: 'Koregaon Park',
      address: 'North Main Road, Koregaon Park, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      district: 'Pune',
      micr: '411002001',
      phone: '020-2345678',
      email: 'pune@ncosl.com',
      manager: 'Ms. Sneha Patil'
    },
    {
      id: 5,
      ifsc: 'NCOS0000005',
      branch: 'Salt Lake City',
      address: 'Sector V, Salt Lake City, Kolkata',
      city: 'Kolkata',
      state: 'West Bengal',
      district: 'Kolkata',
      micr: '700002001',
      phone: '033-2345678',
      email: 'kolkata@ncosl.com',
      manager: 'Mr. Sudipto Das'
    },
    {
      id: 6,
      ifsc: 'NCOS0000006',
      branch: 'Connaught Place',
      address: 'Outer Circle, Connaught Place, New Delhi',
      city: 'New Delhi',
      state: 'Delhi',
      district: 'Delhi',
      micr: '110002001',
      phone: '011-2345678',
      email: 'delhi@ncosl.com',
      manager: 'Mr. Vikram Singh'
    }
  ];

  const states = ['all', ...new Set(branches.map(b => b.state))];
  const filteredBranches = branches.filter(branch => {
    const matchesSearch = searchTerm === '' || 
                          branch.ifsc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          branch.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          branch.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = filterState === 'all' || branch.state === filterState;
    return matchesSearch && matchesState;
  });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85] py-20">
        <div className="container px-4 pb-16 mx-auto text-center text-white">
          <Building size={48} className="mx-auto mb-2" />
          <h1 className="mb-2 text-4xl font-bold">Find IFSC Code</h1>
          <p className="text-lg text-white/90">Search for NCOSL bank branch IFSC codes and MICR codes</p>
          
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
        {/* Search Bar */}
        <div className="p-6 mb-8 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Search by IFSC Code / Branch / City</label>
              <div className="relative">
                <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
                <input
                  type="text"
                  placeholder="Enter IFSC code, branch name or city"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296]"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Filter by State</label>
              <select
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:text-gray-300"
              >
                {states.map(state => <option key={state} value={state}>{state === 'all' ? 'All States' : state}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Actions */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-200">Found {filteredBranches.length} branch(es)</p>
          <div className="flex gap-3">
            <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Printer size={16} /> Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        {/* Branches List */}
        <div className="space-y-4">
          {filteredBranches.map((branch) => (
            <div key={branch.id} className="overflow-hidden transition rounded-lg shadow-md dark:bg-gray-900 bg-slate-50 hover:shadow-lg">
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{branch.branch}</h3>
                      <span className="px-2 py-1 text-xs text-blue-700 bg-blue-100 rounded-full">{branch.ifsc}</span>
                      <button onClick={() => copyToClipboard(branch.ifsc)} className="text-gray-400 hover:text-[#228296]">
                        {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{branch.address}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400"><MapPin size={14} /> {branch.city}, {branch.state}</span>
                      <span className="text-gray-600 dark:text-gray-400">MICR: {branch.micr}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBranch(selectedBranch?.id === branch.id ? null : branch)}
                    className="px-4 py-1 text-sm text-[#228296] border border-[#228296] rounded-lg hover:bg-[#228296] hover:text-white transition"
                  >
                    Details
                  </button>
                </div>

                {selectedBranch?.id === branch.id && (
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><span className="text-sm text-gray-500 dark:text-gray-200">Phone:</span> <span className="block font-medium text-gray-800 dark:text-gray-300">{branch.phone}</span></div>
                      <div><span className="text-sm text-gray-500 dark:text-gray-200">Email:</span> <span className="block font-medium text-gray-800 dark:text-gray-300">{branch.email}</span></div>
                      <div><span className="text-sm text-gray-500 dark:text-gray-200">Branch Manager:</span> <span className="block font-medium text-gray-800 dark:text-gray-300">{branch.manager}</span></div>
                      <div><span className="text-sm text-gray-500 dark:text-gray-200">District:</span> <span className="block font-medium text-gray-800 dark:text-gray-300">{branch.district}</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* What is IFSC Code Section */}
        <div className="p-6 mt-12 rounded-lg shadow-md bg-blue-50 dark:bg-gray-900">
          <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-200">What is IFSC Code?</h3>
          <p className="mb-3 text-gray-600 dark:text-gray-300">IFSC (Indian Financial System Code) is an 11-character alphanumeric code used to identify bank branches for electronic payment applications like NEFT, RTGS, and IMPS.</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Structure:</strong> First 4 characters represent the bank (NCOS), 5th character is always 0, and last 6 characters identify the specific branch.</p>
        </div>
      </div>
    </div>
  );
};

export default IFSCCode;