// Hero.js

import React, { useState, useEffect } from "react";
import { CloudUploadIcon, DatabaseIcon, ServerIcon } from "@heroicons/react/solid";
import bgImg1 from "../assets/pic1.jpg";
import bgImg2 from "../assets/pic2.jpg";
import bgImg3 from "../assets/pic3.jpg";
import bgImg4 from "../assets/pic4.jpg";
import bgImg5 from "../assets/pic5.jpg";
import './Hero.module.css'; // Import your CSS file

const Hero = () => {
  const projectImages = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, projectImages.length]);

  return (
    <div
      name="home"
      className="w-full min-h-screen bg-zinc-200 flex flex-col justify-center items-center p-4"
    >
      <div className="grid md:grid-cols-2 max-w-[1340px] w-full relative">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl"> </p>
          <h1 className="py-3 text-4xl md:text-6xl lg:text-7xl font-bold text-[#350905] mt-10 md:mt-15 lg:mt-50">
            Kannan Automation and Solutions
          </h1>
          <h6 className="text-2xl">
            Your Trusted Partner in Precision Engineering and Innovative Solutions
          </h6>
          <button className="py-2 px-4 sm:w-[60%] my-4">
            <a
              href="mailto:INFOKANNANSOLUTIONS@gmail.com"
              className="block w-full h-full text-center bg-[#350905] text-white rounded-md py-3 px-6 transition duration-300 hover:bg-opacity-90"
            >
              Get in Touch
            </a>
          </button>

        </div>
        <div className="relative overflow-hidden h-[400px] mb-8 lg:mt-40 pl-1px pr-1px">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 right-0 w-full h-full opacity-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : ""
              }`}
            >
              <img
                className="w-full h-full object-cover transition-opacity duration-1000"
                src={image}
                alt={`Project ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4">
            <h2 className="text-xl font-bold">
              Elevating Industries with Precision Engineering 🔧
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 align-items:center sm:grid-cols-2 max-w-full md:mx-auto mb-20 lg:mx-auto lg:ml-auto lg:mr-4 lg:mt-4">
        <div className="relative flex flex-col py-4 sm:py-8 w-full sm:w-auto justify-center left-1/2 transform -translate-x-1/2 md:left-50 bg-brown-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p></p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-[#350905]">
              <CloudUploadIcon className="h-6" /> Precision Engineering
            </p>
            <p className="flex px-4 py-2 text-[#350905]">
              <DatabaseIcon className="h-6" /> End-to-End Solutions
            </p>
            <p className="flex px-4 py-2 text-[#350905]">
              <ServerIcon className="h-6" /> Industry Diversity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
