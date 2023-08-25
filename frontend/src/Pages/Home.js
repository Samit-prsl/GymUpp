import React from 'react'
import Layout from '../Component/Layout'
import Hero from '../Component/Hero'
import Reviews from '../Component/Reviews'

export default function Home() {
  return (
    <div className=' bg-[#183D3D]'>
      <Layout/>
      <Hero/>
      <Reviews/>
    </div>
  )
}
