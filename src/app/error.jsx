"use client"
import { useEffect } from 'react'
const Error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className='text-center mt-40 text-4xl'>
        <h1> OOps! Something went wrong</h1>
        <button className='hover:text-amber-600' onClick={()=> reset()}>Try again!</button>
    </div>
  )
}

export default Error