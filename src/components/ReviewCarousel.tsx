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
    review: 'The staff was very accommodating and excellent service.',
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
  },
  {
    id: 7,
    name: 'Diana Prince',
    review: 'Exceptional care and attention to detail.',
    rating: 5
  },
  {
    id: 8,
    name: 'Bruce Wayne',
    review: 'The best dental service I have ever received.',
    rating: 5
  },
  {
    id: 9,
    name: 'Clark Kent',
    review: 'Friendly staff and excellent service.',
    rating: 4
  },
  {
    id: 10,
    name: 'Barry Allen',
    review: 'Quick and efficient service.',
    rating: 5
  }
  // Add more reviews as needed
]
//stop animation on hover??
export const ReviewCarousel = () => {
  return (
    <>
      <div className=" mt-96 w-72 overflow-hidden md:mt-2">
        <div className="flex animate-marquee items-center gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </>
  )
}
