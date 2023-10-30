import Image from "next/image"

const footerLinks = ['Home', 'About', 'Team', 'Process', 'Pricing', 'Blog', 'Contact']
const Footer = () => {
  return (
    <footer className="bg-dark_green-15">
      <div className="max-container py-8 px-4 md:px-12">
        <div className="flex flex-wrap md:flex-row justify-between items-center">
        <Image src='/Logo.png' alt="logo" height={45} width={195}/>
    
        <div className="flex justify-wrap gap-2 md:gap-5">
        {footerLinks.map((link) => (
          <a href='/' key={link} className="text-white font-semibold text-[14px] md:text-[16px] lg:text-[18px]">{link}</a>
        ))}
      </div>
        
        <button className="flex flew-row items-center gap-2" type="button">
          <a className="text-white text-[16px] md:text-[18px] font-semibold">Go To Top</a>
          <Image src='/arrowUp.png' alt="arrow up" height={56} width={56}/>
        </button>

      </div>
      <div className="bg-dark_green-20 mt-4 rounded-xl border-[1px] border-dark_green-25 p-3 flex justify-center md:justify-between items-center gap-6 flex-wrap">
          <div className="flex flex-col md:flex-row gap-3 w-full md:max-w-[800px]">
            <div className="border-[1px] border-dark_green-25 rounded-md flex flex-row gap-2 py-3 px-5 justify-center">
              <Image src='/email.png' alt="email" height={24} width={24}/>
              <p className="text-[16px] lg:text-[18px] text-white">hello@squareup.com</p>
            </div>
            <div className="border-[1px] border-dark_green-25 rounded-md flex flex-row gap-2 py-3 px-5 justify-center">
              <Image src='/phone.png' alt="phone" height={24} width={24}/>
              <p className="text-[16px] lg:text-[18px] text-white">+91 91813 23 2309</p>
            </div>
            <div className="border-[1px] border-dark_green-25 rounded-md flex flex-row gap-2 py-3 px-5 justify-center">
              <Image src='/location.png' alt="location" height={24} width={24}/>
              <p className="text-[16px] lg:text-[18px] text-white">Somewhere in the World</p>
            </div>
          </div>
          <p className="text-white text-[14px] lg:text-[18px] text-center">© 2023 Nutritionist. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
