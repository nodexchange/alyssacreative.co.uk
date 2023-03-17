import React from 'react'
import Fade from 'react-reveal';

function Pricing() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="leading-tight text-black font-bold text-xl md:text-2xl lg:text-4xl">Pricing & Plans</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                <Fade left>
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                <h3 className="text-sm font-semibold text-gray-900">Standard</h3>
                            </div>
                            <p className="text-5xl font-bold text-black mt-7">$29</p>
                            <p className="mt-3 text-base text-gray-600">One-time payment</p>

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> 1 Domain License </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Full Celebration Library </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="h-5 text-indigo-500 flex-shrink-0w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Design Files Included </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Premium Support </span>
                                </li>
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-700 rounded-md hover:bg-blue-800 focus:bg-blue-800" role="button"> Get full access </a>
                            <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
                        <div className="p-8 xl:px-12">
                            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                                <h3 className="text-sm font-semibold text-blue-600">Premium</h3>
                            </div>
                            <p className="text-5xl font-bold text-black mt-7">$49</p>
                            <p className="mt-3 text-base text-gray-600">One-time payment</p>

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> 5 Domain License </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Full Celebration Library </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Design Files Included </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Premium Support </span>
                                </li>
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 hover:opacity-80 focus:opacity-80" role="button"> Get full access </a>
                            <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                <h3 className="text-sm font-semibold text-gray-900">Exclusive</h3>
                            </div>
                            <p className="text-5xl font-bold text-black mt-7">$79</p>
                            <p className="mt-3 text-base text-gray-600">One-time payment</p>

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Unlimited Domain License </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Full Celebration Library </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Design Files Included </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Premium Support </span>
                                </li>
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-700 rounded-md hover:bg-blue-800 focus:bg-blue-800" role="button"> Get full access </a>
                            <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </section>


  )
}

export default Pricing
