import React from 'react'
import Login from './components/login/Login'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './Main'
import About from './components/about/about'
import Area from './components/area/area'
import Serive from './components/services/Service'
import Navbar from './components/navbar'
import Clients from './components/Clients/Clients'
const App = () => {
  const userData=localStorage.getItem("json")
  return (
    <div>

    <Router>
      <Navbar />
      <Routes>

{userData==="true"?<Route element={<Main/>} path='/' />:<Route element={<Login/>} path='/login'/>}
<Route element={<Login/>} path='/login'/>
<Route element={<Area/>} path='/about'/>
<Route element={<Main/>}   path= '/'/>
<Route element={<Serive/>  } path='/service'/>
<Route element={<Clients/>} path='/client'/>
  </Routes>
  </Router>
  </div>

  )
}

export default App
