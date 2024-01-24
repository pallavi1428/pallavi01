import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic4 from "../assets/pic4.jpg";
import pic3_y from "../assets/pic3_y.jpg";

const Services = () => {
  return (
    <div name="Services" className="w-full px-4 my-10 md:my-20 lg:my-32">
      {/* Add px-4 for left and right padding in mobile view */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#350905] font-playfair">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl py-6">
            Our suite of meticulously crafted machines exemplifies the pinnacle
            of engineering innovation. From specialized automation to advanced
            biomedical solutions, each product is designed with precision at
            its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Service 1 */}
          <div className="relative border py-8 rounded-xl shadow-xl overflow-hidden">
            <img
              src={pic1}
              loading="lazy"
              alt="Special Service"
              className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-80 transition duration-300">
              <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-4 left-2 font-playfair">
                Special Purpose Machines
              </h3>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative border py-8 rounded-xl shadow-xl overflow-hidden">
            <img
              src={pic3_y}
              loading="lazy"
              alt="Medical Service"
              className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-80 transition duration-300">
              <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-4 left-2 font-playfair">
                Biomedical Machines
              </h3>
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative border py-8 rounded-xl shadow-xl overflow-hidden">
            <img
              src={pic4}
              loading="lazy"
              alt="Testing Service"
              className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-80 transition duration-300">
              <h3 className="text-white text-lg md:text-2xl font-bold absolute bottom-4 left-2 font-playfair">
                Testing Rigs
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
