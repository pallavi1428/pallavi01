import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import ReactPlayer from 'react-player/lazy';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import d from '../assets/d.jpeg';
// import e from '../assets/e.jpeg';
import { Link } from 'react-router-dom';


const MediaItem = ({ type, source, title, onClick }) => (
    <div onClick={onClick} className="col-sm-6 col-md-4 col-lg-4">
      <div className="relative border py-8 rounded-xl shadow-xl overflow-hidden" style={{ height: '300px' }}>
        <div className="hover-bg">
          <div className="hover-text">
            <h4 className="text-white text-lg md:text-2xl font-bold absolute bottom-4 left-2 font-playfair">
              {title}
            </h4>
          </div>
          {type === 'image' && (
            <img
              src={source}
              className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
              alt={title}
              loading="lazy" // Lazy loading for images
            />
          )}
          {type === 'video' && (
            <ReactPlayer url={source} width="100%" height="100%" controls />
          )}
        </div>
      </div>
    </div>
  );
  
  
  
  
  

const Media = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const mediaData = [
    {
      type: 'image',
      source: a, // Import local image
      title: 'Local Image 1',
    },
    {
      type: 'image',
      source: b, // Import local image
      title: 'Local Image 2',
    },
    {
        type: 'image',
        source: d, // Import local image
        title: 'Local Image 2',
      },
    //   {
    //     type: 'image',
    //     source: e, // Import local image
    //     title: 'Local Image 2',
    //   },
    // {
    //   type: 'video',
    //   source: 'https://www.youtube.com/watch?v=example_video2',
    //   title: 'Local Video 2',
    // },
    // {
    //   type: 'video',
    //   source: 'https://www.example.com/remote-video.mp4', // Remote video URL
    //   title: 'Remote Video 1',
    // },
  ];

  const openMediaViewer = useCallback((index) => {
    setCurrentMedia(index);
    setIsViewerOpen(true);
  }, []);

  const closeMediaViewer = () => {
    setCurrentMedia(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="media" className="w-full my-10 md:my-20 lg:my-32 mt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#350905] font-playfair">
            Media Gallery
          </h2>
          <Link to="/more-images" className="block text-center text-Yellow-500 hover:underline mt-4">
          <u>Check out for more Testimonials and other Media</u>
        </Link>
        {isViewerOpen && (
          <ImageViewer
            src={mediaData.map(({ source }) => source)}
            backgroundStyle={{ zIndex: 99999 }}
            currentIndex={currentMedia}
            onClose={closeMediaViewer}
          />
        )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-8">
          {mediaData.map(({ type, source, title }, index) => (
            <MediaItem
              key={index}
              type={type}
              source={source}
              title={title}
              onClick={() => openMediaViewer(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Media;