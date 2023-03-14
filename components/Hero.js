import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <section class="py-16 text-center lg:text-left sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 class="text-2xl font-bold text-black sm:text-4xl lg:text-5xl">
                            A Digital Product Agency
                            
                        </h1>

                        <p class="mt-8 text-base text-gray-600 sm:text-xl">
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                        </p>

                        {/* <div class="mt-10 sm:flex sm:items-center sm:space-x-8"> */}
                        <div class="mt-10 ">
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-full" role="button"> Contact Now </a>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
