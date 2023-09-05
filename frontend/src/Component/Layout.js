import React from 'react'

export default function Layout() {
  return (
   <div className=' bg-gradient-to-r from-[#183D3D] to-[#040D12] min-h-screen lg:pt-8 lg:px-16 px-10 py-0 border-b-2 border-[#eec84c] rounded-b-[4rem]' id='home'>
      <h1 className=' font-[Cinzel] lg:text-8xl text-5xl text-[#d4af37] pb-4'>Get ready to GYM!</h1>
      <div>
      <img src="https://images.unsplash.com/photo-1584827386894-fc939dad6078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' drop-shadow-2xl w-full h-96 object-cover'/>
      </div>
      <div className='  text-3xl font-[Quicksand] py-8 px-2 text-[#d3c185] '>
        <h1>Gym and fitness are intertwined aspects of a healthy lifestyle, with gyms providing specialized spaces and equipment for structured physical exercise, including strength training and cardiovascular workouts, often guided by expert trainers, while fitness, encompassing exercise, proper nutrition, and rest, promotes overall well-being, increased energy, and improved mental health, contributing to a better quality of life...</h1>
      </div>
   </div>
  )
}
