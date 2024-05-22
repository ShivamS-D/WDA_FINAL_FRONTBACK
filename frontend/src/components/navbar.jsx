import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [stic, setStic] = useState(false);
  const location=useLocation();
  const navigate = useNavigate();

const userDatas=(localStorage.getItem("json")) 
 // setIsAuthenticated(userData)
 const userData=JSON.parse(userDatas)

  const handleClick=()=>{
    localStorage.removeItem('json')
    navigate('/login')
  }
  // console.log(userData)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setStic(true) : setStic(false);
    });
  }, []);
  
  return (
    <nav className={`container ${stic ? 'dark-nav' : ''} ${location.pathname==='/about'?'nav_about':''} ${location.pathname==='/client'?'nav_client':''}`}>
      <h1 className="logo">NashaMukti</h1>
      {userData!==null?<p  style={{position:'relative',padding:"8px 10px",backgroundColor:"#0EE0F8", top:'5px', color:'red', fontSize:'20px',left:'40px',borderRadius:'20px' ,fontWeight:'bold'}}>{userData.true}</p>:null}
      <ul>
       
        <Link  className='heading' to={'/'}>Home</Link>
        {location.pathname === '/' ? <AnchorLink className='heading' href='#client'>Client</AnchorLink> : <Link to={'/client'}>Client</Link>}
        <Link  className='heading' to={'/about'}>About us</Link>
        <Link  className='heading' to={'/service'}>Services</Link>
        
        {userData===null?<Link to={'/login'}><button className='btn xyz'>Login</button></Link>:<button  className='btn xyz' style={{position:'relative', right:'-120px', top:'0'}} onClick={handleClick}>Logout</button>}

      </ul>
    </nav>
  )
}

export default Navbar;
