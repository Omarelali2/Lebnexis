"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  TrendingUp,
  Activity,
  Layers,
  Globe,
  ExternalLink,
  Zap,
  BarChart3,
} from "lucide-react"

const caseStudies = [
  {
    title: "NebulaOS Platform",
    description:
      "Full-scale launch for a cloud productivity suite. We engineered the brand identity, a high-performance marketing engine, and an interactive onboarding flow.",
    metrics: [
      { label: "User Growth", val: "300%", icon: <TrendingUp size={14} /> },
      { label: "Churn", val: "-54%", icon: <Activity size={14} /> },
    ],
    industry: "SaaS",
    year: "2025",
    color: "from-blue-600/20 to-indigo-600/20",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Atlas Commerce",
    description:
      "Architecture and design of a global headless commerce engine. Focused on modular component libraries and sub-2s page load times for international markets.",
    metrics: [
      { label: "Conversion", val: "+32%", icon: <BarChart3 size={14} /> },
      { label: "Performance", val: "98/100", icon: <Zap size={14} /> },
    ],
    industry: "Retail",
    year: "2024",
    color: "from-emerald-600/20 to-teal-600/20",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "PulseHealth EMR",
    description:
      "A HIPAA-compliant clinical ecosystem. We delivered a real-time telehealth scheduling engine and a complex data visualization dashboard for surgical teams.",
    metrics: [
      { label: "Latency", val: "<200ms", icon: <Layers size={14} /> },
      { label: "NPS", val: "71", icon: <Globe size={14} /> },
    ],
    industry: "Healthcare",
    year: "2024",
    color: "from-rose-600/20 to-orange-600/20",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
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
                <img
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

                <button className='flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-700 group-hover:text-indigo-600 transition-colors'>
                  View Full Case Study <ArrowUpRight size={18} />
                </button>
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
              <a
                href='/contact'
                className='px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl'
              >
                Start a conversation
              </a>
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
