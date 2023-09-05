import React from 'react'
import { ImQuotesLeft} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
export default function Reviews() {
  return (
    <div className=' min-h-screen bg-[#040D12] p-12 border-t-2 border-[#eec84c] rounded-t-[4rem] border-b-2 rounded-b-[4rem]' id='reviews'>
       <h1 className=' text-4xl lg:text-5xl font-[Cinzel] text-[#d4af37]'>What others say?</h1>

       <div className=' lg:py-16 py-10 lg:flex lg:justify-between lg:gap-5'>

        <div className=' bg-[#d3c185] h-full w-full pb-10 p-6 rounded-[3rem] my-5 lg:my-0'>
            <div className=' flex justify-between py-2'>
               <ImQuotesLeft className=' text-3xl text-[#1b4747] '/>
                    <div className=' flex justify-between gap-2'>
                        <AiFillStar className=' text-3xl text-[#1b4747] '/>
                        <h1 className=' text-xl font-[Poppins]'>4.7</h1>
                    </div>
            </div>
            <div>
                <p className=' text-2xl font-[Quicksand] text-[#1b4747] lg:py-5 py-3'>The gym's exceptional trainer provides personalized guidance and motivating workouts. Their expertise ensures effective sessions, making fitness enjoyable and rewarding for every member.</p>
            </div>
            <div className=' lg:py-4 py-3 flex justify-between'>
            <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' w-16 h-16 rounded-[50%]' />
            <h1 className=' text-xl font-[Poppins] pt-3'>Anonymous</h1>
            </div>
            
        </div>
        <div className=' bg-[#1b4747] h-full w-full pb-10 p-6 rounded-[3rem] my-5 lg:my-0'>
            <div className=' flex justify-between py-2'>
               <ImQuotesLeft className=' text-3xl text-[#d3c185] '/>
                    <div className=' flex justify-between gap-2'>
                        <AiFillStar className=' text-3xl text-[#d3c185] '/>
                        <h1 className=' text-xl font-[Poppins] text-white'>4.7</h1>
                    </div>
            </div>
            <div>
                <p className=' text-2xl font-[Quicksand] text-[#d3c185] lg:py-5 py-3'>Thrilled with this gym! It offers diverse equipment, clean spaces, and welcoming staff. My fitness journey has been fantastic, thanks to the supportive atmosphere and quality facilities. Highly recommend.</p>
            </div>
            <div className=' lg:py-4 py-3 flex justify-between'>
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className=' w-16 h-16 rounded-[50%]' />
            <h1 className=' text-xl font-[Poppins] pt-3 text-white'>Anonymous</h1>
            </div>
            
        </div>
        <div className=' bg-[#d3c185] h-full w-full pb-10 p-6 rounded-[3rem] my-5 lg:my-0'>
            <div className=' flex justify-between py-2'>
               <ImQuotesLeft className=' text-3xl text-[#1b4747] '/>
                    <div className=' flex justify-between gap-2'>
                        <AiFillStar className=' text-3xl text-[#1b4747] '/>
                        <h1 className=' text-xl font-[Poppins]'>4.7</h1>
                    </div>
            </div>
            <div>
                <p className=' text-2xl font-[Quicksand] text-[#1b4747] py-9'>The gym's trainer excels with expertise, personalized guidance, and motivating workouts. Their knowledge ensures effective and enjoyable fitness sessions. A valuable asset to the gym</p>
            </div>
            <div className=' lg:py-4 py-3 flex justify-between'>
            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className=' w-16 h-16 rounded-[50%]' />
            <h1 className=' text-xl font-[Poppins] pt-3'>Anonymous</h1>
            </div>
            
        </div>
       </div>
    </div>
  )
}
