export function Home (){
  return (
    <div className=" flex w-full justify-center py-24">
      <div className="flex flex-col lg:flex-row items-center w-full gap-6 max-w-5xl z-10"> 
        <div className="flex flex-col gap-16 w-full">
          <div className="text-center lg:text-start">
            <p className="text-amaranth text-lg">My name is</p>
            <p className="text-amaranth text-4xl lg:text-5xl font-medium">Leonardo</p>
            <p className="text-amaranth text-4xl lg:text-5xl font-medium">Strechar</p>
          </div>
          <div className="text-center lg:text-start">
            <p className="text-amaranth text-lg">And I'am</p>
            <div>
              <p className="text-amaranth text-3xl lg:text-4xl font-bold tracking-tighter">Software</p>
              <p className="text-amaranth text-3xl lg:text-4xl font-bold tracking-tighter">Engineer</p>
            </div>
          </div>
        </div>
        <div className="px-10 w-full flex justify-center z-10">
          <img src="/leonardoStrechar.svg" alt="leonardo strechar" />
        </div>
      </div>
      {/* formas geometricas background */}
      <div className="absolute top-6 right-36 z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
      <div className="absolute top-[450px] left-52 z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
      <div className="absolute top-48 left-[550px] z-[-10]">
        <img src="retangulo.svg" alt="retangulo" />
      </div>
    </div>
  )
}