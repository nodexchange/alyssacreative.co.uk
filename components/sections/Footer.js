import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/logo.jpg';

function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <hr className=" mb-10 border-gray-200" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                <div className="col-span-2 md:col-span-4 xl:pr-8">
                <Link href="/">
            <Image
                width={100}
                height={100}
                src={Logo}
                alt="Alyssa Creative Company Logo"
                />
              </Link>

                    <p className="text-base leading-relaxed text-gray-600 mt-7">Leading digital agency with solid design and development expertise. We provide individualised and customised services to you; whether it is providing social media management, social media coaching, photography, or graphic design.</p>

                </div>

                <div className="lg:col-span-2">
                    <p className="text-base font-semibold text-gray-900">What We Do</p>

                    <ul className="mt-6 space-y-5">
                        <li>
                            <a href="#services" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Digital Marketing </a>
                        </li>

                        <li>
                            <a href="#services" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Website Management </a>
                        </li>

                        <li>
                            <a href="#services" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Graphic Design </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <p className="text-base font-semibold text-gray-900">Company</p>

                    <ul className="mt-6 space-y-4">
                        <li>
                            <Link href="/about" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> About Us </Link>
                        </li>

                        <li>
                            <Link href="/career" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Career </Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <p className="text-base font-semibold text-gray-900">Support</p>

                    <ul className="mt-6 space-y-5">
                        <li>
                            <Link href="/faq" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> FAQ </Link>
                        </li>

                        <li>
                            <Link href="/policy" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Policy </Link>
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <p className="text-base font-semibold text-gray-900">Contact</p>

                    <ul className="mt-6 space-y-5">
                        <li>
                            <Link aria-label="Send us an email" href="mailto:hello@alyssacreative.co.uk" target="_blank" title="Support" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"> Customer Support </Link>
                        </li>

                        <li>
                            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/447582314597" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600"><Image alt="Chat on WhatsApp" src="/WhatsAppButtonGreenSmall.png" width="320" height="72"></Image> </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="mt-16 mb-10 border-gray-200" />

            <div className="sm:flex sm:items-center sm:justify-between">
                <p className="text-sm text-gray-600">© Copyright 2023, All Rights Reserved by AS Creative. Registered in England and Wales, United Kingdom.</p>

                <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                    <li>
                        <a
                            href="https://www.facebook.com/ASCreativeUK"
                            title="AS Creative UK Facebook Page"
                            target='_blank'
                            className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-500 hover:text-gray-600 focus:text-white"
                        >
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/as_creative_uk/"
                            title="AS Creative Instagram Page"
                            target='_blank'
                            className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-gray-600 focus:text-white "
                        >
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

  )
}

export default Footer
