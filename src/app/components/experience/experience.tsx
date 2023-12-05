"use client"
import { listExpirence } from "./list-expirence";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, EffectCoverflow } from 'swiper/modules';
import { useResponsive } from "../../hooks/useResponsive";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Experience() {

  const { isMobile } = useResponsive();
  return (
    <div id="expirence" className="mb-32">
       <div className="w-full text-center flex flex-col items-center">
         <p className="text-amaranth text-xl mb-1">Experience</p>
         <img src="linear-line.svg" alt="linear line" />
       </div>
        <Swiper
          className="h-full max-w-[1200px]"
          slidesPerView={isMobile ? "auto" : 3}
          loop={true}
          direction="horizontal"
          speed={500}
          spaceBetween={0}
          navigation={true}
          pagination={true}
          modules={[
            FreeMode,
            Navigation,
            EffectCoverflow,
            Pagination,
          ]}
        >
          {listExpirence.map((item, index) => (
            <SwiperSlide key={index} className="mx-10">
              <div className="my-10">
                <div className="border border-amaranth hover:border-white duration-200 rounded-[33px] w-[350px] h-[420px] px-[1px] py-[1px] flex flex-col">
                  <img src={item.imageCompanyPath} alt="conpany image" className="rounded-[33px] h-full w-full" />
                  <div  className="text-white h-full rounded-b-[33px] -mt-32 hover:-mt-48 duration-200 bg-blackRussian bg-opacity-50 px-4 py-2">
                    <div className="flex justify-between">
                      <p className="opacity-100 font-bold">{item.office}</p>
                      <p className="opacity-70 text-[14px]">{item.workingTime}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={item.imageIcon} width={20} height={20} className="my-1"/>
                      <p className="text-[14px] opacity-70">{item.companyName}</p>
                    </div>
                    <p className="opacity-60 text-[12px]">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div>
  );
}
