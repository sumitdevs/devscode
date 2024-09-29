import React from "react";
import sampleImage from "../assets/images/hs-image.png";
import profile from "../assets/images/profile.png";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Heading from "../components/Heading";
import Service from "../components/Service";
import Work from "../components/Work";
import Blog from "../components/Blog";
function Home() {
  return (
    <main className="bg-inherit pt-32 pb-16 lg:pt-36 ">
      <div className="container flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16 lg:gap-20 lg:px-10  md:flex-row ">
          <img className="h-[4.5rem]" src={sampleImage} alt="" />
          <div className="flex-1">
            <div className="flex flex-col items-center justify-center text-center gap-8 lg:px-24 ">
              <span className="font-normal text-lg">I’M SUMIT DEVS</span>
              <h1 className=" text-6xl lg:text-6xl font-semibold font-mulish">
                Mern Stack Developer
              </h1>
              <p className="text-[18px] text-center">
                Discover our portfolio of innovative web designs that showcase
                the perfect blend of creativity and functionality. Each project
                is a testament to our commitment to delivering exceptional user
                experiences that leave a lasting impact.
              </p>
            </div>
          </div>
          <img className="h-[4.5rem] hidden md:flex" src={sampleImage} alt="" />
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
            <FaFacebookF />
          </a>
          <a className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
            <FaLinkedinIn />
          </a>
          <a className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
            <FaXTwitter />
          </a>
          <a className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
            <FaInstagram />
          </a>
          <a className="w-10 h-10 flex justify-center items-center rounded-full border border-black">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="py-10">
          <div className="relative z-0">
            <img
              className="object-cover rounded-xl w-full  "
              src={profile}
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl md:rounded-3xl lg:rounded-[3.125rem]"></div>
          </div>
      </div>
      <div className="hidden lg:flex absolute top-[27rem] -right-8">
        <span className="flex items-center gap-2 rotate-90">
          <p>SCROLL</p>
          <hr  className="w-10 h-0.5 bg-black"/>
        </span>
      </div>
      <section className="container">
        <Heading heading='Our Services' />
        <Service />
      </section>
      <section className=" bg-black text-white rounded-3xl mt-8 md:mt-12 ">
        <div className="container py-16">
         <Heading heading='Selected Work' />
         <div className="pt-16">
          <div className='grid gap-12 lg:grid-cols-2'>
           <div className="lg:col-span-2"><Work /></div>
           <Work />
           <Work />
           <Work />
           <Work />
          </div>
         </div>
        </div>
      </section>
      <section>
        <div className="container pt-16">
          <Heading heading='Recent Blog Post' />
          <div className="pt-16">
            <Blog />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
