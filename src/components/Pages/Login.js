import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {



  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate()
  const signinData=()=>{
    fetch("http://localhost:5000/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
         
         email,
         password,
      })

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      localStorage.setItem("token",data.token)
      localStorage.setItem("user",JSON.stringify(data.user))
       navigate('/profile')
    })
   
  }


  return (
    
    <div className='cotainer card mycard logincard' >
          <div className="mb-3 row">
<label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="email" value={email} className="form-control" id="inputEmail" placeholder="email@example.com"
onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
</div>
<div className="mb-3 row ">
<label for="inputPassword" className="col-sm-2 col-form-label ">Password</label>
<div className="col-sm-10">
<input type="password" value={password}  className="form-control" id="inputPassword" placeholder="password"
onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
</div>
  <div className="mb-3 row  ">
    
    <div className="col-sm-10 center">
    <button type="button" className="btn btn-info"
    onClick={()=>{signinData()}}
    
    >Login</button>
    </div>
  </div>
  <h5 className='left'>
  <Link  to="/signup">create an account</Link>
  </h5>


    </div>
             
  
      
  
  
  )
}

export default Login