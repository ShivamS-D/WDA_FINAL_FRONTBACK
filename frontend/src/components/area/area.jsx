import React from 'react'
import './area.css'
import mail from '../../assets/mail.jpg'
import locate from '../../assets/locate.png'
import phone from '../../assets/phone.png'
import maill from '../../assets/maill.png'
import Footer from '../footer/footer'
import Title from '../title/title'
const area = () => {
  return (
    <div>
    <div className='contact'>
        <div className='contact-col'>
<h3>Send us a message<img src={mail}></img></h3>
<p>
    Feel free to react out through our contact information below.
    Listening to your problem is our topmost priority and your questions are important to us as we strive to provide exceptional service to you.
</p>
<ul>
    <li><img src={maill}></img>nashamukti@gmail.com</li>
    <li><img src={phone}></img>+1 123-456-789</li>
    <li><img src={locate}></img>77 Andheri West,Mumbai<br/>Maharashtra,India </li>
</ul>
        </div>
        <div className='contact-col right'>
        <h3>About Our website</h3>
        <h2>Making addiction free world</h2>
        <p>
        Welcome to our website! We are dedicated to helping you overcome addiction, no matter what form it takes. Whether it's alcohol, drugs, or any other substance, we are here to guide you towards the best Nasha Mukti Kendra (de-addiction center) in India tailored to your needs and symptoms. 
        </p>
        <p>
        You can reach out to us directly, or visit our services page to request a counselor to come to your home for a comprehensive assessment. With their report, we'll work with you to find the best path forward. Let's fight addiction together.
        </p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default area
