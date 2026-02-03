"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  ChevronRight,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const SERVICES = [
  {
    title: "Web Experience Engineering",
    description:
      "Design and deliver performant front-end systems in Next.js and React, from design systems to accessibility-focused interfaces.",
    icon: <Layers className='h-6 w-6' />,
    color: "bg-indigo-500",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Backend Systems",
    description:
      "Build resilient APIs, orchestrate microservices, and integrate data pipelines that stay observable under scale and change.",
    icon: <Cpu className='h-6 w-6' />,
    color: "bg-cyan-500",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Performance & Reliability",
    description:
      "Diagnose bottlenecks, tune latency, and embed monitoring to guarantee fast, dependable experiences across the stack.",
    icon: <ShieldCheck className='h-6 w-6' />,
    color: "bg-emerald-500",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
  },
]

const PROCESS = [
  { title: "Discover", detail: "Aligning goals and mapping out constraints." },
  { title: "Design", detail: "Architecting the user journey and system." },
  { title: "Deliver", detail: "Iterative building with transparent sprints." },
  { title: "Evolve", detail: "Scaling based on data and user feedback." },
]

const CAPABILITIES = [
  {
    title: "Web Experience Toolkit",
    detail:
      "Design systems, design-to-code pipelines, and continuous accessibility reviews keep interfaces cohesive and inclusive.",
  },
  {
    title: "Backend Readiness",
    detail:
      "Telemetry-rich services, event-driven integrations, and automated testing pipelines ensure releases stay observable and resilient.",
  },
  {
    title: "Performance Operations",
    detail:
      "Core Web Vitals audits, load testing, and SLO-driven dashboards surface performance wins your stakeholders can measure.",
  },
]

const ServicesPage = () => {
  return (
    <div className='min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100'>
      <section className='relative overflow-hidden px-6 pt-32 pb-20'>
        <div className='absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-linear-to-b from-blue-50/50 to-transparent blur-3xl' />
        <div className='mx-auto max-w-6xl text-center'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-600'
          >
            <Zap className='h-4 w-4' />
            <span>Built for High-Growth Teams</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-5xl font-black tracking-tight text-slate-900 md:text-8xl'
          >
            Ship products that <br />
            <span className='bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
              define industries.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600'
          >
            LebNexis partners with forward-thinking companies to bridge the gap
            between ambitious product vision, world-class web experiences,
            resilient backend systems, and measurable performance gains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
          >
            <a
              href='mailto:hello@lebnexis.com'
              className='group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg'
            >
              Start your project
              <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
            </a>
            <a
              href='#'
              className='flex items-center gap-2 px-8 py-4 font-semibold text-slate-600 transition-colors hover:text-blue-600'
            >
              View Case Studies
              <ChevronRight className='h-4 w-4' />
            </a>
          </motion.div>
        </div>
      </section>

      <section className='px-6 py-20'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-16 flex flex-col items-end justify-between gap-6 md:flex-row'>
            <div className='max-w-xl'>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
                Expertise we bring <br />
                to the table.
              </h2>
            </div>
            <p className='max-w-md text-slate-500'>
              From pixel-perfect front-end delivery to API orchestration and
              runtime optimisation, we keep your teams shipping confidently
              while we handle the technical heavy lifting.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl'
              >
                <div className='mb-6 h-48 overflow-hidden rounded-2xl bg-slate-100'>
                  <Image
                    width={200}
                    height={200}
                    src={service.image}
                    alt={service.title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </div>
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-lg shadow-blue-200`}
                >
                  {service.icon}
                </div>
                <h3 className='mb-3 text-xl font-bold'>{service.title}</h3>
                <p className='text-slate-600 leading-relaxed'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {CAPABILITIES.map(item => (
              <div
                key={item.title}
                className='rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm'
              >
                <h3 className='text-lg font-semibold text-slate-900'>
                  {item.title}
                </h3>
                <p className='mt-3 text-sm text-slate-600 leading-relaxed'>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-900 px-6 py-24 text-white'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-16 lg:grid-cols-2'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight md:text-5xl'>
                Our refined <br />
                process.
              </h2>
              <p className='mt-6 text-slate-400 max-w-md text-lg'>
                We’ve replaced bloated agency workflows with a lean, transparent
                approach focused on velocity and quality.
              </p>
              <div className='mt-12 space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-full bg-blue-500/10 p-2 text-blue-400'>
                    <ShieldCheck />
                  </div>
                  <span>SOC2 Compliant Workflows</span>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='rounded-full bg-blue-500/10 p-2 text-blue-400'>
                    <Globe />
                  </div>
                  <span>Global Distributed Infrastructure</span>
                </div>
              </div>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              {PROCESS.map((step, i) => (
                <div
                  key={step.title}
                  className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10'
                >
                  <span className='text-xs font-bold uppercase tracking-widest text-blue-400'>
                    Step 0{i + 1}
                  </span>
                  <h3 className='mt-3 text-lg font-semibold'>{step.title}</h3>
                  <p className='mt-2 text-sm text-slate-400 leading-relaxed'>
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-5xl rounded-[3rem] bg-linear-to-br from-blue-600 to-indigo-700 p-12 text-center text-white shadow-2xl'>
          <h2 className='mb-6 text-3xl font-bold md:text-4xl'>
            Ready to build what’s next?
          </h2>
          <p className='mx-auto mb-10 max-w-xl text-blue-100'>
            Join the teams that have accelerated their roadmap by an average of
            40% with LebNexis.
          </p>

          <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
            {[
              { val: "30+", label: "Launches" },
              { val: "4", label: "Partners" },
              { val: "6wk", label: "Avg TTV" },
            ].map(stat => (
              <div key={stat.label}>
                <div className='text-4xl font-bold'>{stat.val}</div>
                <div className='text-sm text-blue-200 uppercase tracking-widest mt-1'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='mailto:hello@lebnexis.com'
              className='rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-xl transition-transform hover:scale-105'
            >
              Email the team
            </Link>
            <Link
              href='#'
              className='rounded-full border border-white/30 px-10 py-4 font-bold text-white transition-colors hover:bg-white/10'
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
