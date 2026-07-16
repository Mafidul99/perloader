import React, { useState } from 'react';
import { Phone, Mail, IdCard, LogIn, User, X } from 'lucide-react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import MainLogoWeb from '../../assets/SVG_website_logo.svg';
  

const ContactBar = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login attempt:', loginData);
    // For demo purposes - replace with actual API call
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      setLoginData({ username: '', password: '' });
      toast.success('Login successful! Welcome back. ');
    }
    navigate('/');
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration attempt:', registrationData);
    // For demo purposes - replace with actual API call
    if (registrationData.fullName && registrationData.email && registrationData.password && registrationData.password === registrationData.confirmPassword) {
      setIsLoggedIn(true);
      setIsRegistrationModalOpen(false);
      setRegistrationData({ fullName: '', email: '', password: '', confirmPassword: '' });
      toast.success('Registration successful! Please log in. ');
    }
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
  };

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistrationInputChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  });

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    console.log('Forgot Password attempt:', forgotPasswordData);
    // For demo purposes - replace with actual API call
    if (forgotPasswordData.email) {
      setIsForgotPasswordModalOpen(false);
      setForgotPasswordData({ email: '' });
      toast.info('If an account with that email exists, a password reset link has been sent. Please check your inbox.');
    }
    // Navigation to the forgot password page or API call can be implemented here
    navigate('/');
  };

  const handleForgotPasswordInputChange = (e) => {
    setForgotPasswordData({
      ...forgotPasswordData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full px-10 py-2 mx-auto shadow-md bg-slate-50 lg:px-24 md:px-10">
        <div className="flex items-center">
          <img className="w-auto h-16" src={MainLogoWeb} alt="Main Logo" />
        </div>
        
        <div className="hidden space-x-6 text-sm text-gray-700 md:flex">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#228296]" />
            <a href="tel:+917767006627" className="hover:text-[#6f3c85] transition-colors">
              +91 7767006627
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#228296]" />
            <a href="mailto:info@shantishwar.com" className="hover:text-[#6f3c85] transition-colors">
              info@shantishwar.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IdCard size={16} className="text-[#228296]" />
            <span>Reg No: MSCS/CR/1521/2024</span>
          </div>
        </div>

        {/* Login/User Button */}
        <div className="flex items-center">
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105"
            >
              <LogIn size={16} />
              <span>Login</span>
            </button>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg">
                <User size={16} />
                <span>My Account</span>
              </button>
              {/* Dropdown menu for logged-in user */}
              <div className="absolute right-0 hidden w-48 mt-2 bg-white rounded-md shadow-lg group-hover:block">
                <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Dashboard
                </a>
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </a>
                <a href="/transactions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Transactions
                </a>
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900">
            {/* Close button */}
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-4">
                <img className="w-auto h-12" src={MainLogoWeb} alt="Main Logo" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Welcome Back</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Please login to your account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Username / Email
                </label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your username or email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#228296] rounded focus:ring-[#228296]" />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-200">Remember me</span>
                </label>
                {/* <a href="#" className="text-sm text-[#228296] hover:text-[#6f3c85] transition-colors">
                  Forgot Password?
                </a> */}
                <button
                  onClick={() => {
                    setIsLoginModalOpen(false);
                    setIsForgotPasswordModalOpen(true);
                  }}
                  className="text-sm text-[#228296] hover:text-[#6f3c85] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 font-semibold"
              >
                Sign In
              </button>
            </form>

            

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setIsLoginModalOpen(false);
                    setIsRegistrationModalOpen(true);
                  }}
                  className="font-semibold text-[#228296] hover:text-[#6f3c85] transition-colors"
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* forgot Password */}
      {isForgotPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900">
            {/* Close button */}
            <button
              onClick={() => setIsForgotPasswordModalOpen(false)}
              className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-gray-600"
            >
              <X size={20} />
              </button>
              <div className="mb-6 text-center">
                <div className="flex justify-center mb-4">
                  <img className="w-auto h-12" src={MainLogoWeb} alt="Main Logo" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Forgot Password</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Enter your email to reset your password</p>
              </div>

              <form className="space-y-4" onSubmit={handleForgotPasswordSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={forgotPasswordData.email}
                    onChange={handleForgotPasswordInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  We will send you an email with instructions to reset your password.
                </div>

                <button
                  type="submit"

                  className="w-full py-2 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 font-semibold"
                >
                  Reset Password
                </button>
                <button
                  onClick={() => {
                    setIsForgotPasswordModalOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="w-full py-2 font-semibold text-gray-700 transition-all duration-300 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Back to Login
                </button>
              </form>
            
            </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegistrationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900">
            {/* Close button */}
            <button
              onClick={() => setIsRegistrationModalOpen(false)}
              className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-4">
                <img className="w-auto h-12" src={MainLogoWeb} alt="Main Logo" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Create Account</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Join us today</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleRegistration} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={registrationData.fullName}
                  onChange={handleRegistrationInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={registrationData.password}
                  onChange={handleRegistrationInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registrationData.confirmPassword}
                  onChange={handleRegistrationInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent outline-none transition-all"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 font-semibold"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setIsRegistrationModalOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="font-semibold text-[#228296] hover:text-[#6f3c85] transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ContactBar;