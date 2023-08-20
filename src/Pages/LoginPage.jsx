import React, { useState } from 'react'

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const handleLogin=(e)=>{
    console.log(email,pass)
    fetch(`https://fullbackend-2ndtime-1.onrender.com/user/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,pass})
    }).then(res=>res.json())
    .then(res=>localStorage.setItem("token",res.token))
    .catch(err=>console.log(err.message))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter EMAIL"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="Enter password"
        value={pass}
        onChange={(e) =>
          setPass(e.target.value)
        }
      />
      <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default LoginPage
