import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Description from './components/Description/Description'
import MainContent from './components/MainContent/MainContent'
import './App.css'
import { pageData } from './components/pageData'

function App() {
  const pages = Object.keys(pageData)


  const [currentPage, setCurrentPage]= useState("Home")
  const [prevPage, setPrevPage]=useState(null)

  const handlePageChange = (pageName) => {
    setPrevPage(currentPage);  
    setCurrentPage(pageName);
  }

  const defaultSkill = Object.keys(pageData.Skills.content)[0];
  const [hoveredSkill, setHoveredSkill] = useState(defaultSkill);

return (
  <>
    <Helmet>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=archivo@400&display=swap" rel="stylesheet"/>
    </Helmet>
    <div className="grid grid-cols-3 grid-rows-3 grid-layout h-full">
      <Nav prevPage={prevPage} currentPage={currentPage} handlePageChange={handlePageChange} pages={pages}/>
      <MainContent currentPage={currentPage} setHoveredSkill={setHoveredSkill}/>
      <Description currentPage={currentPage} hoveredSkill={hoveredSkill}/>
    </div>
  </>
)
}

export default App