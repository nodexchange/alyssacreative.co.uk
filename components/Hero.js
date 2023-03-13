import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
      <section class="bg-white bg-opacity-30 py-10 sm:py-0 relative">
              <div class="max-w-[87rem] mx-auto sm:mx-0 sm:ml-auto">
                  <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                      <div>
                          <h1 class="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl xl:text-4xl">A Digital Product Agency</h1>
                          <p class="mt-4 text-base max-w-xl text-gray-500 lg:mt-8 sm:text-lg">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>

                          <a href="#" title="" class="inline-flex items-center px-7 py-3 mt-4 font-semibold text-white transition-all duration-200 bg-blue-700 rounded-full hover:bg-blue-800 focus:bg-blue-800" role="button">
                              Contact Now
                          </a>
                      </div>

                      <div>
                          <Image src='/banner.png' className='rounded-bl-[12rem]' width={754} height={512} />
                      </div>
                  </div>
              </div>
      </section>
    </div>
  )
}

export default Hero
