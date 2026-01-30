

// import { Link } from "react-router-dom"

// const services = [
//   {
//     title: "Artificial Intelligence",
//     desc: "From generative AI to predictive analytics, our AI solutions help enterprises innovate faster.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
//   },
//   {
//     title: "Digital Experience",
//     desc: "Providing solutions to connect the entire customer journey by optimizing operations.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
//   },
//   {
//     title: "Data Analytics",
//     desc: "Providing BI solutions that deliver actionable insights for strategic and tactical decisions.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
//   },
//   {
//     title: "Enterprise Applications",
//     desc: "Best-of-breed solutions enabling application-driven business transformation.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4712/4712040.png",
//   },
//   {
//     title: "Microsoft Dynamics 365",
//     desc: "ERP and CRM solutions that improve operational efficiency.",
//     icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
//   },
//   {
//     title: "Intelligent IT & Cloud",
//     desc: "Cloud-first strategies for scalable and secure IT operations.",
//     icon: "https://cdn-icons-png.flaticon.com/512/4149/4149653.png",
//   },
//   {
//     title: "Quality Engineering",
//     desc: "Advanced testing frameworks ensuring product reliability.",
//     icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
//   },
//   {
//     title: "ServiceNow Platform",
//     desc: "Digital workflows that simplify enterprise service management.",
//     icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
//   },
// ]

// export default function Services() {
//   return (
//     <section className="services-section relative overflow-hidden">

//       {/* ===== SOFT DIAGONAL BACKGROUND ===== */}
//       <svg
//         className="animated-wave absolute top-0 right-0 h-full w-[55%]"
//         viewBox="0 0 1000 800"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M1000,0 L450,0 C550,250 550,550 450,800 L1000,800 Z"
//           fill="#2563eb"
//           opacity="0.06"
//         />
//       </svg>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

//         {/* Header */}
//         <div className="text-center max-w-5xl mx-auto mb-24 fade-up">
//           <h2 className="services-title">Our Services Portfolio</h2>
//           <div className="animated-underline"></div>

//           <p className="text-lg text-slate-600 leading-relaxed mt-12">
//             Delivering enterprise-grade solutions that drive digital transformation
//             and accelerate business growth across industries and geographies.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="service-card fade-up"
//               style={{ animationDelay: `${i * 120}ms` }}
//             >
//               <div className="icon-box">
//                 <img src={s.icon} alt={s.title} />
//               </div>

//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>

//               <Link
//                 to={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="learn-btn"
//               >
//                 Learn More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ===== STYLES ===== */}
//       <style jsx>{`
//         .services-section {
//           background: #ffffff;
//         }

//         /* ===== TITLE ===== */
//         .services-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 3rem;
//           font-style: italic;
//           color: #0f172a;
//         }

//         .animated-underline {
//           width: 110px;
//           height: 3px;
//           background: #dc2626;
//           margin: 22px auto 0;
//           border-radius: 2px;
//         }

//         /* ===== CARD ===== */
//         .service-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 20px;
//           padding: 32px;
//           text-align: center;
//           box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
//           transition: all 0.35s ease;
//         }

//         .service-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
//         }

//         /* Icon */
//         .icon-box {
//           width: 80px;
//           height: 80px;
//           margin: 0 auto 32px;
//           background: #f1f5f9;
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.35s ease;
//         }

//         .service-card:hover .icon-box {
//           transform: translateY(-6px) scale(1.05);
//           box-shadow: 0 15px 30px rgba(37, 99, 235, 0.25);
//         }

//         .icon-box img {
//           width: 48px;
//           height: 48px;
//         }

//         .service-card h3 {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #0f172a;
//           margin-bottom: 16px;
//         }

//         .service-card p {
//           font-size: 0.95rem;
//           color: #475569;
//           line-height: 1.6;
//           margin-bottom: 28px;
//         }

//         /* Button */
//         .learn-btn {
//           display: inline-block;
//           padding: 12px 28px;
//           border-radius: 10px;
//           border: 1px solid #cbd5f5;
//           color: #0f172a;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .learn-btn:hover {
//           background: #0f172a;
//           color: #ffffff;
//           transform: translateY(-2px);
//         }

//         /* ===== FADE UP ANIMATION ===== */
//         .fade-up {
//           opacity: 0;
//           transform: translateY(40px);
//           animation: fadeUp 0.8s ease forwards;
//         }

//         @keyframes fadeUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* ===== BACKGROUND FLOAT ===== */
//         .animated-wave {
//           animation: waveFloat 36s ease-in-out infinite;
//         }

//         @keyframes waveFloat {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//           100% { transform: translateY(0); }
//         }

//         /* Accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           .animated-wave,
//           .fade-up {
//             animation: none;
//             opacity: 1;
//             transform: none;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }



import { Link } from "react-router-dom"

const services = [
  {
    title: "Artificial Intelligence",
    desc: "From generative AI to predictive analytics, our AI solutions help enterprises innovate faster.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },
  {
    title: "Digital Experience",
    desc: "Providing solutions to connect the entire customer journey by optimizing operations.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
  },
  {
    title: "Data Analytics",
    desc: "Providing BI solutions that deliver actionable insights for strategic and tactical decisions.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
  },
  {
    title: "Enterprise Applications",
    desc: "Best-of-breed solutions enabling application-driven business transformation.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712040.png",
  },
  {
    title: "Microsoft Dynamics 365",
    desc: "ERP and CRM solutions that improve operational efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  },
  {
    title: "Intelligent IT & Cloud",
    desc: "Cloud-first strategies for scalable and secure IT operations.",
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149653.png",
  },
  {
    title: "Quality Engineering",
    desc: "Advanced testing frameworks ensuring product reliability.",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "ServiceNow Platform",
    desc: "Digital workflows that simplify enterprise service management.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  },
]

export default function Services() {
  return (
    <section className="services-section relative overflow-hidden">

      {/* Background */}
      <svg
        className="animated-wave absolute top-0 right-0 h-full w-[55%]"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
      >
        <path
          d="M1000,0 L450,0 C550,250 550,550 450,800 L1000,800 Z"
          fill="#2563eb"
          opacity="0.06"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-24 fade-up">
          <h2 className="services-title">Our Services Portfolio</h2>
          <div className="animated-underline"></div>

          <p className="text-lg text-slate-600 leading-relaxed mt-12">
            Delivering enterprise-grade solutions that drive digital transformation
            and accelerate business growth across industries and geographies.
          </p>

          {/* Certifications */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <img
              src="https://mma.prnewswire.com/media/1078433/CMMIDEV_5.jpg?p=facebook"
              alt="CMMI Dev 5"
              className="h-12"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCHrfUH2bxpX1ijlWV6UWXhGEwXup996shw&s"
              alt="Microsoft Gold Partner"
              className="h-12"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="icon-box">
                <img src={s.icon} alt={s.title} />
              </div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <Link
                to={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="learn-btn"
              >
                <span>Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .services-section {
          background: #ffffff;
        }

        .services-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-style: italic;
          color: #0f172a;
        }

        .animated-underline {
          width: 110px;
          height: 3px;
          background: #dc2626;
          margin: 22px auto 0;
          border-radius: 2px;
        }

        /* Cards */
        .service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.02), rgba(30, 64, 175, 0.02));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.2);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        /* Icon */
        .icon-box {
          width: 80px;
          height: 80px;
          margin: 0 auto 32px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .icon-box::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #dc2626, #1e40af);
          border-radius: 18px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .service-card:hover .icon-box {
          transform: translateY(-8px) scale(1.1) rotate(5deg);
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
        }

        .service-card:hover .icon-box::before {
          opacity: 0.1;
        }

        .icon-box img {
          width: 48px;
          height: 48px;
          transition: all 0.3s ease;
          filter: grayscale(0.2);
        }

        .service-card:hover .icon-box img {
          filter: grayscale(0) brightness(1.1);
          transform: scale(1.05);
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .service-card:hover h3 {
          color: #dc2626;
          transform: translateY(-2px);
        }

        p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 28px;
          transition: all 0.3s ease;
        }

        .service-card:hover p {
          color: #334155;
          transform: translateY(-1px);
        }

        /* ===== LEARN MORE BUTTON (TOTAL RED) ===== */
        .learn-btn {
          display: inline-block;
          padding: 12px 28px;
          border-radius: 10px;
          border: none;
          color: #ffffff;
          font-weight: 600;
          background: #dc2626;
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .learn-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #1e40af;
          transition: all 0.4s ease;
          border-radius: 10px 0 0 10px;
        }

        .learn-btn::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 100%;
          background: #1e40af;
          transition: all 0.4s ease;
          border-radius: 0 10px 10px 0;
        }

        .learn-btn:hover::before,
        .learn-btn:hover::after {
          width: 50%;
        }

        .learn-btn:hover {
          transform: translateY(-2px);
        }

        .learn-btn span {
          position: relative;
          z-index: 1;
        }

        .learn-btn:active {
          background: #b91c1c;
          border-color: #b91c1c;
          color: #ffffff;
          transform: translateY(0);
        }

        .learn-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.25);
        }

        /* Fade-up animation */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Background animation */
        .animated-wave {
          animation: waveFloat 36s ease-in-out infinite;
        }

        @keyframes waveFloat {
          50% { transform: translateY(-12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
