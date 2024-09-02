import { useState } from "react";

function Note(){
const[input,setInput] = useState("");
const[list,setList] = useState([]);

function handleSubmit(e){
  e.preventDefault();
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
    <form onSubmit={handleSubmit} className="text-2xl flex justify-center items-center max-sm:text-xl">
      <input type="text" placeholder="Enter Notes" value={input} onChange={(e)=>{setInput(e.currentTarget.value)}} className="border-2 border-black py-2 max-sm:py-1 max-sm:w-[80%]"></input>
      <input type="submit" value="ADD" className="bg-green-500 px-5 py-2 m-3 rounded-xl text-white max-sm:px-2"></input>
    </form>  
<div className="flex flex-wrap justify-center">

    {
      list.map((ele,index)=>{
        return(
         <div className="m-4">
           <div className="border-2 bg-yellow-400 flex justify-between items-start w-[12rem] h-[10rem]">
            <div className=" h-full ">
           <p className="text-wrap">{ele.text}</p>
            </div>
          <button onClick={()=>{handledel(ele.id)}}>❌</button>
         </div>
         </div>
        )
      })
    }
</div>
  </div>
)
}
export default Note;