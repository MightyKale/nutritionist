import Image from "next/image"
import Button from "./Button"

const Header = () => {
  return (
    <nav className="bg-dark_green-20 padding-container py-5">
        <div className="max-container border-2 border-[#2C5446] bg-dark_green-25 flexBetween rounded-md">
            <Image src='/path.png' alt="path" width={195} height={100} className="color-green-70 overflow-hidden ml-6 hidden md:inline-block"/>
            <div className="flex-1 flexCenter gap-2 max-w-[1596px] max-h-[44px]">
                <Image src='/icon.png' alt="icon" width={24} height={24}/>
                <p className="text-white text-[12px] md:text-[16px] lg:text-[18px]">Join Our Personalized Nutrition Demo For Free</p>
                <Image src='/arrow_right.png' alt="icon" width={24} height={24} className="ml-2"/>
            </div>
            <Image src='/path2.png' alt="path" width={195} height={100} className="color-green-70 overflow-hidden mr-6 hidden md:inline-block"/>
        </div>
        <div className="bg-dark_green-40 h-[0.5px] opacity-40 mt-2 w-full"/>
        <div className="mt-6 flexBetween max-container">
          <Image src='/logo.png' alt="logo" height={16.5} width={140.8}/>
          <Image src='/hamburger.png' alt="menu" width={25.5} height={17} className="md:hidden inline-block"/>
          <div className="hidden md:flexBetween gap-6 lg:gap-10">
            <ul className="flexBetween gap-6 lg:gap-10">
              <li><a href="/" className="font-semibold text-[18px] text-green-70 cursor-pointer">Home</a></li>
              <li><a href="#features" className="font-semibold text-[18px] text-white hover:text-green-70 cursor-pointer">Features</a></li>
              <li><a href="#blogs" className="font-semibold text-[18px] text-white hover:text-green-70 cursor-pointer">Blogs</a></li>
              <li><a href="#testimonials" className="font-semibold text-[18px] text-white hover:text-green-70 cursor-pointer">Testimonials</a></li>
              <li><a href="#pricing" className="font-semibold text-[18px] text-white hover:text-green-70 cursor-pointer">Pricing</a></li>
            </ul>
            <Button text={'Contact Us'} color={'bg-green-70'}/>
          </div>
        </div>
    </nav>
  )
}

export default Header