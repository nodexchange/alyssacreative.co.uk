import React from 'react'

function Hero() {
  return (
    <div>
        <section className={`py-16 bg-acblue text-center lg:text-left sm:py-16 lg:py-24 lg:bg-hero lg:bg-cover`}>
            <div className="px-4 mt-16 lg:mt-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
                            Grow Your Business With Ease
                        </h1>

                        <p className="mt-8 text-base text-white">
                        When it comes to marketing and design, we
understand it can get confusing and frustrating.
Our promise to clients is to communicate in a
user-friendly way, creating clarity and transparency
in our work, because sometimes we all need a little
push in the right direction.
</p>

                        <div className="mt-10 ">
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-acblue-light hover:bg-acblue-dark focus:bg-acblue-dark" role="button">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
