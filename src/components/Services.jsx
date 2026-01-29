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
    <section className="py-24 bg-slate-50">
      {/* ===== Explore Our Services Header ===== */}
<div className="text-center max-w-4xl mx-auto mb-20">
  <h2 className="text-4xl font-bold text-blue-900 mb-4">
    Explore Our Services
  </h2>

  {/* Decorative line */}
<div className="flex items-center justify-center gap-3 mb-6 relative">
  <span className="w-20 h-1 bg-green-200 rounded"></span>

  <span className="w-3 h-3 bg-red-600 rounded-full animate-moving-dot"></span>

  <span className="w-20 h-1 bg-green-200 rounded"></span>
</div>


  {/* Description */}
  <p className="text-slate-700 leading-relaxed mb-10">
    We provide awesome services for business growth to our clients.
    A keen focus on the realm of IT services, enriched with swift
    competency building has allowed Fint to deliver large-scale
    projects across diverse geographies and business verticals.
  </p>

  {/* Certifications */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
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


      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative bg-white px-8 pt-10 pb-14 shadow-md hover:shadow-xl transition-all duration-300"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 92%, 0% 100%)",
            }}
          >
            {/* Icon */}
            <img
              src={s.icon}
              alt={s.title}
              className="w-16 h-16 mb-6"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {s.desc}
            </p>

            {/* Learn More */}
          <Link
  to={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
  className="inline-flex items-center gap-2 font-medium text-red-600 hover:gap-3 transition-all"
>
  Learn More <span className="text-lg">→</span>
</Link>


            {/* subtle network background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}