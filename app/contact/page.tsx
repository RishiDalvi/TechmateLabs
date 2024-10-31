import React from 'react'
import { Form } from '@/components/form'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 style={{ fontFamily: "Tenada" }} className='text-blue-600 sm:text-7xl text-3xl m-3 p-3'>Contact Us</h1>
      <Form/>
    </div>
  )
}

export default Contact
