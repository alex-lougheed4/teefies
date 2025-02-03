import { ReviewCard } from './ReviewCard'

const reviews = [
  {
    id: 1,
    name: 'Anonymous',
    review: 'Couldn’t ask for better care from Andrew!',
    rating: 5
  },
  {
    id: 2,
    name: 'Anonymous',
    review: 'Excellent bedside manner!',
    rating: 5
  },
  {
    id: 3,
    name: 'Anonymous',
    review: 'Treated my mom with care and respect.',
    rating: 5
  },
  {
    id: 4,
    name: 'Anonymous',
    review:
      'Knowledgeable, friendly and respectful and provided a great service',
    rating: 5
  },
  {
    id: 5,
    name: 'Anonymous',
    review: 'Will definitely be using them again in the future.',
    rating: 5
  },
  {
    id: 6,
    name: 'Anonymous',
    review:
      'Andrew was very responsive, visiting my housebound Dad at his home',
    rating: 5
  }
]
//stop animation on hover??
export const ReviewCarousel = () => {
  return (
    <>
      <div className=" mt-72 w-80 overflow-hidden md:mt-2">
        <div className="flex animate-marquee items-center gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </>
  )
}
