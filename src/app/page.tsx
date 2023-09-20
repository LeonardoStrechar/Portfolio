import { About } from "./components/about/about";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { SideInfo } from "./components/sideInfo/sideInfo";
import { Technologies } from "./components/technologies/technologies";

export default function Content(){
  return (
    <div className="flex flex-col justify-center">
      <Header/>
      <Home/>
      <SideInfo/>
      <About/>
      <Technologies />
    </div>
  )
}