import React from 'react'
import Image from 'next/image'
import ClientImg from '@/images/client-service.jpg';
import { Carousel } from '@components';


function Client() {
  return (
    <section id="services" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="leading-tight text-black font-bold text-xl md:text-2xl lg:text-4xl">Clients</h2>
                {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p> */}
            </div>
            <Carousel />
        </div>
    </section>
  )
}

export default Client
