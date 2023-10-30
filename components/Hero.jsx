import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className=" bg-[#FAFDF2]">
      <div className="flex flex-col md:flex-row">
        <div>
          <Image src='/Hero.png' alt='Hero' width={949} height={832} className="w-full max-container"/>
        </div>

      <div className="flexCenter md:justify-start md:items-start flex-col py-12 lg:py-28 px-10">
        <h2 className="font-semibold text-[18px] md:text-[22px] lg:text-[28px] text-dark_green-15">Transform Your ❤️ Health with</h2>
        <div className="border border-green-70 w-[250px] md:w-[296px] lg:w-[390px]"/>
        <h1 className="font-bold  text-[38px] md:text-[48px] lg:text-[58px] text-dark_green-15 mt-4 leading-tight">Personalized Nutrition <br className="hidden md:inline-block"/>Coaching</h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-grey-20 max-w-[759px] mt-5">Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>
        <div className="flex gap-6 mt-8 lg:mt-14">
          <Button text={'Get Started Today'} color={'bg-green-70'}/>
          <Button text={'Book a Demo'} color={'bg-green-95'} border={'border-green-85'}/>
          </div>
          <div className="flex justify-start items-center mt-8 lg:mt-16 gap-2">
            <Image src='/people.png' alt="people" width={102} height={52} className="max-w-[130px] h-auto"/>
            <p className="text-dark_green-20 font-semibold text-[18px] lg:text-20"><span className="text-dark_green-40 font-bold text-[18px] lg:text-20">430+ </span>Happy Customers</p>
            </div>      
        </div>
      </div>
    </section>
  )
}

export default Hero