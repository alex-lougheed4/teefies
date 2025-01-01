// Import Swiper styles
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { ReviewCard } from './ReviewCard'

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great service and friendly staff!',
    rating: 5
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Very professional and clean environment.',
    rating: 4
  },
  {
    id: 3,
    name: 'Sam Wilson',
    review: 'Highly recommend this place for dentures.',
    rating: 5
  },
  {
    id: 4,
    name: 'Alice Johnson',
    review: 'The staff was very accommodating and the service was excellent.',
    rating: 5
  },
  {
    id: 5,
    name: 'Bob Brown',
    review: 'I had a great experience, highly recommended!',
    rating: 4
  },
  {
    id: 6,
    name: 'Charlie Davis',
    review: 'Affordable prices and top-notch service.',
    rating: 5
  }
  // Add more reviews as needed
]

export const ReviewCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="mx-auto h-48 w-64 "
    >
      {reviews.map((review) => (
        <SwiperSlide className="flex-row " key={review.id}>
          <ReviewCard key={review.id} {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
