// Import Swiper styles
import 'swiper/css'

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
    <>
      <div className="bg-gray-100 overflow-hidden p-4 shadow-sm">
        <div className="marquee-content flex animate-marquee items-center gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </>
  )
}
