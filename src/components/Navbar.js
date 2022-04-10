import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

   const token=localStorage.getItem("token")
   const navigate=useNavigate()

  return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end "  id="navbarNav">
      <ul className="navbar-nav">
      {
     token?<>
     <li className="nav-item">
<Link className="nav-link" to="/profile">Profile</Link>
</li>


<li className="nav-item">
<Link className="nav-link" to="/createpost">Create Post</Link>
</li>
<li className="nav-item">
<button type="button" className="btn btn-info"
    onClick={()=>{
      
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.clear()
      navigate('/')


    }}
    
    >logout</button>
</li>
     </>
     :
     <>
   
<li className="nav-item">
<Link className="nav-link" to="/signup">Signup</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>

     </>


      }
       
      </ul>
    </div>
  </div>
</nav>


  
  )
}

export default Navbar