import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-footer pt-20 mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="text-white space-y-3">
          <h1 className="font-bold">ABOUT</h1>
          <p>
            From our humble beginnings, we have proudly completed quality
            projects both private and public, delivered on time.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-icofont rounded-full size-9 text-center">
              <div className="icofont-instagram"></div>
            </div>
            <div className="flex items-center justify-center bg-icofont rounded-full size-9 text-center">
              <div className="icofont-facebook"></div>
            </div>
          </div>
        </div>
        <div className="text-white space-y-3">
          <h1 className="font-bold">LINKS</h1>
          <p>About Product Services Projects Blog Contact</p>
        </div>
        <div className="text-white space-y-3">
          <h1 className="font-bold">HAVE A QUESTIONS?</h1>
          <div className="flex items-center gap-2">
            <div className="icofont-location-arrow icon"></div>
            <p>
              J.C. Wagan Ave. Poblacion, San Antonio, Quezon 4324 - Region 4A
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="icofont-ui-call icon"></div>
            <p>(042) 545-6920 | +63 918 469-6255 | +63 917 784-7781</p>
          </div>
        </div>
      </div>
      <div className="text-white bg-secondary w-full sm:w-[60%] py-3 mt-10 overflow-hidden relative">
        <div className="text-white px-[10px]  sm:pl-[40px] md:pl-[80px] lg:pl-[110px]">
          <p>Copyright ©2024 All rights reserved</p>
          <p className="">Credits to Colorlib</p>

          <div className="bg-footer absolute -right-2 -top-12 h-full w-[205px] skew-y-27 hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
