import React from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  Briefcase,
  Globe
} from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '1995', title: 'Bank Established', desc: 'Started with first branch in Chh. Sambhajinagar' },
    { year: '2005', title: 'Digital Banking', desc: 'Launched internet banking services' },
    { year: '2015', title: 'Mobile App', desc: 'Introduced mobile banking app' },
    { year: '2024', title: '1 Million+', desc: 'Surpassed 1 million satisfied customers' }
  ];

  const coreValues = [
    { icon: <Heart size={32} />, title: 'Customer First', desc: 'We prioritize our customers in everything we do' },
    { icon: <Shield size={32} />, title: 'Integrity', desc: 'Honest and transparent banking practices' },
    { icon: <TrendingUp size={32} />, title: 'Innovation', desc: 'Embracing technology for better banking' },
    { icon: <Users size={32} />, title: 'Inclusivity', desc: 'Banking for all sections of society' }
  ];

  const leadershipTeam = [
    { name: 'Mr. Rajesh Sharma', position: 'Chairman', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Mrs. Priya Mehta', position: 'Managing Director', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Mr. Amit Kumar', position: 'CEO', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Dr. Sneha Patil', position: 'Board Member', image: 'https://randomuser.me/api/portraits/women/4.jpg' }
  ];

  const stats = [
    { value: '25+', label: 'Years of Excellence', icon: <Award size={28} /> },
    { value: '50+', label: 'Branches', icon: <Building2 size={28} /> },
    { value: '1M+', label: 'Happy Customers', icon: <Users size={28} /> },
    { value: '₹5000Cr+', label: 'Assets Under Management', icon: <Briefcase size={28} /> }
  ];

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative px-4 py-10 mx-auto md:py-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">About NCOSL</h1>
            <p className="text-lg md:text-xl text-white/90">
              Empowering financial dreams since 1995 with trust, transparency, and technology-driven solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* Stats Section */}
        <div className="grid gap-6 mb-16 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2">
              <div className="flex justify-center mb-3 text-[#228296]">{stat.icon}</div>
              <div className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-300">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid gap-12 mb-16 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Our {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                 Story
              </span>
              </h2>
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-200">
              Nofino Co-Operative Credit Society Ltd (NCOSL) was established in 1995 with a vision to provide 
              accessible and affordable banking solutions to every Indian. What started as a single branch in 
              Chh. Sambhajinagar has now grown into a trusted financial institution serving over a million customers.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-200">
              Over the past 25+ years, we have embraced technology and innovation while staying true to our 
              core values of transparency, customer-centricity, and financial inclusion. Our co-operative structure 
              ensures that our members' interests always come first.
            </p>
            <div className="flex items-center gap-2 mt-6 text-[#228296]">
              <CheckCircle size={20} />
              <span className="font-semibold">RBI Regulated & Government Approved</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="p-4 text-center rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                <div className="text-2xl font-bold text-[#228296]">{milestone.year}</div>
                <div className="font-semibold text-gray-800 dark:text-gray-300">{milestone.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{milestone.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
            <Eye size={40} className="mb-4 text-[#228296]" />
            <h3 className="mb-3 text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="leading-relaxed text-gray-700">
              To be the most trusted and innovative financial institution, empowering every Indian to achieve 
              their financial goals through accessible, transparent, and technology-driven banking solutions.
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
            <Target size={40} className="mb-4 text-[#6f3c85]" />
            <h3 className="mb-3 text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="leading-relaxed text-gray-700">
              To provide inclusive financial services with utmost transparency, leverage technology for better 
              customer experience, and contribute to the economic growth of our communities.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-300">Our {''}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                 Core Values
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">The principles that guide us every day</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
                <div className="flex justify-center mb-3 text-[#228296]">{value.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-300">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-300">Leadership {''}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                 Team
              </span> </h2>
            <p className="text-gray-600 dark:text-gray-400">Meet the visionaries behind our success</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden bg-gray-200 rounded-full">
                  <img src={leader.image} alt={leader.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{leader.name}</h3>
                <p className="text-sm text-[#228296]">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-2 text-2xl font-bold">Become a Member Today</h2>
          <p className="mb-4">Join India's most trusted co-operative credit society</p>
          <a href="/savings-account" className="inline-flex items-center gap-2 px-4 py-3 font-semibold rounded-lg bg-white text-[#228296] hover:bg-gray-100">
            Open an Account <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;