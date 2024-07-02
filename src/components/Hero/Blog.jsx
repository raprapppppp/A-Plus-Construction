import React from "react";
import BlogTestImg from "../../assets/image/img/image-2.webp";
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
];

const Blog = () => {
  return (
    <div className="container flex flex-col gap-10 mt-[50px]">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-secondary text-sm font-bold">OUR BLOG</h1>
        <h1 className="text-3xl font-bold">Blog Updates</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div>
                <button className="bg-button text-white font-semibold py-1 px-3 rounded-[3px]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
