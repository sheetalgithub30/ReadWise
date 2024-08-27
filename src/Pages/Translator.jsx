import React from "react";
import LoginNavbar from "../Components/LoginNavbar";
import TextTranslator from "../Components/TextTranslator";

function Translator() {
  return (
    <>
      <LoginNavbar />
      <div>
        <div className="flex  justify-center items-center">
          <h1 className="text-5xl font-bold my-6 text-violet-900">
            Welcome to our Book translator feature!
          </h1>
        </div>
        <p className="text-2xl text-blue-800 text-wrap w-[50%] m-auto text-center">
          With our tool, you can effortlessly translate movie titles,
          descriptions, and reviews between any languages. Break language
          barriers, explore global cinema, and connect with international
          audiences seamlessly. Enhance your movie-watching experience with our
          movie translator!
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">
        <img src="https://cdn-icons-gif.flaticon.com/11935/11935085.gif" className="w-80"></img>
        </div>
<div className="flex m-auto justify-center">
<TextTranslator />
</div>
        
      </div>
    </>
  );
}

export default Translator;
