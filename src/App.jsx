import React from 'react'
import Register from './Register'
import LogIn from './LogIn'
import { Route, Routes } from 'react-router-dom'
import Notes from './Pages/Notes'
import Translator from './Pages/Translator'
import Chatbot from './Pages/Chatbot'
import Home from './Home'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LogIn/>}></Route>
      <Route path ="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/notes" element={<Notes/>}></Route>
      <Route path="/translator" element={<Translator/>}></Route>
      <Route path="/chatbot" element={<Chatbot/>}></Route>
     </Routes>
    </>
  )
}

export default App