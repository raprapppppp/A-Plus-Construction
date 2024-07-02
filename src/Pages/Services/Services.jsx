import React from "react";
import Image1 from "../../assets/image/img/image-3.webp";
import Image2 from "../../assets/image/img/image-5.webp";
import Image3 from "../../assets/image/img/image-9.webp";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    image: Image1,
    title: "General Contractor",
    description:
      "We do manage a project, especially a building project, and provide materials and workers.",
  },
  {
    id: 2,
    image: Image2,
    title: "Quantity Surveying",
    description:
      "We do have Quantity Surveyor will measure those lines and convert them into numbers.",
  },
  {
    id: 3,
    image: Image3,
    title: "Fit-out & Renovation",
    description:
      "We do fit outs highlight the changes and customization of the space for functionality.",
  },
  {
    id: 4,
    image: Image3,
    title: "Design & Build",
    description:
      "We do contract for the architectural/engineering design and construction to a single firm, partnership, corporation, joint venture or consortium.",
  },
  {
    id: 5,
    image: Image3,
    title: "Complete Engineering Service and Consultancy",
    description:
      "We do inclusive engineering services which are specialized in specific engineering areas for instance structural, geotechnical and environment.",
  },
  {
    id: 6,
    image: Image3,
    title: "Project and Construction Management",
    description:
      "We do directing and organizing each part of the project life cycle, from ideation to completion.",
  },
  {
    id: 7,
    image: Image3,
    title: "Land Development",
    description:
      "We redevelopment, construction, subdivision of land into parcels to sell, rent or lease, or it can be condominium complexes, apartment complexes, commercial parks, shopping centers, and industrial parks.",
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

const Services = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container flex flex-col justify-center items-center mt-20 gap"
    >
      <motion.div variants={item} className="text-center">
        <p className="text-secondary text-sm font-bold">OUR SERVICES</p>
        <h1 className="text-3xl font-bold">We Offer Services</h1>
      </motion.div>
      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
      >
        {ServicesData.map((service) => (
          <div key={service.id} className="text-center space-y-5 relative ">
            <div className="w-full h-[220px] mb-10">
              <img
                src={service.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-600">{service.title}</h1>
            <p className="text-lg line-clamp-2">{service.description}</p>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[30%]  w-[70px] h-[70px] p-4 shadow-lg rounded-full bg-secondary">
              <FaTools className=" text-white w-full h-full" />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
