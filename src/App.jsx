import { Helmet } from 'react-helmet'
import Nav from './components/Nav/Nav'
import Description from './components/Description/Description'
import Image from './components/Image/Image'
import './App.css'

function App() {

  return (
    <>
    <Helmet>
      <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=archivo@400&display=swap" rel="stylesheet"/>
    </Helmet>
      <Nav/>
      <Image/>
      <Description/>
    </>
  )
}

export default App