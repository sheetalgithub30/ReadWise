import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";


function Note(){
const[input,setInput] = useState("");
const[list,setList] = useState([]);


useEffect(()=>{
  if(localStorage.getItem("notes")){
   let arr = JSON.parse(localStorage.getItem("notes"));
   setList(arr);
  }
},[])


useEffect(() => {
  if (list.length >=1)
      {localStorage.setItem("notes", JSON.stringify(list));}
  else{
    localStorage.removeItem("notes");
  }
  }, [list]);


function handleSubmit(e){
  e.preventDefault();
  if (!input) {
    const notify = () => toast.warning("Provide a prompt");
    notify();
    return;
  }
  const obj = {};
  obj.text = input;
  obj.id = Date.now();
  setList([...list,obj]);
  setInput("")
}

function handledel(id){
  setList(list.filter((e)=>{
   return e.id !== id
  }))
}


return(
  <div className="border-4 bg-purple-300 border-purple-600 w-[60%] p-7 m-4 max-sm:w-full ">
     <ToastContainer />
    <form onSubmit={handleSubmit} className="text-2xl flex justify-center items-center max-sm:text-xl">
      <input type="text" placeholder="Enter Notes" value={input} onChange={(e)=>{setInput(e.currentTarget.value)}} className="border-2 border-black py-2 max-sm:py-1 max-sm:w-[80%]"></input>
      <motion.input
          whileTap={{scale:0.9}}
      type="submit" value="ADD" className="bg-green-500 px-5 py-2 m-3 rounded-xl text-white max-sm:px-2"></motion.input>
    </form>  
<div className="flex flex-wrap justify-center">

    {
      list.map((ele,index)=>{
        return(
         <div className="m-4">
           <span className="border-2 bg-yellow-500 flex justify-between items-start rounded-2xl  p-2 ">
           <p className="text-wrap text-white text-2xl p-2">{ele.text}</p>
          <motion.button 
          whileTap={{scale:0.9}}
          onClick={()=>{handledel(ele.id)}}>❌</motion.button>
         </span>
         </div>
        )
      })
    }
</div>
  </div>
)
}
export default Note;