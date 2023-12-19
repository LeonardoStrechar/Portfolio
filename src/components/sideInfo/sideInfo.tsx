"use client"
import { useEffect, useState } from "react";

export function SideInfo (){

  const [hoverIconGithub, setHoverIconGithub] = useState(false)
  const [hoverIconLinkedin, setHoverIconLinkedin] = useState(false)

  useEffect(() => {

    //GITHUB
    const hoverIconGithub = document.getElementById('iconGithub');
    hoverIconGithub?.addEventListener('mouseover', function(){
      setHoverIconGithub(true)
    })
    const hoverIconGithubFalse = document.getElementById('iconGithub');
    hoverIconGithubFalse?.addEventListener('mouseleave', function(){
      setHoverIconGithub(false)
    })

    //LINKEDIN
    const hoverIconLinkedin = document.getElementById('iconLinkedin');
    hoverIconLinkedin?.addEventListener('mouseover', function(){
      setHoverIconLinkedin(true)
    })
    const hoverIconLinkedinFalse = document.getElementById('iconLinkedin');
    hoverIconLinkedinFalse?.addEventListener('mouseleave', function(){
      setHoverIconLinkedin(false)
    })
  }, []) 
  
  return (
    <div id="about" className="hidden lg:flex ">
    <div className="text-white fixed z-30 top-0 left-0 h-full border-r-amaranth border-r-[1px] p-2 bg-gradient-to-b from-amaranth to-blackRussian">
      <div className="flex flex-col text-center justify-center h-full max-w-[20px] md:max-w-[40px]">
        <div className="h-full flex items-start justify-center">
          <img src="LS.svg" alt="Logo leonardo Strechar"/>
        </div>
        <div className="h-full flex flex-col justify-end gap-2">

          <a id="iconGithub" href="https://github.com/LeonardoStrechar" target="_blank">
            {!hoverIconGithub &&
              <img src="/icon-github.svg" alt="github leonardo strechar"/>
            }{hoverIconGithub && 
              <img  src="/icon-github-white.svg" alt="github leonardo strechar"/>
            }
          </a>

          <a id="iconLinkedin" href="https://www.linkedin.com/in/leonardo-strechar/" target="_blank">
            {!hoverIconLinkedin &&
              <img src="/icon-linkedin.svg" alt="linkedin leonardo strechar"/>
            }{hoverIconLinkedin &&
              <img src="/icon-linkedin-white.svg" alt="linkedin leonardo strechar"/>
            }
          </a>

        </div>
      </div>
    </div>
    </div>
  )
}