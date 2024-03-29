import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Welcome = () => {
  const btnName = "Courses";
  const path = "/courses";
  return (
    <div className="welcome">
        <div className="content">
            <h1 className="main-heading">Bara Japanese Language institute</h1>
            <p className="content-para">Konnichiwa and welcome to Bara Japanese language institute! I'm thrilled to have you here as we embark on a personalized and enriching journey into the world of the Japanese language.I'm Aakash Bishnoi, your dedicated instructor and guide on this language-learning adventure. At Bara Japanese language institute, we believe in the power of one-on-one instruction to tailor our lessons to your unique learning style and pace. Whether you're a beginner with a passion for Japanese culture or an advanced learner aiming to hone your language skills, you're in the right place.</p>
            <Button btnName={btnName} path={path} />
        </div>
        <div className="welcome-pic">
            <Image 
            className="welcome-picture"
            height={350}
            width={350}
            src={"/anime-study-4.png"}
            alt="welcome image"
            priority
            />

        </div>
    </div>
  )
}

export default Welcome
