import { Header } from "./components/header/header";
import { Home } from "./components/home/home";

export default function Content(){
  return (
    <div className="flex flex-col justify-center">
      <Header/>
      <Home />
    </div>
  )
}