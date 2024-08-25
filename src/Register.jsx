import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import { auth } from "./firebase.js";
import Navbar from "./Navbar.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const obj = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(obj.user, {
        displayName: name,
      });
      alert("New User Added Successfully !!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="h-[88vh] flex justify-center items-center">


    <div className=" p-10 rounded-3xl bg-purple-500 shadow-2xl shadow-gray-950 text-center ">
      <h1 className="font-bold text-4xl text-white m-6">Sign Up</h1>
      <form onSubmit={handleSignup} className="text-2xl">
      <div className="m-4 border-2 border-purple-950">
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            placeholder="Name"
      className="p-1"
          />
        </div>
        <div className="m-4 border-2 border-purple-950 ">
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
            type="password"
            placeholder="Password"
            className="p-1"
          />
        </div>
       
        <motion.div
        className="m-4"
         whileTap={{scale:0.9}}
        >
          <input type="submit" value="SignUp" id="button" className="bg-purple-900 text-white px-4 py-2 mx-3 rounded-2xl" />
        </motion.div>
       
      </form>
    </div>
    </div>
    </>
  );
}
