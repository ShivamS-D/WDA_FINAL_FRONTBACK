import React, { useEffect, useState } from 'react';
import './Login.css';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [flipped,setFlipped]=useState(false);
    const [isAnimating,setIsAnimating]=useState(false);
    const [loading,setLoading]=useState(false);
    const [giveTitle, setGiveTitle] = useState('Login');
    const [forgetLogin,setForgetLogin]=useState(false)
    const [validationPassword,setValidationPassword]=useState({})
    const [create,setCreating]=useState(false);
    const [validateMessage,setValidateMessage]=useState('')
const navigate=useNavigate();
    const flipCard = () => {
        if(!isAnimating){
            setFlipped(!flipped)
            setIsAnimating(true)
        }
        setIsLoggedIn(!isLoggedIn);
    };

    const hideShow = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if(flipped){

        }
    }, [isLoggedIn]);

const [error,setError]=useState({emailError:'',passwordError:''})
const [forgetError,setForgetError]=useState('')
const [signUpError,setSignUpError]=useState('')
const [isValid,setisValid]=useState(false)
const [creating,setIsCreating]=useState(false);
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        name:"",
     
      })

    const [loginFormData,setLoginFormData]=useState({
        email:'',
        password:''
    })

    const [validCode,setValidCode]=useState('')
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
        
      }
      const handleLoginChange=(e)=>{
        const {name,value}=e.target;
        setLoginFormData({...loginFormData,[name]:value})
        
      }
      const handleSubmit=async (e)=>{
        setCreating(true)
        e.preventDefault()
        setIsCreating(true);
        const response=await fetch('http://localhost:9090/',{
          method:"POST",
          body:JSON.stringify(formData),
          headers:{
            'Content-Type':'application/json'
          }
    
        })
        const json=await response.json()
        if(!response.ok){
          setIsCreating(false)
            setSignUpError("User already Exists");  
            setCreating(false)
            
        }
        if(response.ok){  
          setIsCreating(false)
          setError('')
          // console.log('User created',json);
          setisValid(true);
setValidationPassword(json)
setCreating(false)
        
        }
        
        
        
      }

      
          const [validationError,setValidationError]=useState('')
      
      if(validationPassword==validCode){

        navigate('/')
      }
      
      const handleLoginSubmit=async (e)=>{
        setLoading(true)

        e.preventDefault()
       
        const response=await fetch('http://localhost:9090/login',{
          method:"POST",
          body:JSON.stringify(loginFormData),
          headers:{
            'Content-Type':'application/json'
          }
    
        })
        const json=await response.json()
        if(!response.ok){
            setError("Invalid credentials");  
            setError(json.body)
            console.log(error)
            setLoading(false)
        }
        if(response.ok){
          setLoading(false)
          setLoginFormData({email:'',password:''})
          setError('')
          const objString=JSON.stringify(json)
          console.log(objString)
          localStorage.setItem("json",objString);
          navigate('/')

    
    
        }
      }
      const handleValidationChange=(e)=>{
        setValidCode(e.target.value);
      }
      const handleForgotPassword=async ()=>{
        try{
          
          if(loginFormData.email.length!==0){
             setForgetLogin(true)

             const response=await fetch(`http://localhost:9090/forget/${loginFormData.email}`,{
             method:"POST",
             headers:{
               "Content-type":"Application/JSON"
             }
     
             })
             console.log(response)
             const json=await response.json();
             if(!response.ok)
             {
               setForgetLogin(false)
              
               setForgetError(json.error);
              }
              if(response.ok){
               setForgetLogin(false)
     
               console.log(json)
             }
           }
        }
        catch(e){
          console.log(e)
        }
      }
    return (
        
        <div className="contained">
            <div className="card" >
                <motion.div  className="inner-box" initial={false} animate={{rotateY:flipped?180:360}} transition={{duration:0.6}} onAnimationComplete={()=>{setIsAnimating(false); 
            setGiveTitle(isLoggedIn ? 'Register' : "Loginnggg")}
            
            }>
                    <div className="card-front">
                        <h2>{giveTitle}</h2>
                        <form action="" onSubmit={handleLoginSubmit}>
                          {error.emailError?<p style={{color:'red'}}>{error.emailError}</p>:null}

                            <input type="email" className="input-box" placeholder="Your Email ID" name='email' required onChange={handleLoginChange}/>

                            {error.passwordError?<p style={{color:'red'}}>{error.passwordError}</p>:null}
                            <input type={showPassword ? 'text' : 'password'} name='password' className="input-box" id="password" placeholder="Password" required onChange={handleLoginChange}/>
                            <input type="checkbox" onChange={hideShow} /><span>Show Password</span>
                            <button type="submit" className="submit-btni">{loading?"Logging...":"Login"}</button>
                            <input type="checkbox" name="" id="" /><span>Remember Me</span>
                        </form>
                        <button type="button" 
                         style={{backgroundColor:'#0EE0F8', color:"black", position:'relative', bottom:'30px',fontWeight:'bold'}}
                        className="btni" onClick={flipCard}>New User</button>
                        {forgetError.length!==0?<p  style={{color:'red',position:'relative',bottom:'10px'}}>{forgetError}</p>:null}
                        <button onClick={handleForgotPassword} style={{backgroundColor:'#0EE0F8', color:"black",
                        fontWeight:'bold', position:'relative', bottom:'40px'}}>{forgetLogin?'Sending Password':'Forget'}</button>
                    </div>
                    <div className="card-back">
                        <h2>REGISTER</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" className="input-box" name='name' onChange={handleChange} placeholder="Your Name" required />
            {signUpError?<p style={{color:'red'}}>{signUpError}</p>:null}

                            <input type="email" className="input-box" name="email" 
                            onChange={handleChange} 
                            placeholder="Your Email ID" required />
                            {validationError.length!==0?<p style={{color:'red'}}>{validationError}</p>:null}
                            {isValid?( <input type="text" className="input-box"  
                            onChange={handleValidationChange} 
                            placeholder="Your Validation code" required />):null}
                            <input type={showPassword ? 'text' : 'password'} 
                            name="password" className="input-box" id="password"
                            onChange={handleChange} 
                            placeholder="Password" required />
                            <input type="checkbox" onChange={hideShow} /><span>Show Password</span>
                            <button type="submit" className="submit-btn">{create?'Creating User':'Create'}</button>
                            <input type="checkbox" name="" id="" /><span>Remember Me</span>
                        </form>
                        <button type="button" className="btni" onClick={flipCard}>Already have an Account?<span><i className="fas fa-user"></i> Login</span></button>
                        <a href="">Forgot Password</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
