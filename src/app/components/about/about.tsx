"use client"
import { useEffect, useState } from "react";

export function About (){

  const [hoverImage, setHoverImage] = useState(false)

  useEffect(() => {

    const hoverButtonTrue = document.getElementById('download_cv');
    hoverButtonTrue?.addEventListener('mouseover', function(){
      setHoverImage(true)
    })

    const hoverButtonFalse = document.getElementById('download_cv');
    hoverButtonFalse?.addEventListener('mouseleave', function(){
      setHoverImage(false)
    })
    
  }, []) 
  return (
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
      <div>
        <p>texto</p>
        <h2>About me</h2>
      </div>
    </div>
  )
}