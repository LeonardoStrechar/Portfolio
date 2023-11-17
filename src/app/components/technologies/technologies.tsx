'use client';

import { useState } from 'react';
import styles from './style.css';
import { textTech } from './text-tech';

export function Technologies() {

  const [nameImage, setNameImage] = useState('Selecione uma tecnologia')

  const getNameImage = (i: any) => {
    const content = textTech.filter(function(el) {
      return i == el.id ? el.content : null
    })
    setNameImage(content[0].content)
  }

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
            <div className="w-[200%] flex items-center justify-between lg:justify-evenly absolute left-0 animatee gap-3 lg:gap-0">
              {images_1.map((i) => {
                return (
                  <button key={i} onClick={() => getNameImage(i)} className="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 p-4 border-amaranth border-2 cursor-pointer hover:bg-gray-300 focus:bg-white rounded-[10px] lg:rounded-[25px]">
                    <img className='min-w-[30px] w-full max-w-[70px] h-16' src={i}/>
                  </button>
                );
              })}
              {images_1.map((i) => {
                return (
                  <button key={i} onClick={() => getNameImage(i)} className="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 p-4 border-amaranth border-2 cursor-pointer  hover:bg-gray-300 focus:bg-white rounded-[10px] lg:rounded-[25px]">
                    <img className='min-w-[30px] w-full max-w-[70px] h-16' src={i} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-0 lg:mt-6">
        <div className="w-[200%] h-28 overflow-hidden relative">
          <div className={styles.animate}>
            <div className="w-[200%] flex items-center justify-between lg:justify-evenly absolute left-0 animatea gap-3 lg:gap-0">
              {images_2.map((i) => {
                return (
                  <button key={i} onClick={() => getNameImage(i)} className="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 p-4 border-amaranth border-2 cursor-pointer hover:bg-gray-300 focus:bg-white rounded-[10px] lg:rounded-[25px]">
                    <img className='min-w-[30px] w-full max-w-[70px] h-16' src={i}/>
                  </button>
                );
              })}
              {images_2.map((i) => {
                return (
                  <button key={i} onClick={() => getNameImage(i)} className="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 p-4 border-amaranth border-2 cursor-pointer hover:bg-gray-300 focus:bg-white rounded-[10px] lg:rounded-[25px]">
                    <img className='min-w-[30px] w-full max-w-[70px] h-16' src={i} />
                  </button> 
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center px-10 py-10 gap-4'>
          <div className="border border-amaranth rounded-[33px] max-w-[350px] w-full h-96 p-3">
            <p className="text-white">{nameImage}</p>
          </div>
      </div>
    </div>
  );
}
