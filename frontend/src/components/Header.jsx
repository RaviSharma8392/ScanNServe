import React from 'react'
import { FaKey, FaWifi } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";




const Header = () => {
  return (
    <div className={`md:pt-6 font-[poppins] px-5 md:px-30 h-screen bg-gradient-to-br from-yellow-50 to-green-400 `}>

         <div className="pt-20 md:pt-2.5 md:flex  justify-center gap-6">


  <div className="flex md:mt-6 lg:justify-center items-center bg-white shadow-md rounded-3xl  h-full px-3 py-4 w-full max-w-md ">
    <FaWifi className="text-amber-500 text-2xl mr-3" />
    <div className="text-gray-800">
      <p className="font-semibold text-lg">WiFi Network:</p>
      <p className="text-sm text-gray-600">TheHiddenCafe</p>
    </div>
  </div>

  <div className="flex lg:justify-center items-center bg-white shadow-md rounded-3xl mt-6 px-6 py-4 w-full max-w-md">
    <FaKey className="text-yellow-500 text-2xl mr-3" />
    <div className="text-gray-800">
      <p className="font-semibold text-lg">Password:</p>
      <p className="text-sm text-gray-600">12345TheHiddenCafe</p>
    </div>
  </div>
</div>

     
      <div className=' text-black md:justify-center md:mt-5 p-8'>
 <h1 className='font-bold  text-2xl md:text-6xl md:mt-20 md:px-99 px-10 md:justify-center font-[lexend] '>Homestay Name</h1>
 <p className='flex flex-wrap lg:ml-1 lg:px-3 justify-center text-[20px] lg-mt-5 lg:text-2xl font-[edu-sa-hand] pt-8 p-3 px-3'>A cozy escape in the serene <n/>hills of bhimtal</p>


      </div>
      <div className='grid lg:mt-20 gap-6.5 md:my-6 md:flex justify-center p-2.5'>
        <button className='flex bg-[#FFF5F6] rounded-3xl shadow font-bold px-12 py-4 border-1  border-[#EF4F5F] text-[#EF4F5F]'><MdAddIcCall className='mt-1.5 mr-1.5'/>
Call To Order</button>
 <button className='flex bg-green-400 rounded-3xl shadow font-bold border-1 border-green-600  px-12 py-4 text-white'><BsWhatsapp className='mt-1.5 mr-1.5'/>
Whatshapp</button>
      </div>
      
    </div>
  )
}

export default Header

