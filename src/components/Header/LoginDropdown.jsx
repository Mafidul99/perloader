import { useState, useRef, useEffect } from 'react';
import { LogIn, ChevronDown, User, Shield, ExternalLink } from 'lucide-react';

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const loginOptions = [
    {
      id: 'admin',
      label: 'Admin Login',
      icon: Shield,
      url: 'https://ntccsl.nofinofinance.net/admin/login',
      description: 'Administrator access'
    },
    {
      id: 'user',
      label: 'User Login',
      icon: User,
      url: 'https://ntccsl.nofinofinance.net/login',
      description: 'Regular user access'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <LogIn size={18} />
        <span>Login</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`z-50 absolute right-0 w-56 mt-1 bg-slate-50 dark:bg-gray-900 rounded-xl shadow-2xl border border-slate-50 dark:border-gray-500 overflow-hidden transition-all duration-200 transform origin-top-right ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="py-1">
          {loginOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={option.id}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group hover:bg-gradient-to-r hover:from-[#228296]/10 hover:to-[#6f3c85]/10 ${
                  index !== loginOptions.length - 1 ? 'border-b border-slate-50 dark:border-gray-500' : ''
                }`}
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 group-hover:from-[#228296]/20 group-hover:to-[#6f3c85]/20 transition-colors">
                  <Icon size={18} className="text-[#228296]" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-700 group-hover:text-[#228296] transition-colors dark:text-gray-200">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-400">
                    {option.description}
                  </div>
                </div>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-[#6f3c85] transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-slate-100 dark:border-gray-500 bg-slate-50 dark:bg-gray-900">
          <p className="text-xs text-center text-gray-400 dark:text-gray-400">
            Secure access portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDropdown;