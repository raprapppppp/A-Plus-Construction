import React from "react";
import ContactImg from "../../assets/image/img/contact-img.webp";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
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

const Contact = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container grid grid-cols-1 sm:grid-cols-2 my-20 gap-5"
    >
      <motion.div variants={item} className="flex items-center justify-center">
        <img src={ContactImg} alt="" />
      </motion.div>
      <motion.div variants={item}>
        <h1 className="font-bold text-2xl text-center mb-5">
          Reach Us through this form!
        </h1>
        <div>
          <form action="" className="space-y-4">
            <div className="relative text-gray-400 flex items-center ">
              <FaUserAlt className="absolute top-[50%] bottom-[50%] -translate-y-[50%] left-4" />
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name..."
                className="border-none rounded-[5px] bg-gray-100 text-black-500 h-[50px] w-full pr-3 pl-12"
              />
            </div>
            <div className="relative text-gray-400 ">
              <BsFillTelephoneFill className="absolute top-[50%] bottom-[50%] -translate-y-[50%] left-4" />
              <input
                type="number"
                name="number"
                placeholder="Enter your number..."
                className="border-none rounded-[5px] bg-gray-100 text-black-500 h-[50px] w-full pr-3 pl-12"
              />
            </div>
            <div className="relative text-gray-400 ">
              <IoMdMail className="absolute top-[50%] bottom-[50%] -translate-y-[50%] left-4" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="border-none rounded-[5px] bg-gray-100 text-black-500 h-[50px] w-full pr-3 pl-12"
              />
            </div>
            <div>
              <input
                type="text"
                name="message"
                placeholder="Enter your message..."
                className="border-none rounded-[5px] bg-gray-100 text-black h-[50px] w-full pr-3 pl-12"
              />
            </div>
            <div>
              <button className="w-full cursor-pointer border-none bg-primary text-white rounded-full p-3">
                SEND MAIL
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
