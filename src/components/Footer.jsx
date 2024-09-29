import React from "react";
import { SlArrowUpCircle } from "react-icons/sl";

function Footer(props){
    return (
        <footer className="bg-gray-800 ">
            <div className="container py-8 flex items-center justify-between text-white">
                <div>
                 <p className="text-white flex gap-1.5 items-center">
                    <span className="font-light text-[12px] md:text-lg">&copy; {new Date().getFullYear()}</span>
                    <span className="text-sm md:text-xl">{props.name.toUpperCase()}</span>
                    </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-xl ">BACK TO TOP</span>
                  <a href="#header"><SlArrowUpCircle className="text-3xl"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;