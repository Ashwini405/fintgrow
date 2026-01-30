



import { useState } from "react";
import { Link } from "react-router-dom";
import ArvishLogo from "../assets/arvish-logo.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = {
    "About Us": [
      { name: "Company Overview", link: "/about/company-overview" },
      { name: "Our Core Values", link: "/about/core-values" },
      { name: "Our Culture", link: "/about/culture" },
      { name: "Meet the Leaders", link: "/about/leaders" }
    ],
    Services: [
      { name: "Artificial Intelligence", link: "/services/artificial-intelligence" },
      { name: "Digital Experience", link: "/services/digital-experience" },
      { name: "Data Analytics", link: "/services/data-analytics" },
      { name: "Enterprise Applications", link: "/services/enterprise-application" },
      { name: "Digital Integration", link: "/services/digital-integration" },
      { name: "Cloud Operations", link: "/services/cloud-operations" },
      { name: "Process Automation", link: "/services/process-automation" },
      { name: "Quality Engineering", link: "/services/quality-engineering" }
    ],
    Solutions: [
      { name: "Microsoft Dynamics 365", link: "/solutions/dynamics-365" },
      { name: "Microsoft Sharepoint", link: "/solutions/sharepoint" },
      { name: "Microsoft BI Analytics", link: "/solutions/bi-analytics" },
      { name: "MuleSoft", link: "/solutions/mulesoft" },
      { name: "ServiceNow", link: "/solutions/servicenow" },
      { name: "DevOps", link: "/solutions/devops" }
    ],
    Insights: [{ name: "Tech Blog", link: "/insights/blog" }],
    Careers: [
      { name: "What We Offer", link: "/careers/what-we-offer" },
      { name: "Current Openings", link: "/careers/current-openings" }
    ]
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="logo-container">
              <div className="logo-pulse"></div>
              <img
                src={ArvishLogo}
                alt="Arvish Consulting"
                className="logo-main"
              />
            </div>

            <div className="brand-stack">
              <span className="brand-title">Arvish Consulting</span>
              <div className="tagline-row">
                <span className="tagline-text">INNOVATE</span>
                <span className="tagline-dot">•</span>
                <span className="tagline-text">INTEGRATE</span>
                <span className="tagline-dot">•</span>
                <span className="tagline-text">INSPIRE</span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {Object.keys(menuItems).map((menu) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 text-[15px] font-semibold flex items-center gap-1 transition-all duration-300 ${
                    activeDropdown === menu
                      ? "text-red-600"
                      : "text-slate-700 hover:text-red-600"
                  }`}
                >
                  {menu}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === menu ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === menu && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl rounded-xl border border-slate-100 w-[240px] py-3 animate-dropdown-slide">
                    {menuItems[menu].map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-5 py-2.5 text-[14px] text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors font-medium text-perfect"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 bg-slate-900 text-white text-[15px] font-bold rounded-full hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* GPTW BADGE */}
          <div className="hidden xl:flex items-center">
            <div className="gptw-badge">
              <div className="gptw-red-zone">
                GREAT PLACE<br />TO WORK
              </div>
              <div className="gptw-blue-zone">
                <span className="cert-label">CERTIFIED</span>
                <span className="cert-date">MAY 2025 – 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* PROFESSIONAL LOGO SYSTEM */
        .logo-container {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .logo-main {
          width: 40px;
          height: 40px;
          object-fit: contain;
          z-index: 2;
        }

        .logo-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border: 2px solid #dc2626;
          opacity: 0;
          animation: neuralPulse 3s infinite;
        }

        /* BRAND TEXT STYLING */
        .brand-stack {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .brand-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 26px;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b 0%, #dc2626 50%, #1e293b 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.8px;
          line-height: 1;
          animation: brandShimmer 4s ease-in-out infinite;
        }

        .tagline-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
          opacity: 0;
          animation: taglineFadeIn 1s ease-out 0.5s forwards;
        }

        .tagline-text {
          font-size: 9px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 1.5px;
          position: relative;
          animation: taglinePulse 2s ease-in-out infinite;
        }

        .tagline-dot {
          color: #dc2626;
          font-size: 14px;
          animation: dotSpin 3s linear infinite;
        }

        /* GPTW BADGE STYLING */
        .gptw-badge {
          width: 110px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .gptw-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .gptw-red-zone {
          background: #dc2626;
          color: white;
          font-size: 10px;
          font-weight: 900;
          text-align: center;
          padding: 6px 4px;
          line-height: 1.1;
        }

        .gptw-blue-zone {
          background: #1e3a8a;
          color: white;
          text-align: center;
          padding: 4px;
          display: flex;
          flex-direction: column;
        }

        .cert-label {
          font-size: 9px;
          font-weight: 700;
          opacity: 0.9;
        }

        .cert-date {
          font-size: 8px;
          font-weight: 500;
          color: #93c5fd;
        }

        /* ANIMATIONS */
        @keyframes brandShimmer {
          0% { background-position: 200% 0; }
          50% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes taglineFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes taglinePulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes dotSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes neuralPulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        @keyframes dropdown-slide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-dropdown-slide {
          animation: dropdown-slide 0.3s ease-out forwards;
        }

        .group:hover .logo-container {
          transform: scale(1.05);
        }

        .group:hover .brand-title {
          animation-duration: 2s;
        }
      `}</style>
    </header>
  );
};

export default Navbar;