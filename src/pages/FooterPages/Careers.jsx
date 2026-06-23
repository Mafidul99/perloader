/* eslint-disable react-hooks/immutability */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Briefcase, MapPin, DollarSign, Clock, Users, Send, Search, Filter, GraduationCap, Heart, Award, X } from 'lucide-react';

const MySwal = withReactContent(Swal);

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Relationship Manager',
      department: 'Banking',
      location: 'Mumbai',
      experience: '2-5 years',
      salary: '₹4-6 LPA',
      type: 'Full-time',
      openings: 3,
      description: 'Manage customer relationships, cross-sell banking products, and achieve business targets.',
      requirements: ['MBA in Finance', '2+ years banking experience', 'Excellent communication skills']
    },
    {
      id: 2,
      title: 'Software Developer',
      department: 'IT',
      location: 'Pune',
      experience: '3-6 years',
      salary: '₹6-10 LPA',
      type: 'Full-time',
      openings: 2,
      description: 'Develop and maintain banking applications, work on React and Node.js projects.',
      requirements: ['B.Tech/MCA', '3+ years in React/Node.js', 'Knowledge of banking domain']
    },
    {
      id: 3,
      title: 'Customer Support Executive',
      department: 'Customer Service',
      location: 'Ahmedabad',
      experience: '1-3 years',
      salary: '₹2.5-3.5 LPA',
      type: 'Full-time',
      openings: 5,
      description: 'Handle customer queries, resolve complaints, and provide excellent service.',
      requirements: ['Graduate', 'Good communication skills', 'Basic computer knowledge']
    },
    {
      id: 4,
      title: 'Branch Manager',
      department: 'Banking',
      location: 'Delhi',
      experience: '7-10 years',
      salary: '₹10-15 LPA',
      type: 'Full-time',
      openings: 1,
      description: 'Oversee branch operations, manage team, and drive business growth.',
      requirements: ['MBA/PGDM', '7+ years banking experience', 'Leadership skills']
    },
    {
      id: 5,
      title: 'Credit Analyst',
      department: 'Finance',
      location: 'Hyderabad',
      experience: '2-4 years',
      salary: '₹5-7 LPA',
      type: 'Full-time',
      openings: 2,
      description: 'Analyze loan applications, assess creditworthiness, and prepare reports.',
      requirements: ['CA/MBA Finance', '2+ years credit analysis experience', 'Analytical skills']
    },
    {
      id: 6,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Bangalore',
      experience: '1-3 years',
      salary: '₹3-4.5 LPA',
      type: 'Full-time',
      openings: 3,
      description: 'Plan marketing campaigns, manage social media, and increase brand awareness.',
      requirements: ['MBA Marketing', 'Creative thinking', 'Digital marketing knowledge']
    }
  ];

  const departments = ['all', ...new Set(jobs.map(job => job.department))];
  const locations = ['all', ...new Set(jobs.map(job => job.location))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setApplicationData({
      ...applicationData,
      resume: e.target.files[0]
    });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Create a FormData object for proper file and data handling
    const formData = new FormData();
    formData.append('jobTitle', selectedJob.title);
    formData.append('jobId', selectedJob.id);
    formData.append('fullName', applicationData.fullName);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    if (applicationData.resume) {
      formData.append('resume', applicationData.resume);
    }
    formData.append('coverLetter', applicationData.coverLetter);
    
    // Log the submission for demo purposes
    console.log('Application submitted for job:', selectedJob.title);
    console.log('Applicant details:', {
      job: selectedJob.title,
      ...applicationData,
      resume: applicationData.resume?.name || 'No file selected'
    });
    
    MySwal.fire({
      icon: 'success',
      title: 'Application Submitted!',
      html: `
        <div style="text-align: left;">
          <p>Your application for <strong>${selectedJob.title}</strong> has been submitted successfully.</p>
          <p>We will contact you at <strong>${applicationData.email}</strong> soon.</p>
        </div>
      `,
      confirmButtonColor: '#228296',
      confirmButtonText: 'Close',
      background: '#ffffff',
      backdrop: 'rgba(0, 0, 0, 0.4)',
      timer: 5000,
      timerProgressBar: true,
    });
    
    // Reset form and close modal
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
    handleCloseModal();
  };

  const benefits = [
    { icon: <Heart size={24} />, title: 'Health Insurance', desc: 'Medical coverage for you and family' },
    { icon: <Award size={24} />, title: 'Performance Bonus', desc: 'Annual performance-based incentives' },
    { icon: <GraduationCap size={24} />, title: 'Learning & Development', desc: 'Regular training programs' },
    { icon: <Users size={24} />, title: 'Great Work Culture', desc: 'Collaborative and inclusive environment' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85] py-20">
        <div className="container px-4 mx-auto text-center text-white">
          <Briefcase size={48} className="mx-auto mb-2" />
          <h1 className="mb-2 text-4xl font-bold">Join Our Team</h1>
          <p className="mb-3 text-lg text-white/90">Build your career with India's most trusted financial institution</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg transition"
            >
              View Openings
            </button>
            <button 
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 transition border border-white rounded-lg hover:bg-white/10"
            >
              Why Join Us
            </button>
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
        {/* Benefits Section */}
        <div id="benefits" className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Why Work With Us?</h2>
          <p className="mb-10 text-center text-gray-600 dark:text-gray-300">We offer great benefits and a positive work environment</p>
          <div className="grid gap-6 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 text-center transition rounded-lg shadow-md dark:bg-gray-900 bg-slate-50 hover:shadow-lg">
                <div className="mb-3 text-[#228296] flex justify-center">{benefit.icon}</div>
                <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-200">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Search Filters */}
        <div className="p-6 mb-8 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Search Jobs</label>
              <div className="relative">
                <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-400 rounded-lg focus:ring-2 focus:ring-[#228296] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:outline-none dark:bg-gray-800 dark:text-gray-400"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept === 'all' ? 'All Departments' : dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:outline-none dark:bg-gray-800 dark:text-gray-400"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc === 'all' ? 'All Locations' : loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div id="job-listings" className="mb-12 space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center rounded-lg shadow dark:bg-gray-900 bg-slate-50">
              <Briefcase size={48} className="mx-auto mb-4 text-gray-400 dark:text-gray-200" />
              <h3 className="text-xl font-semibold text-gray-800">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search filters</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div key={job.id} className="p-6 transition rounded-lg shadow-md dark:bg-gray-900 bg-slate-50 hover:shadow-lg">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.experience}</span>
                      <span className="flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">{job.type}</span>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{job.openings} openings</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{job.description}</p>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Requirements:</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside dark:text-gray-300">
                    {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>
                <button
                  onClick={() => handleApply(job)}
                  className="px-6 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition hover:opacity-90"
                >
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Application Modal - Fully Working Popup */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-full p-4">
            <div className="relative w-full max-w-2xl transition-all transform bg-white shadow-2xl rounded-xl">
              {/* Modal Header with Gradient */}
              <div className="sticky top-0 flex justify-between items-center p-5 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-xl">
                <div>
                  <h2 className="text-xl font-bold">Apply for {selectedJob.title}</h2>
                  <p className="mt-1 text-sm text-white/80">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button 
                  onClick={handleCloseModal} 
                  className="p-1 text-white transition-colors rounded-lg hover:bg-white/20"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Modal Body - Form */}
              <form onSubmit={handleSubmitApplication} className="p-6 space-y-5 dark:bg-gray-900 bg-slate-50">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={applicationData.fullName} 
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition dark:bg-gray-800 dark:text-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={applicationData.email} 
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition dark:bg-gray-800 dark:text-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={applicationData.phone} 
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition dark:bg-gray-800 dark:text-gray-300"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Resume (PDF/DOC/DOCX) *</label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange} 
                      required 
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#228296] dark:bg-gray-800 dark:text-gray-300 file:text-white hover:file:bg-[#1a6b7a] transition cursor-pointer"
                    />
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-400">Max file size: 5MB</p>
                  </div>
                </div>
                
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Cover Letter</label>
                  <textarea 
                    name="coverLetter" 
                    rows="4" 
                    value={applicationData.coverLetter} 
                    onChange={handleInputChange} 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:text-gray-300 focus:border-[#228296] outline-none resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  ></textarea>
                </div>
                
                <div className="p-4 rounded-lg dark:bg-gray-800 bg-slate-50">
                  <p className="text-xs text-gray-500 dark:text-gray-300">
                    By submitting this application, you agree to our <a href="/privacy-policy" className="text-[#228296] hover:underline">Privacy Policy</a> and consent to being contacted regarding this job opportunity.
                  </p>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button 
                    type="submit" 
                    className="flex-1 py-2.5 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] font-semibold hover:shadow-lg transition hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Application
                  </button>
                  <button 
                    type="button" 
                    onClick={handleCloseModal} 
                    className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:bg-gray-800 dark:text-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;