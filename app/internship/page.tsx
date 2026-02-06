"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Clock3,
  Users,
  Laptop2,
  Target,
  HeartHandshake,
  CheckCircle2 as CheckIcon,
  UploadCloud,
  Zap,
  ChevronRight,
  Code2,
  Loader2,
} from "lucide-react"
import emailjs from "@emailjs/browser"

type ProgramHighlight = {
  title: string
  description: string
  points: string[]
  icon: React.ReactNode
  img: string
}

type ProgramStage = {
  week: string
  focus: string
  detail: string
}

type FormState = {
  fullName: string
  email: string
  phone: string
  linkedin: string
  portfolio: string
  message: string
  resumeFile: File | null
}

type FormErrors = Partial<Record<keyof FormState, string>>

type SubmissionStatus = {
  type: "success" | "error" | null
  message: string
}

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  message: "",
  resumeFile: null,
}

const APPLICATIONS_OPEN = false

const PROGRAM_HIGHLIGHTS: ProgramHighlight[] = [
  {
    title: "Production Delivery Pods",
    description:
      "Build responsive web experiences alongside senior full-stack engineers, product designers, and QA leads who ship to production every sprint using Git, GitHub, and Jira as the delivery backbone.",
    points: [
      "Git and GitHub branching drills",
      "Weekly deploy demos across Next.js frontends and Node APIs",
      "Pair-programmed pull-request audits",
    ],
    icon: <Laptop2 className='w-6 h-6' />,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Career Architecture",
    description:
      "Shape your full-stack engineering path with mentors who map the skills needed across Next.js, TypeScript, API design, testing frameworks, and deployment workflows.",
    points: [
      "Framework deep dives",
      "Portfolio code critiques",
      "Mock stand-ups & interviews",
    ],
    icon: <Target className='w-6 h-6' />,
    img: "/img3.avif",
  },
  {
    title: "Community & Culture",
    description:
      "Join a builders' guild with weekly hack nights, code review circles, and alumni who launch web products around the globe through shared GitHub spaces.",
    points: [
      "SSR & performance clinics",
      "Alumni shipping network",
      "Open-source contribution squads",
    ],
    icon: <HeartHandshake className='w-6 h-6' />,
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
  },
]

const PROGRAM_STRUCTURE: ProgramStage[] = [
  {
    week: "Weeks 1-2",
    focus: "Foundations & Discovery",
    detail:
      "Onboard, map user flows, stand up Jira boards, audit existing front and back-end codebases, and translate briefs into scoped full-stack deliverables with mentor feedback.",
  },
  {
    week: "Weeks 3-5",
    focus: "Build & Iterate",
    detail:
      "Pair-program on React/Next.js features, wire up API routes and database layers, write automated tests, and collaborate through GitHub pull requests while validating UX through usability sessions.",
  },
  {
    week: "Weeks 6-8",
    focus: "Launch & Reflection",
    detail:
      "Harden performance across the stack, ship real releases, document learnings in GitHub wikis, and present stakeholder demos with post-launch analytics and Jira retros.",
  },
]

const SectionHeader = ({ eyebrow, title, description, light = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='space-y-4 mb-16'
  >
    {eyebrow && (
      <span
        className={`inline-flex items-center gap-2 rounded-full border ${light ? "border-white/20 bg-white/10 text-blue-300" : "border-blue-100 bg-blue-50/50 text-blue-600"} px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em]`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`text-4xl md:text-5xl font-black tracking-tight ${light ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`text-lg leading-relaxed ${light ? "text-slate-400" : "text-slate-500"} max-w-2xl`}
      >
        {description}
      </p>
    )}
  </motion.div>
)

type FormFieldProps = {
  label: string
  id: keyof FormState
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  className,
  value,
  ...props
}) => (
  <div className='space-y-2'>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      className={`w-full rounded-xl border px-5 py-4 text-sm transition-all outline-none font-medium placeholder:text-slate-300 focus:bg-white focus:ring-4 ${
        error
          ? "border-rose-300 bg-rose-50 focus:ring-rose-100"
          : "border-slate-200 bg-slate-50 focus:ring-blue-100"
      } ${className ?? ""}`.trim()}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      value={value ?? ""}
      {...props}
    />
    {error && (
      <span id={`${id}-error`} className='text-xs font-semibold text-rose-500'>
        {error}
      </span>
    )}
  </div>
)

const validateForm = (values: FormState): FormErrors => {
  const nextErrors: FormErrors = {}
  if (!values.fullName.trim()) {
    nextErrors.fullName = "Please enter your full name."
  }
  if (!values.email.trim()) {
    nextErrors.email = "Email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Please enter a valid email address."
  }
  if (
    values.message.trim() &&
    values.message.trim().length > 0 &&
    values.message.trim().length < 40
  ) {
    nextErrors.message = "Message should be at least 40 characters if provided."
  }
  return nextErrors
}

const InternshipPage = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>({
    type: null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileInputKey, setFileInputKey] = useState(() => Date.now())

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_CONTACT
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_CONTACT

  useEffect(() => {
    if (publicKey) {
      emailjs.init({ publicKey })
    }
  }, [publicKey])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => {
        const cloned = { ...prev }
        delete cloned[name as keyof FormState]
        return cloned
      })
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setFormData(prev => ({ ...prev, resumeFile: file }))
    if (errors.resumeFile) {
      setErrors(prev => {
        const cloned = { ...prev }
        delete cloned.resumeFile
        return cloned
      })
    }
  }

  const isSubmitDisabled = useMemo(() => {
    if (!APPLICATIONS_OPEN) {
      return true
    }
    if (isSubmitting) {
      return true
    }

    const hasRequiredFields =
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.linkedin.trim() &&
      formData.portfolio.trim() &&
      Boolean(formData.resumeFile)

    return !hasRequiredFields
  }, [
    formData.fullName,
    formData.email,
    formData.phone,
    formData.linkedin,
    formData.portfolio,
    formData.resumeFile,
    isSubmitting,
  ])

  const renderApplicationsClosedMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='flex flex-col items-center justify-center gap-6 text-center py-16 px-6'
    >
      <span className='inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50/60 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-blue-600'>
        Heads Up
      </span>
      <h3 className='text-3xl font-black text-slate-800 tracking-tight'>
        No internship cohort is open right now.
      </h3>
      <p className='text-slate-500 max-w-md font-medium leading-relaxed'>
        We are not accepting new applications at the moment. Join our newsletter or check back soon to be the first to know when the next cohort launches.
      </p>
    </motion.div>
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!APPLICATIONS_OPEN) {
      setStatus({
        type: "error",
        message: "Applications are currently closed. Please check back soon.",
      })
      return
    }

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      const missingConfig = [
        ["NEXT_PUBLIC_EMAILJS_SERVICE_ID_CONTACT", serviceId],
        ["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT", templateId],
        ["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", publicKey],
      ]
        .filter(([, value]) => !value)
        .map(([name]) => name)
        .join(", ")

      if (missingConfig) {
        console.warn("EmailJS client missing configuration:", missingConfig)
      }

      setStatus({
        type: "error",
        message:
          "Application intake is not configured. Please email elaliomar30@gmail.com directly.",
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      const sanitizedMessage = formData.message.trim()
        ? formData.message.trim()
        : "Not provided"
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        message: sanitizedMessage,
        resumeFileName: formData.resumeFile?.name ?? "Not attached",
        from_name: formData.fullName,
        from_email: formData.email,
        contact_phone: formData.phone,
        linkedin_profile: formData.linkedin,
        portfolio_url: formData.portfolio,
        cover_message: sanitizedMessage,
        full_name: formData.fullName,
        email_address: formData.email,
        linkedin_url: formData.linkedin,
        portfolio_link: formData.portfolio,
        why_program: sanitizedMessage,
      }

      await emailjs.send(serviceId, templateId, payload)

      setStatus({
        type: "success",
        message: "Thank you! Your application has been sent to our team.",
      })
      setFormData(INITIAL_FORM_STATE)
      setErrors({})
      setFileInputKey(Date.now())
    } catch (error) {
      const errorStatus =
        typeof error === "object" && error && "status" in error
          ? String((error as { status?: unknown }).status ?? "")
          : ""
      const errorText =
        error instanceof Error
          ? error.message
          : typeof error === "object" && error && "text" in error
            ? String((error as { text?: unknown }).text ?? "Unknown error")
            : "Unknown error"

      console.error("Internship application email failed", {
        status: errorStatus,
        text: errorText,
        raw: error,
      })
      setStatus({
        type: "error",
        message: `We could not send your application. Please try again or email elaliomar30@gmail.com. (${
          [errorStatus, errorText].filter(Boolean).join(": ") || "Unknown error"
        })`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-600 selection:text-white'>
      <section className='relative overflow-hidden bg-white pt-40 pb-32 px-6'>
        <div className='absolute top-0 left-1/2 -z-10 h-150 w-250 -translate-x-1/2 rounded-full bg-linear-to-b from-blue-50/80 to-transparent blur-3xl' />

        <div className='mx-auto max-w-6xl relative z-10 text-center md:text-left'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-bold text-blue-600'
          >
            <Zap className='h-4 w-4' />
            <span className='uppercase tracking-widest'>
              LebNexis Academy 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-6xl md:text-8xl font-black leading-[0.95] text-slate-900 mb-8 tracking-tighter'
          >
            Ship real products. <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500'>
              Own your craft.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='max-w-2xl text-xl leading-relaxed text-slate-500 mb-12 font-medium'
          >
            An intensive 8-week immersion into modern full-stack web
            development. No coffee runs—just production code, Git and GitHub
            mastery, Jira-backed collaboration, and framework-driven
            launch-ready builds spanning frontend and backend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='flex flex-wrap gap-4 justify-center md:justify-start'
          >
            <div className='flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-900/20'>
              <Clock3 className='h-5 w-5 text-blue-400' /> 8-Week Immersive
            </div>
            <div className='flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-8 py-4 text-sm font-bold text-slate-600 shadow-sm'>
              <Users className='h-5 w-5 text-blue-600' /> Small Cohorts (Max 6)
            </div>
          </motion.div>
        </div>
      </section>

      <section className='px-6 py-32 bg-slate-50/50'>
        <div className='mx-auto max-w-6xl'>
          <SectionHeader
            title='The Experience'
            eyebrow='Benefits'
            description='Everything is geared toward mastering full-stack web engineering craft.'
          />

          <div className='grid gap-8 md:grid-cols-3'>
            {PROGRAM_HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group relative flex flex-col rounded-3xl bg-white border border-slate-200/60 overflow-hidden transition-all hover:shadow-2xl hover:border-blue-200'
              >
                <div className='h-48 overflow-hidden'>
                  <img
                    src={h.img}
                    alt={h.title}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='p-8'>
                  <div className='w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200'>
                    {h.icon}
                  </div>
                  <h3 className='text-2xl font-black mb-4 tracking-tight'>
                    {h.title}
                  </h3>
                  <p className='text-slate-500 text-sm leading-relaxed mb-8'>
                    {h.description}
                  </p>

                  <ul className='space-y-4 pt-6 border-t border-slate-100'>
                    {h.points.map(p => (
                      <li
                        key={p}
                        className='flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest'
                      >
                        <CheckIcon className='h-4 w-4 text-blue-500 shrink-0' />{" "}
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-950 py-32 px-6 text-white overflow-hidden relative'>
        <div className='absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none'>
          <div className='absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-600 rounded-full blur-[120px]' />
        </div>

        <div className='max-w-6xl mx-auto relative z-10'>
          <SectionHeader
            title='Program Structure'
            eyebrow='Roadmap'
            description='A structured journey from kickoff brief to live deployment.'
            light
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {PROGRAM_STRUCTURE.map((stage, i) => (
              <motion.div
                key={stage.focus}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className='relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors'
              >
                <div className='absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-sm shadow-xl'>
                  {i + 1}
                </div>
                <span className='text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block'>
                  {stage.week}
                </span>
                <h3 className='text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-blue-300 transition-colors'>
                  {stage.focus}
                </h3>
                <p className='text-slate-400 leading-relaxed text-sm font-medium'>
                  {stage.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-40' id='apply'>
        <div className='mx-auto max-w-5xl grid md:grid-cols-5 gap-12 items-start'>
          <div className='md:col-span-2 space-y-8'>
            <div className='inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600'>
              <Code2 className='h-8 w-8' />
            </div>
            <h2 className='text-5xl font-black tracking-tighter leading-none text-slate-900'>
              Apply to <br />
              the cohort.
            </h2>
            <p className='text-slate-500 font-medium'>
              We review applications weekly. Successful candidates are invited
              to a 30-minute technical/cultural chat.
            </p>

            <div className='space-y-4 pt-4'>
              {[
                "Direct Full-Stack Mentorship",
                "Version Control Playbooks (Git & GitHub)",
                "Agile Cadence Inside Jira",
                "Framework Build Labs (Next.js / React / Node)",
              ].map(item => (
                <div
                  key={item}
                  className='flex items-center gap-3 text-sm font-bold text-slate-700'
                >
                  <ChevronRight className='h-4 w-4 text-blue-600' /> {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='md:col-span-3 bg-white rounded-[3rem] border border-slate-200 p-10 md:p-14 shadow-2xl relative'
          >
            {APPLICATIONS_OPEN ? (
              <form className='grid gap-8' onSubmit={handleSubmit}>
              <div className='grid gap-6 sm:grid-cols-2'>
                <FormField
                  label='Full Name'
                  id='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='Ziad Mansour'
                  error={errors.fullName}
                />
                <FormField
                  label='Email'
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='ziad@example.com'
                  error={errors.email}
                />
                <FormField
                  label='Phone (Optional)'
                  id='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='+1 (555) 123-4567'
                />
                <FormField
                  label='LinkedIn'
                  id='linkedin'
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder='linkedin.com/in/...'
                />
                <FormField
                  label='Portfolio / GitHub'
                  id='portfolio'
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder='github.com/username'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                  Resume / CV (PDF)
                </label>
                <label className='flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-300 transition-all cursor-pointer group'>
                  <UploadCloud className='w-8 h-8 text-slate-300 group-hover:text-blue-500 mb-2 transition-colors' />
                  <span className='text-xs font-bold text-slate-500 group-hover:text-blue-600'>
                    {formData.resumeFile
                      ? formData.resumeFile.name
                      : "Drop your PDF here"}
                  </span>
                  <input
                    key={fileInputKey}
                    type='file'
                    className='hidden'
                    onChange={handleFileChange}
                    accept='.pdf'
                  />
                </label>
              </div>

              <div className='space-y-2'>
                <label className='text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>
                  Why this program? (Optional)
                </label>
                <textarea
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border px-5 py-4 text-sm transition-all outline-none font-medium focus:bg-white focus:ring-4 ${
                    errors.message
                      ? "border-rose-300 bg-rose-50 focus:ring-rose-100"
                      : "border-slate-200 bg-slate-50 focus:ring-blue-100"
                  }`}
                  placeholder='Tell us about your technical goals (optional)...'
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span
                    id='message-error'
                    className='text-xs font-semibold text-rose-500'
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                disabled={isSubmitDisabled}
                className='w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-200 flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='h-4 w-4 animate-spin' /> Sending
                  </>
                ) : (
                  <>
                    Send Application <ArrowRight size={16} />
                  </>
                )}
              </motion.button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold text-center ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              </form>
            ) : (
              renderApplicationsClosedMessage()
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InternshipPage
