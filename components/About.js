import React from 'react'

function About() {
  return (
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20 relative">
                <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                    <div class="overflow-hidden aspect-w-3 aspect-h-4">
                        <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="" />
                    </div>

                    <div class="relative">
                        <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="" />
                        </div>

                        <div class="absolute inset-0 grid w-full h-full place-items-center">
                            <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                                <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                        <img class="w-32 h-32" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
                    </div>
                </div>

                <div class="flex flex-col items-start xl:pl-16 relative">
                    <div className='bg-blue-50 w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]' />
                    <h2 class="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-800 z-10">Great Digital Product <br/> Agency since 2016</h2>
                    <p class="mt-4 text-base leading-relaxed text-gray-600 z-10">Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>

                </div>
            </div>
        </div>
    </section>

  )
}

export default About
