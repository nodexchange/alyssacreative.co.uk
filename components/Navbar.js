import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          if (scrollTop > 0 && !showShadow) {
            setShowShadow(true);
          } else if (scrollTop === 0 && showShadow) {
            setShowShadow(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [showShadow]);
  return (
    <header className={`${showShadow ? 'drop-shadow-md' : ''} bg-opacity-30z-30 bg-gray-50 fixed left-0 right-0 z-30`}>
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex text-xl">
                        <span className='font-bold'>A</span>+&nbsp;Studio
                    </a>
                </div>

                {/* <div class={`flex bg-blue-700 drop-shadow-xl flex-col mt-[22rem] px-24 py-5 space-y-5 lg:drop-shadow-none lg:bg-gray-50 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}> */}
                <div
                    className={`flex bg-blue-700 drop-shadow-xl flex-col mt-[22rem] px-24 py-5 space-y-5   ${
                    isOpen ? 'translate-y-0' : '-translate-y-96'
                    } duration-1000 ease-in-out lg:drop-shadow-none lg:translate-y-0 lg:bg-gray-50 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}
                >
                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> Home </a>

                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> What We Do </a>

                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> Service </a>

                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> Project </a>

                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> Blog </a>

                    <a href="#" title="" class="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70"> Contact </a>
                </div>

                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" onClick={toggleMenu}>
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
