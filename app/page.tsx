import React from 'react'

const page = () => {
  return (
    <>
        <div className="background">
            <video id="bgVideo" autoPlay loop muted>
                <source src="/bgVideo.mp4"/>
            </video>
        </div>
    </>
  )
}

export default page
