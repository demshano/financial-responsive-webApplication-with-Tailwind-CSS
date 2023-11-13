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
          <h1 className='text-[#00df9a] w-full text-3xl font-bold '>REACT.</h1>
          <p className='py-4'>Empower your financial journey. Smart solutions for wealth management, investments, and financial success. Secure your future today.</p>
          <div className='flex justify-between md:w-[75%] my-6 mx-auto'>
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-between ml-2 mt-6'>
          <div>
            <h1 className='font-medium '>Solution</h1>
            <ul>
              <li className='text-sm text-gray-400 py-2'>Analytics</li>
              <li className='text-sm text-gray-400 py-2'>Marketing</li>
              <li className='text-sm text-gray-400 py-2'>Commerce</li>
              <li className='text-sm text-gray-400 py-2'>Insight</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Support</h1>
            <ul>
              <li className='text-sm text-gray-400 py-2'>Pricing</li>
              <li className='text-sm text-gray-400 py-2'>Documentation</li>
              <li className='text-sm text-gray-400 py-2'>Guide</li>
              <li className='text-sm text-gray-400 py-2'>API Status</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Company</h1>
            <ul>
              <li className='text-sm text-gray-400 py-2'>About</li>
              <li className='text-sm text-gray-400 py-2'>Blog</li>
              <li className='text-sm text-gray-400 py-2'>Jobs</li>
              <li className='text-sm text-gray-400 py-2'>Press</li>
              <li className='text-sm text-gray-400 py-2'>Partner</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium '>Legal</h1>
            <ul>
              <li className='text-sm text-gray-400 py-2'>Claim</li>
              <li className='text-sm text-gray-400 py-2'>Policy</li>
              <li className='text-sm text-gray-400 py-2'>Terms</li>
            </ul>
          </div>
              
              
              

        </div>
    </div>
  )
}
