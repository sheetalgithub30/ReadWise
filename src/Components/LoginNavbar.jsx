import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function LoginNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => alert(err.message));
  };

  // console.log(auth.currentUser)
  return (
    <div className="flex justify-between items-center shadow-md  bg-violet-400 px-20">
      <Link to="/home">
        <img src={logo} className="w-14 m-2"></img>
      </Link>
      <Link to="/chatbot">
        <motion.button whileTap={{ scale: 0.9 }}>CHATBOT</motion.button>
      </Link>
      <Link to="/notes">
        <motion.button whileTap={{ scale: 0.9 }}>NOTES</motion.button>
      </Link>

      <Link to="/translator">
        <motion.button whileTap={{ scale: 0.9 }}>TRANSLATOR</motion.button>
      </Link>
      <div>
      <h1>Welcome {auth.currentUser && auth.currentUser.displayName} !! </h1>
      {auth.currentUser && 
      <motion.div whileTap={{ scale: 0.9 }}>
      <button onClick={logout} className="bg-purple-900 text-white px-4 py-2 mx-3 rounded-2xl">Logout</button>
      </motion.div>
      }
      </div>
    </div>
  
  );
}

export default LoginNavbar;
