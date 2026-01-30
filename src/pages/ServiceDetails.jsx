
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ServiceDetails() {
    const { serviceName } = useParams()
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
        
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, observerOptions)
        
        const scrollElements = document.querySelectorAll('.scroll-reveal')
        scrollElements.forEach(el => observer.observe(el))
        
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [serviceName])

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 py-24 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="floating-element w-32 h-32 bg-blue-200 rounded-full animate-morphing"></div>
            <div className="floating-element w-24 h-24 bg-purple-200 rounded-full animate-morphing"></div>
            <div className="floating-element w-40 h-40 bg-green-200 rounded-full animate-morphing"></div>
            <div className="floating-element w-28 h-28 bg-pink-200 rounded-full animate-morphing"></div>
            
            {/* Holographic Illusion Background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 1000 1000">
                    <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="1" className="animate-pulse"/>
                        </pattern>
                        <linearGradient id="hologram" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3"/>
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                    <circle cx="200" cy="200" r="100" fill="url(#hologram)" className="animate-pulse"/>
                    <circle cx="800" cy="300" r="80" fill="url(#hologram)" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <circle cx="600" cy="700" r="120" fill="url(#hologram)" className="animate-pulse" style={{animationDelay: '2s'}}/>
                </svg>
            </div>
            
            {/* 3D Geometric Illusions */}
            <div className="absolute top-20 left-20 w-32 h-32 opacity-10 animate-spin">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 rounded-lg shadow-2xl"></div>
            </div>
            <div className="absolute bottom-32 right-32 w-24 h-24 opacity-15 animate-bounce">
                <div className="w-full h-full bg-gradient-to-tr from-green-400 to-cyan-500 transform -rotate-12 rounded-full shadow-xl"></div>
            </div>
            
            {/* Animated Graph Elements */}
            <div className="absolute top-10 left-10 opacity-10 animate-floatGraph">
                <svg width="120" height="80" viewBox="0 0 120 80">
                    <path d="M10,70 Q30,10 50,40 T90,20" stroke="#3b82f6" strokeWidth="2" fill="none" className="animate-networkPulse"/>
                    <circle cx="10" cy="70" r="3" fill="#3b82f6" className="animate-pulse"/>
                    <circle cx="50" cy="40" r="3" fill="#8b5cf6" className="animate-pulse"/>
                    <circle cx="90" cy="20" r="3" fill="#10b981" className="animate-pulse"/>
                </svg>
            </div>
            
            {/* Moving Data Icons */}
            <div className="absolute top-1/4 right-20 opacity-20 animate-slideAcross">
                <div className="text-4xl">📊</div>
            </div>
            <div className="absolute top-1/2 left-20 opacity-20 animate-slideAcross" style={{animationDelay: '5s'}}>
                <div className="text-4xl">💹</div>
            </div>
            <div className="absolute top-3/4 right-32 opacity-20 animate-slideAcross" style={{animationDelay: '10s'}}>
                <div className="text-4xl">🔗</div>
            </div>
            
            {/* Network Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
                <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#3b82f6" strokeWidth="1" className="animate-networkPulse"/>
                <line x1="20%" y1="60%" x2="80%" y2="30%" stroke="#8b5cf6" strokeWidth="1" className="animate-networkPulse" style={{animationDelay: '1s'}}/>
                <line x1="30%" y1="10%" x2="70%" y2="90%" stroke="#10b981" strokeWidth="1" className="animate-networkPulse" style={{animationDelay: '2s'}}/>
            </svg>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-16 right-1/4 opacity-15 animate-dataFlow">
                <div className="text-3xl">🤖</div>
            </div>
            <div className="absolute bottom-32 left-1/3 opacity-15 animate-dataFlow" style={{animationDelay: '2s'}}>
                <div className="text-3xl">☁️</div>
            </div>
            <div className="absolute top-1/3 left-16 opacity-15 animate-dataFlow" style={{animationDelay: '4s'}}>
                <div className="text-3xl">⚡</div>
            </div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-4 h-full">
                    {Array.from({length: 144}).map((_, i) => (
                        <div key={i} className={`bg-blue-500 rounded animate-pulse stagger-${(i % 8) + 1}`}></div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
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

                    @keyframes pulse {
                        0%, 100% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                    }

                    @keyframes bounce {
                        0%, 20%, 53%, 80%, 100% {
                            transform: translateY(0);
                        }
                        40%, 43% {
                            transform: translateY(-15px);
                        }
                        70% {
                            transform: translateY(-7px);
                        }
                        90% {
                            transform: translateY(-3px);
                        }
                    }

                    @keyframes rotate {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes shimmer {
                        0% {
                            background-position: -200px 0;
                        }
                        100% {
                            background-position: calc(200px + 100%) 0;
                        }
                    }

                    @keyframes slideInFromBottom {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes zoomIn {
                        from {
                            opacity: 0;
                            transform: scale(0.3);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @keyframes typewriter {
                        from {
                            width: 0;
                        }
                        to {
                            width: 100%;
                        }
                    }

                    @keyframes blink {
                        0%, 50% {
                            border-color: transparent;
                        }
                        51%, 100% {
                            border-color: #3b82f6;
                        }
                    }

                    @keyframes morphing {
                        0%, 100% {
                            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                        }
                        50% {
                            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                        }
                    }

                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
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

                    .animate-pulse {
                        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }

                    .animate-bounce {
                        animation: bounce 1s infinite;
                    }

                    .animate-spin {
                        animation: rotate 1s linear infinite;
                    }

                    .animate-shimmer {
                        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                        background-size: 200px 100%;
                        animation: shimmer 1.5s infinite;
                    }

                    .animate-slideInFromBottom {
                        animation: slideInFromBottom 0.8s ease-out forwards;
                    }

                    .animate-zoomIn {
                        animation: zoomIn 0.6s ease-out forwards;
                    }

                    .animate-morphing {
                        animation: morphing 8s ease-in-out infinite;
                    }

                    .animate-gradientShift {
                        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                        background-size: 400% 400%;
                        animation: gradientShift 15s ease infinite;
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

                    .hover-rotate:hover {
                        transform: rotate(5deg);
                        transition: transform 0.3s ease;
                    }

                    .parallax-bg {
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }

                    .glass-effect {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }

                    .text-gradient {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }

                    .stagger-1 { animation-delay: 0.1s; }
                    .stagger-2 { animation-delay: 0.2s; }
                    .stagger-3 { animation-delay: 0.3s; }
                    .stagger-4 { animation-delay: 0.4s; }
                    .stagger-5 { animation-delay: 0.5s; }
                    .stagger-6 { animation-delay: 0.6s; }
                    .stagger-7 { animation-delay: 0.7s; }
                    .stagger-8 { animation-delay: 0.8s; }

                    .scroll-reveal {
                        opacity: 0;
                        transform: translateY(30px);
                        transition: all 0.6s ease-out;
                    }

                    .scroll-reveal.revealed {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .floating-element {
                        position: absolute;
                        pointer-events: none;
                        opacity: 0.1;
                    }

                    .floating-element:nth-child(1) {
                        top: 10%;
                        left: 10%;
                        animation: float 6s ease-in-out infinite;
                    }

                    .floating-element:nth-child(2) {
                        top: 20%;
                        right: 15%;
                        animation: float 8s ease-in-out infinite reverse;
                    }

                    .floating-element:nth-child(3) {
                        bottom: 20%;
                        left: 20%;
                        animation: float 7s ease-in-out infinite;
                    }

                    .floating-element:nth-child(4) {
                        bottom: 30%;
                        right: 10%;
                        animation: float 9s ease-in-out infinite reverse;
                    }

                    @keyframes floatGraph {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(5deg);
                        }
                    }

                    @keyframes slideAcross {
                        0% {
                            transform: translateX(-100px) translateY(0px);
                            opacity: 0;
                        }
                        50% {
                            opacity: 0.3;
                        }
                        100% {
                            transform: translateX(100vw) translateY(-50px);
                            opacity: 0;
                        }
                    }

                    @keyframes networkPulse {
                        0%, 100% {
                            stroke-dasharray: 5, 5;
                            opacity: 0.2;
                        }
                        50% {
                            stroke-dasharray: 10, 2;
                            opacity: 0.6;
                        }
                    }

                    @keyframes dataFlow {
                        0% {
                            transform: translateX(-50px) scale(0.8);
                            opacity: 0;
                        }
                        50% {
                            opacity: 0.4;
                        }
                        100% {
                            transform: translateX(50px) scale(1.2);
                            opacity: 0;
                        }
                    }

                    .animate-floatGraph {
                        animation: floatGraph 8s ease-in-out infinite;
                    }

                    .animate-slideAcross {
                        animation: slideAcross 15s linear infinite;
                    }

                    .animate-networkPulse {
                        animation: networkPulse 3s ease-in-out infinite;
                    }

                    .animate-dataFlow {
                        animation: dataFlow 4s ease-in-out infinite;
                    }
                `}</style>

                {/* ================= ARTIFICIAL INTELLIGENCE ================= */}
                {serviceName === "artificial-intelligence" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Artificial Intelligence
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Innovation with Cutting-Edge AI & Robust Tech
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We help enterprises harness AI to automate processes,
                                    improve decision-making, and unlock new business value
                                    using generative AI, predictive analytics, and automation.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">AI-Powered Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse"></div>
                                    <svg className="relative w-full h-full" width="400" height="300" viewBox="0 0 400 300">
                                        <defs>
                                            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                                                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
                                            </linearGradient>
                                        </defs>
                                        
                                        {/* Neural Network */}
                                        <circle cx="200" cy="150" r="40" fill="url(#aiGradient)" className="animate-pulse"/>
                                        <circle cx="100" cy="80" r="20" fill="#3b82f6" opacity="0.7" className="animate-float"/>
                                        <circle cx="300" cy="80" r="20" fill="#8b5cf6" opacity="0.7" className="animate-float" style={{animationDelay: '0.5s'}}/>
                                        <circle cx="100" cy="220" r="20" fill="#06b6d4" opacity="0.7" className="animate-float" style={{animationDelay: '1s'}}/>
                                        <circle cx="300" cy="220" r="20" fill="#10b981" opacity="0.7" className="animate-float" style={{animationDelay: '1.5s'}}/>
                                        
                                        {/* Connections */}
                                        <line x1="120" y1="90" x2="180" y2="130" stroke="#3b82f6" strokeWidth="2" opacity="0.6" className="animate-pulse"/>
                                        <line x1="280" y1="90" x2="220" y2="130" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                                        <line x1="120" y1="210" x2="180" y2="170" stroke="#06b6d4" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                                        <line x1="280" y1="210" x2="220" y2="170" stroke="#10b981" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                                        
                                        {/* Data Flow */}
                                        <path d="M50,150 Q200,50 350,150" fill="none" stroke="url(#aiGradient)" strokeWidth="3" strokeDasharray="10,5" className="animate-networkPulse"/>
                                        <text x="200" y="40" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold" className="animate-pulse">AI NEURAL NETWORK</text>
                                    </svg>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* ================= OUR AI TECHNOLOGY STACK ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-r from-slate-50 to-gray-50 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-gray-100/20 animate-gradientShift"></div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Our AI Technology Stack
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-shimmer"></div>
                                        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-shimmer"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-20 items-start">
                                    <div className="text-slate-700 leading-relaxed space-y-8 animate-fadeInLeft">
                                        <p className="text-lg hover:text-slate-900 transition-colors duration-300 animate-slideInFromBottom stagger-1">
                                            At Arvish Consulting, we leverage a <b className="text-gradient hover:scale-105 transition-transform duration-200">robust, future-ready AI technology stack</b>
                                            that combines large language models, agentic AI frameworks, and
                                            enterprise-grade cloud infrastructure.
                                        </p>

                                        <p className="text-lg hover:text-slate-900 transition-colors duration-300 animate-slideInFromBottom stagger-2">
                                            This enables us to build scalable, secure, and intelligent AI systems
                                            that integrate seamlessly within enterprise ecosystems.
                                        </p>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-3">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                                Large Language Models (LLMs)
                                            </h3>

                                            <ul className="list-disc pl-6 space-y-4">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-4">
                                                    Expertise across major foundation models and APIs including
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200"> OpenAI GPT</b>, <b className="text-gradient hover:scale-105 transition-transform duration-200">Anthropic Claude</b>, <b className="text-gradient hover:scale-105 transition-transform duration-200">Google Gemini</b>,
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200"> Microsoft Copilot</b>, and <b className="text-gradient hover:scale-105 transition-transform duration-200">Meta LLaMA</b> for enterprise-grade
                                                    reasoning, language understanding, and generation.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-4">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                                Agentic AI Frameworks
                                            </h3>

                                            <ul className="list-disc pl-6 space-y-4">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-5">
                                                    Design and deployment of <b className="text-gradient hover:scale-105 transition-transform duration-200">autonomous, goal-oriented AI agents</b>
                                                    using modern agentic frameworks and orchestration layers.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-6">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">CrewAI</b> and <b className="text-gradient hover:scale-105 transition-transform duration-200">LangChain</b> for multi-agent coordination and
                                                    contextual orchestration.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-7">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Strand Agents</b> for modular, composable AI workflows.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-8">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Google AI Development Kit (ADK)</b>, <b className="text-gradient hover:scale-105 transition-transform duration-200">Model Context Protocol (MCP)</b>,
                                                    and <b className="text-gradient hover:scale-105 transition-transform duration-200">ADA Protocol</b> for interoperability across tools and systems.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-1">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">API Park</b> for secure agent-to-agent and service orchestration
                                                    across distributed enterprise environments.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex justify-center animate-fadeInRight relative">
                                        <div className="relative">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-lg animate-pulse"></div>
                                            <svg className="relative w-full h-full" width="300" height="200" viewBox="0 0 300 200">
                                                <defs>
                                                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
                                                    </linearGradient>
                                                </defs>
                                                
                                                {/* Tech Stack Visualization */}
                                                <rect x="50" y="50" width="200" height="100" rx="10" fill="url(#techGradient)" className="animate-pulse"/>
                                                <rect x="70" y="70" width="40" height="20" rx="5" fill="#ffffff" opacity="0.8"/>
                                                <rect x="130" y="70" width="40" height="20" rx="5" fill="#ffffff" opacity="0.8"/>
                                                <rect x="190" y="70" width="40" height="20" rx="5" fill="#ffffff" opacity="0.8"/>
                                                
                                                <rect x="70" y="110" width="40" height="20" rx="5" fill="#ffffff" opacity="0.6"/>
                                                <rect x="130" y="110" width="40" height="20" rx="5" fill="#ffffff" opacity="0.6"/>
                                                <rect x="190" y="110" width="40" height="20" rx="5" fill="#ffffff" opacity="0.6"/>
                                                
                                                {/* Floating Elements */}
                                                <circle cx="30" cy="100" r="8" fill="#10b981" className="animate-bounce"/>
                                                <circle cx="270" cy="100" r="8" fill="#f59e0b" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
                                                
                                                <text x="150" y="30" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">TECH STACK</text>
                                            </svg>
                                        </div>
                                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin opacity-20"></div>
                                            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-bounce opacity-30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= CORE AI CAPABILITIES ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-10 left-10 w-20 h-20 bg-slate-300 rounded-full opacity-15 animate-float"></div>
                                <div className="absolute top-20 right-20 w-16 h-16 bg-gray-300 rounded-full opacity-15 animate-bounce"></div>
                                <div className="absolute bottom-20 left-20 w-24 h-24 bg-slate-200 rounded-full opacity-15 animate-pulse"></div>
                            </div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Core AI Capabilities
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">💡</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Generative AI & LLM Solutions
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Create intelligent chatbots, content generators, and AI assistants
                                                for natural, human-like interactions across customer support, sales,
                                                and knowledge management.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">📊</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Predictive Analytics & Machine Learning
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Uncover trends, predict demand, detect anomalies, and optimize
                                                operations using supervised and unsupervised learning.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">📚</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Retrieval-Augmented Generation (RAG)
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Integrate AI with internal knowledge bases and enterprise data
                                                for accurate, context-aware, and secure AI responses.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">👁️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Computer Vision & Natural Language Processing (NLP)
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Leverage image and language AI for document analysis, OCR,
                                                sentiment detection, entity extraction, and translation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">🤖</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                AI Agents & Workflow Automation
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Automate complex multi-step tasks by integrating AI agents
                                                with enterprise systems like APIs, CRM, and ERP platforms.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">💻</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
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

                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
                                            alt="AI Maturity Model"
                                            className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                        />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <p className="font-semibold text-blue-900">
                                            Accelerate Your AI Journey – From Exploration to Enterprise-Scale Transformation
                                        </p>

                                        <p>
                                            Arvish Consulting partners with enterprises at every stage of their AI maturity.
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
                                        <img
                                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
                                            alt="AI in Quality Engineering"
                                            className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                        />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <h2 className="text-3xl font-bold text-blue-900">
                                            AI in Quality Engineering
                                        </h2>

                                        <p className="font-semibold text-blue-900">
                                            Reimagining Quality Engineering with AI
                                        </p>

                                        <p>
                                            At Arvish Consulting, we integrate AI into the heart of Quality Engineering
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
                        <section className="mt-32 relative py-24 px-8 rounded-3xl overflow-hidden">
                            {/* Pleasant Cool Professional Background */}
                            <div className="absolute inset-0">
                                {/* Modern Gradient Base */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50"></div>
                                
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-blue-50/60 to-cyan-100/40 animate-gradientShift"></div>
                                
                                {/* Professional Geometric Elements */}
                                <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-200/20 rounded-2xl blur-lg animate-float transform rotate-12"></div>
                                <div className="absolute top-32 right-24 w-20 h-20 bg-gradient-to-br from-slate-300/15 to-blue-200/15 rounded-full blur-md animate-float" style={{animationDelay: '2s'}}></div>
                                <div className="absolute bottom-24 left-32 w-32 h-32 bg-gradient-to-br from-cyan-200/15 to-blue-300/15 rounded-3xl blur-xl animate-float" style={{animationDelay: '4s'}}></div>
                                <div className="absolute bottom-16 right-16 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-slate-300/20 rounded-xl blur-sm animate-float" style={{animationDelay: '6s'}}></div>
                                
                                {/* Refined Pattern Overlay */}
                                <div className="absolute inset-0 opacity-3">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <pattern id="professionalPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                                <circle cx="12.5" cy="12.5" r="0.8" fill="#1e40af" opacity="0.4">
                                                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite"/>
                                                </circle>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#professionalPattern)"/>
                                    </svg>
                                </div>
                                
                                {/* Subtle Professional Accents */}
                                <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>
                                <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-200/25 to-transparent animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
                                
                                {/* Professional Glow Effects */}
                                <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-300/8 rounded-full blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
                                <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-cyan-300/6 rounded-full blur-2xl animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
                            </div>
                            <div className="max-w-6xl mx-auto relative z-10">
                                <div className="text-center mb-20 scroll-reveal">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Why Arvish Consulting For AI?
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-1 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-400 to-slate-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Enterprise-Grade Expertise:</b> Proven across industries and mission-critical systems.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-2 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Custom-Built Solutions:</b> Tailored AI models and workflows aligned with business needs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-3 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-500 to-slate-700 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">End-to-End Delivery:</b> From AI strategy to deployment and optimization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-4 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Responsible AI:</b> Ethical, secure, and compliant AI development.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DIGITAL EXPERIENCE ================= */}
                {serviceName === "digital-experience" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Digital Experience
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Transforming Customer Journeys Through Digital Innovation
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We create seamless, personalized digital experiences that connect customers
                                    across all touchpoints, driving engagement, satisfaction, and business growth
                                    through innovative design and technology solutions.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">Digital Experience Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-blue-600/20 rounded-3xl blur-xl animate-pulse"></div>
                                    <svg className="relative w-full h-full" width="450" height="350" viewBox="0 0 450 350">
                                        <defs>
                                            <linearGradient id="dxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
                                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
                                            </linearGradient>
                                            <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"/>
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7"/>
                                            </linearGradient>
                                        </defs>
                                        
                                        {/* Central Experience Hub */}
                                        <circle cx="225" cy="175" r="50" fill="url(#dxGradient)" className="animate-pulse"/>
                                        <text x="225" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DIGITAL</text>
                                        <text x="225" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">EXPERIENCE</text>
                                        
                                        {/* Device Ecosystem */}
                                        <g className="animate-spin" style={{transformOrigin: '225px 175px', animationDuration: '30s'}}>
                                            <circle cx="225" cy="175" r="120" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.4" strokeDasharray="10,5"/>
                                            
                                            {/* Mobile Device */}
                                            <rect x="320" y="160" width="25" height="40" rx="8" fill="url(#deviceGradient)" className="animate-float"/>
                                            <text x="332" y="185" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">📱</text>
                                            
                                            {/* Desktop */}
                                            <rect x="200" y="40" width="50" height="30" rx="5" fill="url(#deviceGradient)" className="animate-bounce"/>
                                            <text x="225" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">💻</text>
                                            
                                            {/* Tablet */}
                                            <rect x="80" y="160" width="35" height="25" rx="6" fill="url(#deviceGradient)" className="animate-pulse"/>
                                            <text x="97" y="177" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">📟</text>
                                            
                                            {/* Smart Watch */}
                                            <circle cx="225" cy="295" r="15" fill="url(#deviceGradient)" className="animate-float" style={{animationDelay: '1s'}}/>
                                            <text x="225" y="300" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">⌚</text>
                                        </g>
                                        
                                        {/* Experience Connections */}
                                        <g className="animate-networkPulse">
                                            <line x1="225" y1="125" x2="225" y2="70" stroke="#8b5cf6" strokeWidth="3" opacity="0.6"/>
                                            <line x1="275" y1="175" x2="320" y2="180" stroke="#10b981" strokeWidth="3" opacity="0.6"/>
                                            <line x1="175" y1="175" x2="115" y2="172" stroke="#f59e0b" strokeWidth="3" opacity="0.6"/>
                                            <line x1="225" y1="225" x2="225" y2="280" stroke="#06b6d4" strokeWidth="3" opacity="0.6"/>
                                        </g>
                                        
                                        {/* User Journey Points */}
                                        <g transform="translate(50, 50)">
                                            <circle cx="0" cy="0" r="8" fill="#8b5cf6" className="animate-pulse"/>
                                            <circle cx="20" cy="10" r="6" fill="#06b6d4" className="animate-bounce" style={{animationDelay: '0.3s'}}/>
                                            <circle cx="10" cy="25" r="7" fill="#10b981" className="animate-float" style={{animationDelay: '0.6s'}}/>
                                            <text x="15" y="-15" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">TOUCHPOINTS</text>
                                        </g>
                                        
                                        {/* Personalization Engine */}
                                        <g transform="translate(350, 50)">
                                            <rect x="0" y="0" width="40" height="25" rx="8" fill="#f59e0b" className="animate-pulse"/>
                                            <text x="20" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AI</text>
                                            <text x="20" y="-5" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">PERSONALIZATION</text>
                                        </g>
                                        
                                        {/* Analytics Dashboard */}
                                        <g transform="translate(350, 280)">
                                            <rect x="0" y="0" width="35" height="20" rx="5" fill="#06b6d4" className="animate-pulse"/>
                                            <text x="17" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">📊</text>
                                            <text x="17" y="35" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">ANALYTICS</text>
                                        </g>
                                        
                                        {/* Content Management */}
                                        <g transform="translate(50, 280)">
                                            <rect x="0" y="0" width="30" height="20" rx="5" fill="#10b981" className="animate-pulse"/>
                                            <text x="15" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">📝</text>
                                            <text x="15" y="35" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">CONTENT</text>
                                        </g>
                                        
                                        <text x="225" y="30" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" className="animate-pulse">OMNICHANNEL EXPERIENCE</text>
                                    </svg>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* ================= DIGITAL EXPERIENCE STRATEGY ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20 animate-gradientShift"></div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Digital Experience Strategy & Design
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-shimmer"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-shimmer"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-20 items-start">
                                    <div className="text-slate-700 leading-relaxed space-y-8 animate-fadeInLeft">
                                        <p className="text-lg hover:text-slate-900 transition-colors duration-300 animate-slideInFromBottom stagger-1">
                                            At FINT Networks, we understand that exceptional digital experiences
                                            are the cornerstone of modern business success. Our comprehensive
                                            <b className="text-gradient hover:scale-105 transition-transform duration-200"> Digital Experience Strategy</b>
                                            transforms how customers interact with your brand across every touchpoint.
                                        </p>

                                        <p className="text-lg hover:text-slate-900 transition-colors duration-300 animate-slideInFromBottom stagger-2">
                                            We combine human-centered design principles with cutting-edge technology
                                            to create seamless, intuitive, and emotionally engaging experiences
                                            that drive customer satisfaction and business growth.
                                        </p>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-3">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                                Customer Journey Mapping
                                            </h3>

                                            <ul className="list-disc pl-6 space-y-4">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-4">
                                                    Comprehensive analysis of customer touchpoints across
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200"> web, mobile, social, and offline channels</b>
                                                    to identify optimization opportunities.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-5">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Persona development</b> and behavioral analysis
                                                    to understand customer needs, preferences, and pain points.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-6">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Experience gap analysis</b> to identify areas
                                                    for improvement and competitive differentiation.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-4">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                                Design Thinking & Innovation
                                            </h3>

                                            <ul className="list-disc pl-6 space-y-4">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-7">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Human-centered design</b> methodologies
                                                    that prioritize user needs and business objectives.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-8">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Rapid prototyping</b> and iterative testing
                                                    to validate concepts before full-scale implementation.
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-1">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Innovation workshops</b> to generate creative
                                                    solutions and breakthrough digital experiences.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex justify-center animate-fadeInRight relative">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-blue-600/20 rounded-2xl blur-lg animate-pulse"></div>
                                            <svg className="relative w-full h-full" width="350" height="250" viewBox="0 0 350 250">
                                                <defs>
                                                    <linearGradient id="strategyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
                                                    </linearGradient>
                                                </defs>
                                                
                                                {/* Strategy Framework */}
                                                <rect x="75" y="75" width="200" height="100" rx="15" fill="url(#strategyGradient)" className="animate-pulse"/>
                                                <text x="175" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">STRATEGY</text>
                                                <text x="175" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">FRAMEWORK</text>
                                                
                                                {/* Strategy Components */}
                                                <circle cx="50" cy="125" r="15" fill="#10b981" className="animate-bounce"/>
                                                <text x="50" y="130" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">UX</text>
                                                
                                                <circle cx="300" cy="125" r="15" fill="#f59e0b" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
                                                <text x="300" y="130" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CX</text>
                                                
                                                <circle cx="175" cy="50" r="12" fill="#06b6d4" className="animate-pulse"/>
                                                <text x="175" y="55" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">AI</text>
                                                
                                                <circle cx="175" cy="200" r="12" fill="#ef4444" className="animate-pulse" style={{animationDelay: '1s'}}/>
                                                <text x="175" y="205" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DATA</text>
                                                
                                                {/* Connection Lines */}
                                                <line x1="65" y1="125" x2="75" y2="125" stroke="#10b981" strokeWidth="3" className="animate-pulse"/>
                                                <line x1="275" y1="125" x2="285" y2="125" stroke="#f59e0b" strokeWidth="3" className="animate-pulse"/>
                                                <line x1="175" y1="62" x2="175" y2="75" stroke="#06b6d4" strokeWidth="3" className="animate-pulse"/>
                                                <line x1="175" y1="175" x2="175" y2="188" stroke="#ef4444" strokeWidth="3" className="animate-pulse"/>
                                                
                                                <text x="175" y="25" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">DIGITAL STRATEGY</text>
                                            </svg>
                                        </div>
                                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin opacity-20"></div>
                                        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-30"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= OMNICHANNEL EXPERIENCE PLATFORM ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Omnichannel Experience Platform
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🌐</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Unified Customer Data Platform
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Integrate customer data from all touchpoints to create a single,
                                                comprehensive view that enables personalized experiences and
                                                informed decision-making across channels.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-purple-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">📱</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Cross-Channel Consistency
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Ensure consistent branding, messaging, and user experience
                                                across web, mobile, social media, email, and in-store
                                                interactions for seamless customer journeys.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">🤖</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                AI-Powered Personalization
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Leverage machine learning algorithms to deliver personalized
                                                content, product recommendations, and experiences based on
                                                customer behavior and preferences.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-orange-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">📊</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Real-Time Analytics & Insights
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Monitor customer interactions in real-time to gain actionable
                                                insights, optimize experiences, and respond quickly to
                                                changing customer needs and market conditions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-cyan-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">⚡</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Automated Workflow Orchestration
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Streamline customer interactions through intelligent workflow
                                                automation that triggers appropriate responses and actions
                                                based on customer behavior and journey stage.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-pink-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">🎯</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Customer Journey Optimization
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Continuously analyze and optimize customer journeys using
                                                A/B testing, behavioral analytics, and feedback loops to
                                                improve conversion rates and satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= DIGITAL TRANSFORMATION SERVICES ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Digital Transformation Services
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-blue-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce text-center">🎨</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            UI/UX Design
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Create intuitive, accessible, and visually compelling
                                            interfaces that enhance user engagement and satisfaction.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-green-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse text-center">📱</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            Mobile Experience
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Develop responsive mobile applications and progressive
                                            web apps that deliver native-like experiences.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-purple-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float text-center">🌐</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            Web Platforms
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Build scalable web platforms with modern frameworks
                                            and cloud-native architectures for optimal performance.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-orange-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce text-center">💬</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            Conversational AI
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Implement intelligent chatbots and virtual assistants
                                            to provide 24/7 customer support and engagement.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-red-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse text-center">📧</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            Marketing Automation
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Automate marketing campaigns with personalized content
                                            delivery and customer lifecycle management.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-cyan-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float text-center">🔗</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            System Integration
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Connect disparate systems and data sources to create
                                            unified digital ecosystems and seamless workflows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= CUSTOMER EXPERIENCE OPTIMIZATION ================= */}
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
                                            alt="Customer Experience"
                                            className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                        />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <h2 className="text-3xl font-bold text-blue-900">
                                            Customer Experience Optimization
                                        </h2>
                                        
                                        <p className="font-semibold text-blue-900">
                                            Transforming Customer Interactions Through Data-Driven Insights
                                        </p>

                                        <p>
                                            Our customer experience optimization approach combines advanced analytics,
                                            behavioral insights, and continuous testing to create experiences that
                                            not only meet but exceed customer expectations at every touchpoint.
                                        </p>

                                        <h3 className="text-lg font-semibold text-blue-900 mt-6">
                                            Our CX Optimization Framework:
                                        </h3>

                                        <ul className="space-y-4">
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b className="hover:text-blue-700 transition-colors duration-200">Experience Measurement:</b> Implement comprehensive
                                                tracking and measurement systems for customer satisfaction,
                                                Net Promoter Score (NPS), and Customer Effort Score (CES).
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b className="hover:text-blue-700 transition-colors duration-200">Behavioral Analytics:</b> Analyze customer behavior
                                                patterns, preferences, and pain points using advanced
                                                analytics and heat mapping technologies.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b className="hover:text-blue-700 transition-colors duration-200">A/B Testing & Optimization:</b> Continuously test and
                                                optimize experiences through systematic experimentation
                                                and data-driven decision making.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b className="hover:text-blue-700 transition-colors duration-200">Voice of Customer:</b> Implement feedback collection
                                                systems and sentiment analysis to understand customer
                                                needs and expectations in real-time.
                                            </li>
                                            <li className="hover:translate-x-2 transition-transform duration-300">
                                                <span className="text-red-600 font-bold">■</span>{" "}
                                                <b className="hover:text-blue-700 transition-colors duration-200">Predictive Experience:</b> Use machine learning to
                                                predict customer needs and proactively deliver relevant
                                                content and services.
                                            </li>
                                        </ul>

                                        <p>
                                            Our optimization strategies result in improved customer satisfaction,
                                            increased conversion rates, reduced churn, and enhanced brand loyalty
                                            across all digital touchpoints.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= DIGITAL EXPERIENCE TECHNOLOGIES ================= */}
                        <section className="mt-24 py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Digital Experience Technologies
                                    </h2>
                                    <div className="flex justify-center gap-3">
                                        <span className="w-20 h-1 bg-purple-200 rounded"></span>
                                        <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
                                        <span className="w-20 h-1 bg-purple-200 rounded"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🎯</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Content Management Systems</h3>
                                            <p className="text-slate-700">Headless CMS solutions for flexible content delivery across multiple channels and devices.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">📊</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Customer Data Platforms</h3>
                                            <p className="text-slate-700">Unified customer data management for personalized experiences and targeted marketing.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🤖</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">AI & Machine Learning</h3>
                                            <p className="text-slate-700">Intelligent personalization engines and predictive analytics for enhanced user experiences.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">⚡</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Progressive Web Apps</h3>
                                            <p className="text-slate-700">Fast, reliable, and engaging web applications that work seamlessly across all devices.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">☁️</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">Cloud-Native Architecture</h3>
                                            <p className="text-slate-700">Scalable, resilient infrastructure that supports global digital experiences.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md hover-lift hover-glow animate-fadeInUp group flex gap-4">
                                        <span className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">🔗</span>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">API-First Integration</h3>
                                            <p className="text-slate-700">Seamless connectivity between systems and third-party services for unified experiences.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= WHY CHOOSE US FOR DIGITAL EXPERIENCE ================= */}
                        <section className="mt-32 py-24 px-8 rounded-3xl relative overflow-hidden">
                            {/* Pleasant Cool Professional Background */}
                            <div className="absolute inset-0">
                                {/* Modern Gradient Base */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-50"></div>
                                
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-purple-50/50 to-blue-100/30 animate-gradientShift"></div>
                                
                                {/* Professional Geometric Elements */}
                                <div className="absolute top-20 right-20 w-28 h-28 bg-gradient-to-br from-purple-300/15 to-blue-200/15 rounded-2xl blur-lg animate-float transform -rotate-12"></div>
                                <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-blue-300/12 to-indigo-200/12 rounded-full blur-md animate-float" style={{animationDelay: '3s'}}></div>
                                
                                {/* Refined Pattern Overlay */}
                                <div className="absolute inset-0 opacity-3">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <pattern id="dxPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                                <circle cx="12.5" cy="12.5" r="0.8" fill="#8b5cf6" opacity="0.4">
                                                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite"/>
                                                </circle>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#dxPattern)"/>
                                    </svg>
                                </div>
                                
                                {/* Professional Glow Effects */}
                                <div className="absolute top-1/4 right-1/4 w-44 h-44 bg-purple-300/6 rounded-full blur-2xl animate-pulse" style={{animationDuration: '9s'}}></div>
                                <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-blue-300/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '11s', animationDelay: '5s'}}></div>
                            </div>
                            <div className="max-w-6xl mx-auto relative z-10">
                                <div className="text-center mb-20 scroll-reveal">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Why Choose FINT Networks for Digital Experience?
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-1 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Human-Centered Design:</b> We prioritize user needs and behaviors in every design decision.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-2 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Omnichannel Expertise:</b> Seamless experiences across all digital and physical touchpoints.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-3 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Data-Driven Optimization:</b> Continuous improvement through analytics and customer insights.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-4 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">AI-Powered Personalization:</b> Intelligent experiences that adapt to individual customer preferences.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-5 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Scalable Architecture:</b> Future-ready solutions that grow with your business needs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-6 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">End-to-End Support:</b> From strategy and design to implementation and optimization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= PROCESS AUTOMATION ================= */}
                {serviceName === "process-automation" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Process Automation
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Intelligent automation for modern enterprises
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We automate complex business processes using RPA, AI, and workflow optimization to increase efficiency and reduce operational costs.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">Automation Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-96 h-96 flex items-center justify-center">
                                    <div className="absolute inset-0 border-2 border-orange-200 rounded-full animate-spin" style={{animationDuration: '22s'}}>
                                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute right-0 top-1/2 w-3 h-3 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                        <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute inset-8 border border-red-200 rounded-full animate-spin" style={{animationDuration: '16s', animationDirection: 'reverse'}}>
                                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute top-8 left-1/3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                                        <span className="text-2xl">⚙️</span>
                                    </div>
                                    <div className="absolute top-12 right-1/4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                        <span className="text-2xl">🤖</span>
                                    </div>
                                    <div className="absolute right-8 top-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float z-10">
                                        PA
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* ================= DIGITAL INTEGRATION ================= */}
                {serviceName === "digital-integration" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Digital Integration
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Seamless connectivity across systems
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We connect disparate systems and applications to create unified digital ecosystems that enable seamless data flow and process automation.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">Integration Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-96 h-96 flex items-center justify-center">
                                    <div className="absolute inset-0 border-2 border-cyan-200 rounded-full animate-spin" style={{animationDuration: '28s'}}>
                                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute right-0 top-1/2 w-3 h-3 bg-teal-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                        <div className="absolute left-0 top-1/2 w-3 h-3 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute inset-8 border border-teal-200 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}>
                                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute top-8 left-1/3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                                        <span className="text-2xl">🔗</span>
                                    </div>
                                    <div className="absolute top-12 right-1/4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                        <span className="text-2xl">🌐</span>
                                    </div>
                                    <div className="absolute right-8 top-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                        <span className="text-2xl">📶</span>
                                    </div>
                                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float z-10">
                                        DI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* ================= ENTERPRISE APPLICATIONS ================= */}
                {serviceName === "enterprise-applications" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Enterprise Applications
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Application-driven business transformation
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We build scalable enterprise applications that streamline operations,
                                    integrate systems, and improve organizational efficiency through
                                    modern architectures and cutting-edge technologies.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">Enterprise Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-600/20 rounded-3xl blur-xl animate-pulse"></div>
                                    <svg className="relative w-full h-full" width="450" height="350" viewBox="0 0 450 350">
                                        <defs>
                                            <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
                                                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6"/>
                                                <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.8"/>
                                            </linearGradient>
                                            <linearGradient id="moduleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
                                                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.7"/>
                                            </linearGradient>
                                        </defs>
                                        
                                        {/* Central Application Hub */}
                                        <rect x="175" y="125" width="100" height="100" rx="15" fill="url(#appGradient)" className="animate-pulse"/>
                                        <text x="225" y="180" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ENTERPRISE</text>
                                        <text x="225" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CORE</text>
                                        
                                        {/* Application Modules */}
                                        <g className="animate-spin" style={{transformOrigin: '225px 175px', animationDuration: '30s'}}>
                                            <circle cx="225" cy="175" r="120" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.4" strokeDasharray="10,5"/>
                                            
                                            {/* CRM Module */}
                                            <rect x="320" y="160" width="40" height="30" rx="8" fill="url(#moduleGradient)" className="animate-float"/>
                                            <text x="340" y="180" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CRM</text>
                                            
                                            {/* ERP Module */}
                                            <rect x="210" y="40" width="30" height="40" rx="8" fill="url(#moduleGradient)" className="animate-bounce"/>
                                            <text x="225" y="65" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ERP</text>
                                            
                                            {/* HRM Module */}
                                            <rect x="85" y="160" width="40" height="30" rx="8" fill="url(#moduleGradient)" className="animate-pulse"/>
                                            <text x="105" y="180" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">HRM</text>
                                            
                                            {/* SCM Module */}
                                            <rect x="210" y="285" width="30" height="40" rx="8" fill="url(#moduleGradient)" className="animate-float" style={{animationDelay: '1s'}}/>
                                            <text x="225" y="310" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SCM</text>
                                        </g>
                                        
                                        {/* Data Integration Lines */}
                                        <g className="animate-networkPulse">
                                            <line x1="225" y1="125" x2="225" y2="80" stroke="#3b82f6" strokeWidth="3" opacity="0.6"/>
                                            <line x1="275" y1="175" x2="320" y2="175" stroke="#10b981" strokeWidth="3" opacity="0.6"/>
                                            <line x1="175" y1="175" x2="125" y2="175" stroke="#f59e0b" strokeWidth="3" opacity="0.6"/>
                                            <line x1="225" y1="225" x2="225" y2="285" stroke="#8b5cf6" strokeWidth="3" opacity="0.6"/>
                                        </g>
                                        
                                        {/* Microservices Architecture */}
                                        <g transform="translate(50, 50)">
                                            <circle cx="0" cy="0" r="8" fill="#10b981" className="animate-pulse"/>
                                            <circle cx="20" cy="10" r="6" fill="#06b6d4" className="animate-bounce" style={{animationDelay: '0.3s'}}/>
                                            <circle cx="10" cy="25" r="7" fill="#3b82f6" className="animate-float" style={{animationDelay: '0.6s'}}/>
                                            <text x="15" y="-15" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">MICROSERVICES</text>
                                        </g>
                                        
                                        {/* Cloud Integration */}
                                        <g transform="translate(350, 50)">
                                            <path d="M0,15 Q-5,5 0,0 Q10,0 15,5 Q20,0 25,0 Q30,5 25,15 Q20,20 15,15 Q10,20 5,15 Q0,20 0,15 Z" fill="#06b6d4" className="animate-float"/>
                                            <text x="12" y="-5" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">CLOUD</text>
                                        </g>
                                        
                                        {/* API Gateway */}
                                        <g transform="translate(350, 280)">
                                            <rect x="0" y="0" width="30" height="20" rx="5" fill="#f59e0b" className="animate-pulse"/>
                                            <text x="15" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">API</text>
                                            <text x="15" y="35" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">GATEWAY</text>
                                        </g>
                                        
                                        {/* Database Layer */}
                                        <g transform="translate(50, 280)">
                                            <ellipse cx="15" cy="10" rx="15" ry="8" fill="#8b5cf6" className="animate-pulse"/>
                                            <ellipse cx="15" cy="5" rx="15" ry="3" fill="#a855f7"/>
                                            <text x="15" y="30" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">DATABASE</text>
                                        </g>
                                        
                                        <text x="225" y="30" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" className="animate-pulse">ENTERPRISE ECOSYSTEM</text>
                                    </svg>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* ================= APPLICATION DEVELOPMENT SERVICES ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-r from-slate-50 to-gray-50 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-gray-100/20 animate-gradientShift"></div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Application Development Services
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-gray-500 rounded animate-shimmer"></div>
                                        <div className="w-4 h-4 bg-slate-500 rounded-full animate-bounce"></div>
                                        <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-slate-500 rounded animate-shimmer"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-orange-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🌐</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Web & Portal Development
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Build responsive, scalable web applications and enterprise portals
                                                using modern frameworks like React, Angular, and Vue.js with
                                                progressive web app capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-red-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">⚙️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Custom Application Development
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Develop tailored enterprise applications that align with your
                                                business processes, featuring custom workflows, integrations,
                                                and user experiences.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">📱</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Mobile Application Development
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Create native and cross-platform mobile apps for iOS and Android
                                                with seamless integration to enterprise systems and real-time
                                                data synchronization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">📄</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Content Management Systems
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Implement robust CMS solutions for content creation, management,
                                                and distribution with multi-channel publishing and workflow
                                                automation capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-purple-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">☁️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Cloud-Native Applications
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Design and deploy cloud-native applications using microservices
                                                architecture, containerization, and serverless technologies for
                                                maximum scalability and resilience.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-indigo-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">🔗</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                API Development & Integration
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Build RESTful APIs and GraphQL services for seamless system
                                                integration, third-party connectivity, and data exchange across
                                                your enterprise ecosystem.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= APPLICATION MODERNIZATION ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Application Modernization & Legacy Transformation
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-orange-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🔄</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Legacy System Modernization
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Transform monolithic legacy applications into modern, scalable
                                                microservices architecture with cloud-native capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-red-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">⚡</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Performance Optimization
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Enhance application performance through code optimization,
                                                database tuning, and infrastructure improvements.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">🛡️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Security Enhancement
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Implement modern security practices, encryption, and
                                                compliance standards to protect enterprise data.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">📊</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Analytics Integration
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Embed advanced analytics and reporting capabilities
                                                for data-driven decision making.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= ENTERPRISE ARCHITECTURE & INTEGRATION ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Enterprise Architecture & System Integration
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🏗️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Microservices Architecture
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Design and implement scalable microservices architectures
                                                with containerization, service mesh, and API gateways.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-indigo-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">🔗</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Enterprise Service Bus (ESB)
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Implement robust integration platforms for seamless
                                                communication between disparate enterprise systems.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-purple-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">📡</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                API Management & Governance
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Establish comprehensive API strategies with security,
                                                versioning, monitoring, and developer portal capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🔄</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Data Integration & ETL
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Build robust data pipelines for real-time and batch
                                                processing with data quality and governance controls.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-16 items-start">
                                    <div className="flex justify-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop"
                                            alt="Application Development"
                                            className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                        />
                                    </div>

                                    <div className="text-slate-700 leading-relaxed space-y-6">
                                        <h2 className="text-3xl font-bold text-blue-900">
                                            Enterprise Application Development Excellence
                                        </h2>
                                        
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
                                            applications that help you meet strategic business goals.
                                        </p>

                                        <p>
                                            Our Enterprise Application Development & Maintenance services include
                                            application development and maintenance, custom solution
                                            implementation, application integration, data transformation, and
                                            legacy modernization.
                                        </p>

                                        <p>
                                            We provide comprehensive and efficient approaches that align with
                                            business objectives and deliver sustainable growth. Our application
                                            design and development systems streamline disparate applications and
                                            workflows while supporting internationalization and localization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= ENTERPRISE SOLUTIONS PORTFOLIO ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Enterprise Solutions Portfolio
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-shimmer"></div>
                                        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
                                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-shimmer"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-blue-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce text-center">🏢</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            ERP Systems
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Comprehensive enterprise resource planning solutions
                                            for finance, HR, supply chain, and operations management.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-green-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse text-center">📊</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            CRM Platforms
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Customer relationship management systems with
                                            sales automation, marketing, and service capabilities.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-purple-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float text-center">💼</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            HCM Solutions
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Human capital management applications for talent
                                            acquisition, performance, payroll, and workforce analytics.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-orange-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce text-center">🚚</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            SCM Applications
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Supply chain management solutions for procurement,
                                            inventory, logistics, and supplier relationship management.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-red-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse text-center">💰</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            Financial Systems
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Financial management applications for accounting,
                                            budgeting, reporting, and regulatory compliance.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-cyan-600 text-6xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float text-center">🔍</div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                                            BI & Analytics
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed text-center group-hover:text-slate-900 transition-colors duration-300">
                                            Business intelligence platforms with data visualization,
                                            reporting, and advanced analytics capabilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= DEVELOPMENT METHODOLOGIES ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-3xl relative overflow-hidden">
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Development Methodologies & Best Practices
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-indigo-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🔄</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Agile & DevOps Integration
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Implement agile development practices with continuous integration,
                                                continuous deployment, and automated testing pipelines.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">🛡️</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Security-First Development
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Embed security controls throughout the development lifecycle
                                                with secure coding practices and vulnerability assessments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-cyan-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">📊</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Performance Engineering
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Design applications with performance optimization from the ground up,
                                                including load testing and scalability planning.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">🔍</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Quality Assurance & Testing
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Comprehensive testing strategies including unit, integration,
                                                performance, and user acceptance testing automation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop"
                                        alt="Application Development"
                                        className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Enterprise Application Development
                                    </h2>

                                    <p>
                                        Application development is essential for improving efficiency,
                                        scalability, customer engagement, and unlocking new revenue streams.
                                    </p>

                                    <p>
                                        We leverage deep domain expertise, technical excellence, and proven
                                        methodologies to deliver future-ready enterprise applications.
                                    </p>

                                    <p>
                                        Our capabilities span application assessment, modernization, end-to-end
                                        development, maintenance, and enhancement.
                                    </p>

                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="hover:translate-x-2 transition-transform duration-300">Web and Portal Development</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Custom Application Development</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Mobile Application Development</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Content Management Systems</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mt-24 py-20 px-6 bg-slate-50">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
                                        alt="Application Management"
                                        className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Application Management
                                    </h2>

                                    <p>
                                        We provide on-site and global support models that integrate seamlessly
                                        with your teams, ensuring cost efficiency and operational excellence.
                                    </p>

                                    <p>
                                        By working closely with your organization, we deliver impactful
                                        application management services aligned with your business strategy.
                                    </p>
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

                        {/* ================= WHY CHOOSE US FOR ENTERPRISE APPLICATIONS ================= */}
                        <section className="mt-32 py-24 px-8 rounded-3xl relative overflow-hidden">
                            {/* Pleasant Cool Professional Background */}
                            <div className="absolute inset-0">
                                {/* Modern Gradient Base */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50"></div>
                                
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-blue-50/50 to-indigo-100/30 animate-gradientShift"></div>
                                
                                {/* Professional Geometric Elements */}
                                <div className="absolute top-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-300/15 to-indigo-200/15 rounded-2xl blur-lg animate-float transform -rotate-12"></div>
                                <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-slate-300/12 to-blue-200/12 rounded-full blur-md animate-float" style={{animationDelay: '3s'}}></div>
                                
                                {/* Refined Pattern Overlay */}
                                <div className="absolute inset-0 opacity-3">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <pattern id="enterprisePattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                                <rect x="14" y="14" width="2" height="2" fill="#1e40af" opacity="0.3">
                                                    <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite"/>
                                                </rect>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#enterprisePattern)"/>
                                    </svg>
                                </div>
                                
                                {/* Professional Glow Effects */}
                                <div className="absolute top-1/4 right-1/4 w-44 h-44 bg-blue-300/6 rounded-full blur-2xl animate-pulse" style={{animationDuration: '9s'}}></div>
                                <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-indigo-300/5 rounded-full blur-2xl animate-pulse" style={{animationDuration: '11s', animationDelay: '5s'}}></div>
                            </div>
                            <div className="max-w-6xl mx-auto relative z-10">
                                <div className="text-center mb-20 scroll-reveal">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Why Choose Us for Enterprise Applications?
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-1 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">End-to-End Application Services:</b> Complete portfolio from strategy to deployment and maintenance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-2 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Legacy Modernization Expertise:</b> Transform monolithic applications into scalable cloud-native microservices.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-3 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Enterprise-Grade Solutions:</b> Scalable, secure, and compliant applications for mission-critical operations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-4 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Integration Excellence:</b> Seamless data flow and system connectivity across multiple environments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-5 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Agile Development:</b> Rapid delivery with continuous integration and deployment practices.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-6 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">24/7 Support & Maintenance:</b> Comprehensive application lifecycle management and support services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
                
                

                {/* ================= MICROSOFT DYNAMICS 365 ================= */}
                {serviceName === "microsoft-dynamics-365" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                                alt="Microsoft Dynamics 365"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>

                        <section className="mt-24 py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop"
                                    className="max-w-sm w-full mx-auto rounded-lg shadow-lg"
                                    alt="CRM"
                                />

                                <p className="text-slate-700 leading-relaxed">
                                    Arvish Consulting's expertise in implementing CRM solutions is achieved through its technically skilled and certified professionals.
                                    As your technology partner, Arvish Consulting delivers Modern Workplace applications utilizing Dynamics CRM that accelerate
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
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
                                    className="max-w-sm w-full mx-auto rounded-lg shadow-lg"
                                    alt="Consulting"
                                />

                                <div className="space-y-6 text-slate-700">
                                    <h2 className="text-3xl font-bold text-blue-900">
                                        Development & Consulting Services
                                    </h2>

                                    <p>
                                        Arvish Consulting Solutions is a specialist technology success partner delivering strategic business outcomes.
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
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop"
                                    className="max-w-sm w-full mx-auto rounded-lg shadow-lg"
                                    alt="Sales"
                                />

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

                {/* ================= INTELLIGENT IT & CLOUD ================= */}
                {serviceName === "intelligent-it-&-cloud" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Intelligent IT & Cloud
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Cloud-first strategies for modern enterprises
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    We design secure, scalable cloud infrastructures
                                    that enable agility, cost optimization, and
                                    business continuity.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
                                alt="Cloud Technology"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>

                        <section className="py-16 px-8 max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
                                    alt="Intelligent Operations"
                                    className="w-full max-w-md rounded-lg shadow-lg"
                                />

                                <div>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        As enterprises continue to look for new ways to enhance their financial performance,
                                        Intelligent Operations is an effective approach to achieve operational excellence.
                                        Intelligent Operations uses digital transformation to minimize equipment downtime,
                                        optimize production, manage operational risks and enhance human performance.
                                    </p>

                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Our Intelligent Operations services include:
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li className="hover:translate-x-2 transition-transform duration-300">24x7 L1–L4 total coverage</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Compliance monitoring</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Patch maintenance & break-fix management</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Upgrade planning & execution</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Change-management tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-50 py-16">
                            <h2 className="text-center text-3xl font-semibold text-blue-900 mb-10">
                                The Competitive Advantage We Offer
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
                                <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow animate-fadeInUp group">
                                    ✔ Significant inventory cost reduction
                                </div>

                                <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow animate-fadeInUp group">
                                    ✔ Increased workforce productivity
                                </div>

                                <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow animate-fadeInUp group">
                                    ✔ Highly scalable fault tolerant systems
                                </div>

                                <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow animate-fadeInUp group">
                                    ✔ Increased availability
                                </div>

                                <div className="bg-white p-5 rounded shadow-md hover-lift hover-glow animate-fadeInUp group col-span-2 text-center">
                                    ✔ Reduces operational costs and drives revenue
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop"
                                    className="w-full max-w-sm rounded-lg shadow-lg"
                                    alt="Cloud Migration"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        Cloud Migration and Strategy
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed">
                                        Our comprehensive cloud migration strategy helps you migrate critical and complex
                                        applications to the cloud while minimizing disruption and operational risks.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto border-t">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop"
                                    className="w-full max-w-sm rounded-lg shadow-lg"
                                    alt="Cloud Automation"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        Cloud Automation and Optimization
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed">
                                        We automate cloud infrastructure to ensure performance, reduce complexity and
                                        optimize costs while enabling scalable and reliable cloud environments.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto border-t">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img
                                    className="w-full max-w-sm rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop"
                                    alt="Cloud Operations"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        Cloud Operations
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed">
                                        Our cloud operation services ensure availability, reliability and ease of use
                                        while helping organizations accelerate towards growth and stability.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto border-t">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img 
                                    className="w-full max-w-sm rounded-lg shadow-lg" 
                                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop"
                                    alt="DevSecOps"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        DevSecOps
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed">
                                        We integrate security into DevOps pipelines ensuring compliance, automation
                                        and end-to-end protection across your cloud and application lifecycle.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto border-t">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img 
                                    className="w-full max-w-md rounded-lg shadow-lg" 
                                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&auto=format&fit=crop"
                                    alt="Managed IT"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        Managed IT Services
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        We help enterprises transform IT operations through automation,
                                        AI-based solutions and infrastructure optimization.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 px-8 max-w-7xl mx-auto border-t">
                            <div className="grid md:grid-cols-2 gap-10 items-start">
                                <img 
                                    className="w-full max-w-md rounded-lg shadow-lg" 
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
                                    alt="IT Support"
                                />

                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                                        IT Support
                                    </h3>

                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li className="hover:translate-x-2 transition-transform duration-300">Server Management</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Remote Installation</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Emergency Support</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">Network Troubleshooting</li>
                                        <li className="hover:translate-x-2 transition-transform duration-300">System Backup & Restore</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= QUALITY ENGINEERING ================= */}
                {serviceName === "quality-engineering" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
                                alt="Quality Engineering"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
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
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    ServiceNow Platform
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Digital workflows that simplify enterprise service management
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We implement ServiceNow solutions to streamline IT service management,
                                    automate workflows, and improve employee experiences across your organization.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">ServiceNow Solutions Available 24/7</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-96 h-96 flex items-center justify-center">
                                    <div className="absolute inset-0 border-2 border-green-200 rounded-full animate-spin" style={{animationDuration: '25s'}}>
                                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute right-0 top-1/2 w-3 h-3 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                        <div className="absolute left-0 top-1/2 w-3 h-3 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute inset-8 border border-blue-200 rounded-full animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}>
                                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                                    </div>
                                    <div className="absolute top-8 left-1/3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                                        <span className="text-2xl">🔧</span>
                                    </div>
                                    <div className="absolute top-12 right-1/4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                        <span className="text-2xl">📋</span>
                                    </div>
                                    <div className="absolute right-8 top-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                        <span className="text-2xl">⚙️</span>
                                    </div>
                                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float z-10">
                                        SN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* ================= DATA ANALYTICS ================= */}
                {serviceName === "data-analytics" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <div className="animate-fadeInLeft space-y-6">
                                <h1 className="text-5xl font-bold text-gradient mb-6 animate-zoomIn">
                                    Data Analytics
                                </h1>
                                <p className="italic text-xl text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Transform Data into Actionable Insights
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg animate-fadeInLeft stagger-2">
                                    We help organizations unlock the power of their data through advanced analytics,
                                    machine learning, and intelligent visualization to drive informed decision-making
                                    and business growth.
                                </p>
                                <div className="flex items-center gap-4 animate-fadeInLeft stagger-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-semibold">Real-time Analytics Available 24/7</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl animate-pulse"></div>
                                    <svg className="relative w-full h-full" width="450" height="350" viewBox="0 0 450 350">
                                        <defs>
                                            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
                                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                                            </linearGradient>
                                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.9"/>
                                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7"/>
                                            </linearGradient>
                                        </defs>
                                        
                                        {/* Data Flow Network */}
                                        <circle cx="225" cy="175" r="60" fill="url(#dataGradient)" className="animate-pulse"/>
                                        <text x="225" y="180" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">DATA HUB</text>
                                        
                                        {/* Animated Data Streams */}
                                        <g className="animate-spin" style={{transformOrigin: '225px 175px', animationDuration: '25s'}}>
                                            <circle cx="225" cy="175" r="100" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.4" strokeDasharray="8,4"/>
                                            <circle cx="325" cy="175" r="15" fill="#10b981" className="animate-bounce"/>
                                            <circle cx="225" cy="75" r="12" fill="#f59e0b" className="animate-pulse"/>
                                            <circle cx="125" cy="175" r="18" fill="#ef4444" className="animate-float"/>
                                            <circle cx="225" cy="275" r="14" fill="#8b5cf6" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
                                        </g>
                                        
                                        {/* Inner Analytics Ring */}
                                        <g className="animate-spin" style={{transformOrigin: '225px 175px', animationDuration: '18s', animationDirection: 'reverse'}}>
                                            <circle cx="225" cy="175" r="140" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" strokeDasharray="12,6"/>
                                            <circle cx="365" cy="175" r="10" fill="#06b6d4" className="animate-pulse"/>
                                            <circle cx="85" cy="175" r="8" fill="#10b981" className="animate-bounce" style={{animationDelay: '1s'}}/>
                                        </g>
                                        
                                        {/* Real-time Chart Bars */}
                                        <g transform="translate(50, 250)">
                                            <rect x="0" y="0" width="12" height="40" fill="url(#chartGradient)" className="animate-pulse">
                                                <animate attributeName="height" values="40;60;35;50;40" dur="3s" repeatCount="indefinite"/>
                                            </rect>
                                            <rect x="20" y="0" width="12" height="55" fill="url(#chartGradient)" className="animate-pulse" style={{animationDelay: '0.3s'}}>
                                                <animate attributeName="height" values="55;35;65;45;55" dur="3s" repeatCount="indefinite"/>
                                            </rect>
                                            <rect x="40" y="0" width="12" height="30" fill="url(#chartGradient)" className="animate-pulse" style={{animationDelay: '0.6s'}}>
                                                <animate attributeName="height" values="30;50;25;45;30" dur="3s" repeatCount="indefinite"/>
                                            </rect>
                                            <rect x="60" y="0" width="12" height="45" fill="url(#chartGradient)" className="animate-pulse" style={{animationDelay: '0.9s'}}>
                                                <animate attributeName="height" values="45;25;55;35;45" dur="3s" repeatCount="indefinite"/>
                                            </rect>
                                        </g>
                                        
                                        {/* Trend Line */}
                                        <path d="M320,280 Q350,250 380,270 Q400,260 420,240" fill="none" stroke="#10b981" strokeWidth="3" className="animate-networkPulse">
                                            <animate attributeName="d" values="M320,280 Q350,250 380,270 Q400,260 420,240;M320,285 Q350,245 380,275 Q400,255 420,235;M320,280 Q350,250 380,270 Q400,260 420,240" dur="4s" repeatCount="indefinite"/>
                                        </path>
                                        
                                        {/* Data Points */}
                                        <circle cx="320" cy="280" r="4" fill="#10b981" className="animate-pulse"/>
                                        <circle cx="380" cy="270" r="4" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                                        <circle cx="420" cy="240" r="4" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                                        
                                        {/* Floating Analytics Icons */}
                                        <g className="animate-float">
                                            <circle cx="80" cy="80" r="20" fill="white" opacity="0.9" className="shadow-lg"/>
                                            <text x="80" y="85" textAnchor="middle" fontSize="16">📊</text>
                                        </g>
                                        <g className="animate-float" style={{animationDelay: '1s'}}>
                                            <circle cx="370" cy="80" r="18" fill="white" opacity="0.9" className="shadow-lg"/>
                                            <text x="370" y="85" textAnchor="middle" fontSize="14">📈</text>
                                        </g>
                                        <g className="animate-float" style={{animationDelay: '2s'}}>
                                            <circle cx="80" cy="280" r="16" fill="white" opacity="0.9" className="shadow-lg"/>
                                            <text x="80" y="285" textAnchor="middle" fontSize="12">🔍</text>
                                        </g>
                                        
                                        <text x="225" y="30" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold" className="animate-pulse">ANALYTICS ENGINE</text>
                                    </svg>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* ================= DATA ANALYTICS CAPABILITIES ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 animate-gradientShift"></div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Our Data Analytics Capabilities
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded animate-shimmer"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded animate-shimmer"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-1 group border border-white/20">
                                        <div className="text-cyan-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">📊</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Business Intelligence & Reporting
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Create interactive dashboards, automated reports, and KPI tracking
                                                systems that provide real-time visibility into business performance
                                                and operational metrics.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-2 group border border-white/20">
                                        <div className="text-blue-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">🤖</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Machine Learning & Predictive Analytics
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Build predictive models for demand forecasting, customer behavior
                                                analysis, risk assessment, and anomaly detection using advanced
                                                ML algorithms.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-3 group border border-white/20">
                                        <div className="text-green-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">🔍</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Data Mining & Pattern Recognition
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Extract valuable insights from large datasets using statistical
                                                analysis, clustering, classification, and association rule mining
                                                techniques.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-4 group border border-white/20">
                                        <div className="text-purple-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">📈</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Real-time Analytics & Streaming Data
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Process and analyze streaming data in real-time for immediate
                                                insights, live monitoring, and instant decision-making capabilities
                                                across your operations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-5 group border border-white/20">
                                        <div className="text-orange-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse">🎯</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Customer Analytics & Segmentation
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Analyze customer behavior, preferences, and lifecycle patterns
                                                to create targeted marketing campaigns and personalized experiences
                                                that drive engagement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 hover-lift bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl animate-fadeInUp stagger-6 group border border-white/20">
                                        <div className="text-red-600 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float">⚡</div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                                Big Data Processing & Cloud Analytics
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                                                Handle massive datasets using distributed computing frameworks
                                                and cloud-native analytics platforms for scalable, high-performance
                                                data processing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= ANALYTICS TECHNOLOGY STACK ================= */}
                        <section className="mt-32 py-24 px-8 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-300 rounded-full opacity-20 animate-float"></div>
                                <div className="absolute top-20 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
                                <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
                            </div>
                            <div className="max-w-7xl mx-auto relative z-10">
                                <div className="text-center mb-20 animate-fadeInUp">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Analytics Technology Stack
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-orange-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-20 items-start">
                                    <div className="text-slate-700 leading-relaxed space-y-8 animate-fadeInLeft">
                                        <p className="text-lg hover:text-slate-900 transition-colors duration-300 animate-slideInFromBottom stagger-1">
                                            Our comprehensive analytics technology stack combines industry-leading
                                            tools and platforms to deliver <b className="text-gradient hover:scale-105 transition-transform duration-200">scalable, high-performance analytics solutions</b>
                                            that drive business value.
                                        </p>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-2">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                                                Data Processing & Storage
                                            </h3>
                                            <ul className="list-disc pl-6 space-y-3">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-3">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Apache Spark</b> and <b className="text-gradient hover:scale-105 transition-transform duration-200">Hadoop</b> for distributed big data processing
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-4">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">AWS S3, Redshift, Snowflake</b> for cloud data warehousing
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-5">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Apache Kafka</b> for real-time data streaming
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-3">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                                Analytics & ML Platforms
                                            </h3>
                                            <ul className="list-disc pl-6 space-y-3">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-6">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Python, R, Scala</b> for statistical analysis and modeling
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-7">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">TensorFlow, PyTorch, Scikit-learn</b> for machine learning
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-8">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Jupyter, Databricks</b> for collaborative analytics
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift animate-slideInFromBottom stagger-4">
                                            <h3 className="text-xl font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 flex items-center gap-3">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                                Visualization & BI Tools
                                            </h3>
                                            <ul className="list-disc pl-6 space-y-3">
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-1">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Tableau, Power BI, Looker</b> for interactive dashboards
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-2">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">D3.js, Plotly</b> for custom visualizations
                                                </li>
                                                <li className="hover:translate-x-2 transition-transform duration-300 animate-fadeInUp stagger-3">
                                                    <b className="text-gradient hover:scale-105 transition-transform duration-200">Grafana, Kibana</b> for real-time monitoring
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex justify-center animate-fadeInRight relative">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-cyan-600/20 rounded-2xl blur-lg animate-pulse"></div>
                                            <svg className="relative w-full h-full" width="350" height="280" viewBox="0 0 350 280">
                                                <defs>
                                                    <linearGradient id="stackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                                                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
                                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                                                    </linearGradient>
                                                </defs>
                                                
                                                {/* Tech Stack Layers */}
                                                <rect x="50" y="200" width="250" height="40" rx="8" fill="url(#stackGradient)" className="animate-pulse"/>
                                                <text x="175" y="225" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DATA STORAGE</text>
                                                
                                                <rect x="70" y="150" width="210" height="35" rx="8" fill="url(#stackGradient)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                                                <text x="175" y="172" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PROCESSING</text>
                                                
                                                <rect x="90" y="105" width="170" height="30" rx="8" fill="url(#stackGradient)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                                                <text x="175" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ANALYTICS</text>
                                                
                                                <rect x="110" y="65" width="130" height="25" rx="8" fill="url(#stackGradient)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                                                <text x="175" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">VISUALIZATION</text>
                                                
                                                {/* Data Flow Arrows */}
                                                <path d="M30,220 Q20,180 30,140 Q40,100 50,80" fill="none" stroke="#10b981" strokeWidth="3" className="animate-networkPulse"/>
                                                <path d="M320,220 Q330,180 320,140 Q310,100 300,80" fill="none" stroke="#f59e0b" strokeWidth="3" className="animate-networkPulse" style={{animationDelay: '1s'}}/>
                                                
                                                {/* Floating Data Points */}
                                                <circle cx="30" cy="220" r="6" fill="#10b981" className="animate-bounce"/>
                                                <circle cx="320" cy="220" r="6" fill="#f59e0b" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
                                                <circle cx="50" cy="80" r="5" fill="#ef4444" className="animate-pulse"/>
                                                <circle cx="300" cy="80" r="5" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
                                                
                                                <text x="175" y="30" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">ANALYTICS STACK</text>
                                            </svg>
                                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-spin opacity-20"></div>
                                            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce opacity-30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ================= WHY CHOOSE US FOR DATA ANALYTICS ================= */}
                        <section className="mt-32 bg-gradient-to-br from-slate-100 via-cyan-100 to-blue-100 py-24 px-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-gradientShift"></div>
                                <div className="absolute top-16 right-16 w-32 h-32 bg-cyan-400 rounded-full opacity-10 animate-float"></div>
                                <div className="absolute bottom-16 left-16 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
                            </div>
                            <div className="max-w-6xl mx-auto relative z-10">
                                <div className="text-center mb-20 scroll-reveal">
                                    <h2 className="text-4xl font-bold text-gradient mb-6 animate-zoomIn">
                                        Why Choose Us for Data Analytics?
                                    </h2>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded animate-shimmer"></span>
                                        <span className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></span>
                                        <span className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded animate-shimmer"></span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-1 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">End-to-End Analytics Solutions:</b> From data collection to actionable insights and automated reporting.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-2 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Industry Expertise:</b> Deep domain knowledge across finance, healthcare, retail, and manufacturing sectors.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-3 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Scalable Cloud Architecture:</b> Built for enterprise-scale with high availability and performance optimization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-lift hover-glow scroll-reveal stagger-4 group border border-white/30">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-xl">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-lg group-hover:text-slate-900 transition-colors duration-300">
                                                <b className="text-gradient hover:scale-105 transition-transform duration-200">Real-time Processing:</b> Live data streaming and instant analytics for time-sensitive business decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* ================= SERVICENOW PLATFORM ================= */}
                {serviceName === "servicenow" && (
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
                            <div className="relative w-full max-w-md mx-auto">
                                <svg width="400" height="300" viewBox="0 0 400 300" className="animate-fadeInRight">
                                    <defs>
                                        <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                                        </linearGradient>
                                    </defs>
                                    
                                    {/* Orbit System */}
                                    <g className="animate-spin" style={{transformOrigin: '200px 150px', animationDuration: '20s'}}>
                                        <circle cx="200" cy="150" r="80" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" strokeDasharray="5,5"/>
                                        <circle cx="280" cy="150" r="12" fill="url(#serviceGrad)" className="animate-pulse"/>
                                    </g>
                                    
                                    <g className="animate-spin" style={{transformOrigin: '200px 150px', animationDuration: '15s', animationDirection: 'reverse'}}>
                                        <circle cx="200" cy="150" r="120" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.3" strokeDasharray="10,5"/>
                                        <circle cx="320" cy="150" r="8" fill="#10b981" className="animate-bounce"/>
                                    </g>
                                    
                                    {/* Central Hub */}
                                    <circle cx="200" cy="150" r="40" fill="url(#serviceGrad)" className="animate-pulse"/>
                                    <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SERVICE</text>
                                    
                                    {/* Workflow Nodes */}
                                    <circle cx="120" cy="80" r="15" fill="#f59e0b" className="animate-float"/>
                                    <circle cx="280" cy="80" r="15" fill="#ef4444" className="animate-float" style={{animationDelay: '0.5s'}}/>
                                    <circle cx="120" cy="220" r="15" fill="#06b6d4" className="animate-float" style={{animationDelay: '1s'}}/>
                                    <circle cx="280" cy="220" r="15" fill="#10b981" className="animate-float" style={{animationDelay: '1.5s'}}/>
                                </svg>
                            </div>
                        </div>
                        {/* ================= SERVICENOW PLATFORM ================= */}

<section className="py-16 px-8 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    <div className="relative w-full max-w-md">
      <svg width="300" height="200" viewBox="0 0 300 200">
        <defs>
          <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* Platform Layers */}
        <rect x="50" y="50" width="200" height="100" rx="15" fill="url(#platformGrad)" className="animate-pulse"/>
        <rect x="70" y="70" width="50" height="20" rx="5" fill="white" opacity="0.9" className="animate-float"/>
        <rect x="140" y="70" width="50" height="20" rx="5" fill="white" opacity="0.7" className="animate-float" style={{animationDelay: '0.3s'}}/>
        <rect x="210" y="70" width="30" height="20" rx="5" fill="white" opacity="0.8" className="animate-float" style={{animationDelay: '0.6s'}}/>
        
        {/* Data Flow */}
        <circle cx="30" cy="100" r="8" fill="#10b981" className="animate-dataFlow"/>
        <circle cx="270" cy="100" r="8" fill="#f59e0b" className="animate-dataFlow" style={{animationDelay: '1s'}}/>
        
        <text x="150" y="30" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">PLATFORM</text>
      </svg>
    </div>

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
    <div className="relative w-full max-w-sm">
      <svg width="250" height="180" viewBox="0 0 250 180">
        <defs>
          <linearGradient id="itsmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* ITSM Workflow */}
        <rect x="50" y="40" width="150" height="100" rx="10" fill="url(#itsmGrad)" className="animate-pulse"/>
        
        {/* Incident Tickets */}
        <rect x="70" y="60" width="30" height="15" rx="3" fill="white" opacity="0.9" className="animate-slideAcross"/>
        <rect x="110" y="60" width="30" height="15" rx="3" fill="white" opacity="0.7" className="animate-slideAcross" style={{animationDelay: '0.5s'}}/>
        <rect x="150" y="60" width="30" height="15" rx="3" fill="white" opacity="0.8" className="animate-slideAcross" style={{animationDelay: '1s'}}/>
        
        {/* Process Flow */}
        <circle cx="125" cy="110" r="20" fill="none" stroke="white" strokeWidth="2" className="animate-spin" style={{animationDuration: '8s'}}/>
        <circle cx="125" cy="110" r="5" fill="white" className="animate-pulse"/>
        
        <text x="125" y="20" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">ITSM</text>
      </svg>
    </div>

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
    <div className="relative w-full max-w-sm">
      <svg width="250" height="180" viewBox="0 0 250 180">
        <defs>
          <linearGradient id="itomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* Operations Dashboard */}
        <rect x="30" y="30" width="190" height="120" rx="15" fill="url(#itomGrad)" className="animate-pulse"/>
        
        {/* Real-time Graphs */}
        <rect x="50" y="60" width="8" height="30" fill="white" opacity="0.9" className="animate-pulse"/>
        <rect x="65" y="50" width="8" height="40" fill="white" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
        <rect x="80" y="45" width="8" height="45" fill="white" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
        <rect x="95" y="55" width="8" height="35" fill="white" opacity="0.9" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
        
        {/* Monitoring Indicators */}
        <circle cx="150" cy="70" r="8" fill="#10b981" className="animate-bounce"/>
        <circle cx="170" cy="70" r="8" fill="#f59e0b" className="animate-bounce" style={{animationDelay: '0.3s'}}/>
        <circle cx="190" cy="70" r="8" fill="#ef4444" className="animate-bounce" style={{animationDelay: '0.6s'}}/>
        
        {/* Network Lines */}
        <path d="M50,110 Q125,90 200,110" fill="none" stroke="white" strokeWidth="2" opacity="0.6" className="animate-networkPulse"/>
        
        <text x="125" y="20" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">ITOM</text>
      </svg>
    </div>

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
    <div className="relative w-full max-w-sm">
      <svg width="250" height="180" viewBox="0 0 250 180">
        <defs>
          <linearGradient id="hrsdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* HR Portal */}
        <rect x="40" y="40" width="170" height="100" rx="12" fill="url(#hrsdGrad)" className="animate-pulse"/>
        
        {/* Employee Icons */}
        <circle cx="80" cy="80" r="12" fill="white" opacity="0.9" className="animate-float"/>
        <circle cx="125" cy="80" r="12" fill="white" opacity="0.7" className="animate-float" style={{animationDelay: '0.4s'}}/>
        <circle cx="170" cy="80" r="12" fill="white" opacity="0.8" className="animate-float" style={{animationDelay: '0.8s'}}/>
        
        {/* Connection Lines */}
        <line x1="92" y1="80" x2="113" y2="80" stroke="white" strokeWidth="2" opacity="0.6" className="animate-pulse"/>
        <line x1="137" y1="80" x2="158" y2="80" stroke="white" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
        
        {/* Workflow Arrows */}
        <path d="M80,100 Q125,120 170,100" fill="none" stroke="white" strokeWidth="2" opacity="0.7" className="animate-networkPulse"/>
        
        <text x="125" y="25" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">HRSD</text>
      </svg>
    </div>

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
    <div className="relative w-full max-w-md">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <defs>
          <linearGradient id="csmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* Customer Hub */}
        <circle cx="140" cy="100" r="50" fill="url(#csmGrad)" className="animate-pulse"/>
        <text x="140" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CUSTOMER</text>
        
        {/* Orbiting Channels */}
        <g className="animate-spin" style={{transformOrigin: '140px 100px', animationDuration: '12s'}}>
          <circle cx="140" cy="100" r="70" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3" strokeDasharray="3,3"/>
          <circle cx="210" cy="100" r="8" fill="#10b981" className="animate-bounce"/>
        </g>
        
        <g className="animate-spin" style={{transformOrigin: '140px 100px', animationDuration: '8s', animationDirection: 'reverse'}}>
          <circle cx="140" cy="100" r="90" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" strokeDasharray="5,5"/>
          <circle cx="230" cy="100" r="6" fill="#f59e0b" className="animate-pulse"/>
        </g>
        
        {/* Service Points */}
        <circle cx="70" cy="60" r="10" fill="#ef4444" className="animate-float"/>
        <circle cx="210" cy="60" r="10" fill="#8b5cf6" className="animate-float" style={{animationDelay: '0.5s'}}/>
        <circle cx="70" cy="140" r="10" fill="#10b981" className="animate-float" style={{animationDelay: '1s'}}/>
        <circle cx="210" cy="140" r="10" fill="#f59e0b" className="animate-float" style={{animationDelay: '1.5s'}}/>
        
        <text x="140" y="20" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">CSM</text>
      </svg>
    </div>

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
            
            {/* Parallax Background Elements */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                    opacity: Math.max(0.1, 1 - scrollY / 1000)
                }}
            >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full animate-morphing"></div>
                <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full animate-morphing" style={{animationDelay: '2s'}}></div>
                
                {/* Moving Chart Patterns */}
                <div className="absolute top-1/3 right-1/3 opacity-10" style={{transform: `translateX(${scrollY * 0.05}px)`}}>
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        <rect x="10" y="80" width="15" height="30" fill="#3b82f6" className="animate-pulse"/>
                        <rect x="35" y="60" width="15" height="50" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <rect x="60" y="40" width="15" height="70" fill="#10b981" className="animate-pulse" style={{animationDelay: '1s'}}/>
                        <rect x="85" y="70" width="15" height="40" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                    </svg>
                </div>
                
                {/* Floating Code Blocks */}
                <div className="absolute bottom-1/4 left-1/5 opacity-8" style={{transform: `translateY(${scrollY * -0.03}px)`}}>
                    <div className="bg-gray-800/20 p-4 rounded font-mono text-xs text-gray-600">
                        <div className="animate-pulse">const ai = new AI();</div>
                        <div className="animate-pulse" style={{animationDelay: '1s'}}>ai.process(data);</div>
                    </div>
                </div>
            </div>
        </section>
    )
}/*  */