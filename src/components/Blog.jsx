import React from "react";
import BlogCard from "./BlogCard";
import blog3 from "../assets/images/blog2.jpg";

function Blog() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2 lg:row-span-2">
      <div className='flex flex-col gap-2 lg:gap-4 h-full w-full'>
            <img src={blog3} alt="" className='h-full object-cover w-full rounded-md' />
            <div className='flex flex-col gap-2'>
              <span className='text-lg self-start font-light'>DESIGN</span>
              <a className='' href="#"><h2 className="text-2xl">Brands are using macro photography to grab your attention in awhole new way
              </h2></a>
              <span className=' text-gray-400 flex justify-between'><p className="text-lg">By-Sumit Devs</p><p className="text-lg">Jan 22, 2024</p></span>
            </div>
        </div>      
      </div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
