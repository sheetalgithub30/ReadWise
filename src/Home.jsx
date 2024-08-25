import React, { useEffect } from "react";
import { auth } from "./firebase";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import LoginNavbar from "./Components/LoginNavbar";

export default function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth.currentUser === null) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div>
      <LoginNavbar/>
    </div>
  );
}