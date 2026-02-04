import React from 'react';

export const CoreValues = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The fundamental principles that guide our decisions, shape our culture, and drive our success in delivering exceptional technology solutions
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '🚀',
              title: 'Innovation & Excellence',
              description: 'We continuously push boundaries and strive for excellence in everything we do',
              details: 'Embracing emerging technologies, fostering creative thinking, and delivering world-class solutions that exceed expectations and drive meaningful transformation.',
              color: 'blue'
            },
            {
              icon: '🤝',
              title: 'Client-Centric Approach',
              description: 'Our clients\' success is our success, driving every decision we make',
              details: 'Building long-term partnerships through deep understanding of client needs, delivering measurable value, and ensuring exceptional service at every touchpoint.',
              color: 'green'
            },
            {
              icon: '🛡️',
              title: 'Integrity & Transparency',
              description: 'We operate with honesty, accountability, and transparency in all interactions',
              details: 'Maintaining the highest ethical standards, fostering open communication, and building trust through consistent, reliable, and transparent business practices.',
              color: 'purple'
            },
            {
              icon: '📚',
              title: 'Continuous Learning',
              description: 'We embrace change and invest in continuous learning and development',
              details: 'Promoting lifelong learning, staying current with industry trends, and developing both technical expertise and soft skills to deliver cutting-edge solutions.',
              color: 'orange'
            },
            {
              icon: '🌟',
              title: 'Quality & Reliability',
              description: 'We are committed to delivering high-quality solutions with unwavering reliability',
              details: 'Implementing rigorous quality assurance processes, maintaining consistent performance standards, and ensuring our clients can always depend on our deliverables.',
              color: 'teal'
            },
            {
              icon: '🌍',
              title: 'Collaboration & Respect',
              description: 'We foster an inclusive environment where diverse perspectives drive success',
              details: 'Valuing diversity, encouraging knowledge sharing, promoting inclusive decision-making, and leveraging collective intelligence for optimal outcomes.',
              color: 'pink'
            }
          ].map((value, index) => (
            <div key={index} className={`bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-${value.color}-500 group`}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">{value.description}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{value.details}</p>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Values in Action</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How We Live Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Strategic Decision Making</h4>
                    <p className="text-slate-600">Every major decision is evaluated against our core values to ensure alignment with our principles and long-term vision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Performance & Recognition</h4>
                    <p className="text-slate-600">Team members are recognized and rewarded for demonstrating our values in their daily work and client interactions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Client Engagement</h4>
                    <p className="text-slate-600">Our values guide how we communicate, collaborate, and deliver solutions, ensuring consistent excellence in client relationships.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Measurable Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-sm text-slate-700 font-medium">Client Satisfaction Rate</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-slate-700 font-medium">Employee Retention</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">120+</div>
                  <div className="text-sm text-slate-700 font-medium">Training Hours/Year</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-700 font-medium">Support Commitment</div>
                </div>
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">Recognition & Awards</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Best Workplace Culture Award 2023</li>
                  <li>• Client Excellence Recognition</li>
                  <li>• Innovation Leadership Award</li>
                  <li>• Ethical Business Practices Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Testimonials */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What Our Team Says</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The emphasis on continuous learning has transformed my career trajectory. I've grown more in 2 years here than in my previous 5 years elsewhere.",
                author: "Sarah Mitchell",
                role: "Senior Software Engineer",
                avatar: "SM",
                color: "blue"
              },
              {
                quote: "Our client-first approach isn't just a slogan - it's genuinely how we operate. Every project decision considers client impact and value first.",
                author: "David Rodriguez",
                role: "Project Manager",
                avatar: "DR",
                color: "green"
              },
              {
                quote: "The collaborative culture here is exceptional. Ideas are valued regardless of hierarchy, and innovation is encouraged at every level of the organization.",
                author: "Priya Sharma",
                role: "UX/UI Designer",
                avatar: "PS",
                color: "purple"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${testimonial.color}-400 to-${testimonial.color}-600 rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;