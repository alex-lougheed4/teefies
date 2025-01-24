import Navbar from './components/Navbar'
import { Home } from './pages/Home'

const App = () => {
  return (
    <div className="min-h-screen bg-primaryTeal">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
