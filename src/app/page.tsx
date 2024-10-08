"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Header from "./component/header/page";
import Hero from "./component/hero/page";
import Blog from "./component/collection/page";
import Babycollection from "./component/blog/page";
import ImageTextCarousel from "./component/contect/page";
function Navber() {
  return (
    <div>
      <main className="flex justify-center text-center">
        <div className="flex items-center justify-between ml-16 p-1 w-full max-w-screen-lg">
          <div className="flex space-x-2">
            <Link href="/" className="text-gray-600">About Us</Link>
            <Link href="/" className="text-gray-600 ">Privacy</Link>
            <Link href="/" className="text-gray-600 ">FAQ</Link>
            <Link href="/" className="text-gray-600">Careers</Link>
          </div>
          <div className="flex items-center  mr-12  space-x-2 text-gray-600">
            <span>My Wishlist</span>
            {/* draw Line */}
            <div className="h-6 border-l-2"></div>
            <span>Track Your Order</span>
            <div className=" h-6 border-l-2"></div>
            <div className="flex">
              <FaFacebook   className="mr-2 hover:text-red-600 hover:animate-bounce " aria-label="Facebook" />
              <FaInstagram  className="mr-2 hover:text-red-600 hover:animate-bounce" aria-label="Instagram" />
              <FaTwitter    className="mr-2 hover:text-red-600 hover:animate-bounce" aria-label="Twitter" />
              <FaYoutube    className="mr-2 hover:text-red-600 hover:animate-bounce" aria-label="YouTube" />
              <FaLinkedinIn className="mr-2 hover:text-red-600 hover:animate-bounce" aria-label="LinkedIn" />
            </div>
          </div>
        </div>
      </main>
      <div>
        <div className="w-full border-b-2"></div>
      </div>

      <Header />
      <Hero />
      <Blog />
      <Babycollection />
      <ImageTextCarousel />
    </div>
  )
}


export default Navber

