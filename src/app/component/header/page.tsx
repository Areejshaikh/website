import { CiSearch } from "react-icons/ci";

import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import Link from "next/link";



function Header() {
  return (

    <header className="text-gray-600 body-font  top-0 left-0 w-full z-50 bg-white sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative ">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="font-bold ml-12 text-2xl">
            Az<span className="font-thin ml-2">Collection<span /></span>
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link href="/"           className="mr-4 py-2 px-2 text-lg before:after:text-gray-950   font-bold hover:text-red-600">Home</Link>
          <Link href="#collection" className="mr-4 py-2 px-2 text-lg before:after:text-gray-950  font-bold hover:text-red-600">Men</Link>
          <Link href="#collection" className="mr-4 py-2 px-2 text-lg before:after:text-gray-950  font-bold hover:text-red-600">Women</Link>
          <Link href="#collection" className="mr-4 py-2 px-2 text-lg before:after:text-gray-950  font-bold hover:text-red-600">Baby Collection</Link>
          <Link href="#blog"       className="mr-4 py-2 px-2 text-lg before:after:text-gray-950  font-bold hover:text-red-600">Blog</Link>
          <Link href="#contect"    className="mr-4 py-2 px-2 text-lg before:after:text-gray-950  font-bold hover:text-red-600">Contect</Link>


          <div className="flex space-x-6 ">
            <CiSearch       className=" hover:text-red-600 hover:animate-bounce  " aria-label="Facebook" />
            <IoPerson       className=" hover:text-red-600 hover:animate-bounce " aria-label="LinkedIn" />
            <FaShoppingCart className=" hover:text-red-600 hover:animate-bounce " aria-label="YouTube" />

          </div>
        </nav>

      </div>
    </header>
  )
}


export default Header