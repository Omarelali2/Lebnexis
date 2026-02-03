"use client"

import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, ShieldCheck, Loader2, Clock, Globe } from "lucide-react"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

type SubmissionStatus = {
  type: "success" | "error" | null
  message: string
}

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const validateForm = (values: FormState): FormErrors => {
  const nextErrors: FormErrors = {}
  if (!values.name.trim()) nextErrors.name = "Full name is required."
  if (!values.email.trim()) {
    nextErrors.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = "Invalid email format."
  }
  if (!values.subject.trim()) nextErrors.subject = "Please provide a subject."
  if (!values.message.trim() || values.message.trim().length < 20) {
    nextErrors.message = "Please provide more detail (min. 20 chars)."
  }
  return nextErrors
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>({
    type: null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const isSubmitDisabled = useMemo(() => {
    if (isSubmitting) return true
    const errs = validateForm(formData)
    return Object.keys(errs).length > 0
  }, [formData, isSubmitting])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Configuration error. Contact hello@lebnexis.com",
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      await emailjs.send(serviceId, templateId, formData, { publicKey })
      setStatus({
        type: "success",
        message: "Protocol initiated. Our team will reach out shortly.",
      })
      setFormData(INITIAL_FORM_STATE)
    } catch (error) {
      setStatus({
        type: "error",
        message: "Transmission failed. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='relative min-h-screen bg-[#f8fafc] text-slate-900 pt-32 pb-24 px-6 overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className='absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px]'
        />
        <div className='absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px]' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative z-10 mx-auto max-w-6xl'
      >
        <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start'>
          <motion.section className='rounded-[3.5rem] border border-slate-200 bg-white p-8 md:p-14 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.1)]'>
            <div className='mb-12 space-y-4'>
              <span className='inline-block text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100'>
                Inquiry Portal
              </span>
              <h1 className='text-5xl md:text-6xl font-black tracking-tighter leading-tight'>
                Let’s build <br />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600'>
                  the future.
                </span>
              </h1>
              <p className='text-slate-500 text-lg max-w-md'>
                Secure a senior-led team for your next digital milestone.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-8'>
              <div className='grid gap-6 md:grid-cols-2'>
                <FormField
                  id='name'
                  label='Identity'
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder='Your Name'
                />
                <FormField
                  id='email'
                  label='Direct Email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder='name@company.com'
                />
              </div>

              <FormField
                id='subject'
                label='Objective'
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder='How can we help?'
              />

              <FormField
                id='message'
                label='Brief'
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder='Tell us about your project, timeline, and goals...'
                multiline
              />

              <button
                type='submit'
                disabled={isSubmitDisabled}
                className='group w-full md:w-auto inline-flex items-center justify-center gap-4 rounded-2xl bg-slate-900 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-blue-600 disabled:opacity-40 disabled:hover:bg-slate-900 shadow-2xl shadow-slate-900/20'
              >
                {isSubmitting ? (
                  <Loader2 className='animate-spin' size={18} />
                ) : (
                  <>
                    Initiate Project{" "}
                    <Send
                      size={16}
                      className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                    />
                  </>
                )}
              </button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-xl text-xs font-bold uppercase tracking-widest ${status.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"}`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.section>

          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className='p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600'>
                  <Clock size={20} />
                </div>
                <h2 className='font-black text-xl tracking-tight'>
                  Rapid Response
                </h2>
              </div>
              <p className='text-sm text-slate-500 leading-relaxed mb-6'>
                Our partners review every inquiry personally. Expect a technical
                brief or call invite within{" "}
                <span className='text-slate-900 font-bold'>
                  24-48 business hours
                </span>
                .
              </p>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400'>
                  <Globe size={14} className='text-blue-500' /> Global
                  Collaboration
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className='p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl shadow-blue-900/20'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400'>
                  <ShieldCheck size={20} />
                </div>
                <h2 className='font-black text-xl tracking-tight text-white'>
                  The Roadmap
                </h2>
              </div>
              <ul className='space-y-6'>
                {[
                  {
                    t: "Discovery",
                    d: "Deep dive into technical requirements.",
                  },
                  { t: "Proposal", d: "Fixed scope or agile sprint planning." },
                  { t: "Execution", d: "Senior-led build with weekly demos." },
                ].map((step, i) => (
                  <li key={i} className='flex gap-4'>
                    <span className='text-blue-500 font-black text-xs mt-1'>
                      0{i + 1}
                    </span>
                    <div>
                      <div className='text-sm font-bold uppercase tracking-widest mb-1'>
                        {step.t}
                      </div>
                      <div className='text-xs text-slate-400'>{step.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const FormField: React.FC<any> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  error,
}) => (
  <div className='flex flex-col gap-3'>
    <label
      htmlFor={id}
      className='text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1'
    >
      {label}
    </label>
    {multiline ? (
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border p-5 text-sm font-bold transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 ${error ? "border-red-200 bg-red-50" : "border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-200"}`}
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border p-5 text-sm font-bold transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 ${error ? "border-red-200 bg-red-50" : "border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-200"}`}
      />
    )}
    {error && (
      <span className='text-[10px] font-bold text-red-500 uppercase tracking-widest ml-1'>
        {error}
      </span>
    )}
  </div>
)

export default ContactPage
