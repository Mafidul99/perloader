// pages/MissionVision.jsx
import React from "react";
import {
  Target,
  Eye,
  Heart,
  TrendingUp,
  Users,
  Globe,
  Lightbulb,
  Award,
  Shield,
} from "lucide-react";

const MissionVision = () => {
  const coreObjectives = [
    {
      title: "Financial Inclusion",
      description: "Bring banking services to every section of society",
      icon: <Users size={32} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Sustainable Growth",
      description: "Balance profitability with social responsibility",
      icon: <TrendingUp size={32} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Innovation",
      description: "Leverage technology for better customer experience",
      icon: <Lightbulb size={32} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Trust & Transparency",
      description: "Build lasting relationships through honest practices",
      icon: <Shield size={32} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const strategicGoals = [
    { year: "2025", goal: "Expand to 50 branches across Maharashtra" },
    { year: "2026", goal: "Launch AI-powered personal banking assistant" },
    { year: "2027", goal: "Achieve 500,000+ satisfied customers" },
    { year: "2028", goal: "Become the most trusted regional bank" },
  ];

  return (
    <div className="overflow-hidden dark:bg-gray-800 bg-slate-50">
      <div className="mt-10 text-center">
        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full">
          <Award size={16} className="mr-2" />
          Leadership Desk
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
              Mission {''}
            </span>
           & {''}
          <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Vision
            </span>
        </h2>
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-2 text-gray-600 dark:text-gray-300">
          Guiding our path towards excellence in banking and community service
        </p>
      </div>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="p-8 shadow-xl bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl">
                  <Eye size={48} className="text-[#228296] mb-4" />
                  <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                    Our Vision
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To be the most trusted and innovative financial institution,
                    empowering communities and driving economic growth through
                    accessible, technology-driven banking solutions that create
                    lasting value for all stakeholders.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="p-8 shadow-xl bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl">
                  <Target size={48} className="text-[#6f3c85] mb-4" />
                  <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                    Our Mission
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To provide secure, customer-centric financial services that
                    simplify banking, foster financial literacy, and support the
                    aspirations of individuals and businesses, while maintaining
                    the highest standards of integrity and social
                    responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Objectives */}
            <div className="mb-20">
              <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-gray-300 md:text-4xl">
                Our Core {''}
                <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Objectives
              </span>
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {coreObjectives.map((objective, index) => (
                  <div
                    key={index}
                    className="p-6 text-center transition-all duration-300 transform shadow-lg dark:bg-gray-900 bg-slate-50 rounded-xl hover:scale-105 hover:shadow-xl group"
                  >
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${objective.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <div className="text-white">{objective.icon}</div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-500">{objective.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Goals Timeline */}
            <div className="mb-20">
              <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-gray-300 md:text-4xl">
                Strategic {''}
                <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Goals & Roadmap
              </span>
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#6f3c85] to-[#228296] hidden md:block"></div>
                {strategicGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#228296] rounded-full"></div>
                    <div
                      className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12"}`}
                    >
                      <div className="p-6 shadow-lg dark:bg-gray-900 bg-slate-50 rounded-xl">
                        <div
                          className={`text-2xl font-bold text-[#6f3c85] mb-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                        >
                          {goal.year}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{goal.goal}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment Section */}
            <div className="bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <Heart size={48} className="mx-auto mb-4 text-white" />
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Our Commitment to Excellence
              </h2>
              <p className="max-w-3xl mx-auto text-white/90">
                We are committed to continuously improving our services,
                embracing innovation, and maintaining the highest standards of
                corporate governance. Every decision we make is guided by our
                dedication to our customers, employees, and the communities we
                serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
