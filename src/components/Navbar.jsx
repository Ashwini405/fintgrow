import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    'About Us': [
      { name: 'Company Overview', link: '/about/company-overview' },
      { name: 'Our Core Values', link: '/about/core-values' },
      { name: 'Our Culture', link: '/about/culture' },
      { name: 'Meet the Leaders', link: '/about/leaders' }
    ],
    'Services': [
      { name: 'Artificial Intelligence', link: '/services/artificial-intelligence' },
      { name: 'Digital Experience', link: '/services/digital-experience' },
      { name: 'Data Analytics', link: '/services/data-analytics' },
      { name: 'Enterprise Application Services', link: '/services/enterprise-application' },
      { name: 'Digital Integration', link: '/services/digital-integration' },
      { name: 'Intelligent IT & Cloud Operations', link: '/services/cloud-operations' },
      { name: 'Intelligent Process Automation', link: '/services/process-automation' },
      { name: 'Quality Engineering and Assurance', link: '/services/quality-engineering' }
    ],
    'Solutions': [
      { name: 'Microsoft Dynamics 365', link: '/solutions/dynamics-365' },
      { name: 'Microsoft Sharepoint', link: '/solutions/sharepoint' },
      { name: 'Microsoft BI & Analytics', link: '/solutions/bi-analytics' },
      { name: 'MuleSoft', link: '/solutions/mulesoft' },
      { name: 'ServiceNow', link: '/solutions/servicenow' },
      { name: 'DevOps', link: '/solutions/devops' }
    ],
    'Insights': [
      { name: 'FINT - Techtalk - Blog', link: '/insights/blog' }
    ],
    'Careers': [
      { name: 'What We Offer', link: '/careers/what-we-offer' },
      { name: 'Current Openings', link: '/careers/current-openings' }
    ]
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* FINT Logo SVG */}
              <svg width="50" height="50" viewBox="0 0 50 50" className="transition-transform group-hover:scale-105">
                <g transform="translate(25, 25)">
                  {/* Outer Star Pattern */}
                  <path d="M0,-20 L2,-6 L8,-8 L4,-3 L12,-2 L5,2 L8,8 L2,5 L0,12 L-2,5 L-8,8 L-5,2 L-12,-2 L-4,-3 L-8,-8 L-2,-6 Z" 
                        fill="#3b5998" className="transition-colors group-hover:fill-blue-700"/>
                  {/* Inner Star Pattern */}
                  <path d="M0,-12 L1.5,-4 L6,-6 L3,-2 L9,-1 L4,1 L6,6 L1.5,3.5 L0,9 L-1.5,3.5 L-6,6 L-4,1 L-9,-1 L-3,-2 L-6,-6 L-1.5,-4 Z" 
                        fill="#e74c3c" className="transition-colors group-hover:fill-red-700"/>
                  {/* Center Diamond */}
                  <path d="M0,-4 L4,0 L0,4 L-4,0 Z" fill="#3b5998"/>
                </g>
              </svg>
              <span className="text-3xl font-bold text-[#1e2875] tracking-tight">FINT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {Object.keys(menuItems).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 text-[15px] font-medium transition-colors flex items-center gap-1 ${
                    activeDropdown === menu ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                  }`}
                >
                  {menu}
                  <svg 
                    className={`w-4 h-4 transition-transform ${activeDropdown === menu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menu && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg border border-slate-100 min-w-[280px] py-3 animate-fade-in-down">
                    {menuItems[menu].map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        onClick={closeDropdown}
                        className="block px-6 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1e2875] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-[#1e2875] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Great Place to Work Badge */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-t-lg text-center shadow-lg">
                <div className="text-xs font-bold leading-tight">Great<br/>Place<br/>To<br/>Work</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white px-4 py-1 rounded-b-lg text-center">
                <div className="text-[10px] font-semibold">Certified</div>
                <div className="text-[8px]">MAY 2025 - MAY 2026</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add fade-in-down animation */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;