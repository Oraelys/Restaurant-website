import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    const socialLinks = [
        {
            icon: <FaFacebookF className="sm:size-4 size-3" />,
            color: "bg-blue-600",
        },
        { icon: <FaTwitter className="sm:size-4 size-3" />, color: "bg-sky-400" },
        { icon: <FaInstagram className="sm:size-4 size-3" />, color: "bg-red-500" },
        {
            icon: <FaLinkedinIn className="sm:size-4 size-3" />,
            color: "bg-blue-800",
        },
    ];

    const footerLinks = [
        { title: "Quick Links", links: ["Home", "Menu", "Services", "Reviews"] },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"],
        },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-orange-50 via-white/40 to-orange-100
        border-t-8 border-orange-200 py-12 sm:py-16 md:py-20 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8
                marker:gap-10 lg:gap-8 sm:mb-12">
                    {/* Brand Section */}
                    <div className="text-center sm:text-left space-y-3 sm:space-y-4">
                        <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-4xl font-bold
                        text-orange-600 font-serif tracking-wide drop-shadow-lg inline-block
                        px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-3 lg:py-2 border-2
                        border-gray-300 rounded-full bg-transparent">
                            Foodie's Hub
                        </h2>
                        <p className="text-gray-700 font-comfortaa text-lg sm:text-xl md:text-xl italic">
                            Serving Happiness since 2025
                        </p>

                        <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
                            {socialLinks.map((item, index) => (
                                <a href="#" key={index} className={`${item.color} text-white p-2 sm:p-3
                                 rounded-full shadow-sm sm:shadow-lg transition-all transform hover:sxale-110
                                 hover:rotate-6`}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* links Section */}
                    {footerLinks.map((section, index) => (
                        <div key={index} className="text-center sm:text-left space-y-3 sm:space-y-4" >
                            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold
                            text-gray-800 font-serif tracking-wide inline-block
                            px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-3 lg:py-2 border-2
                            border-gray-300 rounded-full bg-transparent">
                                {section.title}
                            </h3>
                            <ul className="space-y-1 sm:space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-gray-700 font-comfortaa hover:text-orange-600
                                        transition-colors text-base sm:text-lg md:text-xl">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* Contact section */}
                    <div className="text-center sm:text-left space-y-3 sm:space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif
                        tracking-wide inline-block px-3 sm:px-4 py-1 sm:py-2 border-2 
                        border-gray-300 rounded-full bg-transparent">
                            Contact us
                        </h3>

                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex justify-center sm:justify-start items-center space-x-2">
                                <FaMapMarkerAlt className="text-orange-600 shrink-0" size={18} />
                                <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                                md:text-xl">
                                    Two lane Uyo, Akwa Ibom
                                </span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center space-x-2">
                                <FaPhoneAlt className="text-orange-600 shrink-0" size={18} />
                                <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                                md:text-xl">
                                    +12345678
                                </span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center space-x-2">
                                <FaRegEnvelope className="text-orange-600 shrink-0" size={18} />
                                <span className="text-gray-600 font-comfortaa text-base sm:text-lg
                                md:text-xl">
                                    foodieHub@email.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletters Section */}
                <div className="bg-white/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 
            sm:p-8 md:p-10 lg:p-8 shadow-lg sm:shadow-2xl max-w-4xl mx-auto mb-8 sm:mb-12 border
            border-white/20">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4
                     font-serif tracking-wide drop-shadow-md inline-block px-3 sm:px-4 md:px-8 lg:px-3
                     py-1 sm:py-2 md:py-3 lg:py-1 bg-transparent">
                            Get 15% Off Your First Order
                        </h3>

                        <div className="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 md:gap-6 
                    lg:gap-4">
                            <input type="text" placeholder="Enter your email" name="" id="" className=" w-full px-4 sm:px-6
                        md:px-8 lg:px-4 py-3 sm:py-4 md:py-3 lg:py-2 bg-transparent border border-orange-200 rounded-full
                        focus:outline-none focus:ring-2 focus:ring-orange-300 text-base sm:text-lg placeholder-gray-500" />
                            <button className=" bg-orange-600 text-white px-6 sm:px-10 md:px-8 lg:px-6 
                        py-3 sm:py-4 md:py-3 lg:py-2 rounded-full font-semibold hover:bg-orange-700 transition-transform
                        transform hover:scale-105 text-base sm:text-lg shadow-md">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-orange-200 pt-6 sm:pt-8 text-center space-y-3 sm:space-y-4">
                    <p className="text-gray-600 font-comfortaa text-sm sm:text-base md:text-xl">
                        &copy; {new Date().getFullYear()} Foodie's Hub. All rights reserved.
                    </p>
                    <p className=" text-gray-600 font-comfortaa text-sm sm:text-base md:text-xl">
                        Designed by {""}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer