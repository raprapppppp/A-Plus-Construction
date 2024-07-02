import React from "react";
import AboutContent from "../../components/Hero/AboutContent";
import AboutVideo from "../../components/Hero/AboutVideo";
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

const About = () => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex flex-col justify-center items-center mt-20 gap"
      >
        <motion.div variants={item} className="text-center">
          <p className="text-secondary text-sm font-bold">OUR BLOG</p>
          <h1 className="text-3xl font-bold">Blog Updatest</h1>
        </motion.div>
        <motion.div variants={item} className="mt-10">
          <AboutContent />
          <AboutVideo />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
