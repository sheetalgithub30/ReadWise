import React, { useEffect, useState } from "react";
import LoginNavbar from "../Components/LoginNavbar";
import Gemini from "../Components/Gemini";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";

function Chatbot() {
  const[isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setIsLoading(false);
    },1000)
  },[])

  return (
    <>
      {isLoading ?(
   <div className='w-screen h-screen flex items-center justify-center
   overflow-hidden'>
      <Spinner/>
   </div>
   ):(<>
      <LoginNavbar />
      <div>
        <div className="flex  justify-center items-center max-sm:block">
          <h1 className="text-5xl font-bold m-6 text-violet-900 max-sm:text-2xl text-center">
            Welcome to our book chatbot!
          </h1>
        </div>
        <p className="text-2xl text-blue-800 text-wrap w-[50%] m-auto text-center max-sm:w-[90%] max-sm:text-lg">
          Simply type in your interests or questions, and our chatbot will
          provide personalized book recommendations, genre exploration, author
          details, and more. With our chatbot, finding your next favorite book
          is fast, convenient, and tailored just for you. Start chatting now to
          embark on your literary adventure!
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">

      <img src="https://media.tenor.com/ta8QTcTW3OwAAAAM/st-george-georgi.gif" ></img>
        </div>

        <Gemini/>
      </div>
      <Footer/>
      </>
      )}
    </>
  );
}

export default Chatbot;
