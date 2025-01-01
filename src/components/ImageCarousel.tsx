// Import Swiper styles
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

import ClinicDay from '@/assets/clinic-day.png'
import ClinicNight from '@/assets/clinic-night.png'
import bgImage from '@/assets/image.png'

const images = [bgImage, ClinicDay, ClinicNight]

export const ImageCarousel = () => {
  console.log(images)

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="absolute inset-0 z-0 mx-auto h-auto w-full"
    >
      {images.map((image) => (
        <SwiperSlide className="flex-row " key={image}>
          <img
            src={image}
            alt="ImageCarousel"
            className="flex size-full grow"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
