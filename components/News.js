import React from 'react'

function News() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-20">
        <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative text-center bg-blue-50 py-10 sm:py-24 sm:px-10 rounded-[3rem] lg:flex lg:items-center lg:justify-between lg:text-left z-10">
                <div>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-black lg:max-w-md">Subscribe Newsletter</h2>
                    <p className="mt-5 text-base text-gray-600">I will update good news and promotion service not spam</p>
                </div>

                <form action="#" method="POST" className="px-10 mt-8 lg:mt-0 lg:px-0 z-10">
                    <div className="sm:flex sm:justify-center lg:justify-end">
                        <div className='relative w-[25rem] lg:w-[30rem]'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address..."
                                className="block w-full px-4 py-4 bg-white text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-full caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 drop-shadow-xl"
                                required
                            />
                            <button type="submit" className="absolute text-sm top-1 right-1 items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-full hover:bg-blue-800 focus:bg-blue-800">
                                Contact Now
                            </button>
                        </div>
                    </div>
                </form>
                <div className='absolute bg-blue-700 lg:w-[26rem] lg:h-full rounded-r-[3rem] rounded-bl-[10rem] rounded-tl-[7rem] right-0' />
            </div>
            <div className='absolute bg-amber-100 rounded-bl-[4rem] w-[10rem] h-[10rem] -bottom-7 -left-0' />
        </div>
    </section>

  )
}

export default News
