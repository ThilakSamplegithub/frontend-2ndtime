import React, { useState } from 'react'

const AddNotes = () => {
    const [author,setAuthor]=useState("")
    const [title,setTitle]=useState("")
    const handleAdd=(e)=>{
        fetch(`https://fullbackend-2ndtime-1.onrender.com/notes/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":localStorage.getItem("token")
      },
      body: JSON.stringify({author,title}),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then(res=>console.log(res))
      .catch((err) => console.log(err.message, "is error message"));
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

export default AddNotes
