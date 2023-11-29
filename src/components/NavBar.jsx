import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

export const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-[#00df9a] w-full text-3xl font-bold mt-0'>REACT.</h1>
        <ul className='hidden md:flex cursor-pointer'>
            <li className='p-4 hover:scale-110 hover:text-[#00df9a]'>Home</li>
            <li className='p-4 hover:scale-110 hover:text-[#00df9a]'>Company</li>
            <li className='p-4 hover:scale-110 hover:text-[#00df9a]'>Resources</li>
            <li className='p-4 hover:scale-110 hover:text-[#00df9a]'>About</li>
            <li className='p-4 hover:scale-110 hover:text-[#00df9a]'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />} 
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className='text-[#00df9a] w-full text-3xl font-bold m-4 mt-8'>REACT.</h1>
            <ul className='p-4 uppercase cursor-pointer'>
                <li className='p-4 border-b border-b-gray-600 hover:scale-105 hover:text-[#00df9a]'>Home</li>
                <li className='p-4 border-b border-b-gray-600 hover:scale-105 hover:text-[#00df9a]'>Company</li>
                <li className='p-4 border-b border-b-gray-600 hover:scale-105 hover:text-[#00df9a]'>Resources</li>
                <li className='p-4 border-b border-b-gray-600 hover:scale-105 hover:text-[#00df9a]'>About</li>
                <li className='p-4 hover:scale-105 hover:text-[#00df9a]'>Contact</li>
            </ul>
        </div>

    </div>
  )
}
