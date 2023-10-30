import React from 'react'
import Button from './Button'
import { PRICINGS } from '@/constants'

const Pricing = () => {
  return (
    <section className="bg-[#FAFDF2] lg:pt-20 pb-20 px-20 padding-container" id='pricing'>
      <div className="flexCenter flex-col">
      <h1 className="text-grey-15 font-bold text-[28px] md:text-[38px] lg:text-[48px] mb-3 md:mb-6">Our Pricing</h1>
      <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px] text-center max-w-[996px]">We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources</p>
      <div className='border-[1px] border-green-80 p-2 mt-6 lg:mt-14 rounded-xl'>
        <Button 
          text='Monthly'
          textColor='white'
          color='bg-dark_green-20'
          />
        <Button 
          text='Yearly'
          textColor='[#4C4C4C]'
          color='bg-[#FAFDF2]'
          />
      </div>
      <p className='mt-3 text-[14px] md:text-[16px] lg:text-[18px] text-grey-30'>Save 50% on Yearly</p>
    </div>
    <div className='mt-6 lg:mt-12 flex flex-col md:flex-row gap-6 px-2 lg:px-20'>
      {PRICINGS.map((price)=> (
        <PriceCard 
          price={price.price}
          description={price.description}
          plan={price.plan}
          key={price.plan}/>
      ))}
    </div>
    </section>
  )
}


const PriceCard = ( {plan, description, price} ) => {
  return(
    <div className='bg-green-95 border-[1px] border-green-90 p-6 rounded-xl'>
      <div className='flex flex-col justify-start'>
        <h2 className='font-semibold text-grey-15 text-[22px] md:text-[24px] lg:text-[30px]'>{plan}</h2>
        <p className='text-grey-30 text-[14px] md:text-[16px] lg:text-[18px]'>Up to 50% off on Yearly Plan</p>
        <p className='text-grey-15 text-[14px] md:text-[16px] lg:text-[18px] mt-6'>{description}</p>
        <p className='text-grey-20 text-[16px] lg:text-[18px] flex items-center mt-4'><span className='font-bold text-dark_green-25 text-[40px] lg:text-[50px]'>${price}</span>/month</p>
      </div>
      
      <div className='flexCenter mt-4 w-full'>
        <Button 
          text='Choose Plan'
          textColor='grey-15'
          color='bg-green-70'
          full='w-full'
          />
      </div>
      
    </div>
  )
}

export default Pricing