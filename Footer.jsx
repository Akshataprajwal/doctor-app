import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      {/*---------Left Section----------*/}
      <div>
        <img src={assets.logo} alt="" />
        <p className='mt-4  text-gray-600 leading-6'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen 
          book.
        </p>
      </div>

      {/*---------Center Section----------*/}
      <div>
        <p className='font-semibold mb-3'>COMPANY</p>
        <ul className='space-y-2 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      {/*---------Right Section----------*/}
      <div>
        <p className='font-semibold mb-3'>GET IN TOUCH</p>
        <ul className='space-y-2 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>greatstackdev@gmail.com</li>
        </ul>
      </div>

      {/*------------- Copywrite text ---------*/}
      <div className='col-span-3'>
        <hr className='my-4' />
        <p className='text-center '>Copyright 2025 @Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
