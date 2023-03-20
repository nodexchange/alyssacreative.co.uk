import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <section className="py-16 bg-gray-50 text-center lg:text-left sm:py-16 lg:py-24">
            <div className="px-4 mt-16 lg:mt-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-bold text-black sm:text-4xl lg:text-5xl">
                            A Digital Product Agency
                    className                   </h1>

                        <p className="mt-8 text-base text-gray-600">
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                        </p>

                        <div className="mt-10 ">
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-full" role="button"> Contact Now </a>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <Image width={400} height={200} className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="img" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
