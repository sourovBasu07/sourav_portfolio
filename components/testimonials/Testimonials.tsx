"use client";

import { testimonialsData } from "@/constants";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="section container testimonials">
      <span className="section__subtitle">Testimonials</span>
      <h2 className="section__title">My Client's Say</h2>

      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Navigation]}
        className="testimonials__container"
      >
        {testimonialsData.map(({ id, image, title, description }) => (
          <SwiperSlide
            key={id}
            className="bg-containerColor border border-solid border-[rgba(0,0,0,0.1)] px-8 py-6 rounded-3xl mb-12"
          >
            <Image
              src={image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[60px] h-[60px] rounded-full mb-4"
            />

            <h3 className="font-medium text-normal-font mb-1">{title}</h3>
            <div className="text-small-font">{description}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
