import Navbar from '@/Components/Navbar'
import Welcome from '@/Components/Welcome'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
        <div className="background">
            <video id="bgVideo" autoPlay loop muted>
                <source src="/bgVideo.mp4"/>
            </video>
            <Welcome />
        </div>
    </>
  )
}

export default page
