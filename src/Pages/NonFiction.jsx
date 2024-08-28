import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import LoginNavbar from '../Components/LoginNavbar';
import butterfly from "../assets/butterfly2.png"
import SingleComponent from '../Components/SingleComponent';

function NonFiction() {
    const [data,setData] = useState([]);
    useEffect(()=>{
      fetchData();
    },[])

    const[click,setClick] = useState([])


    const handleCardClick = (id) => {
      // console.log(id);
      setClick(data.filter((ele)=>{
        return ele.id == id
      }))
    };

    async function fetchData() {
        const response = await fetch(
            'https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&maxResults=30'
          );
          const result = await response.json();
          setData(result.items)
    };


  return (
    <div>
        <LoginNavbar/>
        <div className='flex justify-center items-center my-9'>
        <img src={butterfly} className='w-40 translate-y-6 '/>

     <h1 className='font-bold text-5xl  text-purple-800'>ALL NONFICTION</h1>
        <img src={butterfly} className='w-40 translate-y-6'/>
        </div>
        <div>
          {click && click.map((e)=>{
            return <div className='flex justify-center mx-auto my-16 w-[60vw]'>
              <SingleComponent src={e.volumeInfo.imageLinks.thumbnail} 
              title={e.volumeInfo.title}
               auth_name={e.volumeInfo.authors[0]}
               publisher={e.volumeInfo.publisher}
                p_date={e.volumeInfo.publishedDate} desc={e.volumeInfo.description} buy_link={e.saleInfo.buyLink} 
                preview_link={e.volumeInfo.previewLink}
                info_link={e.volumeInfo.infoLink}
                />
            </div>
          })}
        </div>
     <div className='flex justify-center flex-wrap'>
     {
            data.map((ele)=>{
                return <div onClick={()=>{
                  handleCardClick(ele.id)}}> 
                <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
</div>
            })
        }
     </div>
      
    </div>
  )
}

export default NonFiction