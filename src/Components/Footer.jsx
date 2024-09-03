import React from 'react'
import { GoHeartFill } from 'react-icons/go'

function Footer() {
  return (
    <div className='w-full bg-purple-500 flex justify-center items-center'>
        <h1 className='flex items-center text-2xl p-3 text-white'>Made with  <GoHeartFill className='text-red-600 mx-2' />  by SHEETAL</h1>
    </div>
  )
}

export default Footer