import React from 'react'
import '../App.css';

export const NewsLetter = () => {
  return (
    <div className='w-full bg-white py-6 px-4'>
        <div className='max-w-full w-[1340px] bg-[#000300] grid md:grid-cols-2 mx-auto p-4 rounded-lg'>

            <div className='text-white flex flex-col justify-center '>
                <p className='md:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flows?</p>
                <p className='py-2'>Sign up to your newsletter and stay up to date.</p>
            </div>

            <div className='my-4'>

                <div className='flex flex-col sm:flex-row items-center justify-center w-full '>
                    <input className='py-2 pl-8 rounded-md flex w-full border-none' type="email" placeholder='Enter your email'   />
                    <button className='w-[200px] bg-[#00df9a] font-bold my-2 sm:my-0 p-2 rounded-md mx-4 lg:text-white '>Notify me</button>
                </div>

                <div className='flex flex-col justify-center py-4'>
                    <p className='text-white'>We care about the protection of your data. Read our</p>
                    <a href="###" className='text-[#00df9a] underline'>Privacy Policy</a>
                </div>
                
            </div>

        </div>
    </div>
  )
}
