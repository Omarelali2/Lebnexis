"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/internship", label: "Internship" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Who We Are" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white backdrop-blur-lg border-b border-slate-200/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='relative z-110'
          >
            <Link href='/' className='flex items-center gap-2 group'>
              <div className='relative overflow-hidden rounded-lg transition-transform group-hover:scale-105'>
                <Image
                  src='/lebnexis3.png'
                  alt='Lebnexis Logo'
                  width={120}
                  height={35}
                  priority
                  className='object-contain'
                />
              </div>
            </Link>
          </motion.div>

          <nav className='hidden md:flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className='relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors group'
                >
                  {link.label}
                  <span className='absolute inset-x-4 bottom-0 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300' />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className='hidden md:flex items-center gap-4'
          >
            <Link
              href='/contact'
              className='relative inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-200 hover:bg-indigo-600 hover:-translate-y-0.5 transition-all duration-300 active:scale-95'
            >
              Start a Project
            </Link>
          </motion.div>

          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='relative z-110 rounded-full p-2 text-slate-900 hover:bg-slate-100 transition'
              aria-label='Toggle menu'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='absolute top-0 left-0 right-0 min-h-screen bg-white z-100 pt-24 px-8 md:hidden'
          >
            <div className='flex flex-col gap-6'>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-3xl font-bold text-slate-900 hover:text-indigo-600 transition-colors'
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='pt-8 mt-8 border-t border-slate-100'
              >
                <Link
                  href='/contact'
                  onClick={() => setIsOpen(false)}
                  className='block w-full text-center rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-100'
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
