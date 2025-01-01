import ProfilePicture from '@/assets/andrew.jpg'

export const About = () => {
  return (
    <>
      <div className="mx-auto flex max-w-4xl items-center gap-5 p-4">
        <div className="mb-8 flex flex-col items-center md:flex-row">
          <img
            src={ProfilePicture}
            alt="Owner's Profile"
            className="size-full rounded-3xl object-cover"
          />
        </div>
        <div className="rounded-2xl bg-baseGrey p-5 text-center">
          <h2 className="text-2xl font-semibold">John Doe, CDT</h2>
          <p className="text-gray-700 mt-2">
            John Doe is a highly skilled Clinical Dental Technician with over 20
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
    </>
  )
}
