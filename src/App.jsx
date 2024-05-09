import { Helmet } from 'react-helmet'
import { useState, useEffect ,useRef } from 'react'
import gsap from 'gsap'
import Nav from './components/Nav/Nav'
import MainContentAfter from './components/MainContentAfter'
import './App.css'
import { pageData } from './components/pageData'

function App() {
  const pages = Object.keys(pageData)

  const [cursorClass, setCursorClass] = useState('')


  const [currentPage, setCurrentPage]= useState("Home")

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      rotation: "+=360",
      repeat: -1,
      ease: "linear",
      duration: 2,
      overwrite: true,
    });
    setCursorClass('hovering-button');
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(cursorRef.current);
    setCursorClass('');
  };


  const handlePageChange = (pageName) => { 
    setCurrentPage(pageName);
  } 
  const flashlightRef1 = useRef(null);
  const cursorRef = useRef(null);
useEffect(() => {
  let animationFrameId;

  const moveFlashlight = (e) => {
    if (flashlightRef1.current) {
      const rect = flashlightRef1.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(flashlightRef1.current, {
        '--Xpos': `${x}px`,
        '--Ypos': `${y}px`,
        duration: 0.5,
        onUpdate: () => {
          flashlightRef1.current.style.setProperty('--Xpos', `${x}px`);
          flashlightRef1.current.style.setProperty('--Ypos', `${y}px`);
        },
        ease:'circ.in'
      });
    }

  if (cursorRef.current && cursorClass !== 'hovering-button') {
  const cursorWidth = cursorRef.current.offsetWidth;
  const cursorHeight = cursorRef.current.offsetHeight;

  gsap.to(cursorRef.current, {
    x: e.clientX - cursorWidth / 2,
    y: e.clientY - cursorHeight / 2,
    duration: 0.1,
  });
}
  };

  const handleMouseMove = (e) => {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = window.requestAnimationFrame(() => moveFlashlight(e));
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.cancelAnimationFrame(animationFrameId);
  };
}, []);


return (
  <>
    <Helmet>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=archivo@400&display=swap" rel="stylesheet"/>
    </Helmet>
    <div className={`cursor ${cursorClass}`} ref={cursorRef}></div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} pages={pages} onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} />
    <div className='mainContent h-5/6 flex flex-col' ref={flashlightRef1}>
      <img src={pageData[currentPage].content} className='heroImg' alt="" />
    <MainContentAfter/>
    </div>
    <div className='description'>
    <h1 className='heroTitle'><span>Tanguy </span><br /><span>L'Alexandre</span></h1>
    <h2 className='jobTitle'>Junior Software Developer</h2>
    </div>
  </>
)
}

export default App