import React from "react";
import { MdEngineering } from "react-icons/md";
const AboutContent = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <div className="flex justify-start items-start p-5 gap-3 bg-primary text-white relative overflow-hidden ">
          <div className="size-full bg-white/15 absolute top-0 left-0 scale-150 -rotate-20 translate-x-[120px] translate-y-[50px]"></div>
          <div className="size-[55px] bg-secondary rounded-full">
            <MdEngineering className="size-[55px] p-2" />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Professionalism</h1>
            <p>
              Provide clients the technical competence needed in today's
              business world.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-start items-start p-5 gap-3 bg-secondary text-white relative overflow-hidden">
          <div className="size-full bg-white/15 absolute top-0 left-0 scale-150 -rotate-20 translate-x-[170px] translate-y-[40px]"></div>
          <div className="size-[55px] bg-primary rounded-full">
            <MdEngineering className="size-[55px] p-2" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Integrity</h1>
            <p>
              Uphold the highest level of strong moral principles in our
              actions.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-start items-start p-5 gap-3 bg-primary text-white relative overflow-hidden">
          <div className="size-full bg-white/15 absolute top-0 left-0 scale-150 -rotate-20 translate-x-[120px] translate-y-[50px]"></div>
          <div className="size-[55px] bg-secondary rounded-full">
            <MdEngineering className="size-[55px] p-2" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Commitment</h1>
            <p>Dedication to what we do in heart and mind.</p>
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-start items-start p-5 gap-3 bg-secondary text-white lg:col-start-2 relative overflow-hidden">
          <div className="size-full bg-white/15 absolute top-0 left-0 scale-150 -rotate-20 translate-x-[100px] translate-y-[50px]"></div>
          <div className="size-[55px] bg-primary rounded-full">
            <MdEngineering className="size-[55px] p-2" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Teamwork</h1>
            <p>Work together as one.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
