import React from "react";
import BlogTestImg from "../../assets/image/img/image-2.webp";
import { motion } from "framer-motion";
const BlogData = [
  {
    id: 1,
    img: BlogTestImg,
    date: "MAR 15, 2024",
    gmail: "ADMIN@GMAIL.COM",
    title: "How to use tractor",
    description: "This blog is all about on how we can get money easier.",
  },
  {
    id: 2,
    img: BlogTestImg,
    date: "MAR 15, 2024",
    gmail: "ADMIN@GMAIL.COM",
    title: "How to use tractor",
    description: "This blog is all about on how we can get money easier.",
  },
  {
    id: 3,
    img: BlogTestImg,
    date: "MAR 15, 2024",
    gmail: "ADMIN@GMAIL.COM",
    title: "How to use tractor",
    description: "This blog is all about on how we can get money easier.",
  },
  {
    id: 4,
    img: BlogTestImg,
    date: "MAR 15, 2024",
    gmail: "ADMIN@GMAIL.COM",
    title: "How to use tractor",
    description: "This blog is all about on how we can get money easier.",
  },
  {
    id: 5,
    img: BlogTestImg,
    date: "MAR 15, 2024",
    gmail: "ADMIN@GMAIL.COM",
    title: "How to use tractor",
    description: "This blog is all about on how we can get money easier.",
  },
];

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

const Blog = () => {
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
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
        >
          {BlogData.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-4">
              <div>
                <img src={blog.img} alt="" />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-3 bg-secondary text-white px-3 py-2 font-bold text-sm">
                <div className=" flex items-center gap-1">
                  <div className="icofont-ui-calendar"></div>
                  <p>{blog.date}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="icofont-ui-user"></div>
                  <p>{blog.gmail}</p>
                </div>
              </div>
              <div className="text-xl font-semibold ">
                <h1>{blog.title}</h1>
              </div>
              <div className="text-lg">
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Blog;
