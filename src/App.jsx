import { useState } from 'react'
import HomePage from './components/Homepage/index'
import AboutMePage from './components/Aboutme/index'
import ProjectsPage from './components/Projects/index'
import SkillsPage from './components/Skills/index'
import ContactPage from './components/Contact/index'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutMePage />
      case 'projects':
        return <ProjectsPage />
      case 'skills':
        return <SkillsPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About Me</button>
        <button onClick={() => setPage('projects')}>Projects</button>
        <button onClick={() => setPage('skills')}>Skills</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>
      {renderPage()}
    </>
  )
}

export default App