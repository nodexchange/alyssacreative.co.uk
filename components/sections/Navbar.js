import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@components';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <header
      className={`${
        showShadow ? 'drop-shadow-md' : ''
      } bg-opacity-30z-30 bg-gray-50 fixed left-0 right-0 z-30`}>
      <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex text-xl">
              <span className="font-bold">A</span>+&nbsp;Studio
            </a>
          </div>

          {/* <div class={`flex bg-blue-700 drop-shadow-xl flex-col mt-[22rem] px-24 py-5 space-y-5 lg:drop-shadow-none lg:bg-gray-50 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}> */}
          {/* Home About Us Services Clients Contact Us */}
          <div
            className={`flex bg-acblue drop-shadow-xl flex-col mt-[22rem] px-24 py-5 space-y-5   ${
              isOpen ? 'opcaity-1' : 'opacity-0'
            } duration-1000 ease-in-out lg:drop-shadow-none lg:translate-y-0 lg:bg-gray-50 lg:space-y-0 lg:py-0  lg:px-0 lg:flex-row lg:mt-0 lg:items-center lg:justify-center lg:space-x-10`}>
            <a
              href="#"
              title=""
              className="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70">
              {' '}
              Home{' '}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70">
              {' '}
              About us{' '}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70">
              {' '}
              Services{' '}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70">
              {' '}
              Clients{' '}
            </a>

            <a
              href="#"
              title=""
              className="text-base text-white lg:text-black transition-all duration-200 hover:text-opacity-70">
              {' '}
              Contact{' '}
            </a>
            <Button title={'Get Started'} href={'#'} />
          </div>

          <button
            type="button"
            class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}>
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            {isOpen ? (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`backdrop-blur-md bg-white/30 fixed w-[100vw] h-[100vh] -z-10 duration-1000 ease-in-out ${
            isOpen ? 'opcaity-1' : 'opacity-0'
          }`}></div>
      )}
    </header>
  );
}

export default Navbar;
