import React, { useState } from 'react'
import "./CSS/Login.css"

const LoginSignup = () => {
  const[state,setState]=useState("Login");

  const [formData,setformData]=useState({
    username:"",
    password:"",
    email:""

  })
   const changehandler=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
   }

const login=async()=>{
  console.log("login function",formData)
  let responseData;
  await fetch('http://localhost:4000/login',{
    method:"POST",
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }else{
    window.alert(responseData.error);
  }
}

const signup=async()=>{
  console.log("signup function",formData)
  let responseData;
  await fetch('http://localhost:4000/signup',{
    method:"POST",
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }else{
    window.alert(responseData.error);
  }
}

  return (
    <div className='login'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fileld">
                {state==="Sign up" ? <input type='text' name='username' value={formData.username} onChange={changehandler} placeholder='Your Name' />:<></>}
                <input type='email' name='email' value={formData.email} onChange={changehandler} placeholder='Your Email' />
                <input type='password'  name='password' value={formData.password} onChange={changehandler} placeholder='Password' />

            </div>
            <button  onClick={()=>{ {state==="Sign up" ? signup():login()}}}>Continue</button>
            {state==="Sign up" ?<p className='loginsignup-login'>Already have a account?<span onClick={()=>{setState('Login')}}>Login here</span></p>:<></>}
            {state==="Sign up" ?<></>:<p className='loginsignup-login'>Dont have a account?<span onClick={()=>{setState('Sign up')}}>Create Account here</span></p>}
           <div className="loginsignup-agree">
                <input type="checkbox" name="" id=''/>
                <p className="">By Continue, i agree to the term of user & privacy policy</p>
            </div>
  
        </div>
      
    </div>
  )
}

export default LoginSignup
