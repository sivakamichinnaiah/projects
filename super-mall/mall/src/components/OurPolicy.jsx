import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700'>
        <div>
            <img src={assets.exchangeicon} className='w-12 m-auto mb-5'alt=""/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.qualityicon} className='w-12 m-auto mb-5'alt=""/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We offer return policy within seven days only.</p>
        </div>
        <div>
            <img src={assets.supporticon} className='w-12 m-auto mb-5'alt=""/>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We offer customer support to our customers clear and clarify the queries.</p>
        </div>
    </div>
  )
}

export default OurPolicy