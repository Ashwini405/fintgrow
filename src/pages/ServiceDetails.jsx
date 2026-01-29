import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"

export default function ServiceDetails() {
    const { serviceName } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [serviceName])

    return (
        <section className="min-h-screen bg-white px-6 py-24">
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
                `}</style>

                {/* ================= ARTIFICIAL INTELLIGENCE ================= */}
                {serviceName === "artificial-intelligence" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div className="animate-fadeInLeft">
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300">
                                    Artificial Intelligence
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300 animate-fadeInLeft stagger-1">
                                    Innovation with Cutting-Edge AI & Robust Tech
                                </p>
                                <p className="text-slate-700 leading-relaxed animate-fadeInLeft stagger-2">
                                    We help enterprises harness AI to automate processes,
                                    improve decision-making, and unlock new business value
                                    using generative AI, predictive analytics, and automation.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                                alt="AI Technology"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg animate-fadeInRight hover-scale hover-glow"
                            />
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
                                        <img
                                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop"
                                            alt="AI Technology Stack"
                                            className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow animate-float"
                                        />
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
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Digital Experience
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    We create lasting digital experiences
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our digital experience solutions enable organizations
                                    to deliver seamless, personalized, and engaging
                                    customer journeys across platforms and devices.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                                alt="Digital Experience"
                                className="w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
                                    alt="Digital Transformation"
                                    className="w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                                />

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

                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop"
                                    alt="Customer Experience"
                                    className="w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                                />
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

                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
                                    alt="Employee Experience"
                                    className="w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                                />
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

                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
                                    alt="Partner Experience"
                                    className="w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                                />
                            </div>
                        </section>
                    </>
                )}

                {/* ================= DATA ANALYTICS ================= */}
                {serviceName === "data-analytics" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h1 className="text-4xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInLeft">
                                    Data Analytics
                                </h1>
                                <p className="italic text-lg text-slate-600 mb-6 hover:text-slate-800 transition-colors duration-300">
                                    Turning data into actionable insights
                                </p>
                                <p className="text-slate-700 leading-relaxed">
                                    Our analytics solutions empower enterprises with
                                    real-time dashboards, predictive insights, and
                                    data-driven strategies for smarter decisions.
                                </p>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
                                alt="Data Analytics"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>

                        <section className="py-20 px-6 bg-white">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop"
                                        alt="Data Intelligence"
                                        className="max-w-md w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
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
                                        advantage and meaningful business impact.
                                    </p>
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
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
                                        alt="Business Intelligence"
                                        className="max-w-sm w-full rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInLeft"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-700 transition-colors duration-300 animate-fadeInUp">
                                        Business Intelligence Implementation and Operation
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        We leverage modern software and services to transform data into actionable
                                        intelligence that informs your organization's strategic and tactical
                                        business decisions, enabling you to collect, analyze and present
                                        meaningful insights.
                                    </p>
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
                {serviceName === "enterprise-application" && (
                    <>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
                                alt="Enterprise Applications"
                                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover-scale hover-glow transition-all duration-300 animate-fadeInRight"
                            />
                        </div>
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
                {serviceName === "cloud-operations" && (
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
                <div className="mt-20 animate-fadeInUp">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 hover:gap-3 transition-all duration-300 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                        <span>Back to Services</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}