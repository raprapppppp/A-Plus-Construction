import React from "react";
import { NavLink } from "react-router-dom";
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
];

const OfferServices = () => {
  return (
    <div className="container flex flex-col justify-center items-center mt-20 gap">
      <div className="text-center">
        <p className="text-secondary text-sm font-bold">OUR SERVICES</p>
        <h1 className="text-3xl font-bold">We Offer Services</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {ServicesData.map((service) => (
          <div key={service.id} className="text-center space-y-4 relative">
            <div className="w-full h-[220px] mb-10">
              <img
                src={service.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-600">
              {service.title}
            </h1>
            <p className="text-lg">{service.description}</p>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[30%]  w-[70px] h-[70px] p-4 shadow-lg rounded-full bg-secondary">
              <FaTools className=" text-white w-full h-full" />
            </div>
          </div>
        ))}
      </div>
      <motion.div className="flex justify-center items-center bg-button w-full h-full text-white cursor-pointer mt-5 py-3 text-lg font-semibold hover:bg-white hover:border-solid hover:border-2 border-2 border-button hover:border-button hover:text-button duration-200 ">
        <NavLink>Read More</NavLink>
      </motion.div>
    </div>
  );
};

export default OfferServices;
