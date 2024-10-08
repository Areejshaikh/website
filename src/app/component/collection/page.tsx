import Image from "next/image"
import image1 from "/public/images/items1.jpg.webp"
import image2 from "/public/images/items2.jpg.webp"
import image3 from "/public/images/items3.jpg.webp"
function Blog() {
    return (
        <section id="collection" className=" mt-0 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap ">
                    {/* First */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 pb-8">
                        <div className="flex group relative">
                            <Image
                                width={200}
                                height={200}
                                alt="gallery"
                                className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 object-center  delay-150 ease-in-out text-white p-2  absolute inset-0 w-full h-80 object-cover  brightness-50"
                                src={image1}
                            />
                            <div className="px-8 py-10 relative z-auto w-full   opacity-100 hover:opacity-85">
                                <h2 className="text-center mt-32 text-2xl font-bold title-font  text-white drop-shadow-2xl">
                                    Man Collection
                                </h2>
                                <span className="cursor-pointer hidden group-hover:block absolute ml-20 mt-1 text-red-200 border-b-2">
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 pb-8">
                        <div className="flex group relative">
                            <Image
                                width={200}
                                height={200}
                                alt="gallery"
                                className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 object-center  delay-150 ease-in-out text-white p-2  absolute inset-0 w-full h-80 object-cover  brightness-50"
                                src={image2}
                            />
                            <div className="px-8 py-10 relative z-auto w-full   opacity-100 hover:opacity-85">
                                <h2 className="text-center mt-32 text-2xl font-bold title-font  text-white">
                                    Women Collection
                                </h2>
                                <span className="cursor-pointer hidden group-hover:block absolute  ml-20 mt-1 text-red-200 border-b-2">
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4 pb-8">
                        <div className="flex group relative">
                            <Image
                                width={200}
                                height={200}
                                alt="gallery"
                                className="transition  hover:-translate-y-1 hover:scale-110 500 duration-300 object-center  delay-150 ease-in-out text-white p-2  absolute inset-0 w-full h-80 object-cover  brightness-50"
                                src={image3}
                            />
                            <div className="px-8 py-10 relative z-auto w-full">
                                <h2 className="text-center mt-32 text-2xl font-bold title-font  text-white">
                                    Baby Collection
                                </h2>
                                <span className="cursor-pointer hidden group-hover:block absolute   ml-20 mt-1 text-red-200 border-b-2">
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog