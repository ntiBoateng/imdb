import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-4'>
      <div className="flex ">
      <MenuItem title="HOME"  address="/" Icon={AiFillHome} />
      <MenuItem title="ABOUT"  address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-md'> IMDB</span>
            <span className='text-xl hidden sm:inline rounded-md'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default Header