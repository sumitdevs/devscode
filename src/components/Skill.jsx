import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


function Skill(props){
    const [display,setDisplay] = useState(false);
    function handleDisplay(){
        setDisplay(!display);
    }
    return(
        <div className='md:mt-6'>
            <dl className={props.id<2?'flex flex-col gap-6 lg:pt-10 pb-8 border-gray-300 lg:border-t border-b':'flex flex-col gap-6 border-gray-300 border-b pb-8'}>
                <dt className='flex items-center justify-between'>
                    <h3 className='flex gap-4 md:gap-10'><span>{props.id<10?0:''}{props.id+1}</span> <span> {props.skill.heading}</span></h3>
                    <button onClick={()=>handleDisplay()} className='text-2xl'>{display?<IoClose/>:<FaPlus />}</button>
                </dt>
                <dd id='1' className={display?'bg-black text-white px-10 md:px-12 py-10 rounded-3xl':'hidden'}>
                    <ul className='list-disc pl-2 space-y-2'>
                {props.skill.items.map((item,_) => (
                    <li key={_}>{item}</li>
                ))}
            </ul>
                </dd>
            </dl>
        </div>
    )
}

export default Skill;