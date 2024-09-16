"use client";

import profile from "./public/profile2.jpg";
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
      className="w-full h-screen flex-col items-center justify-center overflow-hidden" // Added overflow-hidden
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex md:flex-row flex-col items-center gap-10 ">
        <motion.div variants={item} className="md:w-1/3 shadow rounded-lg px-8 py-10">
          {/* Content */}
          <h2 className="text-3xl font-bold text-gray-800">Sudip Paudel</h2>
          <p className="text-lg text-gray-600">Based in Baglung, Nepal</p>
          <p className="text-lg text-gray-600">Available for fullstack development</p>
        </motion.div>
        <motion.div variants={item} className="md:w-1/3">
          <Image src={profile} alt="Sudip Paudel" width={200} height={200} className="rounded-full" />
        </motion.div>
        <motion.div variants={item} className="md:w-1/3  shadow rounded-lg px-8 py-10">
          {/* Content */}
          <h2 className="text-3xl font-bold text-gray-800">FullStack Developer and Rust Developer</h2>
        </motion.div>
      </div>
      <div className="flex justify-center items-center">
        <motion.div 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-[100px] h-[50px] p-3 mt-10  rounded-3xl bg-orange-400 cursor-pointer" >
        Contact us
      </motion.div>
      </div>
      
    </motion.div>
  );
}