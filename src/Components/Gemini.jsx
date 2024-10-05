import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hourglass} from "react-loader-spinner";
import{motion} from "framer-motion"
import { RxEnter } from "react-icons/rx";

const API_KEY = import.meta.env.VITE_APP_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function Gemini() {
  const [prompt, setPrompt] = useState("");
  const [chat,setChat] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchDataFromGemini(prompt) {
    try {
      if (!prompt) {
        const notify = () => toast.warning("Provide a prompt");
        notify();
        return;
      }
      setLoading(true);
      const response = await model.generateContent(prompt);
      const result = response.response;
      const text = result.text();
    //   console.log(text);
      setData(text);
      setChat(prompt)
      setLoading(false);
      setPrompt("");
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  }
  return (
    <div className="">
    
      <ToastContainer />

     
      { 
        <GeminiPrompt
          data={data}
          setData={setData}
          prompt={prompt}
          setPrompt={setPrompt}
          chat={chat}
          setChat={setChat}
          fetchDataFromGemini={fetchDataFromGemini}
          loading={loading}
        />
      }
    </div>
  );
}

function GeminiPrompt({
  data,
  prompt,
  setPrompt,
  chat,
  setData,
  fetchDataFromGemini,
  loading,
}) 

{
  return (
    <div
     style={{fontFamily:"cursive"}}
    className="border-4 border-purple-800 rounded-3xl w-1/2 mx-auto mb-10 max-sm:w-full ">
        <div className="flex justify-between mx-4 mt-3">
        <p className="text-2xl p-3 font-semibold text-blue-950 max-sm:text-base"><i>HOW CAN I HELP YOU?✨✨</i> </p>
        <motion.button
        whileTap={{scale:0.9}}
        onClick={()=>{
            setData("")
        }}
        >❌</motion.button>
        </div>
      <div className="flex justify-evenly items-center">
      <textarea
      className="text-wrap w-[85%] text-xl p-1 m-3 rounded-lg border-2 border-black "
        type="text"
        value={prompt}
        onChange={(e) => {setPrompt(e.target.value)
        }}
      />
      <motion.button
      whileTap={{scale:0.9}}
      className=" bg-emerald-700 text-white h-14  rounded-full cursor-pointer px-4"
        onClick={() => {
          fetchDataFromGemini(prompt);
        }}
      >
      <RxEnter className="text-2xl" />
      </motion.button>
      </div>
      {loading && <div className="flex justify-center items-center p-2">
        <Hourglass
  visible={true}
  height="30"
  width="30"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />

        </div>}
      {data &&
       <div className=" p-3 m-2">
       <div className="flex items-center">
        <img  className="w-10 h-10 rounded-full" src="https://pics.craiyon.com/2023-09-29/cc9c956c1a674b78a0c7e4f11cef1190.webp"></img>
       <p className="ml-3 font-semibold">{chat}</p> 
        </div>
        <div className="flex mt-4">
        <img  className="w-10 h-10 rounded-full" src="https://i.poweredtemplates.com/p/sp/128326/sp_slide_h_1.jpg"></img>
        <pre className="ml-3 overflow-y-scroll text-wrap max-h-96 ">{data}
        </pre>
        </div>
       
        </div>}
    </div>
  );
}

export default Gemini;
