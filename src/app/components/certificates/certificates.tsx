import style from './style.css'
export function Certificate() {
  const images_1 = [
    "certificates/certificado-docker.jpeg",
    "certificates/certificado-figma.jpeg",
    "certificates/certificado-javascript.jpeg",
    "certificates/certificado-nissei-1.jpeg",
    "certificates/certificado-nissei-2.jpeg",
    "certificates/certificado-nissei-3.jpeg",
    "certificates/certificado-node.jpeg",
    "certificates/certificado-rocketseat-1.jpeg",
    "certificates/certificado-rocketseat-2.jpeg",
    "certificates/certificado-rocketseat-3.jpeg",
    "certificates/certificado-shopify.jpeg",
    "certificates/certificado-tailwind.jpeg",
    "certificates/certificado-typescript.jpeg",
  ];

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-amaranth text-xl mb-1">Certificates</p>
        <img src="linear-line.svg" alt="linear line" />
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <div className="w-[200%] h-72 overflow-hidden relative">
          <div className="w-[200%] flex items-center justify-between lg:justify-evenly absolute left-0 animatee gap-8 lg:gap-5">
            {images_1.map((i) => {
              return (
                <div
                  key={i}
                  className="flex justify-center ease-in-out duration-500 items-center w-72 hover:min-w-96 h-48 hover:h-64 p-4 border-amaranth border-2 cursor-pointer hover:bg-amaranth focus:bg-amaranth rounded-[10px] lg:rounded-[25px]"
                >
                  <img
                    className="min-w-[250px] ease-in-out duration-500 hover:min-w-[400px] w-full h-full z-10 hover:z-50"
                    src={i}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
