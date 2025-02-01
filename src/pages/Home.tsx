import { MapPinIcon } from '@heroicons/react/16/solid'
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

  return (
    <>
      <Navbar />
      <div id="home" className="w-full">
        <h1 className="my-12 text-center text-5xl text-white">
          <strong>Free</strong> No-Obligation Denture Consultations
        </h1>
      </div>
      <div className="h-screen bg-hero bg-cover bg-center">
        <div className="flex flex-row content-start items-center justify-between">
          <h1 className="ml-10 mt-8 place-self-start text-7xl text-black">
            Smile with confidence...
          </h1>
          <OpenTimeCard />
        </div>
        <div className="absolute bottom-0 w-full">
          <ReviewCarousel />
        </div>
        <div className="fixed bottom-80 left-4 z-50">
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
        className="mx-auto flex h-auto items-center gap-5 bg-grayLight p-4  text-black"
      >
        <img
          src={ProfilePicture}
          alt="Owner's Profile"
          className="size-1/3 rounded-3xl"
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
          <h2 className="mb-4 text-4xl font-bold">Contact Us</h2>
          <p className="text-xl">
            If you have any questions or would like to schedule an appointment,
            please don&apos;t hesitate to contact us. We look forward to
            welcoming you to our clinic and helping you achieve a healthy,
            beautiful smile.
          </p>
          <div className="mt-6 flex items-center justify-center rounded-xl">
            <a
              href="#contact"
              className="rounded-full bg-primaryTeal px-6 py-3 text-center text-5xl text-white"
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
        <div className="flex flex-row items-center justify-center gap-32 rounded-[100px] bg-[#7FA09F] p-4 text-black shadow-2xl">
          <img
            src={NewDenture}
            alt={'New Dentures'}
            className="mb-4 w-full rounded-[100px] object-cover md:mb-0 md:mr-6 md:w-1/3"
          />
          <div className="flex flex-col">
            <h3 className="text-5xl">New Dentures</h3>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-32 rounded-[100px] bg-[#7FA09F] p-4 text-right text-black shadow-2xl">
          <div className="flex flex-col">
            <h3 className="text-5xl">Denture Repairs</h3>
            <p className="text-2xl">Repairs within 1 Hour</p>
            <p className="text-2xl">
              Fast and efficient service to keep you smiling
            </p>
          </div>
          <img
            src={DentureRepair}
            alt={'Denture Repairs'}
            className="mb-4 w-full rounded-[100px] object-cover md:mb-0 md:mr-6 md:w-1/3"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-32 rounded-[100px] bg-[#7FA09F] p-4 text-black shadow-2xl">
          <img
            src={ImplantDentures}
            alt={'Implant Dentures'}
            className="mb-4 w-full rounded-[100px] object-cover md:mb-0 md:mr-6 md:w-1/3"
          />
          <div className="flex flex-col">
            <h3 className="text-5xl">Implant Dentures</h3>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-32 rounded-[100px] bg-[#7FA09F] p-4 text-right text-black shadow-2xl">
          <div className="flex flex-col">
            <h3 className="text-5xl">Denture Reline</h3>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <img
            src={DentureReline}
            alt={'Denture Reline'}
            className="mb-4 w-full rounded-[100px] object-cover md:mb-0 md:mr-6 md:w-1/3"
          />
        </div>
      </div>
      {/* <Footer /> */}

      <div id="contact" className="mx-auto max-w-4xl justify-items-center p-4">
        <h3 className="mb-12 text-center text-xl">
          Easy Access from M5 and M42 - We&apos;re closer than you think!
        </h3>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-center text-5xl font-bold">Contact Us</h2>

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
            <a href="tel:+01217143845" className="text-blue-900 underline">
              0121 714 3845
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-center text-5xl font-bold">Locate Us</h2>
            <div className="flex items-center">
              <MapPinIcon className="ml-2 size-12" />
              <address className="text-2xl text-blue-900 underline">
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
      </div>
    </>
  )
}
