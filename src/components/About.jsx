export default function About() {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
        /* -------- Heading Indicator -------- */
        @keyframes moveDot {
          0% { left: 0%; }
          50% { left: 70%; }
          100% { left: 0%; }
        }

        .about-indicator {
          position: relative;
          width: 120px;
          height: 6px;
          background: #cceedd;
          border-radius: 999px;
          margin: 14px 0 28px;
        }

        .about-indicator span {
          position: absolute;
          top: -4px;
          width: 14px;
          height: 14px;
          background: #e11d48;
          border-radius: 50%;
          animation: moveDot 4s ease-in-out infinite;
        }

        /* -------- Orbit Wrapper -------- */
        .orbit-wrapper {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* -------- Dot Rings -------- */
        .dot-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          animation: rotateSlow 36s linear infinite;
        }

        .dot-ring.inner {
          inset: 40px;
          animation: rotateFast 22s linear infinite reverse;
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateFast {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0.9;
        }

        .green { background: #22c55e; }
        .blue { background: #3b82f6; }
        .purple { background: #a855f7; }

        .d1 { top: 0; left: 50%; transform: translateX(-50%); }
        .d2 { right: 0; top: 50%; transform: translateY(-50%); }
        .d3 { bottom: 0; left: 50%; transform: translateX(-50%); }
        .d4 { left: 0; top: 50%; transform: translateY(-50%); }
        .d5 { top: 18%; left: 18%; }
        .d6 { bottom: 18%; right: 18%; }

        /* -------- Center Image -------- */
        .center-image {
          width: 260px;
          z-index: 3;
          animation: floatMain 7s ease-in-out infinite;
        }

        @keyframes floatMain {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }

        /* -------- Static Icons -------- */
        .icon {
          position: absolute;
          width: 56px;
          height: 56px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(0,0,0,0.08);
          z-index: 2;
        }

        .icon img {
          width: 30px;
          height: 30px;
        }

        .icon.cloud { top: 40px; left: 140px; }
        .icon.globe { top: 20px; right: 120px; }
        .icon.mail { right: 30px; top: 50%; transform: translateY(-50%); }
        .icon.code { left: 40px; bottom: 140px; }
        .icon.analytics { bottom: 30px; left: 50%; transform: translateX(-50%); }
        .icon.search { bottom: 80px; right: 100px; }

        /* -------- Feature Boxes -------- */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 40px;
        }

        .feature-box {
          background: white;
          padding: 14px 18px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          font-weight: 600;
          color: #64748b;
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .feature-box:hover {
          background: linear-gradient(135deg, #22c1dc, #2dd4bf);
          color: white;
          transform: translateY(-3px);
        }

        .feature-box .check {
          color: #ef4444;
          font-size: 18px;
        }

        .feature-box:hover .check {
          color: white;
        }
      `}</style>

      {/* ================= SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-primary">About Fint</h2>

            <div className="about-indicator">
              <span></span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Fint Solutions</strong> provides value-added innovative IT
              and software solutions to help businesses save costs and improve
              their ROI.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our client-centered and customized service plans, backed by
              cutting-edge technology, drive measurable business success.
            </p>

            <div className="feature-grid">
              {[
                "Operational Excellence",
                "Actionable Business Insight & Visibility",
                "Exceptional Customer Experiences",
                "High-quality software development",
                "An Integrated Modern IT Infrastructure",
                "CMMI compliant Processes & Systems",
              ].map((item) => (
                <div key={item} className="feature-box">
                  <span className="check">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center">
            <div className="orbit-wrapper">

              {/* Outer ring */}
              <div className="dot-ring">
                <div className="dot green d1"></div>
                <div className="dot blue d2"></div>
                <div className="dot purple d3"></div>
                <div className="dot green d4"></div>
                <div className="dot blue d5"></div>
                <div className="dot purple d6"></div>
              </div>

              {/* Inner ring */}
              <div className="dot-ring inner">
                <div className="dot green d1"></div>
                <div className="dot blue d3"></div>
                <div className="dot purple d5"></div>
              </div>

              {/* Static icons */}
              <div className="icon cloud">
                <img src="https://cdn-icons-png.flaticon.com/512/3063/3063825.png" />
              </div>
              <div className="icon globe">
                <img src="https://cdn-icons-png.flaticon.com/512/814/814513.png" />
              </div>
              <div className="icon mail">
                <img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" />
              </div>
              <div className="icon code">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" />
              </div>
              <div className="icon analytics">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
              </div>
              <div className="icon search">
                <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
              </div>

              {/* Center image */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
                className="center-image"
                alt="Business Ecosystem"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}