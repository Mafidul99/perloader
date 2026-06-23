/* eslint-disable react-hooks/immutability */
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Calendar,
  MessageCircle,
  Globe,
  LinkIcon,
} from "lucide-react";
import {  FaTwitter, FaFacebookF} from "react-icons/fa";

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const membersPerPage = 6;

  const leadershipTeam = [
    {
      id: 1,
      name: "Shri. Rajendra Patil",
      position: "Chairman & Managing Director",
      experience: "35+ years in Banking",
      education: "MBA, Banking & Finance",
      achievements: "Banking Excellence Award 2020",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      email: "rajendra.patil@shantishwar.com",
      phone: "+91 98765 43210",
      linkedin: "#",
      bio: "Visionary leader with over three decades of experience in the banking sector. Pioneered digital transformation initiatives across multiple organizations. Under his leadership, Shantishwar Bank has grown exponentially, setting new benchmarks in customer service and operational excellence.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Mumbai, India",
      joinedDate: "January 2005",
      languages: ["English", "Hindi", "Marathi"],
    },
    {
      id: 2,
      name: "Smt. Anjali Deshmukh",
      position: "Chief Executive Officer",
      experience: "28+ years in Banking",
      education: "CA, IIM Ahmedabad",
      achievements: "Women in Banking Leadership Award",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      email: "anjali.deshmukh@shantishwar.com",
      phone: "+91 98765 43211",
      linkedin: "#",
      bio: "Strategic leader focused on sustainable growth and customer-centric innovations. Transformed operational efficiency by 40%. Anjali has been instrumental in driving the bank's digital transformation journey and expanding its presence across new markets.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Pune, India",
      joinedDate: "March 2008",
      languages: ["English", "Hindi", "Marathi"],
    },
    {
      id: 3,
      name: "Shri. Vikram Singh",
      position: "Chief Financial Officer",
      experience: "25+ years in Finance",
      education: "CFA, CPA",
      achievements: "Best CFO Award 2022",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      email: "vikram.singh@shantishwar.com",
      phone: "+91 98765 43212",
      linkedin: "#",
      bio: "Financial expert with proven track record in risk management and regulatory compliance. Vikram has successfully navigated the bank through various economic cycles while maintaining strong financial health and stakeholder confidence.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Delhi, India",
      joinedDate: "June 2010",
      languages: ["English", "Hindi", "Punjabi"],
    },
    {
      id: 4,
      name: "Smt. Priya Sharma",
      position: "Head of Digital Banking",
      experience: "18+ years in Tech",
      education: "MTech, IIT Bombay",
      achievements: "Digital Innovator of the Year",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      email: "priya.sharma@shantishwar.com",
      phone: "+91 98765 43213",
      linkedin: "#",
      bio: "Tech visionary driving digital transformation and innovative banking solutions. Priya has led the development of cutting-edge mobile banking platforms and AI-driven customer service solutions that have revolutionized the banking experience.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Bangalore, India",
      joinedDate: "September 2012",
      languages: ["English", "Hindi", "Kannada"],
    },
    {
      id: 5,
      name: "Shri. Suresh Joshi",
      position: "Head of Operations",
      experience: "22+ years in Banking",
      education: "PGDM, XLRI",
      achievements: "Operational Excellence Award",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      email: "suresh.joshi@shantishwar.com",
      phone: "+91 98765 43214",
      linkedin: "#",
      bio: "Operations expert specializing in process optimization and customer service excellence. Suresh has implemented lean management practices that have significantly reduced turnaround times and improved overall efficiency across all branches.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Ahmedabad, India",
      joinedDate: "April 2007",
      languages: ["English", "Hindi", "Gujarati"],
    },
    {
      id: 6,
      name: "Smt. Meera Nair",
      position: "Head of Customer Relations",
      experience: "20+ years in Service",
      education: "MSW, TISS Mumbai",
      achievements: "Customer Service Excellence Award",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      email: "meera.nair@shantishwar.com",
      phone: "+91 98765 43215",
      linkedin: "#",
      bio: "Customer-centric leader building lasting relationships and trust with our clients. Meera has pioneered several customer feedback initiatives and loyalty programs that have set new standards in client satisfaction and retention.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Chennai, India",
      joinedDate: "November 2009",
      languages: ["English", "Hindi", "Tamil", "Malayalam"],
    },
    {
      id: 7,
      name: "Shri. Amit Kulkarni",
      position: "Chief Risk Officer",
      experience: "20+ years in Risk Management",
      education: "FRM, PRM",
      achievements: "Risk Management Professional of the Year",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      email: "amit.kulkarni@shantishwar.com",
      phone: "+91 98765 43216",
      linkedin: "#",
      bio: "Risk management specialist ensuring robust compliance and security frameworks. Amit has developed comprehensive risk assessment models that have strengthened the bank's resilience against emerging financial threats.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Hyderabad, India",
      joinedDate: "February 2011",
      languages: ["English", "Hindi", "Telugu", "Marathi"],
    },
    {
      id: 8,
      name: "Smt. Neha Gupta",
      position: "Head of HR",
      experience: "18+ years in HR",
      education: "MBA, HR",
      achievements: "Best HR Leader Award 2023",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      email: "neha.gupta@shantishwar.com",
      phone: "+91 98765 43217",
      linkedin: "#",
      bio: "Building a culture of excellence, diversity, and continuous learning. Neha has implemented innovative talent development programs and employee wellness initiatives that have made Shantishwar Bank one of the best places to work.",
      socialLinks: { twitter: "#", facebook: "#" },
      location: "Jaipur, India",
      joinedDate: "August 2013",
      languages: ["English", "Hindi", "Punjabi"],
    },
  ];

  // Pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = leadershipTeam.slice(
    indexOfFirstMember,
    indexOfLastMember,
  );
  const totalPages = Math.ceil(leadershipTeam.length / membersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
    document.body.style.overflow = "auto";
  };

  // Statistics
  const stats = [
    { icon: <Users size={24} />, value: "50+", label: "Team Members" },
    {
      icon: <Briefcase size={24} />,
      value: "25+",
      label: "Years Combined Experience",
    },
    { icon: <Award size={24} />, value: "100+", label: "Awards Won" },
    {
      icon: <TrendingUp size={24} />,
      value: "98%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-slate-50">
      <div className="py-10 mb-10 text-center ">
        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full">
          <Heart size={16} className="mr-2" />
          Our People, Our Pride
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-2 text-gray-600 dark:text-gray-400">
          Meet the visionaries driving Shantishwar Bank towards excellence with
          their expertise, dedication, and unwavering commitment to our mission.
        </p>
      </div>

      {/* Statistics Section */}
      <section className="relative pb-16 mt-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-500 transform shadow-xl dark:bg-gray-900 bg-slate-50 rounded-2xl hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 mb-4 text-white bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-full">
                  {stat.icon}
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300 md:text-4xl">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6f3c85] to-[#228296] mx-auto rounded-full"></div>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              A diverse team of banking professionals committed to your
              financial success
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative overflow-hidden transition-all duration-500 transform shadow-lg cursor-pointer dark:bg-gray-900 bg-slate-50 group rounded-2xl hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(member)}
              >
                {/* Badge */}
                <div className="absolute z-10 top-4 right-4">
                  <div className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Leadership
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-100">
                    <div className="flex space-x-3 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <a
                        href={member.linkedin}
                        className="p-2 bg-white rounded-full hover:bg-[#228296] hover:text-white transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon size={20} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-white rounded-full hover:bg-[#228296] hover:text-white transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8f4eac] mb-1 group-hover:text-[#228296] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#228296] font-semibold mb-4 text-sm">
                    {member.position}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-[#6f3c85]" />
                      <span className="text-gray-800 dark:text-gray-400">
                        {member.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-[#6f3c85]" />
                      <span className="text-gray-800 line-clamp-1 dark:text-gray-400">
                        {member.education}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-[#6f3c85]" />
                      <span className="text-gray-800 line-clamp-1 dark:text-gray-400">
                        {member.achievements}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="mt-4 w-full py-2 text-sm font-semibold text-[#228296] border border-[#228296] rounded-lg hover:bg-gradient-to-r hover:from-[#228296] hover:to-[#6f3c85] hover:text-white transition-all duration-300">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "dark:bg-gray-900 bg-slate-50 text-[#228296] hover:bg-gradient-to-r hover:from-[#228296] hover:to-[#6f3c85] hover:text-white shadow-md"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 font-semibold ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-[#6f3c85] to-[#228296] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "dark:bg-gray-900 bg-slate-50 text-[#228296] hover:bg-gradient-to-r hover:from-[#228296] hover:to-[#6f3c85] hover:text-white shadow-md"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-slate-50 dark:bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute z-20 p-2 transition-all duration-300 rounded-full shadow-lg bg-slate-50 top-4 right-4 hover:bg-gray-100 hover:scale-110 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <X size={20} className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* Header Section with Gradient Background */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#228296] to-[#6f3c85] opacity-90"></div>
              <div className="relative z-10 px-8 pt-12 pb-20 text-center md:px-12 md:pt-16 md:pb-24">
                <div className="inline-flex items-center justify-center mx-auto mb-4 overflow-hidden border-4 border-white rounded-full shadow-xl w-28 h-28 bg-white/10 backdrop-blur-sm">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  {selectedMember.name}
                </h3>
                <p className="text-xl text-white/90">{selectedMember.position}</p>
                <div className="flex justify-center mt-3 space-x-2">
                  <div className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-white/20 backdrop-blur-sm">
                    Leadership
                  </div>
                  {selectedMember.languages && selectedMember.languages.slice(0, 2).map((lang, idx) => (
                    <div key={idx} className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-white/20 backdrop-blur-sm">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
              {/* Curved bottom edge */}
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                  fill="white"
                  fillOpacity="0.1"
                />
              </svg>
            </div>

            {/* Content Section */}
            <div className="px-6 py-8 md:px-10 md:py-12">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Left Column - Personal Info */}
                <div className="md:col-span-1">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#228296]/5 to-[#6f3c85]/5">
                    <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                      <Users size={18} className="text-[#228296]" />
                      Personal Information
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <Mail size={16} className="text-[#228296]" />
                        <span className="text-sm break-all">{selectedMember.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <Phone size={16} className="text-[#228296]" />
                        <span className="text-sm">{selectedMember.phone}</span>
                      </div>
                      {selectedMember.location && (
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="text-[#228296]" />
                          <span className="text-sm">{selectedMember.location}</span>
                        </div>
                      )}
                      {selectedMember.joinedDate && (
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <Calendar size={16} className="text-[#228296]" />
                          <span className="text-sm">Joined: {selectedMember.joinedDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="p-5 mt-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                      <MessageCircle size={18} className="text-[#228296]" />
                      Connect & Follow
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href={selectedMember.linkedin}
                        className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-[#0077b5] rounded-full hover:scale-110 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkIcon size={18} />
                      </a>
                      <a
                        href={selectedMember.socialLinks?.twitter}
                        className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-[#1DA1F2] rounded-full hover:scale-110 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={18} />
                      </a>
                      <a
                        href={selectedMember.socialLinks?.facebook}
                        className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-[#1877F2] rounded-full hover:scale-110 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF size={18} />
                      </a>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full hover:scale-110 hover:shadow-lg"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Professional Details */}
                <div className="md:col-span-2">
                  {/* Biography */}
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-800 dark:text-white">
                      <Star size={18} className="text-[#228296]" />
                      Biography
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Professional Details Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#228296]/10 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={18} className="text-[#228296]" />
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Experience</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{selectedMember.experience}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#6f3c85]/10 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap size={18} className="text-[#6f3c85]" />
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Education</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{selectedMember.education}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#228296]/10 to-transparent sm:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Award size={18} className="text-[#228296]" />
                        <span className="font-semibold text-gray-700 dark:text-gray-200">Key Achievements</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{selectedMember.achievements}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-8 sm:flex-row">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] font-medium"
                    >
                      <Mail size={18} />
                      <span>Email {selectedMember.name.split(' ')[1]}</span>
                    </a>
                    <a
                      href={selectedMember.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-[#0077b5] border-2 border-[#0077b5] rounded-xl hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-[1.02] font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon size={18} />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;