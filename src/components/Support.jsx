import React from "react";
import Slider from "react-slick";
// import pic1 from "../assets/pic1.jpg";
import pic1_y from "../assets/pic1_y.jpg";
import e from "../assets/e.jpeg";
import pic4_y from "../assets/pic4_y.png";
import b from "../assets/b.jpeg";
// import pic6 from "../assets/pic6.jpg";
// import pic7 from "../assets/pic7.jpg";
import a from "../assets/a.jpeg";
// import pic9 from "../assets/pic9.jpg";
// import pic10 from "../assets/pic10.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Support.css";

const Support = () => {
  const videoData = [
    {
      title: "Woodpecker CNC Router",
      thumbnail: pic1_y,
      videoUrl: "https://www.youtube.com/embed/your-sales-video-id-1",
    },
    {
      title: "Prosthetic Leg Testing Machine",
      thumbnail: e,
      videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    },
    {
      title: "Solar Panel Deframing Machine",
      thumbnail: pic4_y,
      videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    },
    
    {
      title: "",
      
      thumbnail: a,
      videoUrl: "https://www.youtube.com/embed/your-tech-support-video-id-2",
    },
    {
      title: "",
      thumbnail: b,
      videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    },
    // {
    //   title: "Bio-medical waste Incinerators",
    //   thumbnail: pic6,
    //   videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    // },
    // {
    //   title: "Vacuum retention testing rig",
    //   thumbnail: pic7,
    //   videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    // },
    // {
    //   title: "Automated Shaft Straightening Machines",
    //   thumbnail: pic1,
    //   videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    // },
    // {
    //   title: "De-icing brine manufacturing machines",
    //   thumbnail: pic9,
    //   videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    // },{
    //   title: "Vacuum actuated Machine",
    //   thumbnail: pic10,
    //   videoUrl: "https://www.youtube.com/embed/your-media-inquiries-video-id-3",
    // },
    // Repeat similar entries for other videos
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div name="support" className="w-full px-4 mt-24">
      <div className="max-w-[1240px] mx-auto text-black relative">
        <div className="px-4 py-12 text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold py-6 text-center heading-black">
            Products
          </h3>

          {/* <p className="py-4 text-lg lg:text-xl xl:text-2xl text-slate-300 text-black">
            Our suite of meticulously crafted machines exemplifies the pinnacle
            of engineering innovation. From specialized automation to advanced
            biomedical solutions, each product is designed with precision at
            its core.
          </p> */}
        </div>
        <div className="max-w-[1240px] mx-auto text-black relative">
          <Slider {...settings} className="slick-slider-custom">
            {videoData.map((data, index) => (
              <div key={index} className="slick-slide-custom">
                <a
                  href={data.videoUrl}
                  title={data.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative">
                    <img
                      src={data.thumbnail}
                      alt={`Thumbnail for ${data.title}`}
                      className="w-full h-full object-cover mb-4 rounded-md"
                    />
                    <div className="hover-description">
                      <h3 className="font-bold text-2xl md:text-xl lg:text-lg xl:text-md mt-2 heading-black">
                        {data.title}
                      </h3>
                      <p className="text-gray-600 text-lg md:text-base lg:text-sm xl:text-sm description-black">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Support;