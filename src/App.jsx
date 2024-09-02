import React, { createContext, useState } from 'react'
import Register from './Register'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Notes from './Pages/Notes'
import Translator from './Pages/Translator'
import Chatbot from './Pages/Chatbot'
import Home from './Home'
import AllFiction from './Pages/AllFiction'
import NonFiction from './Pages/NonFiction'
import Historical from './Pages/Historical'
import Travel from './Pages/Travel'
import BusinessEconomics from './Pages/BusinessEconomics'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path ="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/allFiction" element={<AllFiction/>}></Route>
      <Route path="/allnonFiction" element={<NonFiction/>}></Route>
      <Route path="/allhistorical" element={<Historical/>}></Route>
      <Route path="/alltravel" element={<Travel/>}></Route>
      <Route path="/allbusiness&economics" element={<BusinessEconomics/>}></Route>
      <Route path="/notes" element={<Notes/>}></Route>
      <Route path="/translator" element={<Translator/>}></Route>
      <Route path="/chatbot" element={<Chatbot/>}></Route>   
     </Routes>
    </>
  )
}

export default App;