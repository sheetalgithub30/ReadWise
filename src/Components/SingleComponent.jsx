import React from 'react'
import { Link } from 'react-router-dom'

function SingleComponent({src,title,auth_name,publisher,p_date,desc,buy_link,preview_link,info_link}) {

  return (
    <div className='p-4 shadow-2xl shadow-purple-600 rounded-3xl'>
        <div className='flex items-center'>
        <img src={src} className='w-60 h-72' ></img>
        <div className='p-5 text-2xl  w-full'>
             <p><span className='font-bold text-blue-700'>Title:</span>{title}</p>
              <p><span className='font-bold text-blue-700'>Author-name:</span>{auth_name}</p>
              <p ><span className='font-bold text-blue-700'>Publisher:</span>{publisher}</p>
              <p><span className='font-bold text-blue-700'>Published Date:</span>{p_date}</p>
              <div className='text-xl flex flex-wrap'>
            <Link to={buy_link} className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>Buy Now</Link>
            <Link to={info_link} className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>Get Info</Link>
            <Link to={preview_link} className='bg-orange-500 border-4 border-orange-600 px-3 py-1 rounded-2xl m-4'>View Preview</Link>
        </div>
        </div>
        </div>
        <div className='text-center'>
            <h1 className='text-2xl font-bold '>Description</h1>
              <p className=' text-wrap text-xl'>{desc}</p>
        </div>
    </div>
  )
}

export default SingleComponent