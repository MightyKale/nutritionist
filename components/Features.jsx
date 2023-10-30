import Image from "next/image"
import { FEATURES } from "@/constants"

const Features = () => {
  return (
    <section className="bg-[#FAFDF2] lg:pt-20 pb-20 px-20 padding-container" id="features">
      <div className="flexCenter flex-col">
        <h1 className="text-grey-15 font-bold text-[28px] md:text-[38px] lg:text-[48px] mb-3 md:mb-6">Features</h1>
        <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px] text-center">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
      </div>
      <div className="grid md:grid-cols-2 mt-16 gap-5 lg:gap-10 lg:px-32 px-15">
        {FEATURES.map((feature)=>(
          <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} key={feature.title}/>
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ( {icon, title, description} ) => {
  return (
    <div className="bg-green-95 border-[1px] border-green-85 p-9 rounded-xl flex flex-col items-start">
        <div className="flexCenter gap-5">
            <Image src={icon} alt={icon} height={68} width={68}/>
            <h2 className="text-grey-15 font-semibold text-[18px] md:text-[20px] lg-text-[24px]">{title}</h2>
        </div>
        <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px] mt-5">{description}</p>
    </div>
  )
}


export default Features