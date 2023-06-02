import Link from 'next/link'
import Image from 'next/image'
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'

import signup from '../../../public/images/signup.png'

const Signup = () => {
    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 pt-28 md:px-14'>
            <div className=' grid grid-cols-1 gap-y-5 mb-10 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
                <div>
                    <Image src={signup} alt="signup" />
                </div>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                        Sign Up
                    </h1>

                    <form
                        className=' flex flex-col items-center gap-y-5'
                    >
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <UserIcon width={25} className=' text-gray-500' />
                            <input type="text" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter full name' />
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <EnvelopeIcon width={25} className=' text-gray-500' />
                            <input type="email" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter email address' />
                        </div>
                        <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                            <LockClosedIcon width={25} className=' text-gray-500' />
                            <input type="password" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Password' />
                        </div>
                        <div className=' flex items-center gap-x-5 place-self-start'>
                            <input type="checkbox" className=' form-checkbox' name='checkbox' required />
                            <label htmlFor='checkbox' className=' text-sm lg:text-base text-gray-500'>
                                By signing up, you agree to our
                                <Link
                                    href="/"
                                    className=' text-orange-500'
                                >
                                    terms & conditions
                                </Link>
                            </label>
                        </div>
                        <button className=' bg-orange-500 py-2 rounded-lg text-white font-medium w-full lg:hover:bg-opacity-90'>
                            Continue
                        </button>
                        <span>OR</span>
                        <button className=' bg-transparent border-solid border-2 border-black py-2 rounded-lg text-black font-medium w-full duration-200 ease-in-out lg:hover:bg-black lg:hover:text-white'>
                            Sign up with Google
                        </button>
                    </form>

                    <p className=' text-sm text-gray-500 text-center lg:text-base'>
                        Already have an account? <Link href="signin" className=' text-orange-500'>Sign In</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Signup;