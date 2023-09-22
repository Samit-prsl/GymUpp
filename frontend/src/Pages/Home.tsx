import React from 'react'
import Layout from '../Component/Layout'
import Hero from '../Component/Hero'
import Reviews from '../Component/Reviews'
import Navbar from '../Component/Navbar'
import Video from '../Component/Video'

export default function Home() {
  return (
    <div className=' bg-gradient-to-r from-[#183D3D] to-[#040D12]'>
      <Navbar/>
      <Layout/>
      <Hero/>
      <Reviews/>
      <Video/>
    </div>
  )
}
