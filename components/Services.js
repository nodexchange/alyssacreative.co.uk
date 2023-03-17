import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal';

function Services() {
  return (
    <div>
        {/* px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 */}
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 relative">
            
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 z-10">
                <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12 ">
                    <div className="lg:col-span-3 text-center lg:text-left z-10">
                        <Fade left>
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-800 lg:leading-tight">
                                How can we help <br/> your Business ?
                            </h2>
                            <p className="mt-6 text-base text-gray-600 max-w-[25rem]">
                                We build readymade websites, mobile applications, and elaborate online business services.
                            </p>
                        </Fade>
                    </div>

                    <div className="lg:col-span-2 xl:col-span-3 ">
                        <div className="grid items-center max-w-4xl grid-cols-1 lg:grid-cols-2 mx-auto gap-x-5 gap-y-5 ">
                            <Fade left>
                                <div className='text-center bg-white py-10 px-5 rounded-xl z-10'>
                                    <div className='mb-5'>
                                        <Image className="object-contain h-10 mx-auto" src="/box-search.png" width={50} height={50}/>
                                    </div>
                                    <div>
                                        <h1 className='mb-5 font-bold max-w-[10rem] mx-auto'>Business Idea Planning</h1>
                                        <p className='text-gray-600 text-base'>We present you a proposal and discuss niffty-gritty like</p>
                                    </div>
                                </div>
                            </Fade>
                            {/* up */}
                            <Fade right>
                                <div className='text-center bg-white py-10 px-5 rounded-xl relative z-10'>
                                    <div className='mb-5'>
                                        <Image class="object-contain w-full h-10 mx-auto" src="/empty-wallet.png" width={50} height={50}/>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='mb-5 font-bold max-w-[10rem] mx-auto'>Financial Planning System</h1>
                                        <p className='text-gray-600 text-base'>Protocols apart from aengage models, pricing billing</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left>
                                <div className='text-center bg-white py-10 px-5 rounded-xl z-10'>
                                    <div className='mb-5'>
                                        <Image class="object-contain w-full h-10 mx-auto" src="/code-1.png" width={50} height={50}/>
                                    </div>
                                    <div>
                                        <h1 className='mb-5 font-bold max-w-[10rem] mx-auto'>Development Website and App</h1>
                                        <p className='text-gray-600 text-base'>Communication protocols apart from engagement models</p>
                                    </div>
                                </div>
                            </Fade>
                            {/* up */}
                            <Fade right>
                                <div className='text-center bg-white py-10 px-5 rounded-xl relative z-10'>
                                    <div className='mb-5'>
                                        <Image class="object-contain w-full h-10 mx-auto" src="/chart-square.png" width={50} height={50}/>
                                    </div>
                                    <div>
                                        <h1 className='mb-5 font-bold max-w-[10rem] mx-auto'>Market Analysis Project</h1>
                                        <p className='text-gray-600 text-base'>Protocols apart from aengage models, pricing billing</p>
                                    </div>
                                </div>
                            </Fade>
                        <div className='bg-blue-50 w-[50rem] lg:w-[60rem]  xl:w-[65rem] h-[30rem] right-0 absolute rounded-tl-[5rem]' />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    </div>
  )
}

export default Services
