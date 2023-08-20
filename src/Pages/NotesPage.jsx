import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NotesPage = () => {
    const[notes,setNotes]=useState([])
    useEffect(()=>{
       fetch(`https://fullbackend-2ndtime-1.onrender.com/notes`,{
        method:"GET",
        headers:{
            "Authorization":localStorage.getItem("token")
        }
       })
       .then((res)=>res.json())
       .then(res=>setNotes(res))
       .catch(err=>console.log(err.message))
    },[])
    function handleDelete(id){
        console.log(id)
        fetch(`https://fullbackend-2ndtime-1.onrender.com/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        {notes.map(({author,title,_id},i)=>
        <ol key={i} style={{listStyleType:"none"}} >
        <li>author:{author}</li>
        <li>title:{title}</li>
        <Link to={`/update/${_id}`}><button>edit</button></Link>
        <button onClick={(e)=>handleDelete(_id)}>delete</button>
        </ol>
        )}
    </div>
  )
}

export default NotesPage
