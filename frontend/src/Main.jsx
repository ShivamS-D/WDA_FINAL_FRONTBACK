import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home/home'
import Title from './components/title/title'
import Clients from './components/Clients/Clients'
import About from './components/about/about'
import Area from './components/area/area'
import Footer from './components/footer/footer'
const Main = () => {
  return (
    <div>
  <Home/>
  <Title para='Our Clients' head='Our Trusted members'/>
  <Clients/>
  <About/>
  {/* <Title para='About us' head='Get in touch'/> */}
{/* <Area/> */}
<Footer/>

    </div>
  )
}

export default Main
