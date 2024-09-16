"use client";

import profile from "./public/profile3.png";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden px-5 md:px-20"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-5 w-full max-w-6xl h-full items-center">
        
        {/* Left side: Text content */}
        <motion.div
          variants={item}
          className="space-y-8 col-span-1"
        >
          {/* Card 1 */}
          <div className="p-8 rounded-lg bg-gray-800 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Sudip Paudel
            </h2>
            <p className="text-lg font-medium text-gray-400">
              Based in Baglung, Nepal
            </p>
            <p className="text-lg font-medium text-gray-400">
              Available for Fullstack Development
            </p>
          </div>
        </motion.div>

        {/* Center: Image */}
        <motion.div
          variants={item}
          className="flex justify-center col-span-1"
        >
          <Image
            src={profile}
            alt="Sudip Paudel"
            width={400}
            height={600}
            className="rounded-lg shadow-lg object-cover transition-transform duration-300 transform hover:scale-105"
          />
        </motion.div>

        {/* Right side: Text content */}
        <motion.div
          variants={item}
          className="space-y-8 col-span-1"
        >
          {/* Card 2 */}
          <div className="p-8 rounded-lg bg-gray-800 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold">
              FullStack Developer & Rust Enthusiast
            </h2>
            <p className="mt-2 text-lg text-gray-400">
              Specializing in modern web development with a focus on performance and scalability.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call-to-Action Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-12 w-[200px] h-[60px] bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-300"
      >
        Contact Me
      </motion.div>
    </motion.div>
  );
}
