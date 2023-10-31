export function Header (){
  return (
    <div className="sticky top-0 w-full z-20 bg-blackRussian ">
      <div className="w-full flex justify-center gap-8 p-3 ">
        <a href="/" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth">Home</a>
        <a href="/" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth">About</a>
        <a href="/" className="text-white pb-2 border-b-0 hover:border-b-[1px] hover:border-amaranth hover:text-amaranth">Contact</a>
      </div>
    </div>
  )
};