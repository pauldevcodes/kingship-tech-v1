import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  BsFillCalendarEventFill,
  BsFillClockFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";

import Image1 from "../../../public/images/testimonialOne.jpg";
import Image2 from "../../../public/images/mentor_1.jpeg";
import Image3 from "../../../public/images/mentor.jpeg";

const Mentorship = () => {
  return (
    <div className="w-full">
      <section className=" bg-hero-desktop bg-cover bg-no-repeat pb-10 min-h-screen relative">
        <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
        <div className="md:pt-72 pt-32 text-white text-xl font-semibold absolute mx-auto w-full h-full flex flex-col gap-y-10 px-5 md:px-14">
          <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center uppercase leading-normal mb-5 mt-5">
            our <span className="text-orange-500">mentorship</span> programs
          </h2>
          <div>
            <p className=" text-lg font-medium text-center capitalize max-w-screen-md mx-auto">
              mentorship is the mutually beneficial relationship between the
              mentor and the mentee, where the mentor provides guidance,
              support, and wisdom based on their experience and expertise, while
              the mentee is receptive to learning, growth, and implementing the
              mentor's advice.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full mt-16">
        <div className="md:mx-10 mx-5">
          <h2 className="text-2xl font-semibold text-orange-500 capitalize text-center">
            course details
          </h2>

          <div className="py-7">
            <h2 className=" text-lg font-normal opacity-80">
              This is a 5 week mentorship program in Career Development. We help
              guide you in your professional career especially if you need next
              steps before or after getting certified. Our instructors will
              provide you both technical and soft skills, and guidance on
              developing teamwork, communication, network building.
            </h2>
          </div>

          <div className="bg-orange-500 px-4 py-8 my-10 mx-5 rounded-md flex flex-col gap-y-5 md:my-10 md:px-8 md:py-12">
            <h3 className="md:text-2xl text-xl font-semibold capitalize pb-5 text-white">
              this mentorship program is to help you
            </h3>

            <div className=" flex flex-col gap-y-2">
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />
                Gain access to knowledge and experience
              </p>
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />
                Guidance and support
              </p>
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />
                Advice on career development
              </p>
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />
                Networking opportunities
              </p>
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />A
                sounding board for ideas
              </p>
              <p className=" flex items-start gap-x-1 text-white">
                <CheckCircleIcon width={20} color="white" opacity={0.7} />A role
                model to emulate
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-hero-desktop bg-cover bg-no-repeat min-h-[20vh] rounded-md my-16 mx-5 md:mx-14 relative py-12 flex flex-col items-center gap-y-5">
          <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
          <div className="flex flex-col items-start gap-y-5 md:flex-row md:justify-between w-full px-10">
            <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center z-20">
              <BsFillCalendarEventFill className="text-4xl" />
              <span>5 Weeks</span>
            </span>
            <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
              <BsFillClockFill className="text-4xl" />
              <span>10am - 2:30pm</span>
            </span>
            <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
              <SlScreenDesktop className="text-4xl" />
              <span>Virtual live classes</span>
            </span>
            <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center z-20">
              <BsFillCreditCardFill className="text-4xl" />
              <span>$150,000</span>
            </span>
          </div>

          <Link href="/register" className=" z-20">
            <button className=" bg-transparent border-2 border-white py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-orange-500 hover:text-orange-500">
              register
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-orange-500 my-10">
        <div className="max-w-screen-xl mx-auto py-10">
          <div className="flex md:flex-row flex-col justify-between items-start text-white mx-auto gap-10">
            <h2 className="text-5xl font-semibold leading-tight text-center basis-5/12">
              Taught by Experienced Experts
            </h2>
            <p className="text-lg font-normal text-start basis-6/12 px-5">
              our Instructors are experienced practitioners who work at the
              world's most innovative companies. They're experts in their field,
              and enter the classroom with years of experience making sure
              you're learning the most up-to-date and practical skills companies
              around the world need.
            </p>
          </div>
          <div className="mx-auto py-10 flex flex-wrap gap-10 lg:justify-between justify-center items-center px-5">
            <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
              <Image
                src={Image1}
                alt=""
                className="w-[200px] h-[200px] rounded-full object-cover "
              />
              <div className="pt-5 grid gap-2">
                <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                  steve jobs
                </h2>
                <p className="text-base font-normal text-center capitalize">
                  mentor
                </p>
              </div>
            </div>
            <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
              <Image
                src={Image2}
                alt=""
                className="w-[200px] h-[200px] rounded-full object-cover object-right-bottom"
              />
              <div className="pt-5 grid gap-2">
                <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                  Micheal kean
                </h2>
                <p className="text-base font-normal text-center capitalize">
                  mentor
                </p>
              </div>
            </div>
            <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
              <Image
                src={Image3}
                alt=""
                className="w-[200px] h-[200px] rounded-full object-cover object-right-top"
              />
              <div className="pt-5 grid gap-2">
                <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                  Beatrice may
                </h2>
                <p className="text-base font-normal text-center capitalize">
                  mentor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
