import accountingSoftware from '../assets/accountingSoftware.png'

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-full w-[1240px] grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={accountingSoftware} alt="/" />
            <div className='flex flex-col justify-center md:mx-4'>
                <p className='text-[#00df9a] font-bold uppercase'>data analytic dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl capitalize font-bold py-2'>manage data analytics centrally</h1>
                <p>
                Centrally manage data analytics for streamlined insights. Centralized analytics enhance efficiency, providing a unified platform to analyze, interpret, and act on data, fostering informed decision-making across the organization.
                </p>
                <button className='capitalize text-[#00df9a] bg-[#000300] w-[200px]  font-medium my-6 py-3 rounded-md mx-auto md:mx-0'>get started</button>

            </div>

        </div>

    </div>
  )
}
