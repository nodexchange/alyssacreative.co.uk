import React from 'react'
import Image from 'next/image'
// import Fade from 'react-reveal';

function Testimonial() {
  return (
    <section className="py-10 bg-acblue sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20 relative">
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
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            {/* <Fade left> */}
            <div className="overflow-hidden aspect-w-3 aspect-h-4">
              <Image
                width={400}
                height={200}
                className="object-cover object-top origin-top scale-150"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                alt="img"
              />
            </div>
            {/* </Fade> */}

            <div className="relative">
              {/* <Fade left> */}
              <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                <Image
                  width={400}
                  height={200}
                  className="object-cover scale-150 lg:origin-bottom-right"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                  alt="img"
                />
              </div>

              <div className="absolute inset-0 grid w-full h-full place-items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                </button>
              </div>
              {/* </Fade> */}
            </div>

            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
              <Image
                width={100}
                height={100}
                className="w-32 h-32"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
