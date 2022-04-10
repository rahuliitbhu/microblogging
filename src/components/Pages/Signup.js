import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {

     const [name,setName]=useState("")
     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")


     const signupData=()=>{
       fetch("http://localhost:5000/signup",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
            name,
            email,
            password,
         })

       })
       .then(res=>res.json())
       .then(data=>{
         console.log(data)
       })
     }





  return (
    <div className='cotainer card  mycard signupcard' >
        

        
        <div className="mb-3 row">
<label for="inputText" className="col-sm-2 col-form-label">Name</label>
<div className="col-sm-10">
<input type="text" value={name} className="form-control" id="inputText" placeholder="Tony Stark"
 onChange={(e)=>{setName(e.target.value)}}

/>
</div>
</div>


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
onClick={()=>{signupData()}}
>Signup</button>
</div>
</div>
<h5>
  <Link to="/login">Already have an account?</Link>
  </h5>


</div>
  

 
  )
}

export default Signup