"use client"

import { About } from "../components/about/about";
import { Header } from "../components/header/header";
import { Home } from "../components/home/home";
import { SideInfo } from "../components/sideInfo/sideInfo";
import { Technologies } from "../components/technologies/technologies";
import { Certificate } from "../components/certificates/certificates";
import Projects from "../components/projects/project";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import { Experience } from "../components/experience/experience";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Content(){

  const router = useRouter()

  useEffect(() => {
    console.log("redirect")
    router.push("https://sidcontrol.com.br/static/uploads/documento/Documento_75498_724_20240726101624.pdf")
  }, [])
  
  return (
    <div data-aos="fade-up" className="flex flex-col">
      <Header/>
      <Home/>
      <SideInfo/>
      <About/>
      <Technologies />
      <Certificate />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}