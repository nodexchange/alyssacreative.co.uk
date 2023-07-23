import React from 'react'
import Image from 'next/image'
import ClientImg from '@/images/client-service.jpg';

// import Fade from 'react-reveal';

function About() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20 relative">
                <div className="flex flex-wrap lg:gap-8 lg:mt-auto">
                  <Image width={400} height={200} className="w-full" src={ClientImg} alt="An image displaying a social media feed on a mobile phone managed by AS Creative." />
                </div>

                <div className="flex flex-col items-start xl:pl-16 relative">
                    <div className='bg-blue-50 w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]' />
                    {/* <Fade right> */}
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-800 z-10">A client-first approach
to service and support</h2>
<h3 className="text-l md:text-xl lg:text-2xl font-bold leading-tight text-gray-800 z-10 pt-2">Full-Service Marketing</h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-600 z-10">We are a full-service marketing and brand development agency. <br/> We provide assistance in areas of research, design, development, and digital marketing.</p>

                    {/* </Fade> */}

                </div>
            </div>
        </div>
    </section>

  )
}

export default About
