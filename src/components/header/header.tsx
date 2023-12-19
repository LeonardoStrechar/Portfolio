"use client"

import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export function Header (){

  const [open, setOpen] = useState(false)

  function box(e: any){
    setOpen(e)
  }
  return (
    <div>
      <div className="sticky top-0 w-full z-20 bg-blackRussian flex flex-col items-center">
        <div className="w-full justify-center gap-8 p-3 hidden md:flex ">
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={1000} 
            to="home" 
            className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200 cursor-pointer">Home</Link>
          <Link 
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={1000} 
            to="about" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200 cursor-pointer">About</Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={1000} 
            to="technologies" 
            className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200 cursor-pointer">Technologies</Link>
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={1000} 
            to="expirence" 
            className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200 cursor-pointer">Experience</Link>
          <Link 
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={1000} 
            to="contact" 
            className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200 cursor-pointer">Contact</Link>
        </div>    

      </div>
      <div>
        <button className="bg-none fixed right-0 pr-5 pt-5 flex md:hidden" onClick={() => box(true)}>
          <img src="list.svg" width={30} height={30} alt="" />
        </button>
      </div> 
      <div className={ open ? 'bg-red-700 fixed right-0 h-screen min-w-[200px] z-50' : 'bg-red-700 hidden right-0 h-screen min-w-[200px] z-50'}>
        <div className="mx-3 my-2">
          <button className="bg-none" onClick={() => box(false)} >
            <img src="button-close.svg" width={30} height={30}  />
          </button>
        </div>
        <div>
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-col justify-center gap-8 p-3 mt-20 ">
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={1000} 
                to="home" 
                className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-black hover:text-black duration-200 cursor-pointer">Home</Link>
              <Link 
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={1000} 
                to="about" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-black hover:text-black duration-200 cursor-pointer">About</Link>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={1000} 
                to="technologies" 
                className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-black hover:text-black duration-200 cursor-pointer">Technologies</Link>
              <Link
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={1000} 
                to="expirence" 
                className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-black hover:text-black duration-200 cursor-pointer">Experience</Link>
              <Link 
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={1000} 
                to="contact" 
                className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-black hover:text-black duration-200 cursor-pointer">Contact</Link>
            </div>
            <div className="flex flex-col items-end justify-end bottom-0 absolute w-full pb-2">
              <p className="text-white text-[14px] pr-2">Developed by</p>
              <p className="text-white font-bold text-[15px] pr-2">Leonardo Strechar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};