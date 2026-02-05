import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Digital Experience",
    description: "Our industry-leading digital experience services are designed to drive the brand engagement from strategy, operations to enablement while improving productivity and process efficiency to be effective in the current digital market.",
    bgColor: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
    illustration: "digital-experience",
    link: "/services/digital-experience" // Add your actual route
  },
  {
    title: "Artificial Intelligence",
    description: "Empower your enterprise with cutting-edge Artificial Intelligence solutions that transform data into actionable insights and drive intelligent automation across your business processes.",
    bgColor: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
    illustration: "ai",
    link: "/services/artificial-intelligence" // Add your actual route
  },
  {
    title: "Data Analytics",
    description: "Unlock the power of your data with advanced analytics solutions that provide deep insights, predictive modeling, and real-time intelligence for strategic decision-making.",
    bgColor: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
    illustration: "analytics",
    link: "/services/data-analytics" // Add your actual route
  },
  {
    title: "Enterprise Application Services",
    description: "Modernize and scale your enterprise platforms with our comprehensive application services, delivering seamless integration, enhanced performance, and digital transformation.",
    bgColor: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50",
    illustration: "enterprise",
    link: "/services/enterprise-application-services" // Add your actual route
  }
];

// Illustration Components
const DigitalExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[500px] h-[500px] animate-float">
      {/* Central Head Profile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,40 Q140,60 140,100 Q140,140 100,160 Q60,140 60,100 Q60,60 100,40" 
                fill="#60a5fa" className="animate-pulse-slow"/>
        </svg>
      </div>
      
      {/* Search Icon - Top Left */}
      <div className="absolute top-12 left-12 w-20 h-20 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* CPU/Chip Icon - Top */}
      <div className="absolute -top-8 left-1/3 w-16 h-16 bg-blue-300 rounded-lg flex items-center justify-center shadow-lg animate-float-delayed-1">
        <div className="w-10 h-10 border-4 border-blue-600 rounded grid grid-cols-2 gap-1 p-1">
          <div className="bg-blue-600 rounded-sm"></div>
          <div className="bg-blue-600 rounded-sm"></div>
          <div className="bg-blue-600 rounded-sm"></div>
          <div className="bg-blue-600 rounded-sm"></div>
        </div>
      </div>
      
      {/* Database Icon - Left */}
      <div className="absolute top-1/3 -left-4 w-24 h-28 animate-float-delayed-2">
        <div className="relative">
          <div className="w-full h-6 bg-blue-400 rounded-full"></div>
          <div className="w-full h-16 bg-blue-300 mt-1"></div>
          <div className="w-full h-6 bg-blue-400 rounded-full -mt-1"></div>
        </div>
      </div>
      
      {/* Circular Progress - Top Right */}
      <div className="absolute -top-4 right-8 w-32 h-32 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="8" 
                  strokeDasharray="180 283" className="animate-pulse"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="#fb923c" strokeWidth="6" 
                  strokeDasharray="120 220"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="#fbbf24" strokeWidth="4" 
                  strokeDasharray="80 157"/>
        </svg>
      </div>
      
      {/* Shield/Security Icon - Right */}
      <div className="absolute top-20 -right-8 w-20 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 animate-float-delayed-3" 
           style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}>
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Target Icon - Bottom Left */}
      <div className="absolute bottom-20 left-8 w-20 h-20 animate-pulse-slow">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-4 border-orange-400 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-orange-500 rounded-full"></div>
          <div className="absolute inset-4 bg-orange-600 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Dashboard/Analytics - Bottom Center */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-2xl border-4 border-blue-800 animate-float-delayed-1">
        <div className="p-3 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="flex-1 h-1 bg-blue-400 rounded"></div>
          </div>
          <div className="flex-1 flex items-end justify-around gap-1">
            <div className="w-full bg-blue-400 rounded-t animate-grow-1" style={{height: '60%'}}></div>
            <div className="w-full bg-orange-400 rounded-t animate-grow-2" style={{height: '80%'}}></div>
            <div className="w-full bg-blue-400 rounded-t animate-grow-3" style={{height: '40%'}}></div>
            <div className="w-full bg-orange-400 rounded-t animate-grow-1" style={{height: '70%'}}></div>
          </div>
        </div>
      </div>
      
      {/* Document/Code Icon - Right Bottom */}
      <div className="absolute bottom-8 right-0 w-28 h-36 animate-float-delayed-2">
        <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg shadow-lg p-3">
          <div className="space-y-2">
            <div className="h-2 bg-white/60 rounded w-3/4"></div>
            <div className="h-2 bg-white/40 rounded w-full"></div>
            <div className="h-2 bg-white/60 rounded w-5/6"></div>
            <div className="h-2 bg-white/40 rounded w-full"></div>
            <div className="flex gap-1 mt-3">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <div className="w-3 h-3 bg-teal-400 rounded"></div>
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="15%" y1="60%" x2="50%" y2="50%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="85%" y1="65%" x2="50%" y2="50%" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const AIIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[450px] h-[450px] animate-float">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
          <circle cx="200" cy="100" r="8" fill="#8b5cf6" className="animate-pulse"/>
          <circle cx="150" cy="200" r="8" fill="#8b5cf6" className="animate-pulse"/>
          <circle cx="250" cy="200" r="8" fill="#8b5cf6" className="animate-pulse"/>
          <circle cx="200" cy="300" r="8" fill="#8b5cf6" className="animate-pulse"/>
          <line x1="200" y1="100" x2="150" y2="200" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="200" y1="100" x2="250" y2="200" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="150" y1="200" x2="200" y2="300" stroke="#a78bfa" strokeWidth="2"/>
          <line x1="250" y1="200" x2="200" y2="300" stroke="#a78bfa" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Central Brain/AI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z"/>
            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>
      
      {/* Orbiting Data Nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-pink-400 rounded-lg shadow-lg"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-400 rounded-lg shadow-lg"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-lg shadow-lg"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-400 rounded-lg shadow-lg"></div>
      </div>
      
      {/* AI Particles */}
      <div className="absolute top-8 right-12 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed-1"></div>
      <div className="absolute top-20 right-32 w-4 h-4 bg-indigo-400 rounded-full animate-float-delayed-2"></div>
      <div className="absolute bottom-12 left-8 w-5 h-5 bg-violet-400 rounded-full animate-float-delayed-3"></div>
      <div className="absolute bottom-32 left-24 w-6 h-6 bg-purple-500 rounded-full animate-bounce-slow"></div>
    </div>
  </div>
);

const AnalyticsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[450px] h-[450px] animate-float">
      {/* Chart Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 bg-white rounded-2xl shadow-2xl p-6">
        {/* Line Chart */}
        <svg className="w-full h-full" viewBox="0 0 300 200">
          <polyline points="0,150 60,120 120,100 180,80 240,60 300,40" 
                    fill="none" stroke="#10b981" strokeWidth="3" className="animate-draw-line"/>
          <circle cx="60" cy="120" r="4" fill="#10b981" className="animate-pulse"/>
          <circle cx="120" cy="100" r="4" fill="#10b981" className="animate-pulse"/>
          <circle cx="180" cy="80" r="4" fill="#10b981" className="animate-pulse"/>
          <circle cx="240" cy="60" r="4" fill="#10b981" className="animate-pulse"/>
        </svg>
      </div>
      
      {/* Pie Chart - Top Right */}
      <div className="absolute top-8 right-8 w-24 h-24 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#34d399" strokeWidth="10" strokeDasharray="180 283"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="#14b8a6" strokeWidth="10" strokeDasharray="80 283" strokeDashoffset="-180"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="#06b6d4" strokeWidth="10" strokeDasharray="23 283" strokeDashoffset="-260"/>
        </svg>
      </div>
      
      {/* Bar Chart - Bottom Left */}
      <div className="absolute bottom-8 left-8 w-32 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg shadow-lg p-2">
        <div className="w-full h-full flex items-end justify-around gap-1">
          <div className="w-full bg-white/80 rounded-t animate-grow-1" style={{height: '50%'}}></div>
          <div className="w-full bg-white/80 rounded-t animate-grow-2" style={{height: '75%'}}></div>
          <div className="w-full bg-white/80 rounded-t animate-grow-3" style={{height: '60%'}}></div>
          <div className="w-full bg-white/80 rounded-t animate-grow-1" style={{height: '90%'}}></div>
        </div>
      </div>
      
      {/* Data Nodes */}
      <div className="absolute top-1/4 left-12 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
        <span className="text-white font-bold text-xl">94%</span>
      </div>
      
      <div className="absolute bottom-1/4 right-12 w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      </div>
    </div>
  </div>
);

const EnterpriseIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[450px] h-[450px] animate-float">
      {/* Server Racks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-4">
        {[1,2,3].map((i) => (
          <div key={i} className={`w-24 h-48 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg shadow-xl p-2 space-y-2 animate-float-delayed-${i}`}>
            <div className="w-full h-3 bg-blue-400 rounded flex items-center px-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-full h-3 bg-slate-700 rounded"></div>
            <div className="w-full h-3 bg-blue-400 rounded flex items-center px-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-full h-3 bg-slate-700 rounded"></div>
            <div className="w-full h-3 bg-blue-400 rounded flex items-center px-1">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cloud Icon */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-20 animate-float-delayed-1">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path d="M25,40 Q20,30 30,25 Q35,15 45,20 Q55,15 60,20 Q70,18 75,25 Q85,28 80,40 Z" 
                fill="#fbbf24" className="drop-shadow-lg"/>
        </svg>
      </div>
      
      {/* Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex: -1}}>
        <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="70%" y1="20%" x2="50%" y2="50%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
      
      {/* Gear Icons */}
      <div className="absolute top-8 right-8 w-16 h-16 text-orange-400 animate-spin-very-slow">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      </div>
      
      <div className="absolute bottom-8 left-8 w-12 h-12 text-amber-500 animate-spin-slow-reverse">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      </div>
    </div>
  </div>
);

export default function Hero() {
  const handleReadMore = (link) => {
    // For React Router, uncomment this line:
    // navigate(link);
    
    // For Next.js, use:
    // router.push(link);
    
    // For regular navigation:
    window.location.href = link;
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="h-[100vh] xs:h-[90vh] sm:h-[85vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`h-full w-full ${slide.bgColor} relative overflow-hidden`}>
              {/* Content Container */}
              <div className="relative h-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center h-full py-6 xs:py-8 sm:py-12 lg:py-16">
                  
                  {/* Left Content */}
                  <div className="space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8 animate-slide-in-left text-center lg:text-left">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight px-2 xs:px-0">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 xs:px-0">
                      {slide.description}
                    </p>
                    
                    <div className="pt-2 xs:pt-3 sm:pt-4 flex justify-center lg:justify-start">
                      <button 
                        onClick={() => handleReadMore(slide.link)}
                        className="group relative inline-flex items-center gap-2 xs:gap-3 lg:gap-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs xs:text-sm sm:text-base lg:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-110 transition-all duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative flex items-center gap-2 xs:gap-3 lg:gap-4">
                          <div className="relative w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                            <div className="absolute inset-0 bg-white/30 transform rotate-45 animate-pulse group-hover:rotate-90 transition-all duration-500"></div>
                            <div className="absolute inset-1 bg-white/20 transform -rotate-12 animate-bounce group-hover:rotate-45 transition-all duration-700"></div>
                            <div className="absolute inset-2 bg-white rounded-full animate-ping group-hover:animate-pulse"></div>
                          </div>
                          <span className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500">READ MORE</span>
                          <div className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                            <div className="absolute inset-0 border-2 border-white transform rotate-0 group-hover:rotate-180 transition-all duration-1000 ease-in-out"></div>
                            <div className="absolute inset-1 border border-white/60 transform rotate-45 group-hover:rotate-225 transition-all duration-800"></div>
                            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:scale-300"></div>
                          </div>
                        </div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Right Illustration - Hidden on mobile, visible on lg+ */}
                  <div className="hidden lg:flex items-center justify-center animate-fade-in order-first lg:order-last">
                    <div className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                      {slide.illustration === 'digital-experience' && <DigitalExperienceIllustration />}
                      {slide.illustration === 'ai' && <AIIllustration />}
                      {slide.illustration === 'analytics' && <AnalyticsIllustration />}
                      {slide.illustration === 'enterprise' && <EnterpriseIllustration />}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-12 xs:h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Styling */}
      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #1e293b !important;
          background: white;
          width: 32px !important;
          height: 32px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        
        @media (min-width: 375px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            width: 36px !important;
            height: 36px !important;
          }
        }
        
        @media (min-width: 640px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            width: 48px !important;
            height: 48px !important;
          }
        }
        
        @media (min-width: 1024px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            width: 56px !important;
            height: 56px !important;
          }
        }
        
        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 12px !important;
          font-weight: 900;
        }
        
        @media (min-width: 375px) {
          :global(.swiper-button-next:after),
          :global(.swiper-button-prev:after) {
            font-size: 14px !important;
          }
        }
        
        @media (min-width: 640px) {
          :global(.swiper-button-next:after),
          :global(.swiper-button-prev:after) {
            font-size: 18px !important;
          }
        }
        
        @media (min-width: 1024px) {
          :global(.swiper-button-next:after),
          :global(.swiper-button-prev:after) {
            font-size: 22px !important;
          }
        }
        
        :global(.swiper-pagination-bullet) {
          width: 6px !important;
          height: 6px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 3px !important;
        }
        
        @media (min-width: 375px) {
          :global(.swiper-pagination-bullet) {
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
          }
        }
        
        @media (min-width: 640px) {
          :global(.swiper-pagination-bullet) {
            width: 12px !important;
            height: 12px !important;
            margin: 0 6px !important;
          }
        }
        
        :global(.swiper-pagination-bullet-active) {
          background: #dc2626 !important;
          width: 18px !important;
          border-radius: 6px !important;
        }
        
        @media (min-width: 375px) {
          :global(.swiper-pagination-bullet-active) {
            width: 24px !important;
          }
        }
        
        @media (min-width: 640px) {
          :global(.swiper-pagination-bullet-active) {
            width: 32px !important;
          }
        }
        
        :global(.swiper-pagination) {
          bottom: 15px !important;
        }
        
        @media (min-width: 375px) {
          :global(.swiper-pagination) {
            bottom: 20px !important;
          }
        }
        
        @media (min-width: 640px) {
          :global(.swiper-pagination) {
            bottom: 30px !important;
          }
        }
        
        /* Hide navigation on very small screens */
        @media (max-width: 374px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            display: none !important;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}