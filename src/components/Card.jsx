 import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

const Card = ({result}) => {
  return (
    <div className='curser-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group-[]:'>
       <Link href={`/movie/${result.id}`}>
        <Image style={{maxWidth:"100%",height:"auto"}} width={500} height={300} placeholder='blur' alt='image not available' blurDataURL='spinner.svg' className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200' src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.post_path}`}></Image>
       <div className='p-2'>
        <p className='line-clamp-2 text-sm'>
            {result.overview}
        </p>
        <h2 className='truncate text-md font-bold item-center py-1'>{result.title || result.name}</h2>
        <p className='flex justify-between'>
            {result.release_date || result.first_air_date}
            <span className='flex justify-normal space-x-2'><FiThumbsUp className='h-5 mr-1 ml-3' /> {result.vote_count}</span>
        </p>
        
       </div>
       </Link>
    </div>
  )
}

export default Card