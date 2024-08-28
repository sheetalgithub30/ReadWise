import React from "react";
import { motion } from "framer-motion";

function Card({src,title}) {
  return (
    <motion.div 
     whileHover={{scale:0.9}}
    className="w-[15rem] shadow-2xl shadow-purple-800 flex flex-col justify-center items-center  p-3 mx-10 mt-5 mb-20"
    
    >
      <img
        src={src}
        className="w-[12rem] h-[17rem]"
      ></img>
      <h1 className="text-center font-semibold text-xl mt-4 h-[6rem]">
        {title}
      </h1>
    </motion.div>
  );
}

export default Card;
