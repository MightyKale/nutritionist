import Image from "next/image"
import { TESTIMONIALS } from "@/constants"

const Testimonials = () => {
  return (
    <section className="bg-[#FAFDF2] lg:pt-20 pb-20 px-20 padding-container" id="testimonials">
    <div className="flexCenter flex-col">
      <h1 className="text-grey-15 font-bold text-[28px] md:text-[38px] lg:text-[48px] mb-3 md:mb-6">Our Testimonials</h1>
      <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px] text-center max-w-[996px]">Our satisfied clients share their success stories and experiences on their journey to better health and well-being.</p>
    </div>
    <div className="mt-5 md:mt-10 lg:mt-16 flex gap-4 flex-col md:flex-row lg:px-32 px-15" >
      {TESTIMONIALS.map((testimonial => (
        <TestimonialCard key={testimonial.name} 
          name={testimonial.name}
          comment={testimonial.comment}
          image={testimonial.image}/>
      )))}
    </div>
    <div className="flexCenter flex-row gap-5 mt-8 lg:mt-10">
      <button className="bg-green-95 border-[1px] border-green-90 rounded-l p-2">
        <Image src='/left.png' alt="left" height={28} width={28}/>
      </button>
        <div className="flexCenter gap-1">
          <div className="h-[7px] w-[7px] bg-dark_green-30 rounded-full" />
          <div className="h-[7px] w-[7px] bg-green-85 rounded-full" />
          <div className="h-[7px] w-[7px] bg-green-85 rounded-full" />
          <div className="h-[7px] w-[7px] bg-green-85 rounded-full" />
          <div className="h-[7px] w-[7px] bg-green-85 rounded-full" />
        </div>
      <button className="bg-green-95 border-[1px] border-green-90 rounded-l p-2">
        <Image src='/right.png' alt="right" height={28} width={28}/>
      </button>
    </div>

    </section>
  )
}


const TestimonialCard = ( {image, name, comment} ) => {
  return (
    <div className="flex flex-col flex-1 justify-between border-[1px] border-green-90">
    <div className="bg-green-97  lg:p-10 p-5 rounded-xl flex flex-col">
      <Image src='/quote.png' alt="quote" height={22} width={22}/>
      <p className="mt-8 text-[14px] md:text-[16px] lg:text-[18px] text-grey-20">{comment}</p>
    </div>
    <div className="bg-green-95 lg:px-8 lg:py-6 p-5 flex flex-row items-center gap-2">
      <Image src={image} alt={name} height={45} width={45}/>
      <p className="text-[14px] md:text-[16px] lg:text-[18px] text-dark_green-15 font-semibold">{name}</p>
    </div>
    </div>
  )
}


export default Testimonials