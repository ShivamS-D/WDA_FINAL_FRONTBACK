import React,{useRef} from 'react'
import './about.css'
import a1 from '../../assets/a1.jpg'
import a2 from '../../assets/a2.webp'
import a3 from '../../assets/a3.jpg'
import a4 from '../../assets/a4.webp'
const About = () => {
    const slider=useRef();
    let tx=0;
    const slidef=()=>{
if(tx>-50){
    tx-=25;
}
slider.current.style.transform=`translateX(${tx}%)`;

    }
    const slideb=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
        
    }
  return (
    <div className='container'>
        <div className='leeft'>
      <div className='left '>
      <button className='btn dark-btn cha l' onClick={slideb}>&#8592;</button>
      <button className='btn dark-btn cha r' onClick={slidef}>&#8594;</button>
<div  className='slider'>
    <ul ref={slider}>
        <li>
            <div className='slide'>
                <div className="drug">
                    <img src={a1}></img>
                    <div>
                      <h3>Alcohol</h3>  
                    </div>
                </div>
                <p>
                According to the World Health Organization (WHO), alcohol consumption is responsible for around 3 million deaths globally each year.Alcohol consumption is linked to a wide range of health conditions, including liver disease, cardiovascular diseases, certain types of cancer
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="drug">
                    <img src={a2}></img>
                    <div>
                      <h3>Drugs</h3>  
                    </div>
                </div>
                <p>
                The survey estimated that there are approximately 3.1 crore drug users in India.Drug abuse can lead to a wide range of health problems, including addiction, mental health disorders, cardiovascular issues, respiratory problems
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="drug">
                    <img src={a3}></img>
                    <div>
                      <h3>Smoking</h3>  
                    </div>
                </div>
                <p>
                in collaboration with the World Health Organization (WHO), the prevalence of smoking among adults (age 15 and above) in India is approximately 28.6%. It is associated with a wide range of health problems, including lung cancer, chronic obstructive pulmonary disease 
                </p>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className="drug">
                    <img src={a4}></img>
                    <div>
                      <h3>Tobacco</h3>  
                    </div>
                </div>
                <p>
                Smokeless tobacco use is more prevalent in India, with a prevalence of 21.4% among adults.Tobacco use is a major risk factor for various types of cancer, including lung cancer 
                </p>
            </div>
        </li>
    </ul>
</div>
      </div>
      </div>
      </div>
  )
}

export default About
