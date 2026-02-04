import React from 'react';

export const OurCulture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Our Culture
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Building a workplace where innovation thrives, collaboration flourishes, and every team member feels valued, empowered, and inspired to achieve their best
          </p>
        </div>

        {/* Culture Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: '🌱',
              title: 'Growth Mindset',
              description: 'Continuous learning and personal development at every level',
              color: 'emerald'
            },
            {
              icon: '🤝',
              title: 'Collaborative Spirit',
              description: 'Teamwork and open communication drive our collective success',
              color: 'teal'
            },
            {
              icon: '⚡',
              title: 'Innovation First',
              description: 'Embracing new ideas and creative solutions to complex challenges',
              color: 'cyan'
            },
            {
              icon: '🎯',
              title: 'Purpose Driven',
              description: 'Making meaningful impact through our work and contributions',
              color: 'blue'
            }
          ].map((pillar, index) => (
            <div key={index} className={`bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-${pillar.color}-500 group text-center`}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-700 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Culture Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Work-Life Harmony</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We believe that happy, balanced employees are our greatest asset. Our comprehensive approach to work-life harmony ensures you can thrive both professionally and personally.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🕐', title: 'Flexible Hours', desc: 'Choose your optimal working schedule' },
                { icon: '🏠', title: 'Remote Options', desc: 'Work from anywhere that suits you best' },
                { icon: '🧘', title: 'Wellness Programs', desc: 'Mental health and fitness support' },
                { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take time off when you need it most' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Diversity & Inclusion</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Our diverse team brings unique perspectives and experiences that strengthen our solutions and create an inclusive environment where everyone belongs and can contribute their best work.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🌍', title: 'Global Perspectives', desc: 'Team members from 15+ countries' },
                { icon: '⚖️', title: 'Equal Opportunities', desc: 'Fair hiring and promotion practices' },
                { icon: '🗣️', title: 'Open Dialogue', desc: 'Safe spaces for sharing ideas and feedback' },
                { icon: '🎉', title: 'Cultural Celebrations', desc: 'Honoring diverse traditions and backgrounds' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning & Development */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Learning & Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                📚
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Continuous Learning</h3>
              <p className="text-slate-700 mb-4">Access to online courses, certifications, and training programs to enhance your skills.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• $3,000 annual learning budget</li>
                <li>• Industry conference attendance</li>
                <li>• Internal knowledge sharing sessions</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mentorship Programs</h3>
              <p className="text-slate-700 mb-4">Structured mentoring relationships to accelerate career growth and development.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Senior leader mentorship</li>
                <li>• Peer-to-peer learning circles</li>
                <li>• Cross-functional project exposure</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Career Advancement</h3>
              <p className="text-slate-700 mb-4">Clear pathways for growth with regular performance reviews and promotion opportunities.</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Quarterly performance reviews</li>
                <li>• Individual development plans</li>
                <li>• Leadership development tracks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recognition & Rewards */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Recognition & Rewards</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We celebrate achievements and recognize outstanding contributions through various programs that acknowledge both individual excellence and team success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'Employee of the Month', desc: 'Monthly recognition for exceptional performance' },
              { icon: '💰', title: 'Performance Bonuses', desc: 'Quarterly bonuses based on individual and team goals' },
              { icon: '🎉', title: 'Team Celebrations', desc: 'Regular team events and milestone celebrations' },
              { icon: '📈', title: 'Career Advancement', desc: 'Promotions and increased responsibilities' },
              { icon: '🎁', title: 'Spot Awards', desc: 'Immediate recognition for going above and beyond' },
              { icon: '🌟', title: 'Innovation Awards', desc: 'Special recognition for creative solutions' },
              { icon: '🤝', title: 'Peer Nominations', desc: 'Team members nominating each other' },
              { icon: '🎯', title: 'Goal Achievement', desc: 'Rewards for meeting and exceeding targets' }
            ].map((reward, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{reward.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{reward.title}</h4>
                <p className="text-sm text-slate-600">{reward.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Testimonials */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What Our Team Says</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The culture here is genuinely supportive. I've never felt more encouraged to take risks, learn from mistakes, and grow both personally and professionally.",
                author: "Alex Chen",
                role: "Full Stack Developer",
                avatar: "AC",
                rating: 5
              },
              {
                quote: "The work-life balance is incredible. I can be present for my family while still delivering my best work. It's the perfect environment for long-term growth.",
                author: "Maria Rodriguez",
                role: "Product Manager",
                avatar: "MR",
                rating: 5
              },
              {
                quote: "I love how diverse perspectives are not just welcomed but actively sought out. Every voice matters here, and that makes our solutions so much stronger.",
                author: "James Wilson",
                role: "Data Scientist",
                avatar: "JW",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
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

export default OurCulture;