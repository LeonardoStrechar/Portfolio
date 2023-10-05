import { useEffect } from "react";
import { About } from "./components/about/about";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { SideInfo } from "./components/sideInfo/sideInfo";
import { Technologies } from "./components/technologies/technologies";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Content(){
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div data-aos="fade-up" className="flex flex-col justify-center">
      <Header/>
      <Home/>
      <SideInfo/>
      <About/>
      <Technologies />
    </div>
  )
}