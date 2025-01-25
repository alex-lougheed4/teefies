import { useEffect, useState } from 'react'

import ProfilePicture from '@/assets/andrew.jpg'
import DentureReline from '@/assets/denture-reline.jpg'
import DentureRepair from '@/assets/denture-repair.jpg'
import ImplantDentures from '@/assets/implant-dentures.jpg'
import NewDenture from '@/assets/new-denture.jpg'
import Navbar from '@/components/Navbar'
import OpenTimeCard from '@/components/OpenTimeCard'
import { ReviewCarousel } from '@/components/ReviewCarousel'

export const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  const closeModal = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setIsModalVisible(false)
      setIsFadingOut(false)
    }, 300) // Duration of the fade-out animation
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        closeModal()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const data = [
    {
      title: 'New Dentures',
      overview: [
        'Our resident CDT Andrew will work with you to create bespoke dentures tailored to bring back your smile',
        'cost',
        'benefits'
      ],
      image: NewDenture
    },
    {
      title: 'Denture Repairs',
      overview: [
        'Visit for same-day denture repairs and adjustments',
        'Natural changes in your mouth can cause your dentures to no longer fit perfectly. Poorly fitting dentures can cause damage to hard and soft oral tissues and can lead to the increased risk of denture fracture.',
        'You should always get an expert to examine the dentures before repairing them as issues with your dentures could lead to significant problems in the future.'
      ],
      image: DentureRepair
    },
    {
      title: 'Implant Dentures',
      overview: [
        'An implant is a titanium screw that replaces the tooth root. The implants are embedded directly into the jawbone, providing an extremely stable foundation for an individual crown or a full denture appliance',
        'The denture itself is still made from acrylic. However, rather than floating on the gum, the appliance hooks onto the implants using a latching system. As a result, the denture functions exactly like normal teeth and will not move during eating or talking.'
      ],
      image: ImplantDentures
    },
    {
      title: 'Denture Relines',
      overview: [
        'Denture relining allows the fit of your dentures to be improved, without the need for replacing them with a new set. They will fit much more securely, so you won’t have to worry about them falling out or moving when you speak and eat',
        'Relining also helps the dentures to last longer and improves your oral hygiene, as food is less likely to become trapped under your dentures, which can happen if they are too loose.'
      ],
      image: DentureReline
    }
  ]
  return (
    <>
      <Navbar />
      <div id="hero" className="w-full">
        <h1 className="my-12 text-center text-5xl font-semibold text-black">
          Free No-Obligation Denture Consultations
        </h1>
      </div>
      <div id="home" className="h-screen bg-hero bg-cover bg-center">
        <div className="flex flex-row content-start items-center justify-between">
          <h1 className="ml-10 mt-8 place-self-start text-7xl text-black">
            Your smile is my priority
          </h1>
          <OpenTimeCard />
        </div>
        <div className="absolute bottom-0 w-full">
          <ReviewCarousel />
        </div>
        <div className="fixed bottom-80 left-4 z-50">
          {isModalVisible && (
            <div
              className={`relative w-1/3 rounded-lg bg-black/50 p-4 shadow-lg transition-opacity duration-300 ${
                isFadingOut ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <button
                className="absolute right-2 top-2 text-black"
                onClick={() => setIsModalVisible(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold ">
                What is a Clinical Dental Technician?
              </h2>
              <p className="mt-2 ">
                Well, they are a registered dental care professional who can
                provide complete dentures direct to the public. They can also
                provide partial dentures and other dental devices on
                prescription from a registered dentist.
              </p>
              <h3>What can we do? </h3>
              <p className="mt-2 ">
                A CDT is able to oversee the patient’s whole denture journey.
                They can treatment plan (complete dentures), take the
                impressions, do a bite registration and then manufacture the
                denture from start to finish. This results in the patient
                receiving a high-quality denture, and changes can be made
                instantly rather than trying to communicate through
                prescriptions where information can be missed.
              </p>
            </div>
          )}
        </div>
      </div>
      <div id="about" className="mx-auto flex h-auto items-center gap-5 p-4">
        <img
          src={ProfilePicture}
          alt="Owner's Profile"
          className="size-1/3 rounded-3xl"
        />
        <div className="rounded-2xl  p-5 text-center text-black shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">Andrew Lougheed, CDT</h2>
          <p className=" mb-6 mt-2">
            Andrew is a highly skilled Clinical Dental Technician with over 20
            years of experience in the field. He is dedicated to providing
            top-quality dental care and creating a comfortable environment for
            all patients.
          </p>
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
          <p className=" mb-6">
            Our mission is to deliver exceptional dental care with a focus on
            patient comfort and satisfaction. We strive to stay at the forefront
            of dental technology and techniques to ensure the best outcomes for
            our patients.
          </p>
          <h2 className="mb-4 text-3xl font-bold">Services We Offer</h2>
          <p className=" mb-6">
            We offer a wide range of dental services, including dentures,
            implants, and cosmetic dentistry. Our team is committed to providing
            personalized care tailored to each patient&apos;s unique needs.
          </p>
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p>
            If you have any questions or would like to schedule an appointment,
            please don&apos;t hesitate to contact us. We look forward to
            welcoming you to our clinic and helping you achieve a healthy,
            beautiful smile.
          </p>
        </div>
      </div>
      <div
        id="services"
        className="mx-auto flex max-w-4xl flex-col items-center gap-5  p-4"
      >
        {data.map((item) => (
          <ProductHero
            key={item.title}
            title={item.title}
            overview={item.overview}
            image={item.image}
          />
        ))}
      </div>
      <div id="contact"></div>
      <div className="mx-auto max-w-4xl p-4">
        <h2 className="mb-4 text-center text-3xl font-bold">Contact Us</h2>
        <div className="flex flex-col items-center">
          <a
            href="https://m.facebook.com/people/Just-Dentures/61554276170301/ "
            target="_blank"
            rel="noopener noreferrer"
            className=" mb-2"
          >
            Facebook
          </a>
          <a href="mailto:alougheedcdt@gmail.com" className=" mb-2">
            alougheedcdt@gmail.com
          </a>
          <a href="tel:+1234567890" className=" mb-4">
            +1 234 567 890
          </a>
        </div>
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
          <li key={index} className=" mb-1 text-left">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
