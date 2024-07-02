import React from "react";
import HeroImg from "../../assets/image/img/image-2.webp";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HeroContent = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-[78vh] relative -translate-y-[30px] z-[-1] overflow-hidden"
    >
      {/*Container to center */}

      {/*HERO SECTION */}
      <motion.div
        variants={item}
        className="absolute top-0 left-o z-[-1] w-full h-full "
      >
        <img
          src={HeroImg}
          alt=""
          className=" w-full h-full object-cover object-top"
        />
      </motion.div>
      <motion.div className="absolute top-0 left-o z-[-1] w-full h-full bg-opacity opacity-[0.5]"></motion.div>

      {/*HERO TEXT SECTION */}
      <motion.div variants={item} className="lg:container">
        <div className="flex flex-col justify-center items-start gap-5 sm:w-[70%] lg:w-[65%] h-[74vh] px-5  sm:pl-10 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold sm:leading-[70px] lg:leading-[85px]">
            Developing Building Land & Structures
          </h1>
          <p className="sm:w-[55%] text-sm sm:text-lg font-semibold">
            Having experienced and skilled employees, completion and high
            standard of workmanship is assured.
          </p>
          <button className="bg-secondary mt-2 py-2 px-4 rounded-[4px] text-sm font-bold">
            OUR SERVICES
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
