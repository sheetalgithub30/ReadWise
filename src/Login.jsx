import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";

import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => navigate("/home"))
      .catch((err) => alert(err.message));
  };

  return (
    <>
    <Navbar/>
    <div className="h-[88vh] flex justify-center items-center">
    <div className=" p-10 rounded-3xl bg-purple-500 shadow-2xl shadow-gray-950 text-center ">
      <h1 className="font-bold text-4xl text-white m-6">Login</h1>
      <form onSubmit={login} className="text-2xl">
        <div className="m-4 border-2 border-purple-950">
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          placeholder="Email"
          className="p-1"
        />
        </div>
      <div className="m-4 border-2 border-purple-950">
      <input
          onChange={(e) => setPass(e.currentTarget.value)}
          type="text"
          placeholder="Password"
          className="p-1"
        />
      </div>
     
      <motion.div
        className="m-4"
         whileTap={{scale:0.9}}
        >
<input type="submit" value="Login" id="button" className="bg-purple-900 text-white px-4 py-2 mx-3 rounded-2xl"  />

</motion.div>
      </form>
    </div>
    </div>
    </>
  );
}


export default Login;