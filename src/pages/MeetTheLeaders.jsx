import React from 'react';

export const MeetTheLeaders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Meet the Leaders
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Visionary leaders with decades of experience driving innovation, excellence, and transformational growth in the technology industry
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'John Smith',
              role: 'Chief Executive Officer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
              experience: '20+ years',
              background: 'Former VP at Microsoft, led digital transformation initiatives for Fortune 500 companies',
              expertise: ['Strategic Leadership', 'Digital Transformation', 'Business Growth'],
              education: 'MBA from Harvard Business School',
              color: 'blue',
              quote: 'Innovation is not just about technology; it\'s about transforming how businesses create value for their customers.'
            },
            {
              name: 'Sarah Johnson',
              role: 'Chief Technology Officer',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
              experience: '18+ years',
              background: 'Former Principal Engineer at Google, expert in cloud architecture and AI/ML systems',
              expertise: ['Cloud Architecture', 'AI/ML', 'System Design'],
              education: 'PhD in Computer Science from MIT',
              color: 'green',
              quote: 'The future belongs to organizations that can seamlessly blend human creativity with artificial intelligence.'
            },
            {
              name: 'Michael Chen',
              role: 'Chief Operating Officer',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
              experience: '16+ years',
              background: 'Former Operations Director at Amazon, specializes in scaling operations and process optimization',
              expertise: ['Operations Excellence', 'Process Optimization', 'Quality Management'],
              education: 'MS in Operations Research from Stanford',
              color: 'purple',
              quote: 'Excellence in execution is what separates good companies from great ones.'
            },
            {
              name: 'Emily Davis',
              role: 'VP of Engineering',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
              experience: '14+ years',
              background: 'Former Senior Engineering Manager at Netflix, led teams building scalable distributed systems',
              expertise: ['Software Engineering', 'Team Leadership', 'Scalable Systems'],
              education: 'MS in Software Engineering from Carnegie Mellon',
              color: 'red',
              quote: 'Great software is built by great teams who are passionate about solving real problems.'
            },
            {
              name: 'David Wilson',
              role: 'VP of Sales & Partnerships',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
              experience: '15+ years',
              background: 'Former Sales Director at Salesforce, built strategic partnerships across multiple industries',
              expertise: ['Strategic Sales', 'Partnership Development', 'Market Expansion'],
              education: 'MBA from Wharton School',
              color: 'indigo',
              quote: 'Success in sales is about building relationships and creating mutual value, not just closing deals.'
            },
            {
              name: 'Lisa Brown',
              role: 'VP of Human Resources',
              image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
              experience: '12+ years',
              background: 'Former HR Director at LinkedIn, expert in talent acquisition and organizational development',
              expertise: ['Talent Management', 'Organizational Culture', 'Leadership Development'],
              education: 'MS in Organizational Psychology from Northwestern',
              color: 'teal',
              quote: 'Our people are our greatest asset. Investing in their growth is investing in our future.'
            }
          ].map((leader, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Header with Image */}
              <div className={`bg-gradient-to-r from-${leader.color}-400 to-${leader.color}-600 p-8 text-center`}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-white/90 font-medium">{leader.role}</p>
                <p className="text-white/80 text-sm mt-1">{leader.experience} Experience</p>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">Background</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{leader.background}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, i) => (
                      <span key={i} className={`px-3 py-1 bg-${leader.color}-100 text-${leader.color}-700 text-xs rounded-full font-medium`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">Education</h4>
                  <p className="text-sm text-slate-600">{leader.education}</p>
                </div>
                
                <div className={`bg-${leader.color}-50 rounded-xl p-4 border-l-4 border-${leader.color}-400`}>
                  <p className="text-sm text-slate-700 italic leading-relaxed">"{leader.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Leadership Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vision-Driven Leadership</h3>
              <p className="text-slate-700 leading-relaxed">
                We lead with a clear vision of the future, inspiring teams to achieve ambitious goals while maintaining focus on long-term sustainable growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Collaborative Excellence</h3>
              <p className="text-slate-700 leading-relaxed">
                We believe in empowering teams, fostering open communication, and creating an environment where diverse perspectives drive innovation and success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Agile Innovation</h3>
              <p className="text-slate-700 leading-relaxed">
                We embrace change, encourage calculated risks, and maintain the agility needed to adapt quickly to market demands and technological advances.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Achievements */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Collective Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-700 font-medium">Projects Delivered</div>
              <div className="text-sm text-slate-600 mt-1">Under current leadership</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-700 font-medium">Client Satisfaction</div>
              <div className="text-sm text-slate-600 mt-1">Consistent excellence</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-slate-700 font-medium">Industry Awards</div>
              <div className="text-sm text-slate-600 mt-1">Recognition for innovation</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-slate-700 font-medium">Team Members</div>
              <div className="text-sm text-slate-600 mt-1">Growing organization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;