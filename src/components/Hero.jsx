import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className="h-screen w-full  px-3 md:px-20 mt-5">
      <div className="flex items-start gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 bg-blue-600 rounded-full" />
          <div className="w-1 md:h-60 h-40 bg-gradient-to-b from-blue-600 to-transparent" />
        </div>
        <div>
          <h1
            className={`font-black text-white md:text-[80px] text-[40px] -mt-2 md:-mt-5  `}
          >
            {" "}
            Hi, I'm <span className="text-blue-600">John</span>{" "}
          </h1>
          <h2 className="text-lg text-slate-200 font-medium md:text-2xl">
            {" "}
            I develop interactive, functional and cutting-edge web applications.
          </h2>
        </div>
      </div>

      <ComputersCanvas />
    </div>
  );
};

export default Hero;
