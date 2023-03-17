import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <header class="bg-opacity-30z-30 bg-gray-50 fixed left-0 right-0 z-30">
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex text-xl">
                        <span className='font-bold'>A</span>+&nbsp;Studio
                    </a>
                </div>

                <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> Home </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> What We Do </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> Service </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> Project </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> Blog </a>

                    <a href="#" title="" class="text-base text-black transition-all duration-200 hover:text-opacity-70"> Contact </a>
                </div>

                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

            </div>
        </div>
    </header>
  )
}

export default Navbar
