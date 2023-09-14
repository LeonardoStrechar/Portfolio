export function SideInfo (){
  return (
    <div className="text-white absolute z-20 top-0 left-0 h-full border-r-amaranth border-r-[1px] p-2 bg-gradient-to-b from-amaranth to-blackRussian">
      <div className="flex flex-col text-center justify-center h-full max-w-[20px] md:max-w-[40px]">
        <div className="h-full flex items-start justify-center">
          <img src="LS.svg" alt="Logo leonardo Strechar"/>
        </div>
        <div className="h-full flex flex-col justify-end gap-2">
          <a href="https://github.com/LeonardoStrechar" target="_blank">
            <img src="/icon-github.svg" alt="github leonardo strechar"/>
          </a>
          <a href="https://www.linkedin.com/in/leonardo-strechar/" target="_blank">
            <img src="/icon-linkedin.svg" alt="linkedin leonardo strechar"/>
          </a>
        </div>
      </div>
    </div>
  )
}