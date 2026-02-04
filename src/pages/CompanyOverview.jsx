import React from 'react';

export const CompanyOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About FintNetworks
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Pioneering digital transformation through innovative technology solutions and strategic partnerships
          </p>
        </div>

        {/* Company Introduction */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                FintNetworks is a premier technology consulting firm established in 2015, specializing in 
                enterprise digital transformation. We serve Fortune 500 companies and emerging businesses 
                across 15+ countries, delivering cutting-edge solutions that drive measurable business outcomes.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With over 500+ successful projects and a team of 200+ certified professionals, we combine 
                deep industry expertise with innovative technology to solve complex business challenges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-slate-700 font-medium">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-slate-700 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-slate-700 font-medium">Expert Professionals</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-slate-700 font-medium">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To empower organizations with transformative technology solutions that drive innovation, 
              enhance operational efficiency, and create sustainable competitive advantages in the digital economy.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be the global leader in digital transformation consulting, recognized for our innovative 
              approach, exceptional client outcomes, and commitment to shaping the future of business technology.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Innovation & Excellence
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Client Success Focus
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Integrity & Transparency
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Continuous Learning
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                JS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">John Smith</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-slate-600 text-sm">20+ years in enterprise technology and digital transformation</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                SP
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sarah Parker</h3>
              <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-slate-600 text-sm">Expert in cloud architecture and AI/ML solutions</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                MJ
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Michael Johnson</h3>
              <p className="text-purple-600 font-medium mb-3">Chief Operations Officer</p>
              <p className="text-slate-600 text-sm">Specializes in process optimization and quality assurance</p>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-2xl mb-2">🇺🇸</div>
              <h3 className="font-bold text-slate-900">North America</h3>
              <p className="text-slate-600 text-sm">Headquarters in New York</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-2xl mb-2">🇪🇺</div>
              <h3 className="font-bold text-slate-900">Europe</h3>
              <p className="text-slate-600 text-sm">Offices in London & Berlin</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-2xl mb-2">🇮🇳</div>
              <h3 className="font-bold text-slate-900">Asia Pacific</h3>
              <p className="text-slate-600 text-sm">Development centers in India</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold text-slate-900">Remote Teams</h3>
              <p className="text-slate-600 text-sm">Distributed workforce</p>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border-2 border-blue-100 rounded-xl hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold text-slate-900 mb-2">Microsoft Gold Partner</h3>
              <p className="text-slate-600 text-sm">Certified in multiple competencies</p>
            </div>
            <div className="text-center p-6 border-2 border-green-100 rounded-xl hover:border-green-300 transition-colors">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-bold text-slate-900 mb-2">AWS Advanced Partner</h3>
              <p className="text-slate-600 text-sm">Cloud solutions expertise</p>
            </div>
            <div className="text-center p-6 border-2 border-purple-100 rounded-xl hover:border-purple-300 transition-colors">
              <div className="text-3xl mb-3">🎖️</div>
              <h3 className="font-bold text-slate-900 mb-2">ISO 27001 Certified</h3>
              <p className="text-slate-600 text-sm">Information security standards</p>
            </div>
            <div className="text-center p-6 border-2 border-orange-100 rounded-xl hover:border-orange-300 transition-colors">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-bold text-slate-900 mb-2">Industry Recognition</h3>
              <p className="text-slate-600 text-sm">Top 100 IT Services Provider</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;