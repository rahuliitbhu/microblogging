import React, { useEffect,useState } from 'react'

const Profile = () => {
 const [pic,setPic]=useState([])
 const user=JSON.stringify(localStorage.getItem("user"))
  useEffect(()=>{
    fetch('http://localhost:5000/postbyuser',{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then(result=>{
    // console.log(result.posts)
     setPic(result.posts)
    
    })
  },[])


  return (
    

        <div style={{
         
          maxWidth:"80%",
          margin:"0px auto"
        }}>
          <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
          }}>
            <div>
            <img className='profileimg' src="https://images.unsplash.com/photo-1520183802803-06f731a2059f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            </div>
            <div>
               <h1>{user.name}</h1>
               <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            width:"110%"
          }}>
                 <h6>
                   50 Posts
                 </h6>
                 <h6>
                   50 following
                 </h6>
                 <h6>
                   50 followers
                 </h6>
               </div>
            </div>
          </div>
          <div className='gallery'>

            {
              pic.map(({photo})=>{
                return( <img className='items' src={photo} />)
               
              })
            }
            
           
          </div>
        </div>
    
  )
}

export default Profile