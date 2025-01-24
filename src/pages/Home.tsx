import ProfilePicture from '@/assets/andrew.jpg'
import DentureReline from '@/assets/denture-reline.jpg'
import DentureRepair from '@/assets/denture-repair.jpg'
import NewDenture from '@/assets/new-denture.jpg'
import OpenTimeCard from '@/components/OpenTimeCard'
import { ReviewCarousel } from '@/components/ReviewCarousel'
export const Home = () => {
  //bgi carousel behind?

  const data = [
    {
      title: 'New Dentures',
      overview: ['time', 'cost', 'benefits'],
      image: NewDenture
    },
    {
      title: 'Denture Repairs',
      overview: ['time', 'cost', 'benefits'],
      image: DentureRepair
    },
    {
      title: 'Implant Dentures',
      overview: ['time', 'cost', 'benefits'],
      image: ''
    },
    {
      title: 'Denture Relines',
      overview: ['time', 'cost', 'benefits'],
      image: DentureReline
    }
  ]
  return (
    <>
      <div className="h-[90vh] w-full bg-hero bg-cover bg-center ">
        <div className="flex flex-row items-center justify-between">
          <h1 className="ml-52 text-5xl">Your smile is my priority</h1>
          <OpenTimeCard />
        </div>
        <div className="absolute bottom-0 w-full">
          <ReviewCarousel />
        </div>
      </div>
      <div className="mx-auto flex max-w-4xl items-center gap-5 p-4">
        <div className="mb-8 flex flex-col items-center md:flex-row">
          <img
            src={ProfilePicture}
            alt="Owner's Profile"
            className="size-full rounded-3xl object-cover"
          />
        </div>
        <div className="rounded-2xl bg-baseGrey p-5 text-center">
          <h2 className="text-2xl font-semibold">Andrew Lougheed, CDT</h2>
          <p className="text-gray-700 mt-2">
            Andrew is a highly skilled Clinical Dental Technician with over 20
            years of experience in the field. He is dedicated to providing
            top-quality dental care and creating a comfortable environment for
            all patients.
          </p>
          <h2 className="mb-2 text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver exceptional dental care with a focus on
            patient comfort and satisfaction. We strive to stay at the forefront
            of dental technology and techniques to ensure the best outcomes for
            our patients.
          </p>
          <h2 className="mb-2 text-2xl font-semibold">Services We Offer</h2>
          <p className="text-gray-700 mb-4">
            We offer a wide range of dental services, including dentures,
            implants, and cosmetic dentistry. Our team is committed to providing
            personalized care tailored to each patient&apos;s unique needs.
          </p>
          <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or would like to schedule an appointment,
            please don&apos;t hesitate to contact us. We look forward to
            welcoming you to our clinic and helping you achieve a healthy,
            beautiful smile.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5  p-4">
        {data.map((item) => (
          <ProductHero
            key={item.title}
            title={item.title}
            overview={item.overview}
            image={item.image}
          />
        ))}
      </div>
    </>
  )
}

const ProductHero = ({
  title,
  overview,
  image
}: {
  title: string
  overview: string[]
  image: string
}) => (
  <div className="mb-6 flex flex-col items-center rounded-lg bg-teal-300 p-6 shadow-md md:flex-row">
    <img
      src={image}
      alt={title}
      className="mb-4 w-full rounded-lg object-cover md:mb-0 md:mr-6 md:w-1/3"
    />
    <div className="flex flex-col items-start">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <ul className="list-inside list-disc">
        {overview.map((item, index) => (
          <li key={index} className="text-gray-700 mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
