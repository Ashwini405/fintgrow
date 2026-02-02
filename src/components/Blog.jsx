import { Link } from "react-router-dom";
import AnalyticsGraph from "./AnalyticsGraph";

/* BLOG LIST DATA */
const blogs = [
  {
    id: 1,
    title: "LLM Poisoning – Part 2: Defense Strategies for Resilient AI",
    date: "Dec 18, 2025",
    author: "Team Arvish Consulting",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2, // Innovative panel
    title:
      "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
    date: "Nov 11, 2025",
    author: "Sai Karthik Vemuri · Sr Full Stack Developer (AI)",
    image: null,
  },
  {
    id: 3, // Graph card
    title: "LLM Poisoning – Part 1: The Hidden Threat to AI Systems",
    date: "Oct 28, 2025",
    author: "Team Arvish Consulting",
    image: "graph",
  },
];

export default function Blog() {
  return (
    <>
      <style>{`
        .card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(2,6,23,0.18);
          transition: transform .6s cubic-bezier(.16,1,.3,1),
                      box-shadow .6s ease;
        }

        .card:hover {
          transform: translateY(-14px);
          box-shadow: 0 50px 110px rgba(2,6,23,0.28);
        }

        .image {
          transition: transform 1.4s cubic-bezier(.16,1,.3,1);
        }

        .card:hover .image {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(2,6,23,0.96) 18%,
            rgba(2,6,23,0.65) 45%,
            transparent 100%
          );
        }

        .meta {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.35);
        }

        .read-link {
          opacity: 0;
          transform: translateY(10px);
          transition: all .4s ease;
        }

        .card:hover .read-link {
          opacity: 1;
          transform: translateY(0);
        }

        /* Innovative middle panel */
        .tech-panel {
          position: relative;
          height: 420px;
          background: radial-gradient(circle at 30% 30%, #0ea5e9, transparent 40%),
                      radial-gradient(circle at 70% 60%, #6366f1, transparent 40%),
                      #020617;
          overflow: hidden;
        }

        .tech-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          animation: gridMove 18s linear infinite;
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to { background-position: 120px 120px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }

        .floating-icon {
          position: absolute;
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
        }

        .floating-icon:nth-child(2) {
          animation: floatReverse 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .floating-icon:nth-child(3) {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .card-floating-icon {
          position: absolute;
          opacity: 0.8;
          pointer-events: none;
          z-index: 1;
        }

        .card-floating-icon:nth-child(1) {
          animation: float 4s ease-in-out infinite;
        }

        .card-floating-icon:nth-child(2) {
          animation: floatReverse 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .graph-wrap {
          height: 420px;
          background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          position: relative;
          overflow: hidden;
        }

        .graph-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(34,211,238,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99,102,241,0.1) 0%, transparent 50%);
        }
      `}</style>

      <section className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Floating Icons */}
        <div className="floating-icon top-20 left-10 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm">🤖</span>
        </div>
        <div className="floating-icon top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
          <span className="text-purple-600 text-xs">💡</span>
        </div>
        <div className="floating-icon bottom-32 left-20 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-sm">📊</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
              Arvish Consulting · TechTalk
            </h2>
            <p className="text-lg text-slate-600">
              Research and engineering perspectives on secure and responsible AI systems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-14 items-stretch">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/insights/blog/${blog.id}`}
                className="card group flex flex-col"
              >
                {/* MEDIA */}
                {blog.image && blog.image !== "graph" && (
                  <>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="image h-[420px] w-full object-cover"
                    />
                    <div className="overlay" />
                    {/* Floating icons in image cards */}
                    <div className="card-floating-icon top-4 right-4 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔒</span>
                    </div>
                    <div className="card-floating-icon top-16 left-4 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🧠</span>
                    </div>
                  </>
                )}

                {blog.image === null && (
                  <div className="tech-panel">
                    {/* Floating icons in tech panel */}
                    <div className="card-floating-icon top-6 right-6 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <div className="card-floating-icon top-20 left-6 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🛡️</span>
                    </div>
                  </div>
                )}

                {blog.image === "graph" && (
                  <div className="graph-wrap">
                    <AnalyticsGraph />
                    {/* Floating icons in graph card */}
                    <div className="card-floating-icon top-4 right-4 w-6 h-6 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📈</span>
                    </div>
                    <div className="card-floating-icon bottom-4 left-4 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">💾</span>
                    </div>
                  </div>
                )}

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="meta inline-block px-4 py-2 rounded-full text-xs mb-5">
                    {blog.date} · {blog.author}
                  </div>

                  <h3 className="text-3xl font-extrabold leading-snug">
                    {blog.title}
                  </h3>

                  <div className="read-link mt-5 text-red-400 font-semibold text-sm">
                    Read Full Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
