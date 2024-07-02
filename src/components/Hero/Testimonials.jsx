import React, { useEffect, useRef, useState } from "react";
import Avatar from "../../assets/image/img/profile-avatar.png";
import { motion } from "framer-motion";
const TestimonialData = [
  {
    id: 1,
    img: Avatar,
    name: "Joe Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga vel saepe quisquam eligendi, repellat cumque quam cum. Modi sit enim harum quod at ipsum, nisi voluptatem perspiciatis tenetur sequi, unde qui? Itaque, provident quis vitae, odit perferendis saepe harum ducimus corrupti, veniam incidunt praesentium?",
  },
  {
    id: 2,
    img: Avatar,
    name: "Rafael",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga vel saepe quisquam eligendi, repellat cumque quam cum. Modi sit enim harum quod at ipsum, nisi voluptatem perspiciatis tenetur sequi, unde qui? Itaque, provident quis vitae, odit perferendis saepe harum ducimus corrupti, veniam incidunt praesentium?",
  },
  {
    id: 3,
    img: Avatar,
    name: "Arjay",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga vel saepe quisquam eligendi, repellat cumque quam cum. Modi sit enim harum quod at ipsum, nisi voluptatem perspiciatis tenetur sequi, unde qui? Itaque, provident quis vitae, odit perferendis saepe harum ducimus corrupti, veniam incidunt praesentium?",
  },
  {
    id: 4,
    img: Avatar,
    name: "Steph",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga vel saepe quisquam eligendi, repellat cumque quam cum. Modi sit enim harum quod at ipsum, nisi voluptatem perspiciatis tenetur sequi, unde qui? Itaque, provident quis vitae, odit perferendis saepe harum ducimus corrupti, veniam incidunt praesentium?",
  },
];

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  });

  return (
    <div className=" w-full h-auto mt-[45px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-white bg-secondary py-10 px-5">
          <h1 className="font-bold text-xl">Read Testimonial</h1>
          <h1 className="font-bold text-5xl">
            It's always our pleasure to hear that the work we do has positively
            reviews
          </h1>
        </div>

        {/* Slide Testimonial Start Here*/}
        <motion.div
          ref={slider_wrapper}
          className=" bg-button py-10 pr-5 gap-3 overflow-hidden "
        >
          <motion.div
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            className="flex cursor-grab"
          >
            {TestimonialData.map((testimonials) => (
              <>
                <div
                  key={testimonials.id}
                  className="flex flex-col-reverse lg:flex-row justify-center items-center ml-5 gap-5 min-w-[100%]  "
                >
                  <div className="flex gap-5 w-full">
                    <div className="w-[80px] h-[80px]">
                      <img
                        src={testimonials.img}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="mr-2">
                      <h1 className="text-white font-bold text-md">
                        {testimonials.name}
                      </h1>
                      <h1 className="text-secondary font-semibold text-lg">
                        Guests
                      </h1>
                    </div>
                  </div>
                  <div className="pr-5">
                    <p className="text-white text-lg">{testimonials.comment}</p>
                  </div>
                </div>
              </>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
