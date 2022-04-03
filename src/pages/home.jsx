import React, { useState } from "react";
import { ToggleDarkMode } from "../components/TogleDarkMode";
import IlustrationImg from "../assets/img/ilustration.svg";
import PlayButtonImg from "../assets/img/play-button.svg";
import BlobImg from "../assets/img/blob.svg";
import {
  MenuIcon,
  XIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

export default function Home() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen font-sans text-gray-900 dark:text-white dark:bg-gray-800">
        <div className=" bg-gradient-to-b from-[#FEE6F7] to-white dark:from-gray-900 dark:to-gray-800">
          <img
            src={BlobImg}
            alt="blob"
            className="absolute top-0 right-0 pointer-events-none dark:hidden"
          />
          <div className="px-6 mx-auto max-w-6xl ">
            <div className="flex items-center justify-between py-10">
              <div className="relative">
                <span className="bg-blue-500 absolute right-0 bottom-2 w-12 h-2 opacity-60 -z-[0]" />
                <h1 className="text-xl font-bold font-display">LOGO</h1>
              </div>
              <nav className="flex items-center space-x-2 relative">
                <div
                  className={`backdrop-blur-xl w-full md:w-full bg-gradient-to-b from-[#FEE6F7] to-pink-400 dark:from-gray-800 dark:to-gray-700 md:bg-none fixed md:static md:h-auto md:p-0 top-0 z-50 h-full p-8 transition-all ${
                    offCanvas ? "right-0" : "-right-full "
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOffCanvas(!offCanvas)}
                    className="flex justify-end md:hidden absolute top-0 -right-4 p-10 "
                  >
                    <XIcon className=" w-6 h-6 fill-current text-gray-700 dark:text-white" />
                  </button>
                  <ul className="flex justify-center items-center h-full md:h-0 md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-gray-700 dark:text-white">
                    <li>
                      <a
                        href="/#"
                        className="block md:inline-block mt-4 md:mt-0  relative group"
                      >
                        Home
                        <div className="absolute w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="block md:inline-block mt-4 md:mt-0  relative group"
                      >
                        About
                        <div className="absolute w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="block md:inline-block mt-4 md:mt-0  relative group"
                      >
                        Contact
                        <div className="absolute w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="block md:inline-block mt-4 md:mt-0 text-blue-400 dark:text-blue-200 relative group"
                      >
                        Register
                        <div className="absolute w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center space-x-2 relative">
                  <ToggleDarkMode />
                  <button
                    type="button"
                    onClick={() => setOffCanvas(!offCanvas)}
                    className="flex md:hidden"
                  >
                    <MenuIcon className=" w-6 h-6 fill-current text-gray-700 dark:text-white" />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-6 mx-auto max-w-6xl">
          <div className="flex flex-col-reverse items-center md:flex-row lg:items-end">
            <div className="md:w-1/2 pt-24 pr-8 pb-24 md:pb-12 md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold font-display">
                Learn the{" "}
                <span className="relative after:content-[url(./assets/img/scartch.svg)] after:absolute after:top-0 after:-right-6 after:-z-10">
                  best
                </span>
                ways for staying{" "}
                <span className="relative after:content-[url(./assets/img/decoration.svg)] after:absolute after:bottom-0 after:-right-6 after:-z-10">
                  productive
                </span>
              </h1>
              <p className="pt-8 text-lg md:text-xl leading-relaxed text-gray-500 dark:text-gray-200 max-w-md">
                Working at home is definitely a convenient option and makes
                sense in these unprecedented times.
              </p>
              <div className="flex items-center justify-center md:justify-start pt-12 space-x-6">
                <button className="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl">
                  Get Tips
                </button>
                <button className="flex items-center">
                  <img
                    src={PlayButtonImg}
                    alt="play button"
                    className="drop-shadow-lg hover:drop-shadow-xl"
                  />
                  <span className="pl-4 font-bold tracking-wide">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
            <div className="w-1/2 flex items-center border-b border-gray-400">
              <img src={IlustrationImg} alt="Ilustration" />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700">
          <div className="py-12 px-6 mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col p-8 space-y-4 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-200 transition-all duration-500 ease-out cursor-pointer hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-3">
                  <BriefcaseIcon className="w-6 h-6  text-gray-700 dark:text-white" />
                  <h2 className="text-xl font-display">Feature</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-200 transition-all duration-500 ease-out cursor-pointer hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-3">
                  <BriefcaseIcon className="w-6 h-6  text-gray-700 dark:text-white" />
                  <div className="relative">
                    <span className="bg-blue-500 absolute right-0 bottom-1 w-12 h-1.5 opacity-60 -z-[0]" />
                    <h2 className="text-xl font-display z-[2]">Feature</h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col p-8 space-y-4 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-200 transition-all duration-500 ease-out cursor-pointer hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-3">
                  <BriefcaseIcon className="w-6 h-6  text-gray-700 dark:text-white" />
                  <h2 className="text-xl font-display">Feature</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
