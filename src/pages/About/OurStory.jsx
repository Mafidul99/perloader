// pages/OurStory.jsx
import React, { useEffect, useState } from "react";
import {
  Clock,
  Award,
  Users,
  Building,
  Target,
  Heart,
  TrendingUp,
  Shield,
  ChevronRight,
  Star,
  Quote,
  Sparkles,
} from "lucide-react";

const OurStory = () => {
  const [animatedStats, setAnimatedStats] = useState({
    branches: 0,
    customers: 0,
    years: 0,
    awards: 0,
  });

  const milestones = [
    {
      year: "1995",
      title: "The Beginning",
      description:
        "Shantishwar Bank was founded with a vision to provide trusted banking services to the community.",
      icon: <Building size={28} />,
      color: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      year: "2000",
      title: "Expansion Phase",
      description:
        "Opened 5 new branches across the region, bringing banking services to rural areas.",
      icon: <TrendingUp size={28} />,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop",
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description:
        "Launched internet banking and mobile banking services for customer convenience.",
      icon: <Users size={28} />,
      color: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    },
    {
      year: "2015",
      title: "Awards & Recognition",
      description:
        'Received "Best Regional Bank" award for outstanding customer service.',
      icon: <Award size={28} />,
      color: "from-yellow-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1496262967815-132206e6004d?w=400&h=300&fit=crop",
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description:
        "Implemented contactless banking and supported local businesses during COVID-19.",
      icon: <Heart size={28} />,
      color: "from-red-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1584486188541-63b969ccc0d5?w=400&h=300&fit=crop",
    },
    {
      year: "2024",
      title: "Today & Beyond",
      description:
        "Serving 100,000+ customers with 25+ branches and innovative digital solutions.",
      icon: <Shield size={28} />,
      color: "from-[#6f3c85] to-[#228296]",
      image:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=300&fit=crop",
    },
  ];

  const stats = [
    {
      value: "25+",
      label: "Branches",
      icon: <Building size={36} />,
      key: "branches",
      target: 25,
    },
    {
      value: "100K+",
      label: "Happy Customers",
      icon: <Users size={36} />,
      key: "customers",
      target: 100,
    },
    {
      value: "29+",
      label: "Years of Trust",
      icon: <Clock size={36} />,
      key: "years",
      target: 29,
    },
    {
      value: "50+",
      label: "Awards Received",
      icon: <Award size={36} />,
      key: "awards",
      target: 50,
    },
  ];

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation
            const interval = setInterval(() => {
              setAnimatedStats((prev) => {
                const newStats = { ...prev };
                if (prev.branches < 25)
                  newStats.branches = Math.min(prev.branches + 1, 25);
                if (prev.customers < 100)
                  newStats.customers = Math.min(prev.customers + 2, 100);
                if (prev.years < 29)
                  newStats.years = Math.min(prev.years + 1, 29);
                if (prev.awards < 50)
                  newStats.awards = Math.min(prev.awards + 2, 50);
                return newStats;
              });
            }, 30);

            setTimeout(() => clearInterval(interval), 1000);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    const statsSection = document.querySelector("#stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden dark:bg-gray-800 bg-slate-50">
      <div className="mt-10 mb-10 text-center">
        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full">
          <Sparkles size={16} className="mr-2" />
          Our Legacy Since 1995
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Our {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Story
              </span>
            </h2>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-2 text-gray-600 dark:text-gray-400">
          A journey of trust, innovation, and community empowerment spanning
          three decades
        </p>
      </div>

      {/* Stats Section with Animation */}
      <section id="stats-section" className="relative py-16 -mt-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-300 transform shadow-xl dark:bg-gray-900 bg-slate-50 group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="text-gradient bg-gradient-to-br from-[#6f3c85] to-[#228296] dark:text-gray-300 bg-clip-text">
                    {stat.icon}
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-300 md:text-4xl">
                  {stat.key === "branches" && animatedStats.branches + "+"}
                  {stat.key === "customers" && animatedStats.customers + "K+"}
                  {stat.key === "years" && animatedStats.years + "+"}
                  {stat.key === "awards" && animatedStats.awards + "+"}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Content with Cards */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Featured Story Card */}
            <div className="relative mb-16 overflow-hidden shadow-2xl dark:bg-gray-900 bg-slate-50 rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6f3c85]/10 to-[#228296]/10 rounded-full blur-3xl"></div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Quote size={32} className="text-[#228296]" />
                  <h2 className="relative inline-block text-3xl font-bold text-gray-800 dark:text-gray-300 md:text-4xl">
                    The Beginning
                  </h2>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                  Founded in 1995 by visionary entrepreneurs,{" "}
                  <span className="font-semibold text-[#6f3c85]">
                    Shantishwar Bank
                  </span>{" "}
                  started as a small cooperative with a big dream - to make
                  banking accessible to everyone. What began as a single branch
                  in{" "}
                  <span className="font-semibold text-[#228296]">
                    Chhatrapati Sambhajinagar
                  </span>{" "}
                  has grown into a trusted financial institution serving
                  thousands of families across the region.
                </p>
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-teal-50 ">
                  <p className="italic leading-relaxed text-gray-700">
                    "Our name 'Shantishwar' symbolizes peace and prosperity,
                    values that have guided us through every decision we've
                    made. From providing small loans to local businesses to
                    helping families achieve their dream of home ownership,
                    we've been there every step of the way."
                  </p>
                  <div className="mt-4 text-sm font-semibold text-[#6f3c85]">
                    — Founder's Message
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Timeline - Modern Design */}
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-gray-300 md:text-4xl">
              Our Journey {''}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Through Time
              </span>
              <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-full"></div>
            </h2>

            <div className="relative">
              {/* Modern timeline with cards */}
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12">
                  {/* Desktop Timeline */}
                  <div className="items-center hidden md:flex">
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 order-last"}`}
                    >
                      <div className="relative overflow-hidden transition-all duration-500 shadow-xl dark:bg-gray-900 bg-slate-50 group rounded-2xl hover:shadow-2xl hover:-translate-y-1">
                        <div
                          className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${milestone.color}`}
                        ></div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                            <div
                              className={`p-2 rounded-full bg-gradient-to-r ${milestone.color} text-white`}
                            >
                              {milestone.icon}
                            </div>
                            <span
                              className={`text-2xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}
                            >
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {milestone.description}
                          </p>
                          <div className="mt-4">
                            <a
                              href="#"
                              className="inline-flex items-center text-sm font-medium text-[#228296] hover:text-[#6f3c85] transition-colors"
                            >
                              Learn more{" "}
                              <ChevronRight size={16} className="ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-1/2 flex justify-${index % 2 === 0 ? "start" : "end"}`}
                    >
                      <div className="relative">
                        <div
                          className={`w-4 h-4 rounded-full bg-gradient-to-r ${milestone.color} ring-4 ring-white shadow-lg`}
                        ></div>
                        {index !== milestones.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#6f3c85] to-[#228296]"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Timeline */}
                  <div className="md:hidden">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-[#6f3c85] to-[#228296]"></div>
                      <div className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-[#228296] ring-4 ring-white"></div>
                      <div className="p-5 ml-4 bg-white shadow-lg rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`p-2 rounded-full bg-gradient-to-r ${milestone.color} text-white`}
                          >
                            {milestone.icon}
                          </div>
                          <span
                            className={`text-xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}
                          >
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-800">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Design */}
      <section className="py-20 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300 md:text-4xl">
              Our Core {''}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-400">
              The principles that guide us every day
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Customer First",
                desc: "Your financial well-being is our top priority. We put customers at the heart of everything we do.",
                icon: <Users size={48} />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Integrity",
                desc: "Transparent and ethical banking practices. We believe in doing the right thing, always.",
                icon: <Shield size={48} />,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Innovation",
                desc: "Embracing technology for better service. Continuous improvement and forward-thinking solutions.",
                icon: <TrendingUp size={48} />,
                color: "from-green-500 to-emerald-500",
              },
            ].map((value, index) => (
              <div key={index} className="cursor-pointer group">
                <div className="relative p-8 text-center transition-all duration-500 transform shadow-xl dark:bg-gray-900 bg-slate-50 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                  <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-2xl opacity-0 group-hover:opacity-5"></div>
                  <div
                    className={`inline-flex p-4 mb-6 rounded-full bg-gradient-to-r ${value.color} text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                  <div className="mt-4 overflow-hidden">
                    <div className="w-0 h-1 mx-auto bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-full transition-all duration-500 group-hover:w-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#6f3c85] to-[#228296]">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            Be Part of Our Story
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of satisfied customers who trust us with their
            financial journey
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/savings-account"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold transition-all duration-300 border-2 border-white  transform hover:bg-gradient-to-r hover:from-[#228296] hover:to-[#6f3c85] hover:text-white rounded-lg hover:shadow-xl hover:scale-105"
            >
              Open Account <ChevronRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-lg hover:bg-gradient-to-r hover:from-[#228296] hover:to-[#6f3c85] hover:text-white hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
