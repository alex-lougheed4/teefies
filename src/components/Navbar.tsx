import Logo from '@/assets/grey-bg-logo.svg'

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto bg-primaryTeal p-4">
      <div className="container mx-auto flex items-center justify-between text-black">
        <div>
          <a href="#home">
            <img src={Logo} alt="Christmas Logo" className="h-12 w-72" />
          </a>
        </div>
        <ul className="flex space-x-4 text-2xl">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
        <div className="space-y-1 rounded bg-slate-500 px-4 py-1">
          <p className="text-white">Free Consultations</p>
          <p className="">0121 714 3845</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
