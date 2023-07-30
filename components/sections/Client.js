import React from 'react'
import Image from 'next/image'
import ClientImg from '@/images/client-service.jpg';


function Client() {
  return (
    <section id="client" className="relative bg-gray-50 mb-36 lg:mb-10 pb-6 lg:pb-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav className="flex flex-col lg:flex-row items-center lg:justify-between h-16 lg:h-20">
                <div className="mb-5 lg:mb-0 text-center lg:text-left">
                        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl mb-5'>Our Clients</h1>
                        <p className='mb-5 text-base text-gray-600 lg:max-w-[22rem] '>Several selected clients, who already believe in our service.</p>
                </div>

                <div className="flex flex-wrap lg:gap-8 lg:mt-auto">
                  <Image width={400} height={200} className="w-full" src={ClientImg} alt="An image displaying a social media feed on a mobile phone managed by AS Creative." />
                </div>
            </nav>
        </div>
    </section>
  )
}

export default Client
