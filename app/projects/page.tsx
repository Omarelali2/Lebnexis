"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowUpRight,
  TrendingUp,
  Activity,
  Layers,
  Globe,
  ExternalLink,
  Zap,
  BarChart3,
  Github,
} from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    title: "LebSpace",
    description:
      "Social media platform for space enthusiasts. We built a scalable backend infrastructure and an intuitive UI/UX that increased user engagement significantly.",
    metrics: [
      { label: "User Growth", val: "300%", icon: <TrendingUp size={14} /> },
      { label: "Churn", val: "-54%", icon: <Activity size={14} /> },
    ],
    industry: "Social Media",
    year: "2025",
    color: "from-blue-600/20 to-indigo-600/20",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://lebspace.vercel.app/",
    sourceCode: "https://github.com/AZZAM-K/LebSpace",
  },
  {
    title: "Apple Commerce Clone",
    description:
      "E-commerce platform for a leading retail brand. We developed a high-performance shopping cart system and integrated advanced analytics to optimize sales funnels.",
    metrics: [
      { label: "Conversion", val: "+32%", icon: <BarChart3 size={14} /> },
      { label: "Performance", val: "98/100", icon: <Zap size={14} /> },
    ],
    industry: "E-commerce",
    year: "2024",
    color: "from-emerald-600/20 to-teal-600/20",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://apple-store-azzam-k.vercel.app/",
    sourceCode: "https://github.com/AZZAM-K/Apple-Store-Frontend",
  },

  {
    title: "Samsung Commerce Clone",
    description:
      "E-commerce platform for a leading retail brand. We developed a high-performance shopping cart system and integrated advanced analytics to optimize sales funnels.",
    metrics: [
      { label: "Conversion", val: "+32%", icon: <BarChart3 size={14} /> },
      { label: "Performance", val: "98/100", icon: <Zap size={14} /> },
    ],
    industry: "E-commerce",
    year: "2024",
    color: "from-emerald-600/20 to-teal-600/20",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://sumsung-store-frontend-i3ov.vercel.app/",
    sourceCode: "https://github.com/Omarelali2/sumsung-store-frontend",
  },
  {
    title: "CodeLeb",
    description:
      "Online coding education platform. We created an interactive learning environment with real-time code execution and personalized learning paths, boosting student retention.",
    metrics: [
      { label: "Latency", val: "<200ms", icon: <Layers size={14} /> },
      { label: "NPS", val: "71", icon: <Globe size={14} /> },
    ],
    industry: "Education",
    year: "2025",
    color: "from-rose-600/20 to-orange-600/20",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://codeleb.vercel.app/",
    sourceCode: "https://github.com/AZZAM-K/codeleb",
  },
  {
    title: "GymForge Platform",
    description:
      "Hybrid workout and wellness platform with adaptive training plans, integrated wearables, and community challenges that drive consistent engagement across cohorts.",
    metrics: [
      { label: "Session Completion", val: "92%", icon: <Activity size={14} /> },
      { label: "Retention", val: "+48%", icon: <TrendingUp size={14} /> },
    ],
    industry: "Health & Fitness",
    year: "2026",
    color: "from-purple-600/20 to-pink-600/20",
    img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://gymleb.vercel.app/",
    sourceCode: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    title: "Shopping Platform",
    description:
      "A frontend e-commerce platform with seamless user experience, real-time inventory updates, and secure payment processing, resulting in increased sales and customer satisfaction.",
    metrics: [
      { label: "AOV", val: "+27%", icon: <BarChart3 size={14} /> },
      { label: "Load Time", val: "1.2s", icon: <Zap size={14} /> },
    ],
    industry: "E-commerce",
    year: "2024",
    color: "from-amber-500/20 to-orange-500/20",
    img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://buy-products-six.vercel.app/",
    sourceCode: "https://github.com/Omarelali2/Buy_products",
  },
  {
    title: "Project Manage Pro",
    description:
      "Advanced project management tool with predictive analytics, resource optimization, and seamless collaboration features to enhance team productivity.",
    metrics: [
      { label: "Cycle Time", val: "-35%", icon: <Layers size={14} /> },
      { label: "Forecast Accuracy", val: "+18%", icon: <Globe size={14} /> },
    ],
    industry: "Productivity",
    year: "2025",
    color: "from-slate-600/20 to-zinc-600/20",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://teams-dev-lb.vercel.app/",
    sourceCode: "https://github.com/AZZAM-K/teams-dev",
  },
  {
    title: "AtlasCountry Search",
    description:
      "Global country intelligence explorer featuring instant lookup, macro indicators, and geospatial context to power research teams.",
    metrics: [
      { label: "Query Speed", val: "<120ms", icon: <Zap size={14} /> },
      { label: "Data Coverage", val: "195 Nations", icon: <Globe size={14} /> },
    ],
    industry: "Data Services",
    year: "2026",
    color: "from-cyan-500/20 to-blue-500/20",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=800",
    liveDemo: "https://demo.lebnexis.com/atlascountry",
    sourceCode: "https://github.com/lebnexis/atlascountry-search",
  },
]

const ProjectsPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white text-slate-900 selection:bg-indigo-100'>
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px]' />
        <div className='absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-sky-200/40 rounded-full blur-[100px]' />
      </div>

      <main className='relative z-10 mx-auto max-w-7xl px-6 py-32'>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-32 space-y-8'
        >
          <div className='flex items-center gap-4'>
            <span className='h-2 w-12 bg-indigo-500/40' />
            <span className='text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600'>
              Selected Works
            </span>
          </div>
          <h1 className='text-6xl md:text-8xl font-black tracking-tighter leading-none'>
            Ideas turned <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-500'>
              into industry.
            </span>
          </h1>
          <p className='max-w-xl text-lg text-slate-600 font-medium leading-relaxed'>
            We partner with ambitious teams to ship products that don't just
            work—they dominate. From deep-tech infrastructure to consumer
            luxury.
          </p>
        </motion.section>

        <section className='space-y-40'>
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative grid gap-12 lg:grid-cols-2 items-center`}
            >
              <div
                className={`relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 aspect-[4/3] ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${study.color} opacity-50 z-10 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <Image
                  width={200}
                  height={200}
                  src={study.img}
                  alt={study.title}
                  className='h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100'
                />
                <div className='absolute top-6 right-6 z-20'>
                  <div className='p-4 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>

              <div className='space-y-8'>
                <div className='flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-indigo-600'>
                  <span>{study.industry}</span>
                  <span className='h-1 w-1 rounded-full bg-slate-700' />
                  <span>{study.year}</span>
                </div>

                <h2 className='text-4xl md:text-5xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-500'>
                  {study.title}
                </h2>

                <p className='text-lg text-slate-600 leading-relaxed'>
                  {study.description}
                </p>

                <div className='grid grid-cols-2 gap-4'>
                  {study.metrics.map(metric => (
                    <div
                      key={metric.label}
                      className='p-6 rounded-3xl bg-slate-50 border border-slate-200'
                    >
                      <div className='flex items-center gap-2 text-indigo-600 mb-1'>
                        {metric.icon}
                        <span className='text-[10px] font-black uppercase tracking-widest'>
                          {metric.label}
                        </span>
                      </div>
                      <div className='text-2xl font-black text-slate-900'>
                        {metric.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest'>
                  <Link
                    href={study.liveDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 rounded-2xl border border-slate-300 px-6 py-3 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors'
                    aria-label={`Open live demo for ${study.title}`}
                    prefetch={false}
                  >
                    Live Demo <ArrowUpRight size={18} />
                  </Link>
                  <Link
                    href={study.sourceCode}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 rounded-2xl border border-slate-300 px-6 py-3 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors'
                    aria-label={`View source code for ${study.title}`}
                    prefetch={false}
                  >
                    Source Code <Github size={18} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mt-60 relative overflow-hidden rounded-[4rem] bg-linear-to-b from-indigo-100 to-indigo-300 p-16 md:p-24 text-center'
        >
          <div className='relative z-10'>
            <h2 className='text-4xl md:text-6xl font-black tracking-tighter mb-8 text-slate-900'>
              Want to see your logo here?
            </h2>
            <p className='mx-auto max-w-2xl text-indigo-900/70 text-lg mb-12'>
              We are currently accepting new partnerships for Q3 2026. Let's
              discuss your roadmap and see if we're a fit.
            </p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
              <Link
                href='/contact'
                className='px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl'
              >
                Start a conversation
              </Link>
              <span className='text-xs font-bold text-indigo-800 uppercase tracking-widest'>
                Average Kickoff: 10 Days
              </span>
            </div>
          </div>
          <div
            className='absolute inset-0 opacity-20 pointer-events-none'
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(79,70,229,0.6) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </motion.section>
      </main>
    </div>
  )
}

export default ProjectsPage
