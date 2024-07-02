import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHardHat } from "react-icons/fa";
import {
  Bulldozerr,
  CompactRoller,
  Kobotak,
  PC40,
  PC50,
  PC200,
} from "./ProductsList";

const EquipmentData = [
  {
    id: 1,
    img: Bulldozerr,
    title: "Bulldozer",
    features: "Great for grading and levelling large portions of dirt or soil",
    uses: "Site clearance tasks like cleaning debris and rubble, and heavy duty maintenance tasks like removing heavy asphalt or debris from roadsides.",
  },
  {
    id: 2,
    img: CompactRoller,
    title: "Compact Vibratory Roller(Pison)",
    features:
      "Can flatten, compact and pave entire sections quickly and efficiently.",
    uses: "Large and gradual surfaces like asphalt and land.",
  },
  {
    id: 3,
    img: Kobotak,
    title: "Kubota K-020",
    features:
      "Ideal machine for digging holes, in particulary tough-to-react spots.",
    uses: "Making small trenches, digging holes, demolishing small structures and landscaping.",
  },
  {
    id: 4,
    img: PC40,
    title: "PC40 Mini Excavator",
    features:
      "Ideal machine for digging holes, in particulary tough-to-react spots.",
    uses: "Making small trenches, digging holes, demolishing small structures and landscaping.",
  },
  {
    id: 5,
    img: PC50,
    title: "PC50 Mini Excavator",
    features:
      "Ideal machine for digging holes, in particulary tough-to-react spots.",
    uses: "For lifting heavy debris and soil, mining, road, construction, building construction and demolitions.",
  },
  {
    id: 6,
    img: PC200,
    title: "PC200 Excavator",
    features:
      "Superior digging power and mobility and suitable for grading hilly areas and landscaping uneven terrain.",
    uses: "Making small trenches, digging holes, demolishing small structures and landscaping.",
  },
  {
    id: 7,
    img: PC200,
    title: "PC200 Excavator",
    features:
      "Superior digging power and mobility and suitable for grading hilly areas and landscaping uneven terrain.",
    uses: "Making small trenches, digging holes, demolishing small structures and landscaping.",
  },
  {
    id: 8,
    img: PC200,
    title: "PC200 Excavator",
    features:
      "Superior digging power and mobility and suitable for grading hilly areas and landscaping uneven terrain.",
    uses: "Making small trenches, digging holes, demolishing small structures and landscaping.",
  },
];

const OurProducts = () => {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  });

  return (
    <div className="container mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-secondary text-sm font-bold">OUR PRODUCTS</h1>
        <h1 className="text-3xl font-bold">Construction Equipment</h1>
      </div>

      <motion.div ref={slider_wrapper} className=" overflow-hidden  mt-20 ">
        {/*Card Slider Start */}
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
          className=" flex cursor-grab"
        >
          {EquipmentData.map((equipment) => (
            <div
              key={equipment.id}
              className="flex flex-col  justify-center items-center min-h-[40rem] min-w-[100%] md:min-w-[50%] lg:min-w-[33%] p-5 "
            >
              <div className="mt-5 mb-10 w-full max-h-[221px] h-full">
                <img
                  src={equipment.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-5 items-center text-center h-full">
                <div className=" w-[70px] h-[70px] p-4 shadow-xl rounded-full bg-white">
                  <FaHardHat className=" text-secondary w-full h-full" />
                </div>
                <h1 className="text-xl font-bold">{equipment.title}</h1>
                <p className="text-xl font-bold">
                  Features:{" "}
                  <span className="font-normal text-lg">
                    {equipment.features}
                  </span>
                </p>
                <p className="text-xl font-bold">
                  Uses:{" "}
                  <span className="font-normal text-lg">{equipment.uses}</span>
                </p>
              </div>
            </div>
          ))}
          {/*Card Slider end */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurProducts;
