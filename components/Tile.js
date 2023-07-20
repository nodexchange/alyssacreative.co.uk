const Tile = ({title, children}) => (
  <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                            </div>
                            {/* <p className="text-5xl font-bold text-black mt-7">$29</p> */}
                            {/* <p className="mt-3 text-base text-gray-600">One-time payment</p> */}

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                {children}
                            </ul>

                            {/* <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-700 rounded-md hover:bg-blue-800 focus:bg-blue-800" role="button"> Get full access </a> */}
                            {/* <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p> */}
                        </div>
                    </div>
)

export default Tile;