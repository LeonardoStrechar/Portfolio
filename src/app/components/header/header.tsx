"use client"
import { useState } from "react"

export function Header (){

 const [spandSidebar, setSpandSidebar] = useState(false)

 function teste(){
  setSpandSidebar(true)
 }
  return (
    <div className="sticky top-0 w-full z-20 bg-blackRussian flex flex-col items-center">
      <div className="w-full flex justify-center gap-8 p-3 ">
        <a href="#home" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Home</a>
        <a href="#about" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">About</a>
        <a href="#technologies" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Technologies</a>
        <a href="#expirence" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Expirence</a>
        <a href="#contact" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth duration-200">Contact</a>
      </div>    
    </div>
  )
};