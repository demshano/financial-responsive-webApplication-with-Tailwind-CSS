import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,

} from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gpa-8 text-gray-300' >
        <div>
          <h1 className='text-[#00df9a] w-full text-3xl font-bold sm:text-center'>REACT.</h1>
          <p className='py-4'>Empower your financial journey. Smart solutions for wealth management, investments, and financial success. Secure your future today.</p>
          <div className='flex justify-between md:w-[75%] my-6 mx-auto cursor-pointer'>
            <FaDribbbleSquare size={30} className='hover:scale-110 transition-transform duration-300' />
            <FaFacebookSquare size={30} className='hover:scale-110 transition-transform duration-300' />
            <FaGithubSquare size={30} className='hover:scale-110 transition-transform duration-300' />
            <FaInstagramSquare size={30} className='hover:scale-110 transition-transform duration-300' />
            <FaTwitterSquare size={30} className='hover:scale-110 transition-transform duration-300' />
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-between ml-2 mt-6 '>
          <div className=''>
            <h1 className='font-medium '>Solution</h1>
            <ul className='cursor-pointer '>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Analytics</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Marketing</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Commerce</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Insight</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Support</h1>
            <ul className='cursor-pointer'>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Pricing</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Documentation</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Guide</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>API Status</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Company</h1>
            <ul className='cursor-pointer'>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>About</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Blog</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Jobs</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Press</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Partner</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Legal</h1>
            <ul className='cursor-pointer'>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Claim</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Policy</li>
              <li className='text-sm text-gray-400 py-2 hover:text-white'>Terms</li>
            </ul>
          </div>
              
              
              

        </div>
    </div>
  )
}
