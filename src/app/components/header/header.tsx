"use client"

import { Link, animateScroll as scroll } from "react-scroll";

export function Header (){
  return (
    <div className="sticky top-0 w-full z-20 bg-blackRussian flex flex-col items-center">
      <div className="w-full flex justify-center gap-8 p-3 ">
        <Link
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={1000} 
          to="home" 
          className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Home</Link>
        <Link 
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={1000} 
          to="about" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">About</Link>
        <Link
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={1000} 
          to="technologies" 
          className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Technologies</Link>
        <Link
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={1000} 
          to="expirence" 
          className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Experience</Link>
        <Link 
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-70}
          duration={1000} 
          to="contact" 
          className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Contact</Link>
      </div>    
    </div>
  )
};