import React, { useState } from 'react'
import {VscThreeBars} from 'react-icons/vsc'
import {RxCross1} from 'react-icons/rx'

export default function Navbar() {

    const [navbar,Setnavbar] = useState(false)
    
  return (
    <>
    <div className='bg-transparent  h-20 flex justify-end items-center p-5 lg:p-3 cursor-pointer sticky top-0 z-10'>
    {
            navbar ? 
            (
                <div className=' relative  lg:w-[35%] w-1/2 lg:mt-72 mt-60 lg:p-5 p-3 bg-[#183D3D] z-10 border-2 border-[#5f501c] rounded-3xl'>
                    <RxCross1 className=' lg:ml-96 lg:text-3xl text-xl ml-32 text-[#d4af37] pb-1' onClick={(e)=>Setnavbar(false)}/>
                    <div className='  flex flex-col justify-between items-center gap-5 '>
                        <a className=' font-[Quicksand] lg:text-2xl text-xl text-[#d4af37] hover:text-[#5f501c]' href='/#home'>Home</a>
                        <a className=' font-[Quicksand] lg:text-2xl text-xl text-[#d4af37] hover:text-[#5f501c]' href='/#about'>About you</a>
                        <a className=' font-[Quicksand] lg:text-2xl text-xl text-[#d4af37] hover:text-[#5f501c]' href='/#reviews'>Reviews</a>
                        <a className=' font-[Quicksand] lg:text-2xl text-xl text-[#d4af37] hover:text-[#5f501c]' href='/#sneak'>Sneak pics</a>
                        <a className=' font-[Quicksand] lg:text-2xl text-xl text-[#d4af37] hover:text-[#5f501c]' href='/#contact'>Contact</a>
                    </div>
                </div>
            )
            :
            (
                <VscThreeBars className=' text-4xl text-[#d4af37]' onClick={(e)=>{Setnavbar(true)}}/>
            )
        }
    </div>
    </>
  )
}
