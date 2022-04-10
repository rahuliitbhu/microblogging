import React, { useState,useEffect } from 'react'

const Createpost = () => {
  const [title,setTitle]= useState("")
  const [post,setPost]=useState("")
  const [image,setImage]=useState("")
  const [url,setUrl]=useState("")

  
  useEffect(()=>{
    
    if(url)
    {
    fetch("http://localhost:5000/createpost",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body:JSON.stringify({
           
          postTitle:title,
          postContent:post,
          photo:url,
          
        })
  
      })
      .then(res=>res.json())
      .then(data=>{
        
        setUrl(data.url)
      })
    }
  },[url])

  const postSubmit=(e)=>{
    const imgData = new FormData();
    imgData.append('file', image);
    imgData.append('upload_preset','microblogging')
    imgData.append('cloud_name','du6ezjp1i')
    

    fetch("https://api.cloudinary.com/v1_1/du6ezjp1i/image/upload",{

    method:"POST",
    body:imgData
    })
    .then(res=>res.json())
    .then(data=>{
     
      setUrl(data.url)
    })

    
      

  } 



  return (
    <div className='card input-field'>

        <input style={{height:"40px"}} type='text' placeholder='title' 
        
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <div style={{height:"70%"}} className="input-group">
            
            <input className="form-control" 
            type='text'
            aria-label="With textarea"
            value={post}
            onChange={(e)=>{setPost(e.target.value)}}
            
            />
        </div>
        
        <div className="input-group mb-3">
         <input type="file" className="form-control" id="inputGroupFile02"
        onChange={(e)=>{setImage(e.target.files[0])}}
         />
        
        </div>
      
        <button type="button" className="btn btn-info"
        
        onClick={()=>{postSubmit()}}
        >Submit Post</button>
    </div>
  )
}

export default Createpost