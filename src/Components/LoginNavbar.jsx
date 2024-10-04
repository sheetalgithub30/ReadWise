import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


function LoginNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => alert(err.message));
  };

  const[ham,setHam] = useState(false)
  // console.log(auth.currentUser)
  return (
    <div className="flex justify-between items-center shadow-md  bg-violet-400 px-20 max-sm:px-3 ">
      <Link to="/">
        <img src={logo} className="w-14 m-2"></img>
      </Link>
      <Link to="/chatbot" className="max-md:hidden text-2xl font-semibold">
        <motion.button whileTap={{ scale: 0.9 }}>CHATBOT</motion.button>
      </Link>
      <Link to="/notes" className="max-md:hidden  text-2xl font-semibold">
        <motion.button whileTap={{ scale: 0.9 }}>NOTES</motion.button>
      </Link>

      <Link to="/translator" className="max-md:hidden  text-2xl font-semibold">
        <motion.button whileTap={{ scale: 0.9 }}>TRANSLATOR</motion.button>
      </Link>
      {/* <div className="max-md:hidden flex items-center">
      <h1>Welcome {auth.currentUser && auth.currentUser.displayName} !! </h1>
      {auth.currentUser && 
      <motion.div whileTap={{ scale: 0.9 }}>
      <button onClick={logout} className="bg-purple-900 text-white px-4 py-2 mx-3 rounded-2xl">Logout</button>
      </motion.div>
      }
      </div> */}
      <div className="hidden max-md:block" onClick={()=>{setHam(!ham)}}>
        {ham?
        <div className="bg-white absolute top-16 right-2 z-10">

        <ul>
          <li className="border-2 border-gray-400 p-2">
          <Link to="/chatbot">
        <motion.button whileTap={{ scale: 0.9 }}>CHATBOT</motion.button>
          </Link>
          </li>

          <li className="border-2 border-gray-400 p-2"> <Link to="/notes">
        <motion.button whileTap={{ scale: 0.9 }}>NOTES</motion.button>
      </Link></li>

      <li className="border-2 border-gray-400 p-2">
      <Link to="/translator" >
        <motion.button whileTap={{ scale: 0.9 }}>TRANSLATOR</motion.button>
      </Link>
      </li>

      {/* <li className="border-2 border-gray-400 p-2">
      {auth.currentUser && 
      <motion.div whileTap={{ scale: 0.9 }}>
      <button onClick={logout} className="bg-purple-900 text-white px-4 py-2 mx-3 rounded-2xl">Logout</button>
      </motion.div>
      }
      </li> */}
        </ul>

        </div>:<>
        </>}
        <RxHamburgerMenu className="text-3xl " />
      </div>
    </div>
  
  );
}

export default LoginNavbar;
