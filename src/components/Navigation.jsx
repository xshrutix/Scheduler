import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navigation = () => {
    const [nav, setNav] = useState(false)
    const handelnav = () => {
        setNav(!nav)
    }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auth bg-purple-900 text-white ...'>
        <h1 className=' w-full text-3xl font-bold text-purple-300'>SCHEDULER.</h1>
        <ul className=' hidden md:flex'>
            <li className=' p-4'>Home</li>
            <li className=' p-4'>Guide</li>
            <li className=' p-4'>Table</li>
            <li className=' p-4'>Table</li>
        </ul>
        <div onClick={handelnav} className=' block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />}
           
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[48%] h-full border-r border-r-gray-900 bg-gray-900' : 'fixed left-[-100%] ease-in-out duration-700'}>
        <h1 className=' w-full text-3xl font-bold m-4 text-purple-300'>SCHEDULER.</h1>
            <ul className=' p-4 uppercase '>

            <li className=' p-4 border-b border-purple-700'>Home</li>
            <li className=' p-4 border-b border-purple-700'>Guide</li>
            <li className=' p-4 border-b border-purple-700'>Table</li>
            <li className='p-4'>Table</li>
            </ul>
        </div>

    </div>
  )
}

export default Navigation