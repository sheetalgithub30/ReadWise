import React from "react";
import LoginNavbar from "../Components/LoginNavbar";
import Gemini from "../Components/Gemini";

function Chatbot() {
  return (
    <>
      <LoginNavbar />
      <div>
        <div className="flex  justify-center items-center">
          <h1 className="text-6xl font-bold m-6 text-violet-900">
            Welcome to our book chatbot!
          </h1>
          <img src="https://media.tenor.com/ta8QTcTW3OwAAAAM/st-george-georgi.gif"></img>
        </div>
        <p className="text-2xl text-blue-800 text-wrap w-[50%] m-auto text-center">
          Simply type in your interests or questions, and our chatbot will
          provide personalized book recommendations, genre exploration, author
          details, and more. With our chatbot, finding your next favorite book
          is fast, convenient, and tailored just for you. Start chatting now to
          embark on your literary adventure!
        </p>
      </div>
      <div className="my-20">
        <Gemini/>
      </div>
    </>
  );
}

export default Chatbot;
