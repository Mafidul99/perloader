import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  User,
  Mail,
  HelpCircle,
  MessageSquare,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  FileText,
  Headphones,
  Shield,
  ChevronRight,
  Star,
} from "lucide-react";

const MySwal = withReactContent(Swal);

const SupportTicket = () => {
  const [ticketData, setTicketData] = useState({
    fullName: "",
    email: "",
    phone: "",
    issueType: "General Inquiry",
    priority: "Medium",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Support ticket submitted:", ticketData);

    MySwal.fire({
      icon: "success",
      title:
        "<span style='color: #228296; font-weight: 700;'>Ticket Submitted Successfully!</span>",
      html: `
        <div style='text-align: center;'>
          <p style='color: #6b7280; font-size: 16px; margin-bottom: 10px;'>
            Your support ticket has been submitted successfully.
          </p>
          <div style='background: #f0fdf4; padding: 12px; border-radius: 12px; margin-top: 15px;'>
            <p style='color: #166534; font-size: 14px;'>
              <strong>Ticket ID:</strong> #${Math.floor(Math.random() * 1000000)}
            </p>
            <p style='color: #166534; font-size: 14px; margin-top: 5px;'>
              <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>
      `,
      confirmButtonColor: "#228296",
      confirmButtonText: "Close",
      background: "#ffffff",
      backdrop: "rgba(0, 0, 0, 0.4)",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      didOpen: (modal) => {
        modal.style.borderRadius = "20px";
        modal.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.2)";
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "px-8 py-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg font-semibold hover:shadow-lg transition-all",
      },
    });

    setTicketData({
      fullName: "",
      email: "",
      phone: "",
      issueType: "General Inquiry",
      priority: "Medium",
      message: "",
    });
    setIsSubmitting(false);
  };

  const issueTypes = [
    { value: "Account Help", label: "Account Help", icon: User },
    { value: "Technical Issue", label: "Technical Issue", icon: AlertCircle },
    { value: "Transaction Issue", label: "Transaction Issue", icon: FileText },
    { value: "Loan Inquiry", label: "Loan Inquiry", icon: HelpCircle },
    { value: "Feedback", label: "Feedback", icon: Star },
    { value: "General Inquiry", label: "General Inquiry", icon: HelpCircle },
  ];

  const priorityLevels = ["Low", "Medium", "High", "Urgent"];

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "Typically within 24 hours",
    },
    {
      question: "Can I track my ticket status?",
      answer: "Yes, you'll receive email updates",
    },
    {
      question: "Is support available 24/7?",
      answer: "Support available 9 AM to 6 PM, Mon-Sat",
    },
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-slate-50 via-[white] to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900 rounded-2xl">
              {/* Header */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#228296] to-[#6f3c85] p-6 md:p-8">
                <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full bg-white/10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 rounded-full bg-white/10"></div>

                <div className="relative flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Headphones size={28} className="text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Support Ticket
                  </h1>
                </div>
                <p className="max-w-md text-sm text-white/90 md:text-base">
                  Submit your query and our support team will get back to you as
                  soon as possible.
                </p>

                {/* Stats */}
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Clock size={14} />
                    <span>Response within 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle size={14} />
                    <span>100% Resolution</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={ticketData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                        size={18}
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={ticketData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                        size={18}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={ticketData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Priority Level
                    </label>
                    <div className="relative">
                      <AlertCircle
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                        size={18}
                      />
                      <select
                        name="priority"
                        value={ticketData.priority}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        {priorityLevels.map((priority) => (
                          <option key={priority} value={priority}>
                            {priority}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Issue Type *
                  </label>
                  <div className="relative">
                    <HelpCircle
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                      size={18}
                    />
                    <select
                      name="issueType"
                      value={ticketData.issueType}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      {issueTypes.map((issue) => (
                        <option key={issue.value} value={issue.value}>
                          {issue.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-4 text-slate-400 group-focus-within:text-[#228296] transition-colors"
                      size={18}
                    />
                    <textarea
                      name="message"
                      rows="6"
                      required
                      value={ticketData.message}
                      onChange={handleChange}
                      placeholder="Please describe your issue in detail..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-3.5 text-white rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center justify-center gap-2 group overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Submitting..." : "Submit Ticket"}
                  </span>
                  {!isSubmitting && (
                    <Send
                      size={18}
                      className="relative z-10 transition-transform group-hover:translate-x-1"
                    />
                  )}
                  {isSubmitting && (
                    <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin"></div>
                  )}
                </button>

                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  By submitting, you agree to our {" "}
                  <a href="/terms" className="text-[#228296] hover:underline">
                    Terms of Service
                  </a>{ " "}
                  and {" "}
                  <a href="/privacy-policy" className="text-[#228296] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            {/* Support Info Card */}
            <div className="bg-gradient-to-br from-[#228296]/10 to-[#6f3c85]/10 dark:from-[#228296]/20 dark:to-[#6f3c85]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-[#228296]" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  Need Immediate Help?
                </h3>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+917767006627"
                  className="flex items-center gap-3 p-3 transition bg-slate-100 dark:bg-gray-900 rounded-xl hover:shadow-md"
                >
                  <Phone size={20} className="text-[#6f3c85]" />
                  <div>
                    <p className="text-xs text-slate-500">Call Us Now</p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      +91 7767006627
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:support@ncosl.com"
                  className="flex items-center gap-3 p-3 transition bg-slate-100 dark:bg-gray-900 rounded-xl hover:shadow-md"
                >
                  <Mail size={20} className="text-[#228296]" />
                  <div>
                    <p className="text-xs text-slate-500">Email Support</p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      support@ncosl.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* FAQs Card */}
            <div className="p-6 shadow-lg bg-slate-50 dark:bg-gray-900 rounded-2xl">
              <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-slate-800 dark:text-white">
                <HelpCircle size={20} className="text-[#228296]" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between p-3 list-none transition rounded-lg cursor-pointer bg-slate-50 dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {faq.question}
                      </span>
                      <ChevronRight
                        size={16}
                        className="transition-transform text-slate-400 group-open:rotate-90"
                      />
                    </summary>
                    <p className="p-3 text-sm text-slate-600 dark:text-slate-400 border-l-2 border-[#228296] ml-3 mt-1">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-6 text-center shadow-lg bg-slate-50 dark:bg-gray-900 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full dark:bg-green-900/30">
                <Clock
                  size={32}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">
                Quick Response Time
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our support team strives to respond to all tickets within 24
                hours on business days.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20">
                  <Star size={20} className="text-yellow-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  Trusted Support
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  98% customer satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTicket;
