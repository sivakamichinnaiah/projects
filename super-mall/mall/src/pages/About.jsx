import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At supermall website, we believe that fashion should be a reflection of both style and values. Our mission is to create modern, timeless pieces that not only look good but also promote sustainability. From responsibly sourced materials to eco-friendly production processes, we are committed to minimizing our environmental footprint while delivering high-quality, stylish products that fit seamlessly into your life.</p>
            <p>We are driven by a passion for ethical fashion, ensuring that each item is crafted with care for both people and the planet. Our collections are thoughtfully designed to blend aesthetics with functionality, offering versatile pieces that stand the test of time. With a focus on transparency, we aim to build trust with our customers, showing that fashion can be both conscious and chic.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to create fashion that merges style with sustainability, offering high-quality, timeless pieces made from eco-friendly materials. We are dedicated to reducing our environmental impact through ethical production practices while delivering versatile, modern designs that enhance everyday life. By prioritizing transparency and responsible sourcing, we aim to inspire conscious choices in fashion that benefit both people and the planet.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>We ensure the highest standards of quality by using premium, sustainably sourced materials and rigorous production processes. Every product is carefully inspected to guarantee durability, comfort, and long-lasting wear.</p>  
        </div>  
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>Our seamless shopping experience is designed for your convenience, offering easy navigation, secure payment options, and fast delivery. With hassle-free returns and responsive customer support, we make your satisfaction our top priority.</p>  
        </div> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Our dedicated customer service team is here to assist you with any inquiries, ensuring a quick and helpful response. We strive to provide a personalized experience, addressing your needs with care and professionalism.</p>  
        </div>     
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About