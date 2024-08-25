import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import {motion} from "framer-motion";

function Navbar() {
  return (
    <div className='flex justify-between items-center shadow-md'>
        <img src={logo} className='w-14 m-2'></img>
        <div className='text-xl'>
            <Link to="/">
            <motion.button 
             whileTap={{scale:0.9}}
            className='bg-purple-800 text-white px-4 py-2 mx-3 rounded-2xl'>Login</motion.button></Link>
            <Link to="/register">
            <motion.button
               whileTap={{scale:0.9}}
            className='bg-purple-800 text-white px-4 py-2 mx-3 rounded-2xl'>Register</motion.button></Link>
        </div>
    </div>
  )
}

export default Navbar