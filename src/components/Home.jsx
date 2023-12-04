import React from 'react'
import Navigation from './Navigation'
import Typed from 'react-typed'
const Home = () => {
  return (
    <div className=' text-white'>
      <div className=' max-w-[800px]  w-full mt-[96px] h-screen mx-auto text-center flex flex-col'>
        <p className=' text-purple-300 font-bold p-2'>And Here We Present,</p>
        <h1 className=' md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Scheduler...</h1>
        <div className=' flex justify-center items-center'>
          <p className=' md:text-4xl sm:text-3xl text-xl font-bold py-4'>It Generates Time-table which is</p>
          <Typed 
          className=' md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
          strings={['Fast', 'Calm', 'Clash-Free']}
          typeSpeed={160}
          backSpeed={180}
          loop
          />
        </div>
         <p className=' md:text-2xl text-xl font-bold text-gray-500'>Streamline teaching: Effortless planning, organized schedules with our timetable generator.</p>
          <button className=' bg-purple-900 w-[200px] rounded-r-md font-medium my-6 mx-auto py-3'>Get Started</button>
      </div>
      </div>
  )
}
export default Home