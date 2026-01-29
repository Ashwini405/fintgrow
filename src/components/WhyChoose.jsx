export default function WhyChoose() {
  return (
    <>
      <style>{`
        .why-indicator {
          position: relative;
          width: 120px;
          height: 6px;
          background: #cceedd;
          border-radius: 999px;
          margin: 14px 0 30px;
        }

        .why-indicator span {
          position: absolute;
          top: -4px;
          width: 14px;
          height: 14px;
          background: #e11d48;
          border-radius: 50%;
          animation: moveDot 4.5s ease-in-out infinite;
        }

        @keyframes moveDot {
          0% { left: 0%; }
          50% { left: 70%; }
          100% { left: 0%; }
        }

        /* VISUAL */
        .visual-wrapper {
          position: relative;
          width: 520px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* TRANSPARENT RINGS */
        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(59,130,246,0.18);
          animation: spin 55s linear infinite;
        }

        .ring.inner {
          inset: 70px;
          border: 2px solid rgba(34,197,94,0.18);
          animation-duration: 85s;
          animation-direction: reverse;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* DOTS */
        .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.8;
        }

        .dot.blue { background: #60a5fa; }
        .dot.green { background: #4ade80; }
        .dot.purple { background: #c084fc; }

        .dot-1 { top: -4px; left: 50%; transform: translateX(-50%); }
        .dot-2 { right: -4px; top: 50%; transform: translateY(-50%); }
        .dot-3 { bottom: -4px; left: 50%; transform: translateX(-50%); }
        .dot-4 { left: -4px; top: 50%; transform: translateY(-50%); }
        .dot-5 { top: 22%; left: 22%; }
        .dot-6 { bottom: 22%; right: 22%; }

        /* ROUND IMAGE */
        .main-illustration {
          width: 420px;
          height: 420px;
          border-radius: 50%;
          object-fit: cover;
          z-index: 2;
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 30px 70px rgba(15,23,42,0.15);
          background: #fff;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* RIGHT CONTENT */
        .why-point {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .why-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
        }

        .why-icon img {
          width: 26px;
          height: 26px;
        }
      `}</style>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="visual-wrapper">

              <div className="ring">
                <span className="dot blue dot-1"></span>
                <span className="dot green dot-2"></span>
                <span className="dot purple dot-3"></span>
                <span className="dot blue dot-4"></span>
              </div>

              <div className="ring inner">
                <span className="dot green dot-5"></span>
                <span className="dot purple dot-6"></span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                alt="Professional Team Collaboration"
                className="main-illustration"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-primary">Why Choose Us?</h2>

            <div className="why-indicator">
              <span></span>
            </div>

            <p className="text-gray-700 mb-10">
              Fint helps you realize your vision so you can focus on what matters.
              We build secure, scalable, future-ready digital solutions.
            </p>

            <div className="space-y-8">
              <div className="why-point">
                <div className="why-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
                </div>
                <div>
                  <h4>Best Team Together</h4>
                  <p>Diverse experts driven by innovation and learning.</p>
                </div>
              </div>

              <div className="why-point">
                <div className="why-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                </div>
                <div>
                  <h4>Client Satisfaction</h4>
                  <p>Long-term partnerships built on trust.</p>
                </div>
              </div>

              <div className="why-point">
                <div className="why-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" />
                </div>
                <div>
                  <h4>Up-to-date in the Market</h4>
                  <p>Modern tools, agile processes, continuous improvement.</p>
                </div>
              </div>

              <div className="why-point">
                <div className="why-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/942/942799.png" />
                </div>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Security, performance, and reliability guaranteed.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}