"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cover ">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/image.54.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(10px)',
            zIndex: -1,
          }}
        ></div>

        {/* Logo */}
        <div className="flex items-center mb-8 ">
          <Image
            src="/icons/logo.svg" // Replace with your logo path
            alt="Cre8equity Logo"
            width={50} // Adjust size as needed
            height={50}
          />
          <h1 className="text-3xl font-semibold ml-2">Cre8equity</h1>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-4"
        >
          Ignite <span className="text-gradient">Collaboration</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl mb-4"
        >
          Empower Creative Partnerships
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg mb-8 max-w-lg"
        >
          Foster innovation and unlock potential by connecting visionary creators with forward-thinking businesses.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#34D399" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
        >
          Join the Movement
        </motion.button>
      </div>
      {/* Features Section */}
      <div className="relative py-16 px-6 bg-dark-1 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/path-to-background-image.jpg")',
            zIndex: -1,
          }}
        ></div>

        <h2 className="relative text-4xl font-bold mb-8 text-white">
          Explore Our <span className="text-gradient">Unique Features</span>
        </h2>
        <p className="relative text-lg mb-12 text-white">
          Discover the innovative solutions we offer to{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Enhance Collaboration
          </span>{" "}
          between <span className="font-bold text-gradient">Creators</span> and{" "}
          <span className="text-gradient font-bold">Brands</span>.
        </p>

        <div className="flex flex-nowrap justify-center gap-">
          {[
            {
              title: "Verified Partners",
              description: "Engage with a network of trusted creators and businesses, ensuring high-quality collaborations.",
              icon: "/icons/path-to-icon1.svg"
            },
            {
              title: "Exclusive Deals",
              description: "Access unique opportunities and partnerships tailored to your creative and business needs.",
              icon: "/icons/path-to-icon2.svg"
            },
            {
              title: "Comprehensive Support",
              description: "Our platform provides extensive support, from project management to asset sharing.",
              icon: "/icons/path-to-icon3.svg"
            },
            {
              title: "Legal Safeguards",
              description: "We handle all the legal intricacies, providing a secure environment for your projects.",
              icon: "/icons/path-to-icon4.svg"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-sm p-6 shadow-lg rounded-lg text-center py-16 px-6 bg-gradient-to-b from-dark-1 to-gray-900 text-center hover:scale-105 active:scale-95 cursor-pointer"
            >
              <div className="w-8 h-8 mx-auto mb-4">
                <img src={feature.icon}  alt={`${feature.title} Illustration`}  className="w-full h-full object-cover rounded-full shadow-md" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Images on the Sides */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/side-image1.jpg")' }}
        ></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/side-image2.jpg")' }}
        ></div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 bg-gradient-to-b from-dark-1 to-gray-900 text-center">
        <h2 className="text-4xl text-white font-bold mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              name: "Jane Doe",
              feedback: "Cre8Equity has transformed how I connect with businesses. The process is seamless and the results speak for themselves.",
              avatar: "/images/avatar-3.png"
            },
            {
              name: "John Smith",
              feedback: "As a business owner, Cre8Equity provided a valuable platform to find the right creators for our brand. Highly recommended!",
              avatar: "/images/avatar-2.jpeg"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-md p-6 bg-white bg-opacity-10 shadow-lg rounded-lg text-center transform transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src={testimonial.avatar}
                alt={`User ${index + 1}`}
                width={80}
                height={80}
                className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-green-500"
              />
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-semibold mb-2">
                {testimonial.name}
              </p>
              <p className='text-gray-200'>{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home


