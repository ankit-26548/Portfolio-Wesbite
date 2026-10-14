import HeroSection from '../sections/HeroSection'
import StudioPage from '../sections/StudioPage'

function App() {
  const navigate = (path) => document.querySelector(path === '/work' ? '#work' : '#top')?.scrollIntoView({ behavior: 'smooth' })
  return <main><HeroSection onNavigate={navigate} /><StudioPage onNavigate={navigate} /></main>
}
export default App
