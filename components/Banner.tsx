"use client"

import React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"

const Banner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className='relative w-full pt-20 min-h-screen flex items-center justify-center bg-white text-black overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px", // حجم المربع
          }}
        />
        <div
          className='absolute inset-0'
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, white 80%)",
          }}
        />
      </div>

      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] pointer-events-none'
      />

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 max-w-5xl px-6 text-center'
      >
        <motion.div variants={itemVariants}>
          <h1 className='text-4xl md:text-6xl font-black leading-tight tracking-tight'>
            Building Digital Solutions <br />
            <span className='text-indigo-600'>That Empower Growth</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'
        >
          Lebnexis is a web development team delivering high-quality solutions
          while empowering students and graduates through real-world internship
          programs.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className='group relative h-16 inline-flex items-center px-10 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden shadow-xl'
          >
            <Link href='/contact'>
              <span className='relative z-10 flex items-center gap-2'>
                Start a Project
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </span>
            </Link>
            <div className='absolute inset-0 bg-linear-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#4f46e5",
              backgroundColor: "#f8fafc",
            }}
            whileTap={{ scale: 0.98 }}
            className='flex h-16 items-center justify-center gap-2 px-10 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 transition-all shadow-sm'
          >
            <GraduationCap className='w-6 h-6 text-indigo-600' />
            <Link href='/internship'>Join Internship</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Banner
