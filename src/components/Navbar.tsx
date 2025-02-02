import { PhoneIcon } from '@heroicons/react/16/solid'

import Logo from '@/assets/grey-bg-logo.svg'
//TODO - Mobile Navbar
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto bg-baseGrey p-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div>
          <a href="#home">
            <img src={Logo} alt="Christmas Logo" className="h-12 w-72" />
          </a>
        </div>
        <ul className="flex space-x-4 text-2xl">
          <li>
            <a
              href="#about"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-2xl p-4 shadow-lg hover:underline hover:shadow-secondaryTeal"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="space-y-1 rounded-2xl bg-baseGrey px-4 py-1 text-white shadow-2xl shadow-black hover:shadow-secondaryTeal"
          onClick={() => (window.location.href = 'tel:01217143845')}
        >
          <p className="text-xl font-bold">Free Consultations</p>
          <span className="inline-flex items-center">
            0121 714 3845
            <PhoneIcon className="ml-2 size-6" />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
