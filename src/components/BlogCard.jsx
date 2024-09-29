import React from 'react';
import blog3 from "../assets/images/blog2.jpg";
import work1 from "../assets/images/work1.png";

function BlogCard(props){
    return(
        <div className='flex flex-col gap-2 h-full'>
            <img src={blog3} alt="" className='h-full object-cover w-full rounded-md' />
            <div className='flex flex-col gap-2 lg:gap-0.5'>
              <span className='text-lg lg:text-sm self-start font-light'>DESIGN</span>
              <a className='' href="#"><h2 className='text-2xl lg:text-base'>Brands are using macro photography to grab your attention in awhole new way
              </h2></a>
              <span className=' text-gray-400 flex justify-between'><p className='text-lg lg:text-sm'>By-Sumit Devs</p><p className='text-lg lg:text-sm'>Jan 22, 2024</p></span>
            </div>
        </div>
    )
}

export default BlogCard;