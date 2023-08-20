import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
  const[author,setAuthor]=useState("")
  const[title,setTitle]=useState("")
  const {id}=useParams()
  console.log(id)
  const handleAdd=(e)=>{
    e.preventDefault()
    const payload={
      author:author,
      title:title
   }    
   fetch(`https://fullbackend-2ndtime-1.onrender.com/notes/update/${id}`,{
      method:"PATCH",
      headers:{
        "Authorization":localStorage.getItem("token"),
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err.message,"is message"))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Author"
        value={author}
        onChange={(e) =>
          setAuthor(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />
      <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default SingleProductPage 
