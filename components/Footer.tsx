"use client"

import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    company: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
    ],
    resources: [
      { label: "Internship", href: "/internship" },
      { label: "Team", href: "/about" },
    ],
    legal: [{ label: "Contact", href: "/contact" }],
  }

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className='relative bg-linear-to-br from-white via-white to-slate-50 border-t border-gray-200/60 overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-blob' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000' />
      </div>

      <div className='relative z-10'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid md:grid-cols-5 gap-8 mb-12'>
            <div className='space-y-4'>
              <div>
                <Image
                  src='/lebnexis2.jpeg'
                  alt='Lebnexis Logo'
                  width={140}
                  height={40}
                  priority
                />
              </div>
              <div>
                <p className='text-sm text-gray-700 mt-2'>
                  Building solutions. Developing talent. Creating impact.
                </p>
              </div>

              <div className='flex gap-4 pt-4'>
                {socials.map(social => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className='p-2 rounded-lg bg-indigo-100/60 text-gray-700 hover:text-indigo-700 hover:bg-indigo-200/60 transition-all duration-300'
                      title={social.label}
                    >
                      <Icon className='w-5 h-5' />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className='font-bold text-black mb-4'>Company</h4>
              <ul className='space-y-2'>
                {links.company.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-black mb-4'>Resources</h4>
              <ul className='space-y-2'>
                {links.resources.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-black mb-4'>Legal</h4>
              <ul className='space-y-2'>
                {links.legal.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-black mb-4'>Contact</h4>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <Mail className='w-5 h-5 text-indigo-600 mt-0.5' />
                  <Link
                    href='mailto:elaliomar30@gmail.com'
                    className='text-gray-700 hover:text-indigo-600 transition-colors text-sm'
                  >
                    elaliomar30@gmail.com
                  </Link>
                </li>
                <li className='flex items-start gap-3'>
                  <Phone className='w-5 h-5 text-indigo-600  mt-0.5' />
                  <Link
                    href='tel:+96170259020'
                    className='text-gray-700 hover:text-indigo-600 transition-colors text-sm'
                  >
                    +961 70 259 020
                  </Link>
                </li>
                <li className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-indigo-600  mt-0.5' />
                  <span className='text-gray-700 text-sm'>
                    Tripoli - Lebanon
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='h-px bg-linear-to-r from-indigo-600/0 via-indigo-600/30 to-indigo-600/0 my-8' />

          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700'>
            <p>&copy; {currentYear} Lebnexis. All rights reserved.</p>
            <div className='flex gap-6'>
              <Link
                href='#privacy'
                className='hover:text-indigo-600 transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='#terms'
                className='hover:text-indigo-600 transition-colors'
              >
                Terms of Service
              </Link>
            </div>
            <p>
              Made with <span className='text-red-500'>❤</span> by Lebnexis
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
