


// // import { Link } from "react-router-dom";
// // import AnalyticsGraph from "./AnalyticsGraph";


// // /* BLOG LIST DATA */
// // const blogs = [
// //   {
// //     id: 1,
// //     title: "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
// //     date: "Dec 18, 2025",
// //     author: "Team Arvish Consulting",
// //     image:
// //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
// //   },
// //   {
// //     id: 2,
// //     title:
// //       "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
// //     date: "Nov 11, 2025",
// //     author: "Our Sr Full Stack Developer (AI) - Sai Karthik Vemuri",
// //     image:
// //       "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
// //   },
// //   {
// //     id: 3,
// //     title: "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
// //     date: "Oct 28, 2025",
// //     author: "Team Arvish Consulting",
// //     image:
// //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
// //   },
// // ];

// // export default function Blog() {
// //   return (
// //     <>
// //       {/* INTERNAL CSS */}
// //       <style>{`
// //         /* Fade-in animation */
// //         @keyframes fadeUp {
// //           from { opacity: 0; transform: translateY(28px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         .fade-up {
// //           opacity: 0;
// //           animation: fadeUp 0.9s ease-out forwards;
// //         }

// //         /* Section indicator */
// //         @keyframes moveDotSlow {
// //           0% { left: 6%; }
// //           50% { left: 82%; }
// //           100% { left: 6%; }
// //         }

// //         .indicator {
// //           position: relative;
// //           width: 140px;
// //           height: 8px;
// //           background: #cceedd;
// //           border-radius: 999px;
// //           margin: 18px auto 0;
// //         }

// //         .indicator span {
// //           position: absolute;
// //           top: -5px;
// //           width: 18px;
// //           height: 18px;
// //           background: #e11d48;
// //           border-radius: 50%;
// //           animation: moveDotSlow 3.6s ease-in-out infinite;
// //         }

// //         /* Image floating animation */
// //         @keyframes floatImage {
// //           0% { transform: scale(1) translateY(0); }
// //           50% { transform: scale(1.04) translateY(-8px); }
// //           100% { transform: scale(1) translateY(0); }
// //         }

// //         .blog-image {
// //           animation: floatImage 12s ease-in-out infinite;
// //           transition: transform 1s ease;
// //         }

// //         .blog-card:hover .blog-image {
// //           transform: scale(1.1);
// //         }

// //         /* Read More button */
// //         .read-more-btn {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 10px;
// //           background: #ef4444;
// //           color: white;
// //           padding: 12px 26px;
// //           border-radius: 999px;
// //           font-weight: 600;
// //           font-size: 14px;
// //           margin-top: 22px;
// //           opacity: 0;
// //           transform: translateY(10px);
// //           pointer-events: none;
// //           transition: all 0.35s ease;
// //           text-decoration: none;
// //         }

// //         .blog-card:hover .read-more-btn {
// //           opacity: 1;
// //           transform: translateY(0);
// //           pointer-events: auto;
// //         }

// //         /* Title hover */
// //         .blog-title {
// //           cursor: pointer;
// //           transition: color 0.3s ease;
// //         }

// //         .blog-title:hover {
// //           color: #ef4444;
// //         }
// //       `}</style>

// //       <section className="py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">

// //           {/* Header */}
// //           <div className="text-center mb-20">
// //             <h2 className="text-3xl md:text-4xl font-bold text-primary">
// //               Arvish Consulting – Techtalk – Blog
// //             </h2>

// //             <div className="indicator">
// //               <span></span>
// //             </div>
// //           </div>

// //           {/* Blog Cards */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
// //             {blogs.map((blog, index) => (
// //               <div
// //                 key={blog.id}
// //                 className="blog-card relative fade-up"
// //                 style={{ animationDelay: `${index * 160}ms` }}
// //               >
// //                 {/* Image */}
// //                 <div className="rounded-2xl overflow-hidden shadow-md">
// //                   <img
// //                     src={blog.image}
// //                     alt={blog.title}
// //                     className="blog-image h-[240px] w-full object-cover"
// //                     loading="lazy"
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="relative mx-6 -mt-16 bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 group-hover:-translate-y-2">
// //                   <p className="text-sm text-gray-500 mb-2">
// //                     {blog.author} | {blog.date}
// //                   </p>

// //                   {/* Title clickable */}
// //                   <Link to={`/insights/blog/${blog.id}`}>
// //                     <h3 className="blog-title text-lg font-semibold leading-snug">
// //                       {blog.title}
// //                     </h3>
// //                   </Link>

// //                   {/* Read More */}
// //                   <Link
// //                     to={`/insights/blog/${blog.id}`}
// //                     className="read-more-btn"
// //                   >
// //                     Read More <span>+</span>
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }


// import { Link } from "react-router-dom";
// import AnalyticsGraph from "./AnalyticsGraph";

// /* BLOG LIST DATA */
// const blogs = [
//   {
//     id: 1,
//     title: "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
//     date: "Dec 18, 2025",
//     author: "Team Arvish Consulting",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title:
//       "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
//     date: "Nov 11, 2025",
//     author: "Our Sr Full Stack Developer (AI) - Sai Karthik Vemuri",
//     image:
//       "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
//     date: "Oct 28, 2025",
//     author: "Team Arvish Consulting",
//   },
// ];

// export default function Blog() {
//   return (
//     <>
//       {/* INTERNAL CSS */}
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .fade-up {
//           opacity: 0;
//           animation: fadeUp 0.9s ease-out forwards;
//         }

//         @keyframes moveDotSlow {
//           0% { left: 6%; }
//           50% { left: 82%; }
//           100% { left: 6%; }
//         }

//         .indicator {
//           position: relative;
//           width: 140px;
//           height: 8px;
//           background: #cceedd;
//           border-radius: 999px;
//           margin: 18px auto 0;
//         }

//         .indicator span {
//           position: absolute;
//           top: -5px;
//           width: 18px;
//           height: 18px;
//           background: #e11d48;
//           border-radius: 50%;
//           animation: moveDotSlow 3.6s ease-in-out infinite;
//         }

//         .blog-card {
//           transition: transform 0.4s ease;
//         }

//         .blog-card:hover {
//           transform: translateY(-10px);
//         }

//         /* Graph wrapper (ONLY for one card) */
//         .graph-wrapper {
//           background: linear-gradient(145deg, #020617, #020617);
//           border-radius: 16px;
//           padding: 14px;
//           height: 240px;
//         }

//         .read-more-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: #ef4444;
//           color: white;
//           padding: 12px 26px;
//           border-radius: 999px;
//           font-weight: 600;
//           font-size: 14px;
//           margin-top: 22px;
//           opacity: 0;
//           transform: translateY(10px);
//           pointer-events: none;
//           transition: all 0.35s ease;
//           text-decoration: none;
//         }

//         .read-more-btn span {
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: white;
//           color: #ef4444;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 700;
//         }

//         .blog-card:hover .read-more-btn {
//           opacity: 1;
//           transform: translateY(0);
//           pointer-events: auto;
//         }

//         .blog-title {
//           cursor: pointer;
//           transition: color 0.3s ease;
//         }

//         .blog-title:hover {
//           color: #ef4444;
//         }



//         /* AI pulse overlay */
// .ai-pulse {
//   position: relative;
//   overflow: hidden;
// }

// .ai-pulse::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     120deg,
//     transparent 30%,
//     rgba(56, 189, 248, 0.18),
//     transparent 70%
//   );
//   transform: translateX(-120%);
//   animation: aiPulse 4.5s ease-in-out infinite;
//   pointer-events: none;
// }

// @keyframes aiPulse {
//   0% {
//     transform: translateX(-120%);
//   }
//   50% {
//     transform: translateX(120%);
//   }
//   100% {
//     transform: translateX(120%);
//   }
// }

//       `}</style>

//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* HEADER */}
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary">
//               Arvish Consulting – Techtalk – Blog
//             </h2>
//             <div className="indicator">
//               <span></span>
//             </div>
//           </div>

//           {/* BLOG CARDS */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {blogs.map((blog, index) => (
//               <div
//                 key={blog.id}
//                 className="blog-card fade-up"
//                 style={{ animationDelay: `${index * 160}ms` }}
//               >
//                 {/* IMAGE / GRAPH */}
//                 {blog.image ? (
//                   <div className="rounded-2xl overflow-hidden shadow-md">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="h-[240px] w-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>
//                 ) : (
//                   <div className="graph-wrapper shadow-md">
//                     <AnalyticsGraph />
//                   </div>
//                 )}

//                 {/* CONTENT */}
//                 <div className="relative mx-6 -mt-16 bg-white rounded-2xl p-6 shadow-lg">
//                   <p className="text-sm text-gray-500 mb-2">
//                     {blog.author} | {blog.date}
//                   </p>

//                   <Link to={`/insights/blog/${blog.id}`}>
//                     <h3 className="blog-title text-lg font-semibold leading-snug">
//                       {blog.title}
//                     </h3>
//                   </Link>

//                   <Link
//                     to={`/insights/blog/${blog.id}`}
//                     className="read-more-btn"
//                   >
//                     Read More <span>+</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }



import { Link } from "react-router-dom";
import AnalyticsGraph from "./AnalyticsGraph";

/* BLOG LIST DATA */
const blogs = [
  {
    id: 1,
    title: "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
    date: "Dec 18, 2025",
    author: "Team Arvish Consulting",
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
    author: "Team Arvish Consulting",
  },
];

export default function Blog() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
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

        .blog-card {
          transition: transform 0.4s ease;
        }

        .blog-card:hover {
          transform: translateY(-10px);
        }

        /* Graph wrapper (only for blog 3) */
        .graph-wrapper {
          background: linear-gradient(145deg, #020617, #020617);
          border-radius: 16px;
          padding: 14px;
          height: 240px;
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

        .read-more-btn span {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: white;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
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

        /* AI pulse overlay (ONLY visual enhancement) */
        .ai-pulse {
          position: relative;
          overflow: hidden;
        }

        .ai-pulse::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(56, 189, 248, 0.18),
            transparent 70%
          );
          transform: translateX(-120%);
          animation: aiPulse 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes aiPulse {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }



        /* ===== AI MOVING EFFECTS ===== */

/* Floating motion */
@keyframes aiFloat {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

/* Background grid drift */
@keyframes gridMove {
  0%   { background-position: 0 0; }
  100% { background-position: 120px 120px; }
}

/* Floating brain rotation */
@keyframes brainFloat {
  0%   { transform: rotate(0deg) translateX(40px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
}

/* CPU chip rotation */
@keyframes chipRotate {
  0%   { transform: rotate(0deg) translateX(35px) rotate(0deg); }
  100% { transform: rotate(-360deg) translateX(35px) rotate(360deg); }
}

/* Neural network pulse */
@keyframes neuralPulse {
  0%   { transform: scale(1) rotate(0deg); opacity: 0.8; }
  50%  { transform: scale(1.2) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
}

/* Apply only to AI card */
.ai-motion {
  animation: aiFloat 6.5s ease-in-out infinite;
}

/* Subtle grid layer */
.ai-motion::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      rgba(255,255,255,0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.04) 1px,
      transparent 1px
    );
  background-size: 24px 24px;
  animation: gridMove 18s linear infinite;
  opacity: 0.35;
  pointer-events: none;
}

      `}</style>

      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Arvish Consulting – Techtalk – Blog
            </h2>
            <div className="indicator">
              <span></span>
            </div>
          </div>

          {/* BLOG CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="blog-card fade-up"
                style={{ animationDelay: `${index * 160}ms` }}
              >
                {/* MEDIA */}
                {blog.id === 1 ? (
                  /* ✅ AI IMAGE WITH ENHANCED ANIMATIONS */
                  <div className="rounded-2xl overflow-hidden shadow-md ai-pulse ai-motion relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-[240px] w-full object-cover"
                      loading="lazy"
                    />
                    {/* AI Neural Network Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-6 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        <line x1="20" y1="20" x2="80" y2="60" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2,2" className="animate-pulse"/>
                        <line x1="80" y1="60" x2="40" y2="200" stroke="#34d399" strokeWidth="1" strokeDasharray="2,2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                      </svg>
                    </div>
                    {/* Floating AI Icons */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 text-2xl opacity-85" style={{animation: 'brainFloat 6s linear infinite'}}>
                      🧠
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-10 h-10 text-xl opacity-80" style={{animation: 'chipRotate 4s linear infinite reverse'}}>
                      🔧
                    </div>
                    <div className="absolute top-1/2 -right-4 w-11 h-11 text-2xl opacity-85" style={{animation: 'neuralPulse 5s ease-in-out infinite'}}>
                      ⚡
                    </div>
                  </div>

                ) : blog.image ? (
                  /* NORMAL IMAGE */
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-[240px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* GRAPH ONLY FOR BLOG 3 */
                  <div className="graph-wrapper shadow-md">
                    <AnalyticsGraph />
                  </div>
                )}

                {/* CONTENT */}
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
