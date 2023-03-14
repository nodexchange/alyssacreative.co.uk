import React from 'react'
import Image from 'next/image'

function Client() {
  return (
    <header class="pb-6 lg:pb-0">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav class="flex flex-col lg:flex-row items-center lg:justify-between h-16 lg:h-20">
                <div class="mb-5 lg:mb-0 text-center lg:text-left">
                        <h1 className='font-bold text-xl md:text-2xl lg:text-4xl mb-5'>Our Clients</h1>
                        <p className='mb-5 sm:text-xl text-gray-600 lg:max-w-[22rem] '>Several selected clients, who already believe in our service.</p>
                </div>

                <div class="flex flex-wrap lg:gap-8 lg:mt-auto">
                    <img class="w-32" src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="google" />
                    <img class="w-32" src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" alt="airbnb" />
                    <img class="w-32" src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="amazon" />
                    <img class="w-32" src="https://www.vectorlogo.zone/logos/netlify/netlify-ar21.svg" alt="netlify" />
                    <img class="w-32" src="https://www.vectorlogo.zone/logos/xbox/xbox-ar21.svg" alt="xbox" />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Client
