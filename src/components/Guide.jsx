
import {MdInput} from 'react-icons/md'
import {RiAiGenerate} from 'react-icons/ri'
import {FaTableCells} from 'react-icons/fa6'

const Guide = () => {
  return (
    <div className=' w-full py[40rem] px-4 bg-white'>

      <h1 className=' text-teal-400 font-black text-4xl text-center'>Guide Page</h1>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className=' w-full shadow-2xl shadow-green-900/80 flex flex-col p-10 my-56 rounded-lg hover:scale-105 duration-300 bg-white'>
           <MdInput
           className=' w-[80px] h-[80px] mx-auto pb-12 ' 
           />
           <h2 className=' text-2xl font-bold text-center py-4'>Step 1</h2>
           <p className=' text-center'>Input your data</p>
        </div>

        <div className=' w-full shadow-2xl  shadow-green-900/80 flex flex-col p-10 my-56  rounded-lg hover:scale-105 duration-300 bg-white'>
           <RiAiGenerate
           className=' w-[80px] h-[80px] mx-auto pb-12 ' 
           />
           <h2 className=' text-2xl font-bold text-center py-4'>Step 2</h2>
           <p className=' text-center'>Generate Table</p>
        </div>

        <div className=' w-full shadow-2xl  shadow-green-900/80 flex flex-col p-10 my-56  rounded-lg hover:scale-105 duration-300 bg-white'>
           <FaTableCells
           className=' w-[80px] h-[80px] mx-auto pb-12 ' 
           />
           <h2 className=' text-2xl font-bold text-center py-4'>Step 3</h2>
           <p className=' text-center'>Select View</p>
        </div>
      </div>

    </div>
  )
}

export default Guide 