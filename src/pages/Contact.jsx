/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Navigation,
  Headphones,
  Globe,
  Building2,
  ChevronRight
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({
        submitted: true,
        success: true,
        // message: 'Thank you for contacting us! Our representative will get back to you within 24 hours.'
      });
      toast.success('Thank you for contacting us! Our representative will get back to you within 24 hours.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      details: [
        { label: 'Toll Free', value: '1800 123 4567', href: 'tel:18001234567' },
        { label: 'Support', value: '+91 7767006627', href: 'tel:+917767006627' },
        { label: 'WhatsApp', value: '+91 9876543210', href: 'https://wa.me/919876543210' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Addresses',
      details: [
        { label: 'General Inquiries', value: 'info@shantishwar.com', href: 'mailto:info@shantishwar.com' },
        { label: 'Support', value: 'support@shantishwar.com', href: 'mailto:support@shantishwar.com' },
        { label: 'Complaints', value: 'complaints@shantishwar.com', href: 'mailto:complaints@shantishwar.com' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office Locations',
      details: [
        { label: 'Head Office', value: 'Mandia, Mandia, Barpeta, Assam, India', href: '#' },
        { label: 'Branch Office', value: 'Mandia, Mandia, Barpeta, Assam, India', href: '#' },
        { label: 'Regional Office', value: 'Mandia, Mandia, Barpeta, Assam, India', href: '#' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM' },
        { label: 'Saturday', value: '9:00 AM - 2:00 PM' },
        { label: 'Sunday', value: 'Closed (24/7 online support)' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const branches = [
    {
      name: 'Head Office - Assam, India',
      address: 'Mandia, Mandia, Barpeta, Assam, India - 781308',
      phone: '+91 6002562417',
      email: 'ho@ncosl.com',
      timings: 'Mon-Sat: 9:00 AM - 6:00 PM',
      manager: 'Mr. Mafidul Islam'
    },
    {
      name: 'Mumbai Branch',
      address: 'Andheri East, Near Airport Road, Mumbai - 400099',
      phone: '+91 22 12345678',
      email: 'mumbai@shantishwar.com',
      timings: 'Mon-Sat: 9:30 AM - 5:30 PM',
      manager: 'Ms. Priya Patel'
    },
    {
      name: 'Pune Branch',
      address: 'FC Road, Shivajinagar, Pune - 411005',
      phone: '+91 20 12345678',
      email: 'pune@shantishwar.com',
      timings: 'Mon-Sat: 9:30 AM - 5:30 PM',
      manager: 'Mr. Suresh Kulkarni'
    },
    {
      name: 'Nashik Branch',
      address: 'College Road, Near CBS, Nashik - 422005',
      phone: '+91 253 1234567',
      email: 'nashik@shantishwar.com',
      timings: 'Mon-Sat: 9:30 AM - 5:30 PM',
      manager: 'Dr. Anjali Deshmukh'
    }
  ];

  const faqs = [
    {
      question: 'How do I open a new account?',
      answer: 'You can open an account online through our website or visit any of our branches with KYC documents. The process takes just 10 minutes!'
    },
    {
      question: 'What documents are required for KYC?',
      answer: 'PAN Card, Aadhar Card, Passport size photographs, and address proof are the primary documents required for account opening.'
    },
    {
      question: 'How can I check my account balance?',
      answer: 'You can check your balance through our mobile app, internet banking, or by calling our customer care number.'
    },
    {
      question: 'Is there any minimum balance requirement?',
      answer: 'We offer both zero-balance and regular savings accounts. Minimum balance requirements vary by account type.'
    },
    {
      question: 'How do I report a lost card?',
      answer: 'Immediately block your card through mobile banking or call our 24/7 helpline at 1800 123 4567.'
    },
    {
      question: 'What is the customer care timing?',
      answer: 'Our customer care is available 24/7 for emergency services. General inquiries are handled from 9 AM to 6 PM.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
              <MessageCircle size={16} className="mr-2" />
              We're Here to Help
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Have questions? We'd love to hear from you. Our team is here to provide 
              you with the best banking experience.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('branches').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
              >
                Find Branch
                <Navigation size={18} className="ml-2" />
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
        {/* Contact Info Cards */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="relative overflow-hidden transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 group hover:shadow-xl hover:-translate-y-2">
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${info.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex p-3 mb-4 rounded-lg bg-gradient-to-r ${info.color} text-white`}>
                  {info.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-300">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    detail.href ? (
                      <a 
                        key={idx} 
                        href={detail.href}
                        className="block text-sm text-gray-600 hover:text-[#228296] transition-colors dark:text-gray-400"
                      >
                        <span className="font-medium">{detail.label}:</span> {detail.value}
                      </a>
                    ) : (
                      <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{detail.label}:</span> {detail.value}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          {/* Contact Form */}
          <div id="contact-form" className="p-8 rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Send us a Message</h2>
              <p className="text-gray-600 dark:text-gray-400">Fill out the form below and we'll get back to you soon</p>
            </div>

            {/* {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                <div className="flex items-center gap-2">
                  {formStatus.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span>{formStatus.message}</span>
                </div>
              </div>
            )} */}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                  >
                    <option value="">Select subject</option>
                    <option>Account Opening</option>
                    <option>Loan Inquiry</option>
                    <option>Support Request</option>
                    <option>Complaint</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] font-semibold flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:scale-105'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Location */}
          <div className="overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50 ">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Find Us Here</h2>
              <p className="text-gray-600 dark:text-gray-400">Visit our head office or any branch near you</p>
            </div>
            <div className="relative bg-slate-100 h-80 dark:bg-gray-700">
              {/* Replace with actual Google Maps embed */}
              <iframe
                title="Bank Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.669109580349!2d90.95424887497715!3d26.272400487315082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37599bd0d6778d8d%3A0x9bb21e478b04061e!2sM%20Islam%20Computer%20service!5e0!3m2!1sen!2sin!4v1778143729724!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-700">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#228296] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Head Office:</p>
                  <p className="text-gray-600 dark:text-gray-400">Mandia, Mandia  <br />Barpeta, Assam, India - 781308</p>
                  <a href="#" className="inline-flex items-center gap-1 mt-2 text-sm text-[#228296] hover:underline">
                    Get Directions <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branches Section */}
        <div id="branches" className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center justify-center p-2 mb-4 bg-blue-100 rounded-lg">
              <Building2 size={24} className="text-[#228296]" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Our Branches</h2>
            <p className="text-gray-600 dark:text-gray-400">Visit any of our branches for personalized banking assistance</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 group hover:shadow-xl">
                <div className="h-2 bg-gradient-to-r from-[#228296] to-[#6f3c85]"></div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-300">{branch.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 text-[#228296] flex-shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-[#228296]" />
                      <a href={`tel:${branch.phone}`} className="hover:text-[#228296]">{branch.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-[#228296]" />
                      <a href={`mailto:${branch.email}`} className="hover:text-[#228296]">{branch.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#228296]" />
                      <span>{branch.timings}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 mt-2 border-t">
                      <Headphones size={16} className="text-[#228296]" />
                      <span className="font-medium">Branch Manager:</span>
                      <span>{branch.manager}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Find quick answers to common queries</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md dark:bg-gray-900">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-300">{faq.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`transform transition-transform duration-300 ${openFaq === index ? 'dark:text-gray-300 rotate-90' : 'dark:text-gray-300'}`}
                  />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 pb-4 text-gray-600 border-t dark:text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Support */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <Globe size={40} className="mx-auto mb-4" />
          <h2 className="mb-4 text-2xl font-bold">Connect With Us</h2>
          <p className="mb-6">Follow us on social media for latest updates, offers, and banking tips</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-3 transition-all rounded-full bg-white/20 hover:bg-white/30 hover:scale-110">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="p-3 transition-all rounded-full bg-white/20 hover:bg-white/30 hover:scale-110">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="p-3 transition-all rounded-full bg-white/20 hover:bg-white/30 hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="p-3 transition-all rounded-full bg-white/20 hover:bg-white/30 hover:scale-110">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;