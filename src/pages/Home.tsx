import { useEffect, useState } from 'react'

import AddToothDenture from '@/assets/add-tooth-denture.jpg'
import ProfilePicture from '@/assets/andrew.jpg'
import ClinicDay from '@/assets/clinic-day.jpg'
import DentalChair from '@/assets/dental-chair.jpg'
import DentureReline from '@/assets/denture-reline.jpg'
import DentureRepair from '@/assets/denture-repair.jpg'
import ImplantDentures from '@/assets/implant-dentures.jpg'
import NewDenture from '@/assets/new-denture.jpg'
import Navbar from '@/components/Navbar'
import OpenTimeCard from '@/components/OpenTimeCard'
import { ReviewCarousel } from '@/components/ReviewCarousel'

//TODO - Mobile-ify
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

  return (
    <>
      <Navbar />
      <div id="home" className="h-screen bg-hero bg-cover bg-center ">
        <div className="flex flex-col  justify-between md:flex-row">
          <div className="flex flex-col items-center gap-4 md:ml-10 md:mt-16 md:items-start md:gap-12">
            <h1 className="mt-4 text-4xl text-baseGrey md:mt-0 md:text-7xl">
              Smile with confidence
            </h1>
            <div className="hidden animate-bounceSlow rounded-full bg-baseGrey p-8 text-white md:block">
              <h2 className="text-xl md:text-4xl">
                No Obligation Free Consultation
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <OpenTimeCard />
            <ReviewCarousel />
          </div>
        </div>
        <div className="fixed bottom-72 left-4 z-50 hidden md:block ">
          {isModalVisible && (
            <div
              className={`relative w-1/3 rounded-lg bg-white/50 p-4 shadow-lg transition-opacity duration-300 ${
                isFadingOut ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <button
                className="absolute right-2 top-2 text-white"
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
      <div
        id="about"
        className="mx-auto flex h-auto flex-col items-center gap-5 bg-grayLight p-4 text-black  md:flex-row"
      >
        <img
          src={ProfilePicture}
          alt="Owner's Profile"
          className="rounded-3xl md:size-1/3"
        />
        <div className="rounded-2xl p-5 text-center shadow-xl">
          <h2 className="mb-4 text-4xl font-bold">Meet Andrew...</h2>
          <p className="mb-6 mt-2 text-xl">
            Andrew is a highly skilled Clinical Dental Technician with over 20
            years of experience in the field. He is dedicated to providing
            top-quality dental care and creating a comfortable environment for
            all patients.
          </p>
          <h2 className="mb-4 text-4xl font-bold">Our Mission</h2>
          <p className="mb-6 text-xl">
            Our mission is to deliver exceptional dental care with a focus on
            patient comfort and satisfaction. We strive to stay at the forefront
            of dental technology and techniques to ensure the best outcomes for
            our patients.
          </p>
          <h2 className="mb-4 text-4xl font-bold">Services We Offer</h2>
          <p className="mb-6 text-xl">
            We offer a wide range of dental services, including dentures,
            implants, and cosmetic dentistry. Our team is committed to providing
            personalized care tailored to each patient&apos;s unique needs.
          </p>
          <h2 className="mb-4 text-4xl font-bold">Can&apos;t come in?</h2>
          <p className="mb-6 text-xl">
            If you can&apos;t come in - Andrew may be able to come to you and
            provide expert care from the comfort of your own home or nursing
            home.
          </p>
          <h2 className="mb-4 text-4xl font-bold">Contact Us</h2>
          <p className="text-xl">
            If you have any questions or would like to schedule an appointment,
            please don&apos;t hesitate to contact us. We look forward to
            welcoming you to our clinic and helping you achieve a healthy,
            beautiful smile.
          </p>
          <div className="mt-16 flex animate-bounceSlow items-center justify-center rounded-xl md:mt-6">
            <a
              href="#contact"
              className="rounded-3xl bg-secondaryTeal px-6 py-4 text-center text-5xl text-black shadow-xl hover:underline hover:shadow-primaryTeal"
            >
              Book a free consultation today!
            </a>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 bg-secondaryTeal p-4"
      >
        <ServiceHero
          title="Free Consultations"
          overview="Get expert advice for existing & new dentures with ZERO obligations"
          image={DentalChair}
          variation
        />
        <ServiceHero
          title="New Dentures"
          overview="Bespoke dentures hand crafted with your input over the course of 2 to 5 appointments to ensure the perfect smile"
          image={NewDenture}
        />
        <ServiceHero
          title="Denture Repairs"
          overview="Repairs within 1 Hour - Fast and efficient service to keep you smiling"
          image={DentureRepair}
          variation
        />
        <ServiceHero
          title="Implant Dentures"
          overview="Handcrafted dentures designed to fit perfectly with dental implants for a natural smile"
          image={ImplantDentures}
        />
        <ServiceHero
          title="Denture Adjustments"
          overview="Adding Teeth to Dentures - Expect adjustments with care"
          image={AddToothDenture}
          variation
        />
        <ServiceHero
          title="Denture Reline"
          overview="Bring new life to old dentures with our denture reline service to bring comfort back to your smile"
          image={DentureReline}
        />
      </div>
      <div className="mt-8 w-full border-t border-black"></div>
      <div
        id="locate-us"
        className="mx-auto flex flex-col items-center gap-5 bg-grayLight py-10"
      >
        <h2 className="mb-4 text-4xl font-bold">Locate Us</h2>
        <div className="flex flex-col items-center md:flex-row md:gap-10">
          <img
            src={ClinicDay}
            alt="Our Building"
            className="mb-4 w-64 rounded-3xl md:mb-0 md:h-2/3 md:w-1/2"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.779563903318!2d-2.0209508!3d52.39254630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487095c6dcfe48c7%3A0xa02e464085249e67!2sJust%20Dentures!5e0!3m2!1sen!2suk!4v1738600036061!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="h-96 w-full rounded-3xl md:h-[32rem] md:w-1/2"
          ></iframe>
        </div>
      </div>
      <div id="contact" className="mx-auto max-w-4xl justify-items-center p-4">
        <h3 className="mb-12 text-center text-2xl font-semibold md:text-4xl">
          Easy Access from the M5 and M42
          <br /> We&apos;re closer than you think!
        </h3>
        <h4 className="mb-12 text-center text-2xl font-semibold md:text-4xl">
          Free Customer Parking
        </h4>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex flex-col items-center text-2xl">
            <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
              Contact Us
            </h2>
            <a
              href="https://m.facebook.com/people/Just-Dentures/61554276170301/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 underline"
            >
              Facebook
            </a>
            <a
              href="mailto:alougheedcdt@gmail.com"
              className="text-blue-900 underline"
            >
              alougheedcdt@gmail.com
            </a>
            <a href="tel:01217143845" className="text-blue-900 underline">
              0121 714 3845
            </a>
            <h2 className="mb-4 pt-12 text-center text-4xl font-bold md:text-5xl">
              Visit Us
            </h2>
            <address className=" text-center text-2xl not-italic text-blue-900 underline">
              <a
                href="https://www.google.com/maps/place/112+New+Road,+Rubery,+Birmingham,+B45+9HY"
                target="_blank"
                rel="noopener noreferrer"
              >
                112 New Road,
                <br />
                Rubery,
                <br />
                Birmingham,
                <br />
                B45 9HY
              </a>
            </address>
          </div>
        </div>
      </div>
    </>
  )
}

const ServiceHero = ({
  title,
  overview,
  image,
  variation = false
}: {
  title: string
  overview: string
  image: string
  variation?: boolean
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[100px] bg-[#7FA09F] p-4 text-black shadow-2xl md:flex-row md:gap-32 ${
        variation ? 'md:flex-row-reverse' : ''
      }`}
    >
      <img
        src={image}
        alt={title}
        className="mb-0 size-64 rounded-[100px] object-cover md:mb-4 md:mr-6"
      />
      <div className={`flex flex-col gap-5 p-5 text-center md:gap-0 md:p-10`}>
        <h3 className="text-5xl">{title}</h3>
        <p className="text-2xl">{overview}</p>
      </div>
    </div>
  )
}
