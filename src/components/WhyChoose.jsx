import { useState } from 'react';

export default function WhyChoose() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: "👥",
      title: "Expert Team",
      description: "Industry veterans with proven track records",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎯",
      title: "Client Success",
      description: "95% client retention rate & 4.9/5 satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Innovation Edge",
      description: "Cutting-edge tech with agile methodologies",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🛡️",
      title: "Quality First",
      description: "Enterprise-grade security & reliability",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Why Partner With Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Your Trusted
              </span>
              <br />
              <span className="text-slate-900">Digital Partner</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We transform complex business challenges into scalable digital solutions. 
              Combining strategic insight with technical excellence to drive measurable impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {[
                { value: "15+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "99%", label: "Success" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation →
            </button>
          </div>

          {/* Right Benefits Grid */}
          <div className="relative">
            {/* Animated Orbit */}
            <div className="absolute -inset-20">
              <div className="absolute inset-0 border-2 border-dashed border-blue-200/50 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-10 border border-dotted border-cyan-200/50 rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute inset-20 border border-dashed border-purple-200/50 rounded-full animate-spin-slow"></div>
            </div>

            {/* Benefits Grid */}
            <div className="relative grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 
                    transition-all duration-300 cursor-pointer hover-lift relative overflow-hidden
                    ${hoveredCard === index ? 'ring-2 ring-blue-500' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 transition-opacity duration-300 
                    ${hoveredCard === index ? 'opacity-10' : ''}`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} 
                      flex items-center justify-center text-2xl mb-4 shadow-lg transition-transform duration-300
                      ${hoveredCard === index ? 'scale-110' : ''}`}>
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm">
                      {benefit.description}
                    </p>

                    {/* Learn more link */}
                    <div className={`mt-4 flex items-center text-sm font-medium transition-all duration-300
                      ${hoveredCard === index ? 'text-blue-600' : 'text-slate-500'}`}>
                      <span>Learn more</span>
                      <svg className={`w-4 h-4 ml-2 transition-transform duration-300 
                        ${hoveredCard === index ? 'translate-x-1' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Floating Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-white to-slate-100 rounded-full 
                shadow-2xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="text-2xl">🚀</div>
                  <div className="text-sm font-bold text-slate-700 mt-2">Trusted</div>
                  <div className="text-xs text-slate-500">Partner</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-24 text-center">
          <p className="text-slate-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-60">
            {["🏢", "💳", "🏥", "✈️", "🛒", "🏦"].map((icon, i) => (
              <div key={i} className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 50s linear infinite;
        }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}