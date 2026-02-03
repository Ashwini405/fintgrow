import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"

// Emoji Constants for Consistent Usage
const EMOJI_SETS = {
  // Core Technology Emojis (unique per category)
  AI_CORE: "🧠",
  DATA_CORE: "📊",
  CLOUD_CORE: "☁️",
  QUALITY_CORE: "✅",
  WORKFLOW_CORE: "🔄",

  // Technology Elements (deduplicated)
  ROBOT: "🤖",
  LIGHTNING: "⚡",
  GEAR: "⚙️",
  WRENCH: "🔧",
  BRAIN: "💡",
  ROCKET: "🚀",
  TARGET: "🎯",
  CHART_UP: "📈",
  CHART_BAR: "📊",
  MAGNIFYING_GLASS: "🔍",
  TEST_TUBE: "🧪",
  CLIPBOARD: "📋",

  // Interface Elements
  COMPUTER: "💻",
  MOBILE: "📱",
  GLOBE: "🌐",
  LAPTOP: "💻",

  // Business Elements
  BRIEFCASE: "💼",
  PEOPLE: "👥",
  PERSON: "👤",
  HANDSHAKE: "🤝",
  TROPHY: "🏆",
  DIAMOND: "💎",
  BUILDING: "🏢",

  // Experience Elements
  HEART: "💖",
  SMILE: "😊",
  STAR: "⭐",
  CHAT: "💬",
  GIFT: "🎁",

  // Data Elements
  DATABASE: "💾",
  CRYSTAL_BALL: "🔮",
  PIE_CHART: "🥧",
  TREND_DOWN: "📉",
  FOLDER: "📁",

  // Cloud Elements
  COMPUTER_OLD: "🖥️",
  SHIELD: "🛡️",
  LOCK: "🔒",
  LINK: "🔗",

  // Quality Elements
  CHECK_MARK: "✓",
  CERTIFICATE: "📜",

  // Service Elements
  PHONE: "📞",
  ENVELOPE: "📧",
  GRADUATE: "🎓",
  MONEY: "💰",
  BELL: "🔔",

  // Effects
  SPARKLES: "✨",
  FIRE: "🔥",
  ZAP: "⚡"
}

// Animated Illustration Components
const AIIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Brain Emoji */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl animate-bounce-slow">
        {EMOJI_SETS.AI_CORE}
      </div>

      {/* Orbiting Data Nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-pulse">{EMOJI_SETS.DATA_CORE}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-pulse">{EMOJI_SETS.ROBOT}
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-pulse">{EMOJI_SETS.BRAIN}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-pulse">{EMOJI_SETS.LIGHTNING}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">{EMOJI_SETS.SPARKLES}</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">{EMOJI_SETS.CRYSTAL_BALL}</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">{EMOJI_SETS.TARGET}</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">{EMOJI_SETS.ROCKET}</div>
    </div>
  </div>
);

// AI Technology Stack Illustration
const AITechStackIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central AI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 7H7v6h6V7z"/>
            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Technology Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.ROBOT}</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.LIGHTNING}</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.LINK}</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{EMOJI_SETS.CLOUD_CORE}</span>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-8 right-12 w-20 h-12 bg-slate-800 rounded-lg shadow-lg p-2 animate-float-delayed-1">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-green-400 text-xs font-mono">{"</>"}</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">{EMOJI_SETS.DATA_CORE}</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">AI</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">{EMOJI_SETS.ROCKET}</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const DigitalExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Phone/Tablet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📱
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🛒</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💳</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💻</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌐</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">📱</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const CustomerExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Heart */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        💖
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">😊</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⭐</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💬</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">👥</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📱</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">💝</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const EmployeeExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Person */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        👤
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🚀</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💻</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌟</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">👥</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const CompetitiveAdvantageIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Trophy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🏆
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💎</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🚀</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📈</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚡</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌟</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">💪</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📊</div>
    </div>
  </div>
);

const DataAnalyticsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Chart */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📊
      </div>

      {/* Orbiting Charts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">📈</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🥧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📉</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">💾</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🔍</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">📋</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🎯</div>
    </div>
  </div>
);

const EnterpriseAppsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Building */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🏢
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⚙️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📱</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🔗</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">☁️</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🔒</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🚀</div>
    </div>
  </div>
);

const CloudOperationsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Cloud */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        ☁️
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🖥️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📊</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🔒</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚡</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🌐</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🛡️</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

const QualityEngineeringIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Checkmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        ✅
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🧪</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔍</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📋</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🎯</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚙️</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📊</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🚀</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">💡</div>
    </div>
  </div>
);

const ServiceNowIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Workflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🔄
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">📋</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">👥</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💻</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📞</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">⚡</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🔗</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🎯</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📈</div>
    </div>
  </div>
);

// Additional Illustrations for Data Analytics
const BusinessIntelligenceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central BI Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-4xl">📊</span>
        </div>
      </div>

      {/* Orbiting BI Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📈</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📋</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎯</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💡</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">BI</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">📊</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">INS</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const AnalyticsOperationIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Analytics Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-4xl">📈</span>
        </div>
      </div>

      {/* Orbiting Analytics Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🤖</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎯</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">OPS</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">📈</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">EFF</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

// AI Maturity Model Illustration
const AIMaturityModelIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[450px] h-[450px] animate-float">
      {/* Central AI Maturity Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-2xl font-bold">AI</div>
            <div className="text-white/80 text-sm">Maturity</div>
          </div>
        </div>
      </div>

      {/* Maturity Stages Orbiting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 animate-spin-very-slow">
        {/* Stage 1: Awareness */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-1">
          <div className="text-center">
            <div className="text-white text-xs font-bold">1</div>
            <div className="text-white/80 text-xs">Aware</div>
          </div>
        </div>

        {/* Stage 2: Experimentation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-2">
          <div className="text-center">
            <div className="text-white text-xs font-bold">2</div>
            <div className="text-white/80 text-xs">Pilot</div>
          </div>
        </div>

        {/* Stage 3: Operationalization */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-3">
          <div className="text-center">
            <div className="text-white text-xs font-bold">3</div>
            <div className="text-white/80 text-xs">Ops</div>
          </div>
        </div>

        {/* Stage 4: Enterprise Adoption */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-1">
          <div className="text-center">
            <div className="text-white text-xs font-bold">4</div>
            <div className="text-white/80 text-xs">Scale</div>
          </div>
        </div>

        {/* Stage 5: Autonomous Intelligence */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg flex items-center justify-center animate-float-delayed-4">
          <div className="text-center">
            <div className="text-white text-xs font-bold">5</div>
            <div className="text-white/80 text-xs">Auto</div>
          </div>
        </div>
      </div>

      {/* Inner Orbit - Technology Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 animate-spin-slow-reverse">
      </div>

      {/* Floating Progress Indicators */}
      <div className="absolute top-2 right-2 w-20 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-1 flex items-center justify-center">
        <span className="text-white text-xs font-bold">75%</span>
      </div>

      <div className="absolute bottom-6 right-6 w-24 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-lg animate-float-delayed-3 flex items-center justify-center">
        <span className="text-white text-xs font-mono">ROI</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex: -1}}>
        <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="10,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

// AI in Quality Engineering Illustration
const AIQualityEngineeringIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Quality Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Quality Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🧪</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🔍</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">98%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">✓</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">QA</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Test Automation Icons */}
      <div className="absolute top-1/4 left-12 w-8 h-8 text-cyan-500 animate-pulse-slow">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-12 w-8 h-8 text-orange-500 animate-pulse-slow">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const PartnerExperienceIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central Partner Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Partner Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🤝</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📊</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🔒</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⚡</span>
        </div>
      </div>

      {/* Partner Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">92%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">⭐</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">SAT</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const HRSDIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central HR Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting HR Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📋</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🎓</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💼</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">🏆</span>
        </div>
      </div>

      {/* HR Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">85%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">👥</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">EFF</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#14b8a6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const CSMIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[400px] h-[400px] animate-float">
      {/* Central CSM Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-2xl animate-pulse-slow">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 9a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v1.734A3.001 3.001 0 019 9.5z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Orbiting CSM Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">💬</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📞</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">📧</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">⭐</span>
        </div>
      </div>

      {/* CSM Metrics */}
      <div className="absolute top-8 right-12 w-20 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg shadow-lg p-1 animate-float-delayed-1">
        <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">90%</span>
        </div>
      </div>

      <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-lg animate-float-delayed-2 flex items-center justify-center">
        <span className="text-white text-lg">😊</span>
      </div>

      <div className="absolute bottom-12 left-8 w-18 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-lg p-2 animate-float-delayed-3">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xs font-mono">SAT</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-24 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg animate-bounce-slow flex items-center justify-center">
        <span className="text-white text-xl">🚀</span>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{zIndex: -1}}>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5" className="animate-dash"/>
      </svg>
    </div>
  </div>
);

const MicrosoftDynamicsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central CRM */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        🤝
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">💼</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">📈</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">👥</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">💰</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">📊</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">🎯</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🚀</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">💡</div>
    </div>
  </div>
);

const ApplicationDevelopmentIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Code */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        💻
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">⚙️</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔧</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📱</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">🌐</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🚀</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">💡</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">⚡</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">📊</div>
    </div>
  </div>
);

const ApplicationManagementIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-[300px] h-[300px] animate-float">
      {/* Central Dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse-slow">
        📊
      </div>

      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-very-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🔍</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl animate-bounce">🛠️</div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">📋</div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">⚙️</div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-12 text-2xl animate-float-delayed-1">🔒</div>
      <div className="absolute top-20 right-32 text-xl animate-float-delayed-2">📈</div>
      <div className="absolute bottom-12 left-8 text-2xl animate-float-delayed-3">🔔</div>
      <div className="absolute bottom-32 left-24 text-xl animate-bounce-slow">🎯</div>
    </div>
  </div>
);

export default function ServiceDetails() {
    const { serviceName } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceName])

    return (
        <section className="min-h-screen bg-gray-50 px-6 py-24">
            <div className="max-w-7xl mx-auto">
                <style>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes fadeInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes fadeInRight {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    @keyframes scaleIn {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes slideInLeft {
                        from {
                            opacity: 0;
                            transform: translateX(-50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }

                    .animate-fadeInUp {
                        animation: fadeInUp 0.8s ease-out forwards;
                    }

                    .animate-fadeInLeft {
                        animation: fadeInLeft 0.8s ease-out forwards;
                    }

                    .animate-fadeInRight {
                        animation: fadeInRight 0.8s ease-out forwards;
                    }

                    .animate-scaleIn {
                        animation: scaleIn 0.6s ease-out forwards;
                    }

                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }

                    .animate-slideInLeft {
                        animation: slideInLeft 0.8s ease-out forwards;
                    }

                    .hover-lift {
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .hover-lift:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    }

                    .hover-scale {
                        transition: transform 0.3s ease;
                    }

                    .hover-scale:hover {
                        transform: scale(1.05);
                    }

                    .hover-glow {
                        transition: all 0.3s ease;
                    }

                    .hover-glow:hover {
                        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                    }

                    .stagger-1 { animation-delay: 0.1s; }
                    .stagger-2 { animation-delay: 0.2s; }
                    .stagger-3 { animation-delay: 0.3s; }
                    .stagger-4 { animation-delay: 0.4s; }
                    .stagger-5 { animation-delay: 0.5s; }
                    .stagger-6 { animation-delay: 0.6s; }

                    /* Background styles for service sections */
                    .ai-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .de-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .da-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .ea-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .md-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .it-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .qe-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1581091012184-7b3c5b2a7f6a?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }

                    .sn-bg::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-image: url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop&q=80');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.1;
                        z-index: -1;
                    }
                `}</style>

                {/* ================= ARTIFICIAL INTELLIGENCE ================= */}
                {serviceName === "artificial-intelligence" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ai-bg">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Artificial Intelligence
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Transform Your Business with Next-Generation AI Solutions
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Unlock unprecedented growth and efficiency with our cutting-edge AI implementations.
                                    From intelligent automation to predictive insights, we deliver AI solutions that drive
                                    measurable ROI and competitive advantage across industries.
                                </p>
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🚀</span>
                                        <span className="font-semibold text-blue-900">Proven Results</span>
                                    </div>
                                    <p className="text-slate-700">Our clients achieve up to <span className="font-bold text-blue-600">40% cost reduction</span> and <span className="font-bold text-blue-600">3x faster decision-making</span> with AI implementation.</p>
                                </div>
                            </div>
                            <AIIllustration />
                        </div>

                        {/* ================= OUR AI TECHNOLOGY STACK ================= */}
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16 animate-fadeInUp">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300">
                                        Our AI Technology Stack
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="text-slate-700 leading-relaxed space-y-6 animate-fadeInLeft">
                                        <p className="hover:text-slate-900 transition-colors duration-300">
                                            At FINT, we leverage a <b class="hover:text-blue-700 transition-colors duration-200">robust, future-ready AI technology stack</b>
                                            that combines large language models, agentic AI frameworks, and
                                            enterprise-grade cloud infrastructure.
                                        </p>

                                        <p className="hover:text-slate-900 transition-colors duration-300">
                                            This enables us to build scalable, secure, and intelligent AI systems
                                            that integrate seamlessly within enterprise ecosystems.
                                        </p>

                                        <h3 className="text-lg font-semibold text-blue-900 mt-6 hover:text-blue-700 transition-colors duration-300">
                                            Large Language Models (LLMs)
                                        </h3>

                                        <ul className="list-disc pl-6 space-y-3">
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                Expertise across major foundation models and APIs including
                                                <b class="hover:text-blue-700 transition-colors duration-200"> OpenAI GPT</b>, <b class="hover:text-blue-700 transition-colors duration-200">Anthropic Claude</b>, <b class="hover:text-blue-700 transition-colors duration-200">Google Gemini</b>,
                                                <b class="hover:text-blue-700 transition-colors duration-200"> Microsoft Copilot</b>, and <b class="hover:text-blue-700 transition-colors duration-200">Meta LLaMA</b> for enterprise-grade
                                                reasoning, language understanding, and generation.
                                            </li>
                                        </ul>

                                        <h3 className="text-lg font-semibold text-blue-900 mt-6 hover:text-blue-700 transition-colors duration-300">
                                            Agentic AI Frameworks
                                        </h3>

                                        <ul className="list-disc pl-6 space-y-3">
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                Design and deployment of <b class="hover:text-blue-700 transition-colors duration-200">autonomous, goal-oriented AI agents</b>
                                                using modern agentic frameworks and orchestration layers.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <b class="hover:text-blue-700 transition-colors duration-200">CrewAI</b> and <b class="hover:text-blue-700 transition-colors duration-200">LangChain</b> for multi-agent coordination and
                                                contextual orchestration.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <b class="hover:text-blue-700 transition-colors duration-200">Strand Agents</b> for modular, composable AI workflows.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <b class="hover:text-blue-700 transition-colors duration-200">Google AI Development Kit (ADK)</b>, <b class="hover:text-blue-700 transition-colors duration-200">Model Context Protocol (MCP)</b>,
                                                and <b class="hover:text-blue-700 transition-colors duration-200">ADA Protocol</b> for interoperability across tools and systems.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <b class="hover:text-blue-700 transition-colors duration-200">API Park</b> for secure agent-to-agent and service orchestration
                                                across distributed enterprise environments.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-center animate-fadeInRight">
                                        <AITechStackIllustration />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= CORE AI CAPABILITIES ================= */}
                        <section className="mt-24 py-20 px-6 bg-slate-50 rounded-xl">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16 animate-fadeInUp">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300">
                                        Core AI Capabilities
                                    </h2>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-1 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">💡</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                Generative AI & LLM Solutions
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Create intelligent chatbots, content generators, and AI assistants
                                                for natural, human-like interactions across customer support, sales,
                                                and knowledge management.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-2 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">📊</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                Predictive Analytics & Machine Learning
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Uncover trends, predict demand, detect anomalies, and optimize
                                                operations using supervised and unsupervised learning.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-3 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">📚</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                Retrieval-Augmented Generation (RAG)
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Integrate AI with internal knowledge bases and enterprise data
                                                for accurate, context-aware, and secure AI responses.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-4 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">👁️</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                Computer Vision & Natural Language Processing (NLP)
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Leverage image and language AI for document analysis, OCR,
                                                sentiment detection, entity extraction, and translation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-5 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">🤖</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                AI Agents & Workflow Automation
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Automate complex multi-step tasks by integrating AI agents
                                                with enterprise systems like APIs, CRM, and ERP platforms.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white p-6 rounded-xl shadow-md animate-fadeInUp stagger-6 group">
                                        <div className="text-blue-600 text-4xl group-hover:scale-110 transition-transform duration-300">💻</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                                AI-Assisted Software Development
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Boost developer productivity with AI tools for coding,
                                                debugging, and testing—ensuring faster delivery and
                                                higher code quality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= AI MATURITY MODEL ================= */}
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        AI Maturity Model for Enterprises
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop&q=80"
                                            alt="AI Maturity Model Illustration"
                                            className="max-w-full rounded-lg shadow-lg hover-scale transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <p className="font-semibold text-blue-900">
                                            Accelerate Your AI Journey – From Exploration to Enterprise-Scale Transformation
                                        </p>

                                        <p>
                                            FINT partners with enterprises at every stage of their AI maturity.
                                            Whether you're experimenting with proof of concept or operationalizing
                                            AI across business units, our AI Maturity Framework helps assess
                                            readiness, define a roadmap, and drive measurable impact.
                                        </p>

                                        <h3 className="text-lg font-semibold text-blue-900 mt-6">
                                            Our AI Maturity Stages:
                                        </h3>

                                        <ul className="space-y-4">
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Awareness & Assessment:</b> Identify opportunities and evaluate
                                                current data and process readiness.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Experimentation & Pilots:</b> Build initial POCs using generative
                                                AI, machine learning models, or automation.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Operationalization:</b> Integrate AI into production systems with
                                                proper MLOps, governance, and data pipelines.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Enterprise Adoption:</b> Scale AI across functions while ensuring
                                                interoperability, security, and ROI tracking.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Autonomous Intelligence:</b> Implement AI agents and self-learning
                                                systems that continuously optimize operations.
                                            </li>
                                        </ul>

                                        <p>
                                            FINT's experts work closely with business and technology leaders to
                                            define strategy, establish governance, and prioritize investments
                                            aligned with transformation goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= AI IN QUALITY ENGINEERING ================= */}
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <AIQualityEngineeringIllustration />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <h2 className="text-3xl font-bold text-blue-900">
                                            AI in Quality Engineering
                                        </h2>

                                        <p className="font-semibold text-blue-900">
                                            Reimagining Quality Engineering with AI
                                        </p>

                                        <p>
                                            At FINT, we integrate AI into the heart of Quality Engineering
                                            to make software delivery faster, smarter, and more reliable.
                                        </p>

                                        <h3 className="text-lg font-semibold text-blue-900 mt-6">
                                            AI-Driven Testing and Assurance Capabilities:
                                        </h3>

                                        <ul className="space-y-4">
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Intelligent Test Automation:</b> Use AI models to auto-generate
                                                test scripts, predict defects, and optimize regression coverage.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Defect Prediction & Root Cause Analysis:</b> Leverage ML models
                                                to identify high-risk areas before failures occur.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">AI-Powered Test Data Management:</b> Automatically create, mask,
                                                and manage realistic test data from production-like environments.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Generative AI for QA:</b> Use LLMs to assist testers in scenario
                                                creation, documentation, and traceability.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b class="hover:text-blue-700 transition-colors duration-200">Continuous Quality in CI/CD:</b> Integrate AI insights with
                                                DevOps pipelines for proactive issue detection and automated triage.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= WHY FINT FOR AI ================= */}
                        <section className="mt-24 bg-slate-50 py-20 px-6 rounded-lg">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16 animate-fadeInUp">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300">
                                        Why FINT For AI?
                                    </h2>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-1 group">
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="group-hover:text-slate-900 transition-colors duration-300"><b class="hover:text-blue-700 transition-colors duration-200">Enterprise-Grade Expertise:</b> Proven across industries and mission-critical systems.</p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-2 group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="group-hover:text-slate-900 transition-colors duration-300"><b class="hover:text-blue-700 transition-colors duration-200">Custom-Built Solutions:</b> Tailored AI models and workflows aligned with business needs.</p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-3 group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="group-hover:text-slate-900 transition-colors duration-300"><b class="hover:text-blue-700 transition-colors duration-200">End-to-End Delivery:</b> From AI strategy to deployment and optimization.</p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp stagger-4 group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="group-hover:text-slate-900 transition-colors duration-300"><b class="hover:text-blue-700 transition-colors duration-200">Responsible AI:</b> Ethical, secure, and compliant AI development.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DIGITAL EXPERIENCE ================= */}
                {serviceName === "digital-experience" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 de-bg">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Digital Experience
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Crafting Exceptional Digital Journeys That Delight Customers
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform every customer interaction into a memorable experience with our cutting-edge
                                    digital experience solutions. We create seamless, personalized journeys that drive
                                    engagement, loyalty, and business growth across all touchpoints.
                                </p>
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🎯</span>
                                        <span className="font-semibold text-purple-900">Measurable Impact</span>
                                    </div>
                                    <p className="text-slate-700">Our clients see <span className="font-bold text-purple-600">85% increase in customer satisfaction</span> and <span className="font-bold text-purple-600">60% higher conversion rates</span> through optimized digital experiences.</p>
                                </div>
                            </div>
                            <DigitalExperienceIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <DigitalExperienceIllustration />

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        Stakeholders such as customers, employees and partners play a critical
                                        role in the success of your enterprise.
                                    </p>

                                    <p>
                                        Supporting their unique demands requires distinctive sets of
                                        technologies, which may lead to limited agility and productivity.
                                    </p>

                                    <h3 className="font-semibold text-blue-900">
                                        Solutions powered by rich experience and smart technology
                                    </h3>

                                    <p>
                                        We combine great user experience with a fully integrated platform to
                                        deliver seamless, device-agnostic digital experiences.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 bg-slate-50 px-6">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-14">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex justify-center items-center gap-3 mt-4">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        "We amplify customer understanding using analytics and mobility.",
                                        "From awareness to decision, we define the customer journey.",
                                        "We enhance efficiency and deliver Digital Capital faster.",
                                        "We offer customized solutions using recommendation engines.",
                                        "We provide digitally enhanced omni-channel experiences."
                                    ].map((text, i) => (
                                        <div key={i} className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                ✓
                                            </div>
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Competitive Advantage Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Building sustainable competitive advantages
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help organizations build and maintain competitive advantages through
                                        innovative digital strategies, advanced analytics, and technology
                                        differentiation that drives market leadership.
                                    </p>
                                </div>

                                <CompetitiveAdvantageIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Customer Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Make your customers your brand's evangelists
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        Enterprises need an operationally efficient and cost-effective
                                        transformation from service to sales. We help define and optimize
                                        strategies that create measurable customer impact.
                                    </p>
                                </div>

                                <CustomerExperienceIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Employee Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Transforming the Workforce Experience
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help organizations design personalized employee experiences that
                                        drive productivity, engagement, and retention through digital
                                        technologies.
                                    </p>
                                </div>

                                <EmployeeExperienceIllustration />
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Partner Experience Transformation
                                    </h2>

                                    <p className="font-semibold mb-4">
                                        Elevating customer delight through robust partner experiences
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help you build strong partner ecosystems, streamline engagement,
                                        and ensure consistent brand experiences across channels.
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Ensure partner contributions meet standards</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Match business needs with the right partners</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">▪ Reduce risks and prevent data loss</li>
                                    </ul>
                                </div>

                                <PartnerExperienceIllustration />
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DATA ANALYTICS ================= */}
                {serviceName === "data-analytics" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 da-bg">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Data Analytics
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Unleashing the Power of Data for Strategic Excellence
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform raw data into strategic gold with our advanced analytics solutions.
                                    From predictive modeling to real-time insights, we help you make data-driven
                                    decisions that drive growth and competitive advantage.
                                </p>
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">📈</span>
                                        <span className="font-semibold text-green-900">Data-Driven Success</span>
                                    </div>
                                    <p className="text-slate-700">Our clients achieve <span className="font-bold text-green-600">300% ROI improvement</span> and <span className="font-bold text-green-600">50% faster insights</span> through intelligent data analytics.</p>
                                </div>
                            </div>
                            <DataAnalyticsIllustration />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <DataAnalyticsIllustration />
                                </div>

                                <div className="text-slate-700 leading-relaxed space-y-6">
                                    <p>
                                        A robust data architecture and intelligence can transform your business
                                        today and equip you for the future. Whether it is establishing basic
                                        business intelligence capabilities or utilizing advanced technologies
                                        such as <b class="hover:text-blue-700 transition-colors duration-200">Machine Learning</b> and <b class="hover:text-blue-700 transition-colors duration-200">Predictive Analytics</b>, we enable
                                        your business with domain-relevant processes to digitally transform your
                                        organization.
                                    </p>

                                    <p>
                                        We help you extract and maximize every bit of value out of your data to
                                        create useful insights, enabling better business decisions, competitive
                                        advantage and meaningful business impact. Our comprehensive data analytics
                                        solutions include real-time data processing, advanced visualization dashboards,
                                        and AI-powered insights that drive strategic decision-making across all
                                        business functions.
                                    </p>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🎯</span>
                                            <span className="font-semibold text-green-900">Data Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Transform raw data into actionable intelligence with our enterprise-grade analytics platform, featuring automated data pipelines, predictive modeling, and real-time dashboards.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-slate-50">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex justify-center items-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Deploy prediction models in the Cloud and on-premise environments.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Develop comprehensive data science capabilities.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Build or use standard data visualization tools.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            ✓
                                        </div>
                                        <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                            Deliver data solutions as user-friendly applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <BusinessIntelligenceIllustration />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Business Intelligence Implementation and Operation
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        We leverage modern software and services to transform data into actionable
                                        intelligence that informs your organization's strategic and tactical
                                        business decisions, enabling you to collect, analyze and present
                                        meaningful insights. Our comprehensive BI solutions include advanced
                                        data warehousing, real-time dashboards, and predictive analytics that
                                        drive informed decision-making across all business functions.
                                    </p>

                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">📊</span>
                                            <span className="font-semibold text-indigo-900">Intelligence Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our BI implementation delivers 50% faster reporting, 70% improved data accuracy, and 40% better decision-making through automated data pipelines and intelligent visualization tools.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-20 px-6 bg-white border-t">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop"
                                        alt="Analytics Operation"
                                        className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Analytics Operation
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        We help you gain actionable insight about your customers, operations,
                                        and products with data analytics. We implement, manage and optimize
                                        statistical ML algorithms for predictive and prescriptive analytics
                                        across all stages of analytics maturity.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= ENTERPRISE APPLICATIONS ================= */}
                {(serviceName === "enterprise-applications" || serviceName === "enterprise-application") && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ea-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Enterprise Applications
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Application-driven business transformation
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    We build scalable enterprise applications that
                                    streamline operations, integrate systems, and
                                    improve organizational efficiency.
                                </p>
                            </div>
                            <EnterpriseAppsIllustration />
                        </div>
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <ApplicationDevelopmentIllustration />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <p>
                                            With technologies evolving at a rapid pace, it becomes necessary to
                                            align organizational strategies with innovative and precise
                                            application development and maintenance practices. With our vast and
                                            robust experience in cutting-edge transformational technologies, we
                                            offer end-to-end application development, management, and maintenance
                                            solutions that deliver quantifiable business value.
                                        </p>

                                        <p>
                                            Our next-generation technologies, industry know-how, consulting
                                            capabilities, and methodologies enable us to deliver futuristic
                                            applications that help you meet strategic business goals. We specialize
                                            in building scalable, secure, and user-centric applications that drive
                                            digital transformation across industries.
                                        </p>

                                        <p>
                                            Our Enterprise Application Development & Maintenance services include
                                            application development and maintenance, custom solution
                                            implementation, application integration, data transformation, and
                                            legacy modernization. Each service is tailored to meet your specific
                                            business needs, ensuring seamless integration with existing systems
                                            and maximum ROI.
                                        </p>

                                        <p>
                                            We provide comprehensive and efficient approaches that align with
                                            business objectives and deliver sustainable growth. Our application
                                            design and development systems streamline disparate applications and
                                            workflows while supporting internationalization and localization. Our
                                            expert team ensures high-quality deliverables with rigorous testing
                                            and continuous support.
                                        </p>

                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">🚀</span>
                                                <span className="font-semibold text-blue-900">Innovation at Scale</span>
                                            </div>
                                            <p className="text-slate-700">Transform your business with our cutting-edge application development services, featuring modern architectures, cloud-native solutions, and AI-powered enhancements for unparalleled performance and user experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50 rounded-xl">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        The Competitive Advantage We Offer
                                    </h2>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    {[
                                        "We provide world-class portfolio of end-to-end enterprise application services.",
                                        "We help re-architect and transform legacy monolithic applications into scalable cloud-native microservices.",
                                        "We offer user-friendly enterprise project management tools for evolving business needs.",
                                        "We provide open and flexible solutions that accelerate container deployment and operations.",
                                        "Our CRM ensures stability and customization across departments and geographies.",
                                        "Our integration services enable seamless data flow across multiple environments."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group">
                                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                ✓
                                            </div>
                                            <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <div className="flex justify-center">
                                    <ApplicationDevelopmentIllustration />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Enterprise Application Development
                                    </h2>

                                    <p>
                                        Application development is essential for improving efficiency,
                                        scalability, customer engagement, and unlocking new revenue streams.
                                        Our comprehensive development services transform business processes
                                        through innovative, scalable, and secure applications that drive
                                        digital transformation across all industries.
                                    </p>

                                    <p>
                                        We leverage deep domain expertise, technical excellence, and proven
                                        methodologies to deliver future-ready enterprise applications.
                                        Our team specializes in modern architectures, cloud-native solutions,
                                        and AI-powered enhancements that ensure unparalleled performance
                                        and user experience.
                                    </p>

                                    <p>
                                        Our capabilities span application assessment, modernization, end-to-end
                                        development, maintenance, and enhancement. We provide tailored solutions
                                        that integrate seamlessly with existing systems, ensuring maximum ROI
                                        and business value through rigorous testing and continuous support.
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="hover:translate-x-2 transition-transform duration-300">Web and Portal Development with modern frameworks</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Custom Application Development for complex business needs</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Mobile Application Development for iOS and Android</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Content Management Systems with advanced features</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">API Development and Integration Services</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Database Design and Optimization</li>
                                    </ul>

                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🚀</span>
                                            <span className="font-semibold text-blue-900">Innovation Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our enterprise application development delivers 40% faster deployment times, 60% cost reduction in maintenance, and 95% client satisfaction through cutting-edge technologies and expert craftsmanship.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <ApplicationManagementIllustration />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Management
                                    </h2>

                                    <p>
                                        We provide comprehensive on-site and global support models that integrate seamlessly
                                        with your teams, ensuring cost efficiency, operational excellence, and continuous
                                        application performance optimization.
                                    </p>

                                    <p>
                                        By working closely with your organization, we deliver impactful
                                        application management services aligned with your business strategy,
                                        featuring 24/7 monitoring, proactive maintenance, and rapid incident response
                                        to minimize downtime and maximize productivity.
                                    </p>

                                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-6 rounded-xl border-l-4 border-slate-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">⚙️</span>
                                            <span className="font-semibold text-slate-900">Operational Excellence</span>
                                        </div>
                                        <p className="text-slate-700">Our application management services deliver 99.9% uptime, 50% faster incident resolution, and 30% cost reduction through intelligent monitoring and automated workflows.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop"
                                        alt="Application Modernization"
                                        className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Modernization
                                    </h2>

                                    <p>
                                        Modernize core applications using cloud-native architectures, CI/CD,
                                        containerization, and DevOps best practices.
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="hover:translate-x-2 transition-transform duration-300">Cloud-native re-architecture</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">CI/CD automation</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Portfolio assessment & roadmap</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Containerized deployments</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">DevOps-driven acceleration</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">SaaS & PaaS optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop"
                                        alt="Application Security"
                                        className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Security Services
                                    </h2>

                                    <p>
                                        Our security assessments help identify risks, vulnerabilities, and
                                        threats while transforming security into a continuous governance
                                        process.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
                                        alt="Application Testing"
                                        className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Testing
                                    </h2>

                                    <p>
                                        Our testing services ensure seamless performance, security, and
                                        reliability across web, mobile, automation, and security testing.
                                    </p>

                                    <p>
                                        We use holistic QA approaches to minimize risk and maximize application
                                        quality while aligning with your business needs.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                )}
                
                

                {/* ================= MICROSOFT DYNAMICS 365 ================= */}
                {serviceName === "microsoft-dynamics-365" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Microsoft Dynamics 365
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Intelligent ERP & CRM solutions
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our Dynamics 365 solutions help organizations
                                    improve customer engagement, optimize finance,
                                    and streamline supply chain operations.
                                </p>
                            </div>
                            <MicrosoftDynamicsIllustration />
                        </div>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop"
                                    className="max-w-sm w-full mx-auto rounded-lg shadow-lg"
                                    alt="CRM"
                                />

                                <p className="text-slate-700 leading-relaxed">
                                    FINT's expertise in implementing CRM solutions is achieved through its technically skilled and certified professionals.
                                    As your technology partner, FINT delivers Modern Workplace applications utilizing Dynamics CRM that accelerate
                                    business growth and faster ROI. Whether it is a single application or multiple applications, we have you covered
                                    with our expertise.
                                </p>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50 rounded-xl">
                            <div className="max-w-6xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">We Offer</h2>
                                    <div className="flex justify-center gap-3">
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-green-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Cost-effective and highly scalable CRM platform.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Built-in intelligence that automates several tasks.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Easy and fast deployment.
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Excellent customer support resulting in increased referrals.
                                    </div>

                                    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                                        Insights from customer experience to improve products and services.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <MicrosoftDynamicsIllustration />

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Development & Consulting Services
                                    </h2>

                                    <p>
                                        FINT Solutions is a specialist technology success partner delivering strategic business outcomes.
                                        We help organizations identify, build, implement, service and support Dynamics CRM solutions.
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="text-red-600">■ Due Diligence</li>
                                        <li className="text-red-600">■ Discovery & Design</li>
                                        <li className="text-red-600">■ Build Core Components</li>
                                        <li className="text-red-600">■ Build Integration Components</li>
                                        <li className="text-red-600">■ Quality Assurance</li>
                                        <li className="text-red-600">■ Rollout</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <MicrosoftDynamicsIllustration />

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Customer Engagement (Sales)
                                    </h2>

                                    <ul className="space-y-3">
                                        <li className="text-red-600">■ Personal customer engagement</li>
                                        <li className="text-red-600">■ 360-degree customer data view</li>
                                        <li className="text-red-600">■ Smarter selling strategies</li>
                                        <li className="text-red-600">■ Unified relationships</li>
                                        <li className="text-red-600">■ Predictive sales performance</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop"
                                    className="max-w-sm w-full mx-auto rounded-lg shadow-lg"
                                    alt="Service Desk"
                                />

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Unified Service Desk
                                    </h2>

                                    <ul className="space-y-3">
                                        <li className="text-red-600">■ Faster customer issue resolution</li>
                                        <li className="text-red-600">■ Personalized interactions</li>
                                        <li className="text-red-600">■ Preferred customer channels</li>
                                        <li className="text-red-600">■ Unified customer experience</li>
                                        <li className="text-red-600">■ Intelligent knowledge search</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DIGITAL INTEGRATION ================= */}
                {serviceName === "digital-integration" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Digital Integration
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Seamless System Integration for Modern Enterprises
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Connect disparate systems and applications with our comprehensive integration solutions.
                                    We enable seamless data flow, process automation, and real-time synchronization across
                                    your entire technology ecosystem.
                                </p>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🔗</span>
                                        <span className="font-semibold text-orange-900">Integration Excellence</span>
                                    </div>
                                    <p className="text-slate-700">Our integration solutions reduce <span className="font-bold text-orange-600">data silos by 90%</span> and improve <span className="font-bold text-orange-600">operational efficiency by 65%</span>.</p>
                                </div>
                            </div>
                            <div className="flex justify-center animate-fadeInRight">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
                                    alt="Digital Integration"
                                    className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300"
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* ================= CLOUD OPERATIONS ================= */}
                {(serviceName === "cloud-operations" || serviceName === "intelligent-it-&-cloud") && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Cloud Operations
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Intelligent Cloud Management & Operations
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Optimize your cloud infrastructure with our comprehensive cloud operations services.
                                    From migration to ongoing management, we ensure your cloud environment is secure,
                                    scalable, and cost-effective.
                                </p>
                                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">☁️</span>
                                        <span className="font-semibold text-cyan-900">Cloud Excellence</span>
                                    </div>
                                    <p className="text-slate-700">Achieve <span className="font-bold text-cyan-600">99.9% uptime</span> and <span className="font-bold text-cyan-600">40% cost optimization</span> with our cloud operations expertise.</p>
                                </div>
                            </div>
                            <CloudOperationsIllustration />
                        </div>
                    </>
                )}

                {/* ================= PROCESS AUTOMATION ================= */}
                {serviceName === "process-automation" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-5xl font-bold text-blue-900 mb-6 hover:text-blue-700 transition-colors duration-300">
                                    Process Automation
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Intelligent Process Automation for Business Excellence
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2 mb-6">
                                    Transform your business processes with intelligent automation solutions.
                                    We help you eliminate manual tasks, reduce errors, and accelerate operations
                                    through RPA, workflow automation, and AI-powered process optimization.
                                </p>
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fadeInLeft stagger-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🔄</span>
                                        <span className="font-semibold text-purple-900">Automation Impact</span>
                                    </div>
                                    <p className="text-slate-700">Our automation solutions deliver <span className="font-bold text-purple-600">70% faster processing</span> and <span className="font-bold text-purple-600">95% error reduction</span>.</p>
                                </div>
                            </div>
                            <ServiceNowIllustration />
                        </div>
                    </>
                )}



                {/* ================= QUALITY ENGINEERING ================= */}
                {serviceName === "quality-engineering" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 qe-bg">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Quality Engineering
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Delivering reliable and high-quality software
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our testing frameworks ensure performance,
                                    security, and reliability through automation,
                                    continuous testing, and QA best practices.
                                </p>
                            </div>
                            <QualityEngineeringIllustration />
                        </div>
                        {/* ================= QUALITY ENGINEERING & ASSURANCE ================= */}

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1581091012184-7b3c5b2a7f6a?w=600&auto=format&fit=crop"
      alt="Quality Engineering"
      className="w-full max-w-md rounded-lg shadow-lg"
    />

    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quality Engineering and Assurance focuses on delivering reliable,
        scalable, and high-performing applications across digital ecosystems.
        It ensures software quality is embedded throughout the development
        lifecycle.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our Quality Engineering services include:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li className="hover:translate-x-2 transition-transform duration-300">
          End-to-end functional testing
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          Automation strategy and execution
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          Performance and load testing
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          Security and penetration testing
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          Continuous quality monitoring
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-16">
  <h2 className="text-center text-3xl font-semibold text-blue-900 mb-10">
    The Competitive Advantage We Offer
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Faster time-to-market with test automation
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Reduced production defects
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Improved test coverage and accuracy
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Enhanced application reliability
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow col-span-2 text-center">
      ✔ Continuous quality assurance across SDLC
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="Test Automation"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Test Automation Strategy
      </h3>

      <p className="text-gray-700 leading-relaxed">
        We design scalable automation frameworks that accelerate testing cycles,
        improve accuracy, and support continuous integration and delivery.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="Performance Testing"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Performance & Load Testing
      </h3>

      <p className="text-gray-700 leading-relaxed">
        We validate application performance under real-world conditions to
        ensure scalability, stability, and responsiveness during peak loads.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="Security Testing"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Security & Compliance Testing
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Our security testing services identify vulnerabilities, ensure compliance,
        and protect applications from evolving cyber threats.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
      className="w-full max-w-md rounded-lg shadow-lg"
      alt="Quality Operations"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Continuous Quality Engineering
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        We embed quality into DevOps pipelines to enable continuous testing,
        faster feedback, and proactive defect prevention.
      </p>
    </div>
  </div>
</section>

                    </>
                )}

                {/* ================= SERVICENOW PLATFORM ================= */}
                {serviceName === "servicenow-platform" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    ServiceNow Platform
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Simplifying enterprise workflows
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    We implement ServiceNow solutions that automate
                                    workflows, improve service delivery, and enhance
                                    IT service management efficiency.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
                                alt="ServiceNow Platform"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>
                        {/* ================= SERVICENOW PLATFORM ================= */}

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop"
      alt="ServiceNow Platform"
      className="w-full max-w-md rounded-lg shadow-lg"
    />

    <div>
      <p className="text-gray-700 leading-relaxed mb-4">
        ServiceNow is a cloud-based digital workflow platform that helps
        enterprises automate, optimize, and modernize business operations
        across IT, HR, customer service, and security.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our ServiceNow services include:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li className="hover:translate-x-2 transition-transform duration-300">
          IT Service Management (ITSM)
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          IT Operations Management (ITOM)
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          IT Asset Management (ITAM)
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          HR Service Delivery (HRSD)
        </li>
        <li className="hover:translate-x-2 transition-transform duration-300">
          Customer Service Management (CSM)
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-16">
  <h2 className="text-center text-3xl font-semibold text-blue-900 mb-10">
    The Competitive Advantage We Offer
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Faster service delivery with automated workflows
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Improved operational visibility and control
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Reduced operational costs
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow">
      ✔ Enhanced employee and customer experience
    </div>

    <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow col-span-2 text-center">
      ✔ Scalable, secure, and enterprise-ready platform
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1581091012184-7b3c5b2a7f6a?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="ServiceNow ITSM"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        IT Service Management (ITSM)
      </h3>

      <p className="text-gray-700 leading-relaxed">
        We implement ServiceNow ITSM solutions that streamline incident,
        problem, change, and request management while aligning with ITIL
        best practices.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="ServiceNow ITOM"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        IT Operations Management (ITOM)
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Gain real-time visibility into your infrastructure with ServiceNow
        ITOM. We enable proactive monitoring, event management, and
        automated remediation.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
      className="w-full max-w-sm rounded-lg shadow-lg"
      alt="ServiceNow HRSD"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        HR Service Delivery (HRSD)
      </h3>

      <p className="text-gray-700 leading-relaxed">
        Transform employee experiences with self-service portals,
        case management, and workflow automation across the
        employee lifecycle.
      </p>
    </div>
  </div>
</section>

<section className="py-16 px-8 max-w-7xl mx-auto border-t">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <img
      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop"
      className="w-full max-w-md rounded-lg shadow-lg"
      alt="ServiceNow CSM"
    />

    <div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">
        Customer Service Management (CSM)
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4">
        Deliver seamless customer experiences with omnichannel engagement,
        intelligent case routing, and proactive service workflows.
      </p>
    </div>
  </div>
</section>

                    </>
                )}

                

                {/* Back Button */}
                <div className="mt-32 scroll-reveal">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <Link 
                            to="/" 
                            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Ripple Effect */}
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-110 transition-all duration-500"></div>
                            
                            {/* Content */}
                            <div className="relative flex items-center gap-4">
                                <div className="relative w-10 h-10">
                                    <div className="absolute inset-0 bg-white/30 transform rotate-45 animate-pulse group-hover:rotate-90 transition-all duration-500"></div>
                                    <div className="absolute inset-1 bg-white/20 transform -rotate-12 animate-bounce group-hover:rotate-45 transition-all duration-700"></div>
                                    <div className="absolute inset-2 bg-white rounded-full animate-ping group-hover:animate-pulse"></div>
                                </div>
                                <span className="group-hover:translate-x-2 transition-transform duration-500">Back to Services</span>
                                <div className="relative w-6 h-6">
                                    <div className="absolute inset-0 border-2 border-white transform rotate-0 group-hover:rotate-180 transition-all duration-1000 ease-in-out"></div>
                                    <div className="absolute inset-1 border border-white/60 transform rotate-45 group-hover:rotate-225 transition-all duration-800"></div>
                                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:scale-300"></div>
                                </div>
                            </div>
                            
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}