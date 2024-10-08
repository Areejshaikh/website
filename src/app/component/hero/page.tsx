"use client"
import React, { useEffect, useState } from 'react';
import image1 from "/public/images/hero.webp"; // Make sure the path is correct
import image2 from "/public/images/download.webp"; // Make sure the path is correct
import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: image1, alt: "Fashion Sale - Image 1", text: "Minimal Menz Style" },
  { src: image2, alt: "Fashion Sale - Image 2", text: "Minimal Menz Style" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered,] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
    <div className="border-2 border-white bg-black text-white p-3 text-center">
      <p>Sale Up To 50% Bigest Discount.Hurry!Limited Period Offer
        <Link href="/" className=" text-red-600 underline hover:text-red-500 transition-transform transform hover:scale-110">
          Shop Now
        </Link>
      </p>
    </div>
 

    <div className="flex relative">
     
      {images.map((image, index) => (
        <div key={index} className={`relative w-full h-screen ${index === currentIndex ? 'block' : 'hidden'}`}>
          <Image
            alt={image.alt}
            src={image.src}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className={`absolute inset-0 flex items-center ${index === 0 ? 'justify-end' : 'justify-start'} z-10 p-10`}>
            <div className="text-gray-950">
              <span className="ml-44 title-font text-4xl  text-red-600 mb-6">Fashion Sale</span>
              <h2 className="text-center title-font text-5xl font-bold mb-6 mt-12">{image.text}</h2>
              <p className="text-center leading-7 mb-6 px-8">
                Consectetur adipisicing elit. Laborum fuga incidunt<br></br> laboriosam voluptas iure,
                delectus dignissimos facilis neque nulla earum.
              </p>
              <button className="text-white bg-gray-950 border-solid  ml-52 py-2 px-10 focus:outline-none hover:bg-white hover:text-gray-900 border-2 border-gray-900">
              Shop Now
              </button>
            </div>
          </div>


          
        </div>
      ))}
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        Prev
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
        Next
      </button>
    </div>
    </div>
  );
};

export default Hero;

