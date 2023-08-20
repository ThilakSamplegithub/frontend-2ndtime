import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const arr=[
        {path:"/",element:"Home"},
        {path:"/login",element:"Login"},
        {path:"/signup",element:"Register"},
        {path:"/add",element:"AddNotes"},
        {path:"/getNotes",element:"Notes"}
    ]
  return (
    <div >
      {arr.map(({path,element},i)=><Link key={i} to={path}>{element}</Link>)}
    </div>
  )
}

export default Navbar
