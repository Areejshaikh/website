import { FaFacebook } from "react-icons/fa";
import { FaYoutube , FaInstagram} from "react-icons/fa6";

function Footer() {
    return (
        <div>
            <footer className="bg-neutral-900 body-font">
                <div className="border-t border-gray-200">
                    <div className="container px-5 py-20 flex flex-wrap mx-auto items-center">

                        <div className=" flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-16 sm:mr-4">
                                <label
                                    htmlFor="footer-field"
                                    className="leading-7 text-sm text-white "
                                >
                                </label>
                                <input
                                    placeholder="Enter Your Email"
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="ml-16 w-80 h-12 text-center  rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className=" ml-32 w-28 h-12 text-center inline-flex text-white bg-red-500 border-0 p-auto py-3 px-5 focus:outline-none hover:bg-red-600 ">
                                Subscribe
                            </button>

                        </div>
                        <span className="mr-20 text-2xl  inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a className="pl-4 text-white hover:text-red-600 ">
                                <FaFacebook />
                            </a>
                            <a className="pl-4 text-white hover:text-red-600">
                                
                                <FaYoutube />
                            </a>
                            <a className="pl-4 text-white hover:text-red-600">
                            <FaInstagram />
                            </a>
                        </span>
                    </div>
                </div>
                {/* create Line */}
                <div className="border-b-2 text-center mx-28"></div>
               
            {/* Shop Details */}
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">
                                Men Shop
                            </h2>
                            <nav className="list-none mb-10 leading-8">
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Clothing Fashion</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Winter</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Summer</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover: underline cursor-pointer">Formal</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover: underline cursor-pointer">Casual</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-1xl mb-3">
                                Women Shop
                            </h2>
                            <nav className="list-none mb-10 leading-8">
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline  cursor-pointer">Clothing Fashion</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline  cursor-pointer">Winter</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Summer</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline  cursor-pointer">Formal</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Casual</a>
                                </li>
                            </nav>                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-1xl mb-3">
                                Baby Collection
                            </h2>
                            <nav className="list-none mb-10 leading-8">
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Clothing Fashion</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Winter</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Summer</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Formal</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer ">Casual</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
                                Quick Links
                            </h2>
                            <nav className="list-none mb-10 leading-8">
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Track Your Order</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Support</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">FAQ</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Carrier</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">About</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200 hover:underline cursor-pointer">Contect Us</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Createline */}
                <div className="  border-b-2 text-center mx-24"></div>
                {/* last line of page */}
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row  justify-center">
                        <p className="text-white text-lg text-center sm:text-left">
                            Copyright © 2024 Areej Zaheer. All rights reserved.
                        </p>
                    </div>
            </footer>


        </div>
    )
} export default Footer
// import React, { useEffect, useState } from 'react';
// import image1 from "/public/images/hero.webp"; // Make sure the path is correct
// import image2 from "/public/images/download.webp"; // Make sure the path is correct
// import Image from 'next/image';
// import Link from 'next/link';

// const images = [
//   { src: image1, alt: "Fashion Sale - Image 1", text: "Minimal Menz Style" },
//   { src: image2, alt: "Fashion Sale - Image 2", text: "Minimal Menz Style" },
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered,] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div>
//     <div className="border-2 border-white bg-black text-white p-3 text-center">
//       <p>Sale Up To 50% Bigest Discount.Hurry!Limited Period Offer
//         <Link href="/" className=" text-red-600 underline hover:text-red-500 transition-transform transform hover:scale-110">
//           Shop Now
//         </Link>
//       </p>
//     </div>
 

//     <div className="flex relative">
     
//       {images.map((image, index) => (
//         <div key={index} className={`relative w-full h-screen ${index === currentIndex ? 'block' : 'hidden'}`}>
//           <Image
//             alt={image.alt}
//             src={image.src}
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className={`absolute inset-0 flex items-center ${index === 0 ? 'justify-end' : 'justify-start'} z-10 p-10`}>
//             <div className="text-gray-950">
//               <span className="ml-36 title-font text-5xl text-red-600 mb-6">Fashion Sale</span>
//               <h2 className="text-center title-font text-5xl font-bold mb-6 mt-12">{image.text}</h2>
//               <p className="text-center leading-7 mb-6 px-8">
//                 Consectetur adipisicing elit. Laborum fuga incidunt<br></br> laboriosam voluptas iure,
//                 delectus dignissimos facilis neque nulla earum.
//               </p>
//               <button className="text-white bg-gray-950 border-solid  ml-52 py-4 px-14 focus:outline-none hover:bg-white hover:text-gray-900 border-2 border-gray-900">
//               Shop Now
//               </button>
//             </div>
//           </div>


          
//         </div>
//       ))}
//       <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
//         Prev
//       </button>
//       <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
//         Next
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Hero;

