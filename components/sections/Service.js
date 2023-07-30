import React from 'react'
import Image from 'next/image'
// import Fade from 'react-reveal';
import ServiceImg from '@/images/services.jpg';



function Service() {
  return (
    <section id="service" className="py-0 bg-acblue">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20 relative">
          <div className="flex flex-col items-start xl:pl-16 relative py-8">
            <div className="bg-acblue-transparent w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]" />
            {/* <Fade right> */}
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-white z-10">
            We have the passion, so take the action,
and the magic will happen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white z-10">
            AS Creative is a digital marketing and design agency located in
Radnage, High Wycombe. While you're running your business, AS
Creative is here to provide individualised and customised services to
you; whether it is providing social media management, social media
coaching, photography, or graphic design. We do this through
providing content and a culture that excites and engages your
audiences.
            </p>

            {/* </Fade> */}
          </div>
          <div className="flex flex-wrap lg:gap-8 lg:mt-auto">
            <Image width={400} height={200} className="w-full" src={ServiceImg} alt="An image displaying a female typing an email on a macbook computer." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service
