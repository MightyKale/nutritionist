import { BLOGS } from "@/constants"
import Image from "next/image"

const Blogs = () => {
  return (
    <section className="bg-[#FAFDF2] lg:pt-20 pb-20 px-20 padding-container" id="blogs">
    <div className="flexCenter flex-col">
      <h1 className="text-grey-15 font-bold text-[28px] md:text-[38px] lg:text-[48px] mb-3 md:mb-6">Our Blogs</h1>
      <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px] text-center max-w-[996px]">Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.</p>
    </div>
    <div className="grid md:grid-cols-2 mt-16 gap-5 lg:gap-10 lg:px-32 px-15">
      {BLOGS.map((blog)=>(
        <BlogCard 
          key={blog.subtitle}
          image={blog.image}
          subtitle={blog.subtitle}
          description={blog.description}
          title={blog.title}
          photo={blog.photo}
          author={blog.author}
          date={blog.date}
          length={blog.length}/>
      ))}
    </div>
  </section>
  )
}

const BlogCard = ( {image, title, subtitle, description, author, photo, date, length} ) => {
  return (
    <div className="flex items-start flex-col bg-green-95 border-[1px] border-green-90 p-8 rounded-xl">
        <Image src={image} alt='blog' width={703} height={428}/>
        <div className="flex flex-col items-start mt-4 md:mt-5 lg:mt-8">
            <p className="text-grey-20 text-[14px] md:text-[16px] lg:text-[18px]">{subtitle}</p>
            <h2 className="text-[20px] md:text-[22px] lg:text-[26px] text-grey-15 font-semibold mb-3 md:mb-6">{title}</h2>
            <p className="text-grey-30 text-[14px] md:text-[16px] lg:text-[18px]">{description}</p>
        </div>

        <div className="bg-green-97 border-[1px] border-green-90 rounded-xl p-6 flex justify-between flex-col md:flex-row mt-5 md:mt-8 lg:mt-10 w-full">
        <div className="flex flex-row gap-2">
            <Image src={photo} alt="author" width={60} height={60} className="max-w-[60px] max-h-[60px]"/>
            <div className="flex flex-col items-start p-2">
                <p className="font-semibold text-dark_green-15 text-[16px] md:text-[18px] lg:text-[20px]">{author}</p>
                <p className="text-grey-35 text-[14px] md:text-[16px] lg:text-[18px]">{date} - {length}</p>
            </div>
        </div>
        
            <div className="flex flex-row gap-5 items-center mt-5 justify-end">
                <div className="bg-green-95 border-[1px] border-green-90 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
                </div>
                <div className="bg-green-95 border-[1px] border-green-90 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs