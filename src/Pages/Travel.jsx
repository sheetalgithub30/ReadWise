import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import LoginNavbar from '../Components/LoginNavbar';
import butterfly from "../assets/butterfly2.png"
import SingleComponent from '../Components/SingleComponent';
import Footer from '../Components/Footer';

function Travel() {
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
                setClick={setClick}
                />
            </div>
          })}
        </div>
     <div className='flex justify-center flex-wrap'>
     {data.map((ele) => (
            ele.volumeInfo && ele.volumeInfo.imageLinks && ele.volumeInfo.imageLinks.thumbnail ? (
              <div onClick={()=>{
                handleCardClick(ele.id)}}>
              <Card
                key={ele.id} // Ensure each element has a unique key
                src={ele.volumeInfo.imageLinks.thumbnail}
                title={ele.volumeInfo.title}
              />
              </div>
            ) : (
              console.log("Thumbnail is undefined for:", ele) || null // Log the message and return null
            )
          ))}
     </div>
      <Footer/>
    </div>
  )
}

export default Travel