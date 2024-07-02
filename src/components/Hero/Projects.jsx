import React from "react";
import Image9 from "../../assets/image/img/image-9.webp";

const Projects = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden px-[20px] lg:px-[120px]">
        <div className="text-white py-20 px-5 bg-button">
          <h3 className="text-secondary text-sm font-bold">
            A PLUS A CONSTRUCTION & DEVELOPMENT CORP.
          </h3>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Best Provider for Industrial Services
          </h1>
          <p className="mt-5">
            One of the leading construction and engineering firm known for its
            reliability, professionalism and integrity in providing the highest
            level of service to clients. We aim to develop mutually beneficial
            partnership with our clients and empowering our people at the same
            time.
          </p>
        </div>
        {/*TEXT*/}
        <div className="flex flex-col sm:flex-row lg:flex-col lg:justify-center ">
          <div className="flex items-center text-white bg-secondary w-full lg:w-[333px] lg:h-[115px] gap-4 p-5">
            <div className="icofont-calculations text-4xl"></div>
            <div className="font-bold">
              <p className="text-3xl">48,000</p>
              <p>Project Completed</p>
            </div>
          </div>
          <div className="flex items-center text-black bg-white gap-4 w-full  lg:w-[333px] lg:h-[115px] h-auto p-5">
            <div className="icofont-safety-hat text-4xl text-secondary"></div>
            <div className="font-bold">
              <p className="text-3xl ">48,000</p>
              <p className="">Happy Customer</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 absolute top-0 left-0 z-[-10]">
          <div className="bg-button hidden lg:block"></div>
          <div>
            <img src={Image9} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
