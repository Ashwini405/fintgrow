import { Link } from "react-router-dom";

/* BLOG LIST DATA (same source as BlogDetail.jsx) */
const blogs = [
  {
    id: 1,
    title: "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
    date: "Dec 18, 2025",
    author: "Team Fint",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title:
      "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
    date: "Nov 11, 2025",
    author: "Our Sr Full Stack Developer (AI) - Sai Karthik Vemuri",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
    date: "Oct 28, 2025",
    author: "Team Fint",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }

        @keyframes moveDotSlow {
          0% { left: 6%; }
          50% { left: 82%; }
          100% { left: 6%; }
        }

        .indicator {
          position: relative;
          width: 140px;
          height: 8px;
          background: #cceedd;
          border-radius: 999px;
          margin: 18px auto 0;
        }

        .indicator span {
          position: absolute;
          top: -5px;
          width: 18px;
          height: 18px;
          background: #e11d48;
          border-radius: 50%;
          animation: moveDotSlow 3.6s ease-in-out infinite;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ef4444;
          color: white;
          padding: 12px 26px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          margin-top: 22px;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: all 0.35s ease;
          text-decoration: none;
        }

        .blog-card:hover .read-more-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .blog-title {
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .blog-title:hover {
          color: #ef4444;
        }
      `}</style>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              FINT – Techtalk – Blog
            </h2>
            <div className="indicator">
              <span></span>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="blog-card relative fade-up"
                style={{ animationDelay: `${index * 160}ms` }}
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[240px] w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative mx-6 -mt-16 bg-white rounded-2xl p-6 shadow-lg">
                  <p className="text-sm text-gray-500 mb-2">
                    {blog.author} | {blog.date}
                  </p>

                  <Link to={`/insights/blog/${blog.id}`}>
                    <h3 className="blog-title text-lg font-semibold leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  <Link
                    to={`/insights/blog/${blog.id}`}
                    className="read-more-btn"
                  >
                    Read More <span>+</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
