import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function () {
  return (
    <footer className="lg:h-56 justify-around items-center bg-primary-700 w-full flex text-secundary-250 flex-col font-Open sm:h-36 ">
      <div className="justify-around items-center text-secundary-250 w-full flex ">
        <div className="flex flex-col lg:w-56 sm:w-28 sm:hidden lg:block md:block lg:text-lg">
          <div className="flex  mt-3 font-Open gap-2">
            <h1 className="text-primary-400">ABOUT</h1>{" "}
            <h1 className="text-primary-300">US</h1>
          </div>
          <div>
            <h4 className="lg:text-base md:text-xs">
            We are a group of students from soyHenry and this is our final project. We hope you like it.
            </h4>
          </div>
        </div>

        <div className="flex flex-col lg:w-56 items-center justify-center sm:w-28 ">
          <div className="flex items-center  ">
            <Link
              to="/"
              className="flex flex-col items-center text-primary-400 font-Open lg:text-6xl tracking-tight font-extrabold cursor-pointer sm:text-xl"
            >
              RGB
              <span className="font-PT text-primary-300 font-normal lg:text-5xl tracking-tight sm:text-xl ">
                STORE
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:w-56 items-end mt-3 lg:text-lg ">
          <div className="flex lg:mt-0 sm:mt-2">
            <h1 className="text-primary-400">CON</h1>
            <h1 className="text-primary-300">TACT</h1>
          </div>
          <div className="flex items-center ">
            <SiGmail className="text-primary h-8 w-5 sm:hidden lg:block sm:justify-end " />
            <p className="font-Open ml-1 sm:text-sm lg:text-base md:text-base">
              rgbstore0@gmail.com
            </p>
          </div>
    
          <button className="flex items-center t sm:text-sm sm:justify-start lg:text-base md:text-base">
            <AiFillGithub className="text-primary h-8 w-5 sm:hidden lg:block" />
            
              <a
                id="Github"
                title="Github"
                href="https://github.com/Arroxhack/PG-RGB-Store"
                target="_blank"
              >
              <p className="sm:text-sm lg:text-base md:text-base cursor-pointer hover:text-primary hover:underline">
                Github
              </p></a>
     
          </button>
        
          <Link to={"about"}>
            <h1 className="sm:text-sm lg:text-base md:text-base hover:text-primary hover:underline">
              More about us
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex justify-center sm:w-full lg:text-base md:text-base">
        <p className="sm:text-sm cursor-default">
          © Rgb Store 2022 - All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
