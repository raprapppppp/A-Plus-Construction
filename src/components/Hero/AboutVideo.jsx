import React from "react";
import { GiMining } from "react-icons/gi";
import ManStanding from "../../assets/image/img/image-6.webp";
const AboutVideo = () => {
  return (
    <>
      <div className="flex flex-col h-[100%] container mt-10">
        <div className=" grid grid-cols-1 lg:grid-cols-3 w-full h-full gap-10">
          <div className="w-full h-full">
            <img
              src={ManStanding}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="col-span-2 w-full h-full">
            <div className="text-secondary font-bold text-sm">
              <h1>WELCOME TO A PLUS CONSTRUCTION AND DEVELOPMENT CORP.</h1>
            </div>
            <div className="text-black/80 text-xl sm:text-3xl sm:leading-[40px]   md:text-5xl md:leading-[60px] font-bold ">
              <h1>
                A Plus Construction and Development Corp. A Construction Company
              </h1>
            </div>
            <div className="flex items-center gap-3 my-4">
              <div>
                <GiMining className="text-secondary size-[45px]" />
              </div>
              <p className="text-sm sm:text-lg font-semibold">
                Stablished in 2018 and join the ever growing construction
                industry in the country.
              </p>
            </div>
            <div className="text-gray-400  text-sm sm:text-xl pb-4">
              <p>
                Having the resources and competitiveness of a large entity
                maintains the family atmosphere of a small firm. From our humble
                beginnings, we have proudly completed quality projects both
                private and public, delivered on time.
              </p>
            </div>
            <div>
              <video src="" autoPlay controls className="w-full"></video>
            </div>
            <div className="text-gray-400 text-sm sm:text-xl pb-4 mt-5">
              <p>This is how we work on our clients.</p>
            </div>
          </div>
        </div>
        <div className="mt-10  ">
          <div className="flex flex-col items-center justify-center p-10 bg-secondary text-white gap-3">
            <h1 className="text-2xl font-bold">
              KNOWN FOR ITS RELIABILITY, PROFESSIONALISM AND INTEGRITY.
            </h1>
            <p className="text-lg">
              Providing the highest level of service to clients. We aim to
              develop mutually beneficial partnership with our clients and
              empowering our people at the same time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVideo;
