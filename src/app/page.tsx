import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import {
  faYoutube,
  faXTwitter,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
        <div className="relative bg-[#2c3e50] h-32" />
        <div className="absolute bg-[#2c3e50] h-64 w-full skew-y-6 -translate-y-32" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg -translate-y-16">
            <div className="text-center">
              <Avatar className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto">
                <AvatarImage alt="Avatar image" src="./avatar.webp" />
                <AvatarFallback>Lami</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-semibold mt-4">Lami</h1>
              <p className="text-gray-600">Python & TypeScript Developer</p>
              <p className="text-gray-600">Specializing in FastAPI & Next.js</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-lg shadow transition hover:bg-blue-600" href="https://x.com/intent/user?screen_name=L2">
                <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6" />
                <span>X (Twitter)</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-red-500 text-white p-4 rounded-lg shadow transition hover:bg-red-600" href="https://www.youtube.com/@kohnoselami">
                <FontAwesomeIcon icon={faYoutube} className="text-white w-6 h-6" />
                <span>YouTube</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-pink-500 text-white p-4 rounded-lg shadow transition hover:bg-pink-600" href="https://www.instagram.com/kohnoselami">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-6 h-6" />
                <span>Instagram</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-gray-900 text-white p-4 rounded-lg shadow transition hover:bg-gray-700" href="https://www.threads.net/@kohnoselami">
                <FontAwesomeIcon icon={faThreads} className="text-white w-6 h-6" />
                <span>Threads</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm Lami! I am a passionate Python & TypeScript developer, specializing in FastAPI and Next.js. I love building
            web applications and exploring new technologies. In my free time, you can find me creating content on various platforms.
          </p>
        </div>
      </div>
    </>
  )
}
