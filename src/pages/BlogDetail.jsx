import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* BLOG DATA */
const blogDetails = {
  1: {
    title: "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
    date: "Dec 18, 2025",
    author: "Team Arvish Consulting",
    readTime: "8 min read",
    category: "AI Security",
    tags: ["LLM Security", "AI Defense", "Machine Learning", "Cybersecurity"],
    sections: [
      { title: "Introduction", content: "The last few years have been transformative for artificial intelligence. Large Language Models (LLMs) have evolved from experimental demos into production systems used in finance, healthcare, and compliance. As organizations integrate AI into critical workflows, one truth is clear — building AI systems is no longer a proof of concept problem, it's a production safety problem." },
      { title: "Advanced Defense Mechanisms", content: "Modern AI defense requires a multi-layered approach combining input validation, output filtering, and continuous monitoring. Organizations must implement robust guardrails that can detect and prevent various attack vectors including prompt injection, data poisoning, and adversarial inputs." },
      { title: "Implementation Strategies", content: "Successful AI defense implementation involves establishing clear security protocols, implementing real-time monitoring systems, and creating incident response procedures. Teams must balance security measures with system performance to maintain user experience while ensuring robust protection." },
      { title: "Future Considerations", content: "As AI systems become more sophisticated, so do the attack methods. Organizations must stay ahead by investing in research, maintaining updated security protocols, and fostering a culture of security awareness among development teams." }
    ]
  },
  2: {
    title: "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
    date: "Nov 11, 2025",
    author: "Sai Karthik Vemuri",
    readTime: "12 min read",
    category: "AI Engineering",
    tags: ["AI Guardrails", "System Design", "Trust & Safety", "MLOps"],
    sections: [
      { title: "The Guardrail Imperative", content: "In the rapidly evolving landscape of artificial intelligence, guardrails serve as the critical safety mechanisms that ensure AI systems operate within acceptable boundaries. These systems must be designed from the ground up with safety, reliability, and ethical considerations at their core." },
      { title: "Technical Architecture", content: "Effective AI guardrails require sophisticated technical architecture including real-time monitoring, automated response systems, and comprehensive logging mechanisms. The architecture must be scalable, maintainable, and capable of handling high-throughput scenarios while maintaining low latency." },
      { title: "Implementation Best Practices", content: "Best practices for guardrail implementation include establishing clear boundaries, implementing gradual rollout strategies, maintaining comprehensive testing suites, and ensuring proper documentation. Teams must also consider regulatory compliance and industry standards." },
      { title: "Monitoring and Maintenance", content: "Continuous monitoring is essential for maintaining effective guardrails. This includes performance metrics, security indicators, and user feedback analysis. Regular updates and improvements ensure the system remains effective against evolving threats and changing requirements." }
    ]
  },
  3: {
    title: "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
    date: "Oct 28, 2025",
    author: "Team Arvish Consulting",
    readTime: "10 min read",
    category: "AI Security",
    tags: ["Data Poisoning", "AI Threats", "Security Research", "Risk Assessment"],
    sections: [
      { title: "Understanding the Threat Landscape", content: "LLM poisoning represents one of the most sophisticated and dangerous attack vectors in modern AI systems. Unlike traditional cybersecurity threats, these attacks target the fundamental learning mechanisms of AI models, potentially compromising their integrity at the most basic level." },
      { title: "Attack Vectors and Methods", content: "Attackers employ various sophisticated methods including training data manipulation, adversarial examples, and model extraction techniques. Understanding these attack vectors is crucial for developing effective defense strategies and maintaining system integrity." },
      { title: "Detection and Prevention", content: "Early detection of poisoning attempts requires comprehensive monitoring of training data, model behavior analysis, and anomaly detection systems. Prevention strategies include data validation, source verification, and implementing robust training pipelines." },
      { title: "Industry Impact and Response", content: "The impact of LLM poisoning extends across industries, affecting everything from financial services to healthcare applications. Organizations must develop comprehensive response strategies and invest in security research to stay ahead of evolving threats." }
    ]
  }
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogDetails[id];
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  if (!blog) return <div className="py-32 text-center text-2xl font-bold">Blog not found</div>;

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      <style>{`
        @keyframes drift { from { transform: translateY(0); } to { transform: translateY(-100%); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes scan-line { 0% { top: -10%; } 100% { top: 110%; } }
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .hud-grid {
          background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .progress-bar {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #a855f7);
          z-index: 1000; transition: width 0.1s;
        }
      `}</style>

      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hud-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-blue-500/80 tracking-wide uppercase text-xs">{blog.category}</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            {blog.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "block text-slate-500 text-4xl mt-4 font-light" : ""}>
                {part}{i === 0 && blog.title.includes(':') ? ':' : ''}
              </span>
            ))}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {blog.author}
            </div>
            <span>{blog.date}</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          
          {/* THE "WOW" VISUALIZATIONS */}
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden glass-card mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
            
            {/* 1. DEFENSE VISUAL (HUD SHIELD) */}
            {id === "1" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="400" height="400" viewBox="0 0 200 200" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                  <g style={{ animation: 'rotate-slow 20s linear infinite' }}>
                    <path d="M100,20 A80,80 0 0,1 180,100" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                    <path d="M100,180 A80,80 0 0,1 20,100" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <circle cx="100" cy="100" r="50" fill="url(#shieldGrad)" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <defs>
                    <radialGradient id="shieldGrad">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                  <text x="100" y="105" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold" className="tracking-widest">ENCRYPTED_CORE</text>
                </svg>
                <div className="absolute bottom-10 flex gap-10 font-mono text-[10px] text-blue-400">
                  <span>SECURE_CHANNELS: ACTIVE</span>
                  <span>BIT_DEPTH: 256</span>
                </div>
              </div>
            )}

            {/* 2. GUARDRAILS VISUAL (BINARY FLOW) */}
            {id === "2" && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20 flex justify-around text-[10px] font-mono text-emerald-500 leading-none">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="animate-drift" style={{ animationDuration: `${5 + i}s`, animationDelay: `-${i}s` }}>
                      {Array(50).fill(0).map(() => Math.round(Math.random())).join('<br/>')}
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_20px_#10b981]" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/40 rounded-lg backdrop-blur-md">
                      <span className="text-emerald-400 font-mono text-sm tracking-[0.3em]">VALIDATING_AI_OUTPUT...</span>
                   </div>
                </div>
              </div>
            )}

            {/* 3. THREAT VISUAL (RADAR SCAN) */}
            {id === "3" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 border border-red-500/20 rounded-full">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'conic-gradient(from 0deg, rgba(239, 68, 68, 0.2), transparent 90deg)',
                    animation: 'rotate-slow 4s linear infinite'
                  }} />
                  <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-red-500 font-mono text-xs font-bold animate-pulse">THREAT_FOUND: POISON_DATA.EXE</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Universal Overlay Scan Line */}
            <div className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" style={{ animation: 'scan-line 6s linear infinite' }} />
          </div>

          {/* ARTICLE CONTENT */}
          <div className="space-y-12">
            {blog.sections.map((section, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -left-8 top-0 text-blue-500/20 font-mono text-4xl font-bold group-hover:text-blue-500/40 transition-colors">
                  0{idx + 1}
                </div>
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{section.title}</h2>
                <div className="text-slate-400 text-lg leading-relaxed space-y-4">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Arvish SecureAI™</h3>
              <p className="text-sm text-slate-400 mb-6">Want to harden your LLM implementation? Our experts specialize in building these exact defense layers for Fortune 500s.</p>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Book a Strategy Call
              </button>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Expertise Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-md text-[11px] text-blue-400 font-mono hover:bg-blue-500/20 cursor-default transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="glass-card rounded-[40px] p-12 text-center relative overflow-hidden border-blue-500/20">
          <div className="absolute inset-0 bg-blue-600/5" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative">Never miss a security patch.</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative text-lg">Join 5,000+ engineers receiving our monthly "AI Threat Intel" report.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
            <input type="email" placeholder="work-email@company.ai" className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}