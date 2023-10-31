export default function Contact() {
  return (
    <div className="flex justify-center w-full text-white mb-10">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full items-center">
        <div className="flex flex-col w-full items-center">
          <div className="text-start max-w-xs w-full flex flex-col gap-3">
            <p className="text-amaranth text-xl w-full">Contact</p>
            <div className="flex flex-col w-full">
              <p className="text-amaranth text-base pl-4">Professional email</p>
              <p className="text-[#E5E5E5] text-base pl-8">
                leonardostrechar@outlook.com
              </p>
            </div>

            <div>
              <p className="text-amaranth text-base pl-4">Phone</p>
              <p className="text-[#E5E5E5] text-base pl-8">
                +55 42 9 9831-3709
              </p>
            </div>

            <div>
              <p className="text-amaranth text-base pl-4">Address</p>
              <p className="text-[#E5E5E5] text-base pl-8">
                São José dos Pinhais - Paraná - Brazil
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full pt-5 lg:pt-0">
          <p className="text-amaranth text-[25px]">Let's work together?</p>
          <p className="text-amaranth text-[25px] pl-0 lg:pl-8 opacity-50">Let's work together?</p>
          <p className="text-amaranth text-[25px] pl-0 lg:pl-16 opacity-30">Let's work together?</p>
        </div>
      </div>
    </div>
  );
}
