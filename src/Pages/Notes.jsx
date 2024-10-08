import React, { useEffect, useState } from "react";
import LoginNavbar from "../Components/LoginNavbar";
import Note from "../Components/Note";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";

function Translator() {

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
          <h1 className="text-5xl font-bold my-6 text-violet-900 max-sm:text-2xl text-center">
            Welcome to our note-taking feature!
          </h1>
        </div>
        <p className="text-2xl text-blue-800 text-wrap w-[50%] m-auto text-center max-sm:w-[90%] max-sm:text-lg">
          Easily jot down thoughts, ideas, or favorite quotes while exploring
          books on our website. Edit or delete notes anytime to stay organized
          and enhance your reading experience. Start taking notes today to
          engage with books on a deeper level!
        </p>
      </div>
      <div className="">
        <div className="flex justify-center">
          <img
            src="https://media1.giphy.com/media/hrixdHEyXD88TzFefp/giphy.gif?cid=6c09b95292zm4k5dtjuw6yt7emmsc3bvpkaewobafau4g0nh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            className="w-80"
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-purple-700 font-semibold">
            Create Your Own Notes 📝
          </h2>
          <Note />
        </div>

      </div>
      <Footer/>
      </>)}
    </>
  );
}

export default Translator;
