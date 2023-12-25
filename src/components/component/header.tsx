"use client"
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

export default function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="/">
        <FrameIcon className="w-6 h-6" />
        <span className="sr-only">Portfolio</span>
      </Link>
      <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
        <ScrollLink className="cursor-pointer font-bold" to="home" smooth={true}>Home</ScrollLink>
        <ScrollLink className="cursor-pointer text-gray-500 dark:text-gray-400" to="about" smooth={true}>About</ScrollLink>
        <ScrollLink className="cursor-pointer text-gray-500 dark:text-gray-400" to="skills" smooth={true}>Skills</ScrollLink>
      </nav>
    </header>
  )
}

function FrameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}
