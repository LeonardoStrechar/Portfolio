export function Home (){
  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-6">
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <p className="text-amaranth text-lg">My name is</p>
          <p className="text-amaranth text-4xl font-medium">Leonardo</p>
        </div>
        <div className="text-center">
          <p className="text-amaranth text-lg">And I'am</p>
          <div>
            <p className="text-amaranth text-2xl font-bold tracking-tighter">Software</p>
            <p className="text-amaranth text-2xl font-bold tracking-tighter">Engineer</p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <img src="/leonardoStrechar.svg" alt="leonardo strechar" />
      </div>
    </div>
  )
}