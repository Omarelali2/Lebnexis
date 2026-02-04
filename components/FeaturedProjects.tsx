"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Code2,
  Rocket,
  Cpu,
  ArrowRight,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Samsung clone E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
    tech: ["React.js", "TypeScript", "Stripe", "mongoDB" , "Express.js"],
    icon: <Rocket className='w-8 h-8' />,
    color: "from-blue-500 to-indigo-600",
    link: "https://sumsung-store-frontend-i3ov.vercel.app/",
    github: "https://github.com/Omarelali2/sumsung-store-frontend",
  },
  {
    id: 2,
    title: "GymLeb Fitness Dashboard",
    description:
      "Interactive fitness tracking dashboard with workout logging, progress visualization, and goal setting features.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    icon: <Cpu className='w-8 h-8' />,
    color: "from-emerald-400 to-cyan-500",
    link: "https://gymleb.vercel.app/",
    github: "https://github.com/Omarelali2/the-big-gym",
  },
  {
    id: 3,
    title: "CodeLeb Learning Platform",
    description:
      "A coding education platform offering interactive tutorials, coding challenges, and progress tracking for learners of all levels.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    icon: <Code2 className='w-8 h-8' />,
    color: "from-purple-500 to-pink-500",
    link: "https://codeleb.vercel.app/",
    github: "https://github.com/AZZAM-K/codeleb",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const FeaturedProjects = () => {
  return (
    <section className='relative py-24 bg-[#030712] overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className='absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full'
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity }}
          className='absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full'
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <h2 className='text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase mb-4'>
              Portfolio
            </h2>
            <h3 className='text-4xl md:text-6xl font-black text-white tracking-tighter'>
              Featured{" "}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 italic'>
                Projects
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-gray-400 text-lg max-w-md font-light leading-relaxed'
          >
            A collection of high-performance applications built with modern
            frameworks and scalable architecture.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className='group relative flex flex-col bg-white/5 border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20'
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${project.color} flex items-center justify-center text-white mb-8 shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500`}
              >
                {project.icon}
              </motion.div>

              <h4 className='text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors'>
                {project.title}
              </h4>

              <p className='text-gray-400 font-light leading-relaxed mb-8 flex-grow'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 mb-8'>
                {project.tech.map(t => (
                  <span
                    key={t}
                    className='text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-300 font-medium group-hover:bg-indigo-500/10 transition-colors'
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-6 pt-6 border-t border-white/5'>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  className='flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-all'
                >
                  <span>Live Demo</span>
                  <ExternalLink className='w-4 h-4' />
                </motion.a>
                <Link
                  href={project.github}
                  className='flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors'
                >
                  <Github className='w-4 h-4' />
                  <span>Source</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-20 flex justify-center'
        >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/projects'
                className='group px-10 py-5 bg-white text-black font-black rounded-full transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs'
              >
                <span>View Full Archive</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-2 transition-transform' />
              </Link>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
