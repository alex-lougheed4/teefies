import { ImageCarousel } from '@/components/ImageCarousel'
import OpenTimeCard from '@/components/OpenTimeCard'
import { ReviewCarousel } from '@/components/ReviewCarousel'

export const Home = () => {
  //bgi carousel behind?
  return (
    <>
      <ImageCarousel />
      <h1 className="grow-0 text-7xl text-white">Your smile is my priority</h1>
      <OpenTimeCard />
      <ReviewCarousel />
    </>
  )
}
