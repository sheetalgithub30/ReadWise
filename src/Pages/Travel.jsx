import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import LoginNavbar from '../Components/LoginNavbar';
import butterfly from "../assets/butterfly2.png"

function Travel() {
    const [data,setData] = useState([]);
    useEffect(()=>{
      fetchData();
    },[])

    async function fetchData() {
        const response = await fetch(
            'https://www.googleapis.com/books/v1/volumes?q=subject:travel&maxResults=30'
          );
          const result = await response.json();
          setData(result.items)
    };

  return (
    <div>
        <LoginNavbar/>
        <div className='flex justify-center items-center my-9'>
        <img src={butterfly} className='w-40 translate-y-6 '/>

     <h1 className='font-bold text-5xl  text-purple-800'>ALL Travel</h1>
        <img src={butterfly} className='w-40 translate-y-6'/>
        </div>
     <div className='flex justify-center flex-wrap'>
     {
            data.map((ele)=>{
                return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>

            })
        }
     </div>
      
    </div>
  )
}

export default Travel