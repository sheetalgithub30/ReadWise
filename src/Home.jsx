import React, { useEffect } from "react";
import { auth } from "./firebase";
import bottom from "./assets/bottom.svg"

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

  const data =[
    {
      type:"FICTION",
      subject:"fiction",
    },{
      type:"NON FICTION",
      subject:"nonfiction",
    },{
      type:"HISTORICAL",
      subject:"historical",
    },{
      type:"TRAVEL",
      subject:"travel",
    },{
      type:"BUSINESS ECONOMICS",
      subject:"business economics",
    }
  ]
  return (
    <div>
      <LoginNavbar/>
      <div className="bg-hero bg-cover h-[85vh] w-[100%]  bg-[center_bottom_3rem] relative">
          <div className="pt-16 text-center  text-white">

        <h1 className=" text-7xl font-extrabold"
        style={{   WebkitTextStroke: "1px black",
          WebkitTextFillColor: "white",}}
        >ReadWise</h1>
        <p className="text-3xl text-white font-bold mt-5"
                style={{   WebkitTextStroke: "1px black",
                  WebkitTextFillColor: "white",}}>Unlock New Worlds, One Page at a Time.
        Explore Books Now!</p>
          </div>
      <div className=" absolute bottom-[-20px]">
          <img src={bottom}></img>
        </div>
      </div>
           

      <div className="mt-5">
            {data.map((e)=>{
              return <h1>{e.type}</h1>
            })}
      </div>
    </div>
  );
}