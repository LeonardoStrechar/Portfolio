"use client"
import { useEffect, useState } from "react";

export function About (){

  const [hoverImage, setHoverImage] = useState(false)
  const [hoverText, setHoverText] = useState(false)
  console.log("gover", hoverText)

  useEffect(() => {

    const hoverButtonTrue = document.getElementById('download_cv');
    hoverButtonTrue?.addEventListener('mouseover', function(){
      setHoverImage(true)
    })

    const hoverButtonFalse = document.getElementById('download_cv');
    hoverButtonFalse?.addEventListener('mouseleave', function(){
      setHoverImage(false)
    })

    //Hover text about me
    const hoverTextTrue= document.getElementById('button_about_me');
    hoverTextTrue?.addEventListener('mouseover', function(){
      setHoverText(true)
    })

    const hoverTextFalse= document.getElementById('button_about_me');
    hoverTextFalse?.addEventListener('mouseleave', function(){
      setHoverText(false)
    })
    
  }, []) 
  return (
    <div className="mb-32">
      <div className="flex flex-col items-center w-full text-white">
        <div>
          <a href="/LeonardoStrecharCV.pdf" download>
            <button id="download_cv" className="border-2 rounded-xl px-5 py-2 border-amaranth text-amaranth hover:text-white flex items-center gap-4 bg-blackRussian hover:bg-amaranth">
              {!hoverImage &&
                <img src="icon-download_cv_red.svg" alt="Icon CV download" className="w-7 h-7" />
              } {hoverImage && 
                <img src="icon-download_cv_white.svg" alt="Icon CV download" className="w-7 h-7" />
              }
              Curriculum
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center w-full pt-16">
          <div className="flex items-center">
            <div id="button_about_me" className="border border-amaranth bg-blackRussian hover:bg-white hover:text-black hover:rotate-[-405deg] rounded-xl py-12 px-6 origin-center rotate-[-45deg] ease-in duration-300">
              <p className="origin-center rotate-45">About me</p>
            </div>
          </div>
          {!hoverText && 
            <p className="max-w-xs border border-amaranth px-12 py-8 rounded-3xl text-center">Sou Desenvolvedor de sistemas web com mais de 5 anos de experiência, desde pequeno sempre fui apaixonado por tecnologia e apesar de nascer no interior e trabalhar por muito tempo com agricultura, nunca deixei essa paixão de lado e hoje virou minha realidade!</p>
          } 
          {hoverText && 
            <p className="max-w-xs border bg-white text-black border-amaranth px-12 py-8 rounded-3xl text-center">Sou Desenvolvedor de sistemas web com mais de 5 anos de experiência, desde pequeno sempre fui apaixonado por tecnologia e apesar de nascer no interior e trabalhar por muito tempo com agricultura, nunca deixei essa paixão de lado e hoje virou minha realidade!</p>
          }
        </div>
      </div>
      {/* <div className="absolute">
        <img className="bg-red-600" src="pointer.svg" alt="pointer" />
      </div> */}
      {/* formas geometricas background */}
      <div className="absolute top-[900px] right-96 z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
      <div className="absolute top-[1000px] left-[500px] z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
      <div className="absolute top-[700px] left-[750px] z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
    </div>
  )
}