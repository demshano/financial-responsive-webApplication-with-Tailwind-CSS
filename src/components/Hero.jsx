import React from 'react'
import Typed from 'react-typed'
import '../App.css';

export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analytics.</p>
            <h1 className='capitalize md:text-7xl sm-text-6xl text-4xl md:py-6'>grow with data</h1>
            <div className='flex justify-center py-4'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold '>fast, flexible finance for</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                strings={['BTB', 'BTC', 'SAAS']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 capitalize'>monitor your data analitics to increase revenue for BTS, BTC and SAAS platforms.</p>
            <button className='heroBtn text-[#000300] capitalize w-[200px] bg-[#00df9a] font-medium my-6 py-3 rounded-md mx-auto '>get started</button>
        </div>
    </div>
  )
}
