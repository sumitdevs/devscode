import React from 'react';
import work1 from "../assets/images/work1.png";
import {FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



function Work(){
    return(
            <div className='w-fit flex gap-6 flex-col'>
            <div class="w-full aspect-video overflow-y-hidden gutter custom-scrollbar  hover:overflow-y-auto overflow-x-hidden">
                <img src = {work1} alt="Scrollable Image" class="object-contain rounded-xl px-1 py-1" />
            </div>
            <div className='flex items-center justify-between'>
              <button className='px-6 md:px-10 py-2 rounded-3xl border flex items-center gap-2 '>
                <span>Code</span>
                <FaGithub className='text-xl'/>
              </button>
              <button className='px-6 md:px-10 py-2 bg-white text-black rounded-3xl border flex items-center gap-2 '>
                <span>Live Demo</span>
                <FiExternalLink className='text-xl' />
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <h2>IB Group Tomorrow Website <span className='text-lg'>(2024)</span></h2>
                <ul className='list-disc flex gap-4 space-x-3 text-gray-400 text-sm lg:text-base'>
                  <li className='list-none'>Art Direction</li>
                  <li>UX/UI Design</li>
                  <li>Graphic Design</li>
                </ul>
                <div className='flex items-center gap-4'>
                  <span className='border border-gray-400 text-sm text-gray-400 rounded-3xl px-4 py-1'>Tech Tools</span>
                  <span className='border border-gray-400 rounded-xl px-2 py-1'>
                    <ul className='flex list-none px-2 py-0.5 md:list-disc list-inside space-x-3 text-sm  text-gray-400'>
                      <li className=''>HTML</li>
                      <li>TailwindCSS</li>
                      <li>Javascript</li>
                    </ul>
                  </span>
                </div>
            </div>
            </div>
    )
}

export default Work;