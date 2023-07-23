import React from 'react'
import Image from 'next/image'
// import Fade from 'react-reveal';

function Testimonial() {
  return (
    <section className="py-10 bg-acblue sm:py-16 lg:py-24 lg:bg-testimonials lg:bg-cover">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-10 relative">
          <div className="flex flex-col items-start xl:pl-16 relative">
            <div className="bg-acblue-transparent w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]" />
            {/* <Fade right> */}
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-white z-10">
            Take the next step to unlock the
potential of your brands' growth
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white z-10">
            Still need a little convincing? See what past and
current clients are saying about us!
            </p>
            <div className="mt-10 ">
              <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-acblue-light hover:bg-acblue-dark focus:bg-acblue-dark" role="button">Testimonials</a>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
