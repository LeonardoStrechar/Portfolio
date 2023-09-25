import styles from './style.css';

export function Technologies() {
  const images_1 = [
    "icon-aws.svg",
    "icon-javascript.svg",
    "icon-html.svg",
    "icon-css.svg",
    "icon-typescript.svg",
    "icon-node.svg",
    "icon-express.svg",
    "icon-graphql.svg",
    "icon-react.svg",
    "icon-postgresql.svg"
  ];

  const images_2 = [
    "icon-nextjs.svg",
    "icon-tailwind.svg",
    "icon-bootstrap.svg",
    "icon-styled-components.svg",
    "icon-docker.svg",
    "icon-mysql.svg",
    "icon-stripe.svg",
    "icon-shopify.svg",
    "icon-figma.svg",
    "icon-gcp.svg"
  ];

  return (
    <div className="w-full flex flex-col items-center mb-5">
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-amaranth text-xl mb-1">Technologies</p>
        <img src="linear-line.svg" alt="linear line" />
      </div>
      <div className="w-full flex items-center justify-center mt-6">
        <div className="w-[200%] h-28 overflow-hidden relative">
          <div className={styles.animate}>
            <div className="w-[200%] flex items-center justify-between lg:justify-evenly absolute left-0 animatee">
              {images_1.map((i) => {
                return (
                  <div className="flex justify-center w-20 h-20 lg:w-28 lg:h-28 p-4 border-amaranth border-2 rounded-[10px] lg:rounded-[25px]">
                    <img src={i} />
                  </div>
                );
              })}
              {images_1.map((i) => {
                return (
                  <div className="flex justify-center w-20 h-20 lg:w-28 lg:h-28 p-4 border-amaranth border-2 rounded-[10px] lg:rounded-[25px]">
                    <img src={i} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[200%] h-28 overflow-hidden relative">
          <div className={styles.animate}>
            <div className="w-[200%] flex items-center justify-between lg:justify-evenly absolute left-0 animatea">
              {images_2.map((i) => {
                return (
                  <div className="flex justify-center w-20 h-20 lg:w-28 lg:h-28 p-4 border-amaranth border-2 rounded-[10px] lg:rounded-[25px]">
                    <img src={i} />
                  </div>
                );
              })}
              {images_2.map((i) => {
                return (
                  <div className="flex justify-center w-20 h-20 lg:w-28 lg:h-28 p-4 border-amaranth border-2 rounded-[10px] lg:rounded-[25px]">
                    <img src={i} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
