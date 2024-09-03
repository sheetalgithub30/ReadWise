import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion";

function SingleComponent({src,title,auth_name,publisher,p_date,desc,buy_link,preview_link,info_link,setClick}) {

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 60,
      left: 0,
      behavior: "smooth",
    });
});

const [speak,setSpeak] = useState(false);
function target(){
  let utterance = new SpeechSynthesisUtterance(`${desc}`);
  setSpeak(!speak)
      // utterance.lang = "eng";
      if(speak){
        speechSynthesis.cancel(utterance);

      }else{
        speechSynthesis.speak(utterance);

      }
}


  return (
    <div className='p-4 shadow-2xl shadow-purple-600 rounded-3xl relative'>
        <div className='flex items-center max-sm:block'>
        <img src={src} className='w-60 h-72' ></img>
        <div className='p-5 text-2xl  w-full'>
             <p><span className='font-bold text-blue-700'>Title:</span>{title}</p>
              <p><span className='font-bold text-blue-700'>Author-name:</span>{auth_name}</p>
              <p ><span className='font-bold text-blue-700'>Publisher:</span>{publisher}</p>
              <p><span className='font-bold text-blue-700'>Published Date:</span>{p_date}</p>
              <div className='text-xl flex flex-wrap'>
            <Link to={buy_link} target="_blank" className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>Buy Now</Link>
            <Link to={info_link} target="_blank" className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>Get Info</Link>
            <Link to={preview_link} target="_blank"className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>View Preview</Link>
        </div>
        </div>
        <motion.button 
        whileTap={{scale:0.9}}
        onClick={()=>setClick([])}
        className='absolute text-2xl top-4 right-4'>❌</motion.button>
        </div>
        <div className='text-center'>
            <h1 className='text-2xl font-bold '>Description</h1>
              <p className=' text-wrap text-xl'>{desc}</p>
              <div>
              <button className={`${speak? "bg-red-600":"bg-green-600"} bg-green-600 text-xl px-4 py-2 text-white rounded-xl m-5`} onClick={target}>{speak?"Stop It!":"Speak It Loud !"}</button>

              </div>
        </div>
    </div>
  )
}

export default SingleComponent