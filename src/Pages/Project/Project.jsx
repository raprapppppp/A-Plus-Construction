import React from "react";
import ProjectImg from "../../assets/image/img/image-8.webp";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const ProjectData = [
  {
    id: 1,
    img: ProjectImg,
    tag: {
      tag1: "tag1",
      tag2: "tag2",
      tag3: "tag3",
    },
    title: "Title",
    description: "Description",
    address: "Lusacan Tiaong Quezon",
    startDate: "February 13, 2024",
    endDate: "July  17, 2024",
  },
  {
    id: 2,
    img: ProjectImg,
    tag: {
      tag1: "tag1",
      tag2: "tag2",
      tag3: "tag3",
    },
    title: "Title",
    description: "Description",
    address: "Lusacan Tiaong Quezon",
    startDate: "February 13, 2024",
    endDate: "July  17, 2024",
  },
  {
    id: 3,
    img: ProjectImg,
    tag: {
      tag1: "tag1",
      tag2: "tag2",
      tag3: "tag3",
    },
    title: "Title",
    description: "Description",
    address: "Lusacan Tiaong Quezon",
    startDate: "February 13, 2024",
    endDate: "July  17, 2024",
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

const Project = () => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex flex-col justify-center items-center mt-20 gap"
      >
        <motion.div variants={item} className="text-center">
          <p className="text-secondary text-sm font-bold">OUR WORK</p>
          <h1 className="text-3xl font-bold">Latest Project</h1>
        </motion.div>
        <motion.div
          variants={item}
          className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          {ProjectData.map((projects) => (
            <div key={projects.id} className="flex flex-col gap-5">
              <div>
                <img src={projects.img} alt="" />
              </div>
              <div className="shadow-lg space-y-1 pb-10">
                <div className="flex flex-wrap px-4 gap-3 text-primary font-semibold">
                  <p className="bg-gray-300 px-3 py-1">{projects.tag.tag1}</p>
                  <p className="bg-gray-300 px-3 py-1">{projects.tag.tag2}</p>
                  <p className="bg-gray-300 px-3 py-1">{projects.tag.tag3}</p>
                </div>
                <h1 className="px-3 font-bold">{projects.title}</h1>
                <p className="px-3">{projects.description}</p>
                <div className="flex px-4 items-center gap-2">
                  <FaLocationDot className="text-secondary" />
                  <p className="text-gray-400">{projects.address}</p>
                </div>
                <div className="flex px-4 items-center gap-2">
                  <FaCalendar className="text-secondary" />
                  <p className="text-gray-400">{projects.startDate}</p>
                </div>
                <div className="flex px-4 items-center gap-2">
                  <FaCalendarAlt className="text-secondary" />
                  <p className="text-gray-400">{projects.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
