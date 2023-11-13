import React from 'react'

export const PriceCard = ({info,isSecondCard }) => {

    const { id, image, who, price, storage, users, sendGB } = info;
  return (
            <div className={`${isSecondCard ? 'w-full bg-gray-200 flex flex-col p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300' : 'w-full bg-white flex flex-col p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300'}`}>
                <img className='w-20 mx-auto mt-[-3rem] bg-white rounded' src={image} alt="/" />
                <p className='text-2xl font-extrabold text-center py-8'>{info.who}</p>
                <p className='text-4xl font-extrabold text-center'>${price}</p>
                <div className='text-center font-bold'>

                    <p className='py-2 border-b mx-4 mt-8'>{storage}</p>
                    <p className='py-2 border-b mx-4'>{users}</p>
                    <p className='py-2 border-b mx-4'>{sendGB}</p>
                    
                </div>
                <button className={` ${isSecondCard ? 'capitalize bg-[#000300] text-[#00df9a] w-[200px]  font-bold mx-auto my-8 py-3 px-6 rounded-md' : 'text-[#000300] bg-[#00df9a] w-[200px]  font-bold mx-auto my-8 py-3 px-6 rounded-md'}  `}>Start Trail</button>
            </div>
  )
}
// ``
//w-full bg-white flex flex-col p-4 my-4 shadow-xl rounded-lg hover:scale-105 duration-300
