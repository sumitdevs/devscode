import React from 'react';
import { FaStarOfLife } from "react-icons/fa";

function Heading(props){
    return(
        <div className='flex flex-col items-center'>
            <div className=''>
             <h2 className='text-5xl'>{props.heading}</h2>
             <span className='text-xl flex items-center font-mulish text-yellow-500'><FaStarOfLife />
             <hr className='h-[2px] -ml-2 w-56 bg-yellow-500 border-none'/></span>
            </div>
        </div>
    )
}

export default Heading;