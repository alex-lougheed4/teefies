import { PhoneIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

import Logo from '@/assets/grey-bg-logo.svg'

import { MenuIcon, XMarkIcon } from './Icons'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 768) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }),
    [isMenuOpen]

  return (
    <nav className="sticky top-0 z-50 bg-baseGrey p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div>
          <a href="#home">
            <img src={Logo} alt="Christmas Logo" className="h-12 w-72" />
          </a>
        </div>
        <div className="z-50 md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <XMarkIcon /> : <MenuIcon />}
          </button>
        </div>
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center space-y-4 bg-baseGrey text-2xl transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:space-x-4 md:space-y-0 md:bg-transparent ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          <li>
            <a
              href="#about"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
              onClick={toggleMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#locate-us"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
              onClick={toggleMenu}
            >
              Location
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="hidden space-y-1 rounded-2xl bg-baseGrey px-4 py-1 text-white shadow-2xl shadow-black hover:shadow-secondaryTeal md:block"
          onClick={() => (window.location.href = 'tel:01217143845')}
        >
          <p className="text-xl font-bold">Free Consultations</p>
          <span className="inline-flex items-center">
            0121 714 3845
            <PhoneIcon className="ml-2 size-6 animate-bounce" />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
