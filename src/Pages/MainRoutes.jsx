import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import HomePage from './HomePage'
import SingleProductPage from './SingleProductPage'
import NotesPage from './NotesPage'
import AddNotes from './AddNotes'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signup" element={<SignupPage/>} />
<Route path="/login" element={<LoginPage/>}/>
<Route path="/getNotes" element={<NotesPage/>}/>
<Route path="/add" element={<AddNotes/>} />
<Route path="update/:id" element={<SingleProductPage/>}/>
    </Routes>
  )
}

export default MainRoutes
