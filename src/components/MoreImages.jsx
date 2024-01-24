// MoreImages.jsx
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { Link } from 'react-router-dom';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import pic4_y from '../assets/pic4_y.png';
import d from '../assets/d.jpeg';
import e from '../assets/e.jpeg';
// import f from '../assets/f.jpeg';

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
            loading="lazy"
          />
        )}
        {/* Add more conditions for other media types (videos, etc.) if needed */}
      </div>
    </div>
  </div>
);

const MoreImages = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const moreImagesData = [
    {
      type: 'image',
      source: a,
      title: 'Image 1',
    },
    {
      type: 'image',
      source: b,
      title: 'Image 2',
    },
    {
      type: 'image',
      source: pic4_y,
      title: 'Image 3',
    },
    {
      type: 'image',
      source: d,
      title: 'Image 4',
    },
    {
      type: 'image',
      source: e,
      title: 'Image 5',
    },
    // {
    //   type: 'image',
    //   source: f,
    //   title: 'Image 6',
    // },
    // Add more images as needed
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
    <div id="more-images" className="w-full my-10 md:my-20 lg:my-32 mt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#350905] font-playfair">
            Media
          </h2>
          <Link to="/" className="block text-center text-Yellow-500 hover:underline mt-4">
            <u>Home</u>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-8">
          {moreImagesData.map(({ type, source, title }, index) => (
            <MediaItem
              key={index}
              type={type}
              source={source}
              title={title}
              onClick={() => openMediaViewer(index)}
            />
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={moreImagesData.map(({ source }) => source)}
            backgroundStyle={{ zIndex: 99999 }}
            currentIndex={currentMedia}
            onClose={closeMediaViewer}
          />
        )}
      </div>
    </div>
  );
};

export default MoreImages;
