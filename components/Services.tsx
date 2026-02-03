"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, Zap, Database, Smartphone, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with Next.js 15+ and high-performance TypeScript architectures.",
    features: ["Next.js App Router", "Server Components", "Type-Safe APIs"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing Core Web Vitals to achieve 100 scores and maximum user retention.",
    features: ["Edge Rendering", "Dynamic Caching", "Asset Optimization"],
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 3,
    icon: Database,
    title: "Backend Systems",
    description:
      "Scalable infrastructure using distributed databases and event-driven microservices.",
    features: ["PostgreSQL", "Redis Caching", "Real-time Sync"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Native-feel experiences across platforms using React Native and modern PWA standards.",
    features: ["Native Performance", "Offline First", "Shared Logic"],
    color: "from-emerald-500 to-teal-400",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Services = () => {
  return (
    <section className='relative py-32 px-6 bg-white overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60' />
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
          <div className='max-w-2xl'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6'
            >
              <div className='w-2 h-2 rounded-full bg-blue-600 animate-pulse' />
              <span className='text-[10px] font-bold uppercase tracking-widest text-slate-600'>
                The Lebnexis Engine
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='text-5xl md:text-7xl font-bold tracking-tighter text-slate-950'
            >
              Building the <span className='text-slate-400'>Future</span> of Web
              Apps.
            </motion.h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
        >
          {services.map(service => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className='group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]'
              >
                <div
                  className={`mb-8 w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} p-0.5`}
                >
                  <div className='w-full h-full bg-white rounded-[15px] flex items-center justify-center'>
                    <Icon className='w-6 h-6 text-slate-900 group-hover:scale-110 transition-transform duration-500' />
                  </div>
                </div>

                <h3 className='text-xl font-bold text-slate-900 mb-3'>
                  {service.title}
                </h3>
                <p className='text-slate-500 text-sm leading-relaxed mb-8'>
                  {service.description}
                </p>

                <ul className='space-y-3 mb-8'>
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center text-xs font-medium text-slate-700'
                    >
                      <div className='w-1.5 h-1.5 rounded-full bg-slate-300 mr-2' />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href='/services'
                  className='flex items-center text-sm font-bold text-slate-950 mt-auto group'
                >
                  <span>View Details</span>
                  <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
