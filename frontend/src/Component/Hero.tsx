import React from 'react'

export default function Hero() {
  return (
    <div className=' min-h-screen bg-[#1b4747] p-12 border-t-2 border-[#eec84c] rounded-t-[4rem] border-b-2 rounded-b-[4rem]' id='about'>
      <h1 className=' text-4xl lg:text-5xl font-[Cinzel] text-[#d4af37]'>Tell us who you are?</h1>
      <div className=' py-8 lg:flex lg:justify-between lg:gap-5'>
        <div className=' h-full w-full drop-shadow-2xl bg-[#040D12] p-5 my-3 lg:my-0'>
            <img src="https://plus.unsplash.com/premium_photo-1664298084551-277444c16b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' pb-10 ' />
            <h1 className=' lg:text-2xl text-xl font-[Quicksand] text-[#d3c185] pb-10'>Success in the gym isn't measured by the weight you lift, but by the dedication, determination, and persistence you bring to every workout.</h1>
            <div className=' flex justify-center items-center'>
            <a href="/user/register"><button className=' px-5 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl 
            '>Start now as a newbie!</button></a>
            </div>
        </div>
        <div className=' h-full w-full drop-shadow-2xl bg-[#d3c185] p-5 my-3 lg:my-0 '>
            <img src="https://images.unsplash.com/photo-1570440828843-ccc432c6fad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhcmJlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' pb-10'/>
            <h1 className=' lg:text-2xl text-xl font-[Quicksand] text-[#040D12] pb-9'>Embrace the challenge of the gym, where every drop of sweat is a step closer to unlocking your potential and achieving greatness.</h1>
           <div className=' flex justify-center items-center'>
           <a href="/trainer/register"><button className=' px-5 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl '>Start now as a trainer!</button></a>
           </div>
        </div>
        <div className=' h-full w-full drop-shadow-2xl bg-[#040D12] p-5 my-3 lg:my-0'>
             <img src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' pb-12'/>
             <h1 className=' lg:text-2xl text-xl font-[Quicksand] text-[#d3c185] pb-[60px]'>Embrace nutrition's role, where each intake fuels the path to wellness and the zenith of your thriving</h1>
            <div className=' flex justify-center items-center'>
            <button className=' px-5 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl'>Get diets in one click!</button>
            </div>
        </div>
      </div>
    </div>
  )
}
