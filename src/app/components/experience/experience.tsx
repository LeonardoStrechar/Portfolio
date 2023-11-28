export function Experience() {
  return (
    <div id="technologies" className="w-full flex flex-col items-center mb-5">
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-amaranth text-xl mb-1">Experience</p>
        <img src="linear-line.svg" alt="linear line" />
      </div>
      <div className="my-10">
        <div className="border border-amaranth rounded-[33px] w-[350px] h-[420px] px-[1px] py-[1px] flex flex-col">
          <img src="./conpanyImages/sideral.jpg" alt="conpany image" className="rounded-[33px] h-full w-full" />
          <div className=" text-white h-full rounded-b-[33px] -mt-32 bg-blackRussian opacity-50 p-2 text-start">
            <p>teste de texto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
