import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogDetail from './pages/BlogDetail';

import ServiceDetails from "./pages/ServiceDetails";



// Import all pages
import {
  Home,
  // About Pages
  CompanyOverview,
  CoreValues,
  Culture,
  Leaders,
  // Services Pages
  ArtificialIntelligence,
  DigitalExperience,
  DataAnalytics,
  EnterpriseApplication,
  DigitalIntegration,
  CloudOperations,
  ProcessAutomation,
  QualityEngineering,
  // Solutions Pages
  Dynamics365,
  Sharepoint,
  BIAnalytics,
  MuleSoft,
  ServiceNow,
  DevOps,
  // Careers
  WhatWeOffer,
  CurrentOpenings,
  Contact
} from './pages/Pages';

// Wrapper for Blog page
const BlogPage = () => (
  <div className="min-h-screen bg-slate-50">
    <Blog />
  </div>
);

// ScrollToTop Component - THIS FIXES ALL SCROLL ISSUES!
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ← THIS LINE FIXES EVERYTHING! */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            
            {/* About Us Routes */}
            <Route path="/about/company-overview" element={<CompanyOverview />} />
            <Route path="/about/core-values" element={<CoreValues />} />
            <Route path="/about/culture" element={<Culture />} />
            <Route path="/about/leaders" element={<Leaders />} />
            
            {/* Services Routes */}
            {/* <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/services/digital-experience" element={<DigitalExperience />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/enterprise-application" element={<EnterpriseApplication />} />
            <Route path="/services/digital-integration" element={<DigitalIntegration />} />
            <Route path="/services/cloud-operations" element={<CloudOperations />} />
            <Route path="/services/process-automation" element={<ProcessAutomation />} />
            <Route path="/services/quality-engineering" element={<QualityEngineering />} /> */}

            {/* Services Routes (DYNAMIC – uses ServiceDetails.jsx) */}
<Route path="/services/:serviceName" element={<ServiceDetails />} />

            
            {/* Solutions Routes */}
            <Route path="/solutions/dynamics-365" element={<Dynamics365 />} />
            <Route path="/solutions/sharepoint" element={<Sharepoint />} />
            <Route path="/solutions/bi-analytics" element={<BIAnalytics />} />
            <Route path="/solutions/mulesoft" element={<MuleSoft />} />
            <Route path="/solutions/servicenow" element={<ServiceNow />} />
            <Route path="/solutions/devops" element={<DevOps />} />
            
            {/* Insights Routes - Uses existing Blog.jsx component */}
            <Route path="/insights/blog" element={<BlogPage />} />
            
            {/* Careers Routes */}
            <Route path="/careers/what-we-offer" element={<WhatWeOffer />} />
            <Route path="/careers/current-openings" element={<CurrentOpenings />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Insights Routes */}
<Route path="/insights/blog" element={<BlogPage />} />
<Route path="/insights/blog/:id" element={<BlogDetail />} />

          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;