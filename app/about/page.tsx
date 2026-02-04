"use client"
import { motion } from "framer-motion"
import {
  Linkedin,
  Mail,
  ShieldCheck,
  Briefcase,
  Users,
  Cpu,
  Globe,
  Target,
  Award,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const TeamPage = () => {
  const overview = [
    {
      title: "Lebnexis Mission",
      description:
        "We build inclusive web products that marry cutting-edge technology with human-centered design.",
      points: [
        "Cross-disciplinary collaboration",
        "Data-driven decision making",
        "Iterative user feedback loops",
      ],
      icon: <Globe className='w-6 h-6 text-indigo-500' />,
    },
    {
      title: "Operating Model",
      description:
        "Each engagement mirrors a studio environment with dedicated pods covering strategy, design, engineering, and enablement.",
      points: [
        "Elastic teams embedded with clients",
        "Quarterly OKRs tied to measurable KPIs",
        "Cross-functional retros every sprint",
      ],
      icon: <Target className='w-6 h-6 text-emerald-500' />,
    },
    {
      title: "Talent & Internship",
      description:
        "Our internship programme rotates aspiring engineers through live client projects, pairing them with senior mentors.",
      points: [
        "Three-month experiential tracks",
        "Certified mentorship curriculum",
        "80% conversion into full-time roles",
      ],
      icon: <Award className='w-6 h-6 text-amber-500' />,
    },
  ]

  const team = [
    {
      name: "Omar Elali",
      role: "Chief Executive Officer",
      icon: <ShieldCheck className='w-6 h-6 text-blue-400' />,
      responsibility:
        "Responsible for high-level strategic decisions, leading the organization's overall resources, and acting as the main point of communication.",
      img: "/Omar.jpeg",
      bio: "Omar is a full-stack web developer, driving Lebnexis' vision and market positioning, forging partnerships that amplify our impact while nurturing a culture of innovation.",
      highlight:
        "Scaled Lebnexis from a three-person studio to a multi-disciplinary practice serving five regions.",
      tenure: "At Lebnexis since 2026",
      focusAreas: [
        "Strategic partnerships and market expansion",
        "Defining the product vision and annual roadmap",
        "Ensuring fiscal resilience and sustainable growth",
      ],
      linkedinUrl: "https://www.linkedin.com/in/omar-elali-28aaa1312/",
      email: "elaliomar30@gmail.com",
    },
    {
      name: "Azzam Alkahil",
      role: "Administrative Director",
      icon: <Briefcase className='w-6 h-6 text-emerald-400' />,
      responsibility:
        "Oversees the daily administrative operations, develops internal policies, and manages department budgets to ensure efficiency.",
      img: "/Azzam.jpeg",
      bio: "Azzam is a full-stack web operations lead, harmonizing process excellence with strategic foresight to drive organizational effectiveness.",
      highlight:
        "Implemented a unified operations stack that keeps every delivery squad synchronized and unblockable.",
      tenure: "At Lebnexis since 2026",
      focusAreas: [
        "Process automation and policy governance",
        "Vendor relations and contract negotiations",
        "Budget planning and resource allocation",
      ],
      linkedinUrl: "https://www.linkedin.com/in/azzam-al-kahil/",
      email: "azzam.kahil.dev@gmail.com",
    },
    {
      name: "Jad Akil",
      role: "Operations Manager",
      icon: <Cpu className='w-6 h-6 text-purple-400' />,
      responsibility:
        "Leads operational strategies, optimizes workflows, and ensures that project deliverables align with client expectations and company standards.",
      img: "/Jad2.jpeg",
      bio: "Jad is a AI engineer specializing in operational excellence, leveraging technology to streamline workflows and enhance service delivery across all client engagements.",
      highlight:
        "Launched our service telemetry platform, cutting incident resolution time in half across all pods.",
      tenure: "At Lebnexis since 2026",
      focusAreas: [
        "Scaling agile rituals for distributed teams",
        "Continuous deployment and quality thresholds",
        "Service reliability and platform tooling",
      ],
      linkedinUrl: "https://www.linkedin.com/in/jad-akil-45a276271/",
      email: "jadakeel05@gmail.com",
    },
    {
      name: "Hossam Albenni",
      role: "HR Administrator",
      icon: <Users className='w-6 h-6 text-orange-400' />,
      responsibility:
        "Manages organizational culture, employee relations, recruitment strategies, and ensures full compliance with labor regulations.",
      img: "/Hossam.jpeg",
      bio: "Hossam is a frontend engineer who designs the people experience, from candidate journeys to growth plans, ensuring every Lebnexian has a tailored development path.",
      highlight:
        "Built the mentorship guild that keeps cohorts engaged and pushes every interface toward benchmark accessibility scores.",
      tenure: "At Lebnexis since 2026",
      focusAreas: [
        "Inclusive internship and recruitment programs",
        "Learning pathways and competency mapping",
        "Health, wellbeing, and engagement initiatives",
      ],
      linkedinUrl: "https://www.linkedin.com/in/houssam-al-benni-059459331/",
      email: "Houssamalbenni@gmail.com",
    },
  ]

  return (
    <div className='relative min-h-screen pt-30 bg-[#fcfdfe] text-slate-900 py-24 px-6 selection:bg-indigo-100 selection:text-indigo-900'>
      <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-50/50 blur-[120px]' />
        <div className='absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-emerald-50/50 blur-[100px]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-3xl mb-24'
        >
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6'>
            <span className='w-2 h-2 rounded-full bg-indigo-500 animate-pulse' />
            <span className='text-[10px] font-bold uppercase tracking-widest text-indigo-600'>
              Executive Leadership
            </span>
          </div>
          <h1 className='text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]'>
            The Architects of{" "}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500'>
              Lebnexis
            </span>
          </h1>
          <p className='text-xl text-slate-500 leading-relaxed font-medium'>
            Bridging vision and execution through multidisciplinary excellence
            and human-centered rituals.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-32'>
          {overview.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='group p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500'
            >
              <div className='mb-6 inline-flex p-3 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 transition-colors'>
                {item.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-slate-500 text-sm leading-relaxed mb-6'>
                {item.description}
              </p>
              <div className='space-y-3'>
                {item.points.map(p => (
                  <div
                    key={p}
                    className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400'
                  >
                    <ArrowUpRight size={14} className='text-indigo-400' />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className='space-y-12'>
          <div className='flex items-end justify-between border-b border-slate-200 pb-8'>
            <h2 className='text-3xl font-bold'>Operational Board</h2>
            <p className='text-slate-400 font-medium'>2025 / 2026</p>
          </div>

          <div className='grid grid-cols-1 gap-12'>
            {team.map(member => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='group flex flex-col lg:flex-row gap-12 items-start'
              >
                <div className='relative w-full lg:w-72 shrink-0'>
                  <div className='aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-2xl transition-transform duration-700 group-hover:scale-[0.98]'>
                    <Image
                      width={300}
                      height={375}
                      src={member.img}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500' />
                  </div>
                  <div className='absolute -bottom-4 -right-4 flex flex-col gap-2'>
                    <Link
                      href={member.linkedinUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 bg-white shadow-xl rounded-2xl hover:bg-indigo-600 hover:text-white transition-all'
                    >
                      <Linkedin size={20} />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className='p-3 bg-white shadow-xl rounded-2xl hover:bg-indigo-600 hover:text-white transition-all'
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </Link>
                  </div>
                </div>

                <div className='flex-1 pt-4'>
                  <div className='flex items-center gap-4 mb-6'>
                    <h3 className='text-4xl font-black text-slate-900'>
                      {member.name}
                    </h3>
                    <div className='h-px w-12 bg-slate-200' />
                    <span className='text-sm font-bold uppercase tracking-widest text-indigo-600'>
                      {member.role}
                    </span>
                  </div>

                  <p className='text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl font-medium'>
                    {member.bio}
                  </p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-3xl bg-slate-50/50 border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 transition-all duration-500'>
                    <div>
                      <h4 className='text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4'>
                        Core Responsibilities
                      </h4>
                      <p className='text-sm text-slate-500 italic leading-relaxed'>
                        {member.responsibility}
                      </p>
                    </div>
                    <div>
                      <h4 className='text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4'>
                        Strategic Focus
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {member.focusAreas.map(area => (
                          <span
                            key={area}
                            className='px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600'
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 flex items-center gap-3 text-sm font-semibold text-indigo-600'>
                    <Mail size={16} className='text-indigo-500' />
                    <Link
                      href={`mailto:${member.email}`}
                      className='hover:underline'
                      aria-label={`Email ${member.name}`}
                    >
                      {member.email}
                    </Link>
                  </div>

                  <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <Award size={16} className='text-amber-500' />
                      <span className='text-sm font-bold text-slate-800'>
                        {member.highlight}
                      </span>
                    </div>
                    <span className='text-[10px] font-black text-slate-300 uppercase tracking-tighter'>
                      {member.tenure}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
