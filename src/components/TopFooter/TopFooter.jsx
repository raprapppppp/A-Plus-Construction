import React from "react";
import Logo from "../../assets/image/logo/apcdcorp.png";
import { MdAddIcCall } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const TopFooter = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 sm:grid-cols-3 my-3 gap-5">
        <div className="flex items-center justify-start">
          <img src={Logo} alt="" className="  h-[35px]" />
        </div>
        <div className="flex items-center justify-start gap-4">
          <div>
            <MdAddIcCall className="text-secondary border border-gray-400 w-[35px] h-[35px] p-2 " />
          </div>
          <div className="text-sm font-bold space-y-[3px] ">
            <p className="text-secondary">Free Call</p>
            <p>(042)545-6920</p>
            <p>+63 918 469-6255</p>
            <p>+63 917 784-7781</p>
            <p className="text-gray-400 font-normal">
              Call Us Now 24/7 Customer Support
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-4">
          <div>
            <FaLocationArrow className="text-secondary border border-gray-400 w-[35px] h-[35px] p-2 " />
          </div>
          <div>
            <h1 className="font-bold text-sm">Our Location</h1>
            <p className="text-gray-400 font-normal text-sm">
              J.C. Wagan Ave. Poblacion, San Antonio, Quezon 4324 - Region 4A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
