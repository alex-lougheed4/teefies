import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Services } from './pages/Services'

const App = () => {
  return (
    <div className="min-h-screen bg-primaryTeal">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
