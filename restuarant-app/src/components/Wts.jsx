import React from 'react'
import { FaStar, FaUtensils } from "react-icons/fa6";
import Wts1 from "../assets (2)/Wts1.png"
import Wts3 from "../assets (2)/Wts3.png"

function Wts() {
    return (
        <section className="py-2 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br
        from-orange-50 to-amber-50 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-12 2xl:px-16 relative 
            flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                {/* Mobile Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1 mb-6 md:mb-10 md:-ml-20 lg:-ml-24 xl:-ml-28 transform
                hover:-translate-y-2 transition-all duration-300">
                    <div className="relative group">
                        <img src={Wts1} alt="Happy Customer" className="w-full h-auto
                        object-cover rounded-2xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all
                        duration-300" style={{ maxWidth: "min(100%,640px)" }} />
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 
                        sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2 sm:p-3 md:p-4 rounded-2xl
                        shadow-lg">
                            <img src={Wts3} alt="Customer" className="w-10 h-10 sm:w-12 sm:h-12 md:h-14 
                            rounded-full border-4 border-orange-100" />
                        </div>
                    </div>
                </div>

                {/* Right content area */}
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8
                    md:p-10 lg:p-12 xl:p-14 shadow-xl border border-white/20 relative overflow-hidden ">
                        <div className="relative z-10">
                            <div className=" flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                                <FaUtensils className="text-orange-500 text-xl sm:text-2xl md:text-2xl lg:text-3xl" />
                                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-orange-600
                                uppercase tracking-wider">
                                    Testimonials
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold
                                text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight" style={{ fontFamily: "Dancing Script, cursive" }}>
                                Epicurean Echoes: <br className="hidden md:block" /> Savor The Moments
                            </h2>
                            <div className="bg-white/40 rounded-xl p-4 sm:p-6 md:p-6 lg:p-8 mb-6
                                border border-white/30">
                                <div className="flex gap-1 sm:gap-2 mb-3 text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                    ))}
                                </div>
                                <blockquote className=" text-base sm:text-lg md:text-lg lg:text-xl
                                xl:text-2xl text-gray-700 italic mb-4 sm:mb-6">
                                    "Fudo is the best. Besides the many delicious meals, the services is also good,
                                    especially in the very fast delivery..."
                                </blockquote>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img src={Wts3} alt="Customer" className="w-10 h-10 md:w-14 sm:w-12 sm:h-12 md:h-14 
                            rounded-full border-4 border-orange-200"/>
                                    <div className="">
                                        <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                                            John Carter
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
                                            Food Enthusiast
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Wts