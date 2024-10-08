// import Image from "next/image"
// import Link from "next/link"
// import image1 from "/public/images/latest1.jpg.webp"
// import image2 from "/public/images/latest2.jpg.webp"
// import image3 from "/public/images/latest3.jpg.webp"
// import image4 from "/public/images/latest4.jpg.webp"

// function Babycollection() {
//   return (
//     <section id="blog" className="text-gray-600 body-font ">
//       <div className="container  px-5 py-24 mx-auto flex flex-wrap">
//         <div className="flex w-full flex-wrap">
//           <h1 className="ml-8 mr-12 pb-8 sm:text-3xl text-4xl font-semibold leading-6 title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-12">
//             Trending This Week
//           </h1>
//           <nav>
//             <Link href="/" className="ml-8 text-red-600 font-bold text-lg border-b-4 border-transparent hover:border-red-600 mb-4">
//               Home
//             </Link>
//             <Link href="/" className="ml-8 font-bold text-lg border-b-4 border-transparent hover:border-red-600 mb-4">
//               Men
//             </Link>
//             <Link href="/" className="ml-8 font-bold text-lg border-b-4 border-transparent hover:border-red-600 mb-4">
//               Women
//             </Link>
//             <Link href="/" className="ml-8 font-bold text-lg border-b-4 border-transparent hover:border-red-600 mb-4">
//               Baby Collection
//             </Link>
//           </nav>
//         </div>
//         <div className=" ml-8 w-full border-b-2"></div>

//         <div className=" pt-12 flex flex-wrap md:-m-0 -m-0">
//           <div className="ml-4 flex  flex-wrap">

//             <div className="md:p-2 p-1 ">
//               <Image
//                 alt="gallery"
//                 className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 w-52 h-60 object-cover  object-center  delay-150 ease-in-out"
//                 src={image1}
//               />
//               <div className="grid gap-2 place-content-center h-28">
//                 <span className="hover:text-red-600">Cashmere Tank + Bag</span>
//                 <div> <span className=" ml-2 mr-6 text-gray-500 hover:text-gray-900 hover:">$ 98.00</span><del className="text-red-200">$ 120.00</del></div>
//               </div>
//             </div>
//             <div className="md:p-2 p-1">
//               <Image
//                 alt="gallery"
//                 className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 w-52 h-60 object-cover  object-center  delay-150 ease-in-out"
//                 src={image2}
//               />
//               <div className="grid gap-2 place-content-center h-28">
//                 <span className="hover:text-red-600">Cashmere Tank + Bag</span>
//                 <div> <span className=" ml-2 mr-6 text-gray-500 hover:text-gray-900 hover:">$ 98.00</span><del className="text-red-200">$ 120.00</del></div>
//               </div>
//             </div>
//             <div className="md:p-2 p-1 ">
//               <Image
//                 alt="gallery"
//                 className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 w-52 h-60 object-cover  object-center  delay-150 ease-in-out"
//                 src={image3}
//               />
//               <div className="grid gap-2 place-content-center h-28">
//                 <span className="hover:text-red-600">Cashmere Tank + Bag</span>
//                 <div> <span className=" ml-2 mr-6 text-gray-500 hover:text-gray-900 hover:">$ 98.00</span><del className="text-red-200">$ 120.00</del></div>
//               </div>
//             </div>
//             <div className="md:p-2 p-1 ">
//               <Image
//                 alt="gallery"
//                 className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 w-52 h-60 object-cover  object-center  delay-150 ease-in-out"
//                 src={image4}
//               />
//               <div className="grid gap-2 place-content-center h-28">
//                 <span className="hover:text-red-600">Cashmere Tank + Bag</span>
//                 <div> <span className=" ml-2 mr-6 text-gray-500 hover:text-gray-900 hover:">$ 98.00</span><del className="text-red-200">$ 120.00</del></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   )
// }

// export default Babycollection 


import Image from "next/image"
import Link from "next/link"
import image1 from "/public/images/latest1.jpg.webp"
import image2 from "/public/images/latest2.jpg.webp"
import image3 from "/public/images/latest3.jpg.webp"
import image4 from "/public/images/latest4.jpg.webp"

function Babycollection() {
  return (
    <section id="blog" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full flex-wrap mb-12">
          <h1 className="ml-8 mr-12 sm:text-3xl text-4xl font-semibold leading-6 title-font text-gray-900 lg:w-1/3">
            Trending This Week
          </h1>
          <nav className="flex flex-wrap lg:w-2/3">
            {['Home', 'Men', 'Women', 'Baby Collection'].map((item) => (
              <Link key={item} href="/" className="ml-8 font-bold text-lg border-b-4 border-transparent hover:border-red-600 mb-4">
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ml-8 w-full border-b-2 mb-4"></div>

        <div className="pt-12 flex flex-wrap">
          {[
            { src: image1, label: "Cashmere Tank + Bag", price: "$98.00", oldPrice: "$120.00" },
            { src: image2, label: "Cashmere Tank + Bag", price: "$98.00", oldPrice: "$120.00" },
            { src: image3, label: "Cashmere Tank + Bag", price: "$98.00", oldPrice: "$120.00" },
            { src: image4, label: "Cashmere Tank + Bag", price: "$98.00", oldPrice: "$120.00" }
          ].map((item, index) => (
            <div key={index} className="md:p-2 p-1 w-full sm:w-1/2 lg:w-1/4">
              <Image
                alt="gallery"
                className="transition hover:-translate-y-1 hover:scale-110 duration-300 w-full h-60 object-cover object-center"
                src={item.src}
              />
              <div className="grid gap-2 place-content-center h-28">
                <span className="hover:text-red-600">{item.label}</span>
                <div>
                  <span className="ml-2 mr-6 text-gray-500 hover:text-gray-900">{item.price}</span>
                  <del className="text-red-200">{item.oldPrice}</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Babycollection;
