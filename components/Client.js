import React from 'react'
import Image from 'next/image'

function Client() {
  return (
    <section className="relative bg-gray-50 mb-36 lg:mb-10 pb-6 lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav className="flex flex-col lg:flex-row items-center lg:justify-between h-16 lg:h-20">
                <div className="mb-5 lg:mb-0 text-center lg:text-left">
                        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl mb-5'>Our Clients</h1>
                        <p className='mb-5 text-base text-gray-600 lg:max-w-[22rem] '>Several selected clients, who already believe in our service.</p>
                </div>

                <div className="flex flex-wrap lg:gap-8 lg:mt-auto">
                    <Image width={100} height={100} className="w-32" src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="google" />
                    <Image width={100} height={100} className="w-32" src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" alt="airbnb" />
                    <Image width={100} height={100} className="w-32" src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="amazon" />
                    <Image width={100} height={100} className="w-32" src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg" alt="netlify" />
                    <Image width={100} height={100} className="w-32" src="https://www.vectorlogo.zone/logos/xbox/xbox-ar21.svg" alt="xbox" />
                </div>
            </nav>
        </div>
    </section>
  )
}

export default Client
