import React from 'react'
import { History } from '@/components/history'
import { BackgroundBeamsWithCollisionDemo } from '@/components/background-beams'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1  style={{ fontFamily: "Tenada" }} className="sm:text-6xl text-3xl text-blue-500 dark:text-blue-500 font-bold p-3">
        About
      </h1>
      <History/>
      <BackgroundBeamsWithCollisionDemo/>
    </div>
  )
}

export default About
