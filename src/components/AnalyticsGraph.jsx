import { useEffect, useState } from "react";

export default function AnalyticsGraph() {
  const [points, setPoints] = useState(generateData());

  // Re-generate data every few seconds (live effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(generateData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>USERS · LAST 7 DAYS</span>
        <span style={styles.badge}>LIVE</span>
      </div>

      <svg viewBox="0 0 300 160" style={styles.svg}>
        {/* Grid */}
        {[30, 60, 90, 120].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="300"
            y2={y}
            stroke="rgba(255,255,255,0.08)"
          />
        ))}

        {/* Bars */}
        {points.map((p, i) => (
          <rect
            key={i}
            x={i * 40 + 12}
            y={150 - p}
            width="18"
            height={p}
            rx="4"
            fill="url(#barGradient)"
            style={{
              transition: "all 1.2s ease",
            }}
          />
        ))}

        {/* Line */}
        <polyline
          points={points
            .map((p, i) => `${i * 40 + 20},${150 - p}`)
            .join(" ")}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 6px rgba(56,189,248,0.7))",
            transition: "all 1.2s ease",
          }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* Fake live data */
function generateData() {
  return Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 70) + 40
  );
}

/* INLINE STYLES */
const styles = {
  container: {
    height: "240px",
    borderRadius: "16px",
    padding: "14px",
    background:
      "linear-gradient(145deg, #020617, #020617)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    color: "#e5e7eb",
    fontSize: "12px",
  },
  title: {
    opacity: 0.85,
  },
  badge: {
    background: "#16a34a",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "10px",
    fontWeight: 600,
    color: "white",
  },
  svg: {
    width: "100%",
    height: "170px",
  },
};



