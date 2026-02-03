"use client"

import React from "react"
import { Sparkles, Brain, Zap, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
}

const features: Feature[] = [
  {
    title: "Visual Harmony",
    description:
      "Every pixel is placed with intent, ensuring a balanced and modern aesthetic that resonates with your brand's core identity.",
    icon: <Sparkles className='w-6 h-6 text-blue-400' />,
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Intuitive UX",
    description:
      "We design interfaces that feel natural, reducing friction and maximizing user delight through cognitive-first design principles.",
    icon: <Brain className='w-6 h-6 text-purple-400' />,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Performance Art",
    description:
      "Lightweight code meets heavyweight design—achieving lightning-fast load times without compromising on visual grandiosity.",
    icon: <Zap className='w-6 h-6 text-amber-400' />,
    gradient: "from-amber-500/20 to-transparent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const AboutLebnexis: React.FC = () => {
  return (
    <section className='relative min-h-screen bg-[#020617] text-slate-50 py-24 px-6 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <div className='inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/5 backdrop-blur-xl'>
            <span className='text-blue-400 font-mono text-xs uppercase tracking-[0.4em]'>
              The Lebnexis Standard
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none italic'
          >
            Crafting Digital <br />
            <span className='text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-600'>
              Elegance.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light'
          >
            Lebnexis isn't just a development partner; we are{" "}
            <span className='text-white font-medium italic'>
              architects of the digital avant-garde
            </span>
            , turning complex logic into breathtaking user experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-24'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className='relative p-1 group overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500'
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className='relative p-8 h-full flex flex-col z-10'>
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className='w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 transition-transform duration-500'
                >
                  {feature.icon}
                </motion.div>
                <h3 className='text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors'>
                  {feature.title}
                </h3>
                <p className='text-slate-400 leading-relaxed font-light text-sm'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='relative group'
        >
          <div className='absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>

          <div className='relative p-10 md:p-16 rounded-2xl overflow-hidden bg-slate-950 border border-white/10'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-12'>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className='shrink-0'
              >
                <div className='w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40'>
                  <Quote className='text-white w-10 h-10' />
                </div>
              </motion.div>

              <div className='flex-1'>
                <h3 className='text-blue-500 font-mono text-sm uppercase tracking-widest mb-4'>
                  The Lebnexis Manifesto
                </h3>
                <blockquote className='text-2xl md:text-4xl font-medium text-slate-100 leading-tight tracking-tight'>
                  "Design is not just what it looks like and feels like. Design
                  is <span className='italic text-blue-400'>how it works</span>.
                  At Lebnexis, we ensure it works perfectly."
                </blockquote>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className='mt-10 flex items-center gap-4 text-slate-500'
                >
                  <div className='h-px w-12 bg-slate-800'></div>
                  <span className='text-sm font-semibold tracking-tighter uppercase text-slate-400 whitespace-nowrap'>
                    The Lebnexis Creative Lab
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutLebnexis
