import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   
  const [data,setData]=useState([])
  const user=localStorage.getItem("user")
  
  useEffect(()=>{
    fetch('http://localhost:5000/allposts',{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
    .then(res=>res.json())
    .then(result=>{
     console.log(result.posts)
     setData(result.posts)
    })
  },[])

  const likecontrol=(id)=>{
    fetch('http://localhost:5000/likes',{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
        postId:id
      })
      
    })
    .then(res=>res.json())
    .then(result=>{
      const newData =data.map(item=>{
        if(item._id==result._id)
        {
          console.log(item)
          return result
        }
        else {
          return item
        }
      })
      setData(newData)
     })
  }
  const unlikecontrol=(id)=>{
    fetch('http://localhost:5000/unlikes',{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
        postId:id
      })
     
   
    })
    .then(res=>res.json())
    .then(result=>{
     // console.log(result.likes)
     const newData =data.map(item=>{
       if(item._id==result._id)
       {
        
         return result
       }
       else {
        
         return item
       }
     })
     setData(newData)
    })
  }
  const commentcontrol=(text,postId)=>{
    fetch('http://localhost:5000/comment',{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
       
        text,
        postId
      })
     
   
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
     const newData =data.map(item=>{
       if(item._id==result._id)
       {
        
         return result
       }
       else {
        
         return item
       }
     })
     setData(newData)
    })
  }


   const deletePost =(postId)=>{
     fetch(`http://localhost:5000/delete/${postId}`,{
       method:"DELETE",
       headers:{
        
        "Authorization":"Bearer "+localStorage.getItem("token")
      }


     })  .then(res=>res.json())
     .then(result=>{
       console.log(result)})
   }

  return (
    <div className='home'>

      {

        data.map(({_id,postTitle,postContent,photo,postedBy,likes,comments})=>{
         
          return(
            <div style={{display:"-moz-initial",

            backgroundColor:"white"
            }}
            
            
            
            
            
            className='card home-card'>
             
              <h1>{postedBy.name}{  <i  className="material-icons " style={{
                   float:"right"
                 }}   onClick={()=>{deletePost(_id)}}
                 
                 >delete</i>}</h1>
                
                 
               
       
                
                 <div className='card-image'>
                 <img  src={photo} className="card-img-top" alt="..."/>
                 </div>
           
               <div className="card-body">
                 
                 <h5 className="card-title ">{postTitle}</h5>
               
                 <i  className="material-icons "
                 
                 onClick={()=>{likecontrol(_id)}}
                 
                 >thumb_up </i>
                 <span className="material-icons"
                 
                 onClick={()=>{unlikecontrol(_id)}}
                 > thumb_down </span>
                  
             
                   <h5 className="card-title ">{likes.length} Likes</h5>
                 
                  <p className="card-text">{postContent}</p>
                   
                      {
                        comments.map(res=>{
                          return(<h6><span>{res.postedBy.name}</span> {res.text}</h6>)
                        })
                      } 
                  <form onSubmit={(e)=>{
                        e.preventDefault()
                        commentcontrol(e.target[0].value,_id)
                  }}>

                  <input style={{width:"100%"}} type='text'  />
                  </form>
                   
                
                
                </div>
              </div>
           
          )

        })



      }
        

        </div>   
    
  )
}

export default Home