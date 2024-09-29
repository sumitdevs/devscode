import React, {useState} from 'react';
import { HiArrowLongRight} from "react-icons/hi2";
import { FiAlignLeft, FiX } from "react-icons/fi";


function Header(){
    const [menu,setMenu] = useState(true);
    function handleMenu() {
        setMenu(!menu)
        console.log(menu)
    }
    return(
      <header id='header' className='bg-white fixed z-10 w-full shadow-md' aria-label="Global">
        <nav className=' flex container  py-4 items-center justify-between'>
            <div className='flex'>
                <a href=""><span className='font-bold text-2xl lg:text-lg'>LOGO</span></a>
            </div>
            <div className='hidden md:flex gap-16 md:gap-10 items-center justify-center text-base font-medium'>
                <a className='hover-link' href="#">Home</a>
                <a className='hover-link' href="#">About</a>
                <a className='hover-link' href="#">Blog</a>
                <a className='hover-link' href="#">Service</a>
                <button className='px-10 py-2 tracking-wider font-extralight flex items-center gap-2  bg-black text-white rounded-full text-base'>
                    <span>Let's Talk</span>
                    <HiArrowLongRight className='text-2xl' />
                </button>
            </div>
            <div className='flex md:hidden'>
              <button onClick={()=>{handleMenu()}} ><FiAlignLeft className='text-4xl' /></button>
            </div>
        </nav>
        {/* mobile menu */}
        <div className={menu?'hidden':'' + 'md:hidden'}>
            <div className='fixed bg-white inset-y-0 right-0 w-full sm:max-w-sm z-10' role="dialog" aria-modal="true">
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between px-6 py-[18px]'>
                     <div className='flex'><a href=""><span className='font-bold text-2xl lg:text-lg'>LOGO</span></a></div>
                     <div className='flex'><button onClick={()=>{handleMenu()}} className='hover'><FiX className='text-4xl' /></button></div>
                    </div>
                    <div className='flex flex-col w-full px-2 gap-2 text-lg lg:text-base  lg:font-medium '>
                        <a className='mobile-hover' href="#">About</a>
                        <a className='mobile-hover' href="#">Blog</a>
                        <a className='mobile-hover' href="#">Home</a>
                        <a className='mobile-hover' href="#">Service</a>
                        <button className='px-4 py-3 tracking-wider font-extralight flex items-center  w-1/2 bg-black text-white rounded-full text-base'>
                        <span>Let's Talk</span>
                        <HiArrowLongRight className='text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
}

export default Header;