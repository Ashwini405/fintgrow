// pages/Home.jsx
import Hero from '../components/Hero';
import Services from '../components/Services';
import Blog from '../components/Blog';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <About />
      <WhyChoose />
    </>
  );
};

// ============== ABOUT US PAGES ==============

export const CompanyOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Company Overview</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-6 leading-relaxed">
            ARVISH CONSULTING is a leading technology services company specializing in digital transformation, 
            enterprise solutions, and innovative technology implementations.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Founded with a vision to empower businesses through cutting-edge technology solutions, 
            we have grown to become a trusted partner for organizations worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-slate-700 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <h3 className="text-4xl font-bold text-green-600 mb-2">200+</h3>
              <p className="text-slate-700 font-medium">Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">15+</h3>
              <p className="text-slate-700 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CoreValues = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Our Core Values</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Innovation', desc: 'Pushing boundaries with creative solutions', color: 'blue' },
            { title: 'Integrity', desc: 'Maintaining highest ethical standards', color: 'green' },
            { title: 'Excellence', desc: 'Delivering superior quality always', color: 'purple' },
            { title: 'Collaboration', desc: 'Working together for success', color: 'orange' },
            { title: 'Customer Focus', desc: 'Putting clients at the center', color: 'red' },
            { title: 'Continuous Learning', desc: 'Growing through knowledge', color: 'teal' }
          ].map((value, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-t-4 border-${value.color}-500`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Our Culture</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            At ARVISH CONSULTING, we foster a culture of innovation, collaboration, and continuous growth. 
            Our team members are encouraged to think creatively, take ownership, and contribute 
            to meaningful projects that make a difference.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Work-Life Balance</h3>
              <p className="text-slate-600">We believe in maintaining a healthy balance between professional and personal life.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Learning & Development</h3>
              <p className="text-slate-600">Continuous learning opportunities through training programs and certifications.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Inclusive Environment</h3>
              <p className="text-slate-600">Diversity and inclusion are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Leaders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Meet the Leaders</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Leader Name</h3>
                <p className="text-lg text-blue-600 font-medium mb-3">Position Title</p>
                <p className="text-slate-600">Brief description about the leader and their role at ARVISH CONSULTING.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============== SERVICES PAGES ==============

export const ArtificialIntelligence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Artificial Intelligence</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Empower your enterprise with cutting-edge Artificial Intelligence solutions that transform 
            data into actionable insights and drive intelligent automation across your business processes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our AI Services</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  Machine Learning Solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  Natural Language Processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  Computer Vision
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  Predictive Analytics
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Automated Decision Making
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Enhanced Customer Experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Improved Operational Efficiency
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Data-Driven Insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DigitalExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Digital Experience</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Our industry-leading digital experience services are designed to drive brand engagement 
            from strategy, operations to enablement while improving productivity and process efficiency.
          </p>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">User Experience Design</h3>
              <p className="text-slate-700">Creating intuitive and engaging digital experiences that delight users.</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Digital Strategy</h3>
              <p className="text-slate-700">Comprehensive digital transformation strategies aligned with business goals.</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Omnichannel Solutions</h3>
              <p className="text-slate-700">Seamless experiences across all digital touchpoints.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Data Analytics</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Unlock the power of your data with advanced analytics solutions that provide deep insights, 
            predictive modeling, and real-time intelligence for strategic decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business Intelligence</h3>
              <p className="text-slate-600">Transform data into actionable insights</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Predictive Analytics</h3>
              <p className="text-slate-600">Forecast trends and patterns</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data Visualization</h3>
              <p className="text-slate-600">Present data in compelling ways</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EnterpriseApplication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Enterprise Application Services</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Modernize and scale your enterprise platforms with our comprehensive application services, 
            delivering seamless integration, enhanced performance, and digital transformation.
          </p>
          <div className="space-y-4">
            {['Application Development', 'Legacy Modernization', 'Cloud Migration', 'API Integration', 'Microservices Architecture'].map((service, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <span className="text-lg font-medium text-slate-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DigitalIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Digital Integration</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Seamless integration solutions that connect your systems, applications, and data sources 
            for a unified digital ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CloudOperations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Intelligent IT & Cloud Operations</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Advanced cloud operations and IT management solutions for optimal performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProcessAutomation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Intelligent Process Automation</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Automate and optimize your business processes with intelligent automation solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export const QualityEngineering = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Quality Engineering and Assurance</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Comprehensive quality assurance and testing services to ensure excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

// ============== SOLUTIONS PAGES ==============

export const Dynamics365 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-[#1e2875] mb-8">Microsoft Dynamics 365</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Transform your business processes using Microsoft Dynamics 365 intelligent applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Sharepoint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Microsoft Sharepoint</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Collaboration and content management solutions powered by SharePoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export const BIAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Microsoft BI & Analytics</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Business intelligence and analytics solutions with Microsoft Power BI.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MuleSoft = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">MuleSoft</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            API-led connectivity and integration platform powered by MuleSoft.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServiceNow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-[#1e2875] mb-8">ServiceNow</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Digital workflow solutions that transform your service management.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DevOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">DevOps</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <p className="text-xl text-slate-700 mb-8">
            Continuous integration and deployment solutions for faster delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

// ============== INSIGHTS & CAREERS PAGES ==============

// Note: Blog/Insights page uses the existing Blog.jsx component from Home
// No separate InsightsBlog page needed

export const WhatWeOffer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">What We Offer</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Competitive Salary', desc: 'Market-leading compensation packages' },
            { title: 'Health Benefits', desc: 'Comprehensive health insurance' },
            { title: 'Learning & Development', desc: 'Continuous training opportunities' },
            { title: 'Flexible Work', desc: 'Hybrid and remote options' },
            { title: 'Career Growth', desc: 'Clear progression paths' },
            { title: 'Great Culture', desc: 'Collaborative and inclusive environment' }
          ].map((benefit, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CurrentOpenings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12">Current Openings</h1>
        <div className="space-y-6">
          {[
            { title: 'Senior Full Stack Developer', location: 'Hyderabad', type: 'Full-time' },
            { title: 'AI/ML Engineer', location: 'Bangalore', type: 'Full-time' },
            { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time' },
            { title: 'UI/UX Designer', location: 'Hyderabad', type: 'Full-time' },
            { title: 'Data Analyst', location: 'Bangalore', type: 'Full-time' }
          ].map((job, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-slate-600">
                    <span>📍 {job.location}</span>
                    <span>• {job.type}</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Ready to transform your business? Let's discuss how we can help you achieve your goals.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Company</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                  <option>Select a Service</option>
                  <option>Artificial Intelligence</option>
                  <option>Digital Experience</option>
                  <option>Data Analytics</option>
                  <option>Enterprise Applications</option>
                  <option>Cloud Operations</option>
                  <option>Process Automation</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin group-hover:animate-pulse"></div>
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                    <p className="text-slate-600">123 Business District<br />Hyderabad, Telangana 500001<br />India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 40 1234 5678<br />+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@arvishconsulting.com<br />sales@arvishconsulting.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social, i) => (
                  <div key={i} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer transform hover:scale-110">
                    <span className="text-sm font-bold">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};