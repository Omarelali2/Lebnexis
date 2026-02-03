"use client"

import React from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const CallToAction = () => {
  return (
    <section className='relative py-24 md:py-22 bg-white overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className='absolute inset-0 bg-linear-to-b from-white via-transparent to-white' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative group'
        >
          <div className='relative bg-slate-50/50 border border-slate-100 rounded-[3rem] p-10 md:p-24 overflow-hidden'>
            <div className='absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700' />

            <div className='relative z-10 flex flex-col items-center text-center'>
              <div className='mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                </span>
                <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500'>
                  Accepting New Projects
                </span>
              </div>

              <div className='max-w-3xl space-y-6'>
                <h2 className='text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]'>
                  Let’s bring your next <br />
                  <span className='text-slate-400 font-light italic'>
                    digital experience
                  </span>{" "}
                  to life.
                </h2>
                <p className='text-lg text-slate-500 max-w-xl mx-auto font-light leading-relaxed'>
                  From concept to deployment, we build solutions that feel
                  natural and perform exceptionally.
                </p>
              </div>

              <div className='mt-12 flex flex-col sm:flex-row gap-4 items-center'>
                <Link
                  href='/contact'
                  className='h-14 px-10 inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium rounded-full hover:bg-indigo-600 transition-all duration-300 active:scale-95 shadow-lg shadow-slate-200'
                >
                  Start a Conversation
                  <ArrowUpRight className='w-4 h-4 opacity-70' />
                </Link>

                <Link
                  href='mailto:hello@lebnexis.com'
                  className='h-14 px-10 inline-flex items-center justify-center gap-2 bg-white text-slate-600 font-medium rounded-full border border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all duration-300'
                >
                  <Mail className='w-4 h-4' />
                  Email Us
                </Link>
              </div>

              <div className='mt-16 flex flex-col items-center gap-2'>
                <span className='text-xs text-slate-400 uppercase tracking-widest'>
                  Get in touch directly
                </span>
                <Link
                  href='mailto:hello@lebnexis.com'
                  className='text-slate-900 font-medium border-b border-slate-200 hover:border-indigo-500 transition-colors'
                >
                  hello@lebnexis.com
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
