import Image from "next/image";
import Link from 'next/link'
import {
  BsFillCalendarEventFill,
  BsFillClockFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import Image_1 from "../../../public/images/security training.png";
import Image_2 from "../../../public/images/certified cyber.png";
import Experts from "../components/Experts";

const Courses = () => {
  return (
    <div className="w-full">
      <div className="bg-hero-desktop bg-no-repeat bg-cover min-h-screen flex justify-center items-center flex-col">
        <div className="absolute bg-black/50 w-full min-h-screen top-0 left-0"></div>
        <div className="absolute pt-32">
          <h2 className="text-center text-4xl md:text-6xl font-semibold capitalize  text-white">
            Live courses
          </h2>

          <p className="md:text-xl text-lg text-white font-normal text-center p-10">
            Welcome to our live courses! Join our learning community and expand
            your knowledge.
          </p>
        </div>
      </div>

      <div className="my-16 md:mx-14 mx-5 grid gap-10">
        <div className="flex md:flex-row flex-col justify-around items-center border-2 p-5">
          <div className="basis-1/2">
            <Image src={Image_1} alt="" />
          </div>
          <div className="grid items-start justify-around lg:gap-16 md:gap-10 gap-8">
            <h2 className="text-4xl font-semibold capitalize text-start">
              cyber-security
            </h2>
            <div className="flex flex-col items-start md:gap-10 gap-6 md:flex-row justify-between w-full">
              <span className="text-black font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center z-20">
                <BsFillCalendarEventFill className="text-4xl" />
                <span>5 Weeks</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <BsFillClockFill className="text-4xl" />
                <span>10am - 2:30pm</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <SlScreenDesktop className="text-4xl" />
                <span>Virtual live classes</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <BsFillCreditCardFill className="text-4xl" />
                <span>$2,000</span>
              </span>
            </div>

            <Link href="/register" className="flex flex-col justify-center items-start">
              <button className=" bg-orange-500 hover:bg-transparent border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                register
              </button>
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center border-2 p-5">
          <div className="basis-1/2">
            <Image src={Image_2} alt="" />
          </div>
          <div className="grid items-center justify-around lg:gap-16 md:gap-10 gap-8">
            <h2 className="text-4xl font-semibold capitalize text-start">
              securtiy+ training
            </h2>
            <div className="flex flex-col items-start gap-6 md:gap-10 md:flex-row justify-between w-full">
              <span className="text-black font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center z-20">
                <BsFillCalendarEventFill className="text-4xl" />
                <span>12 Weeks</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <BsFillClockFill className="text-4xl" />
                <span>7pm - 9pm</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <SlScreenDesktop className="text-4xl" />
                <span>Virtual live classes</span>
              </span>
              <span className="text-black font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center z-20">
                <BsFillCreditCardFill className="text-4xl" />
                <span>$2,000</span>
              </span>
            </div>

            <Link href="/register" className="flex flex-col justify-center items-start">
              <button className=" bg-orange-500 hover:bg-transparent border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Experts />
    </div>
  );
};

export default Courses;
