import image3 from "/public/images/latest3.jpg.webp"
import Image from 'next/image';
function Contect() {
    return (
        <section id="contect" className="body-font bg-red-100">
            <div className="container px-5 py-24 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center leading-4">
                    <h2 className='text-4xl font-bold mb-8 '>Customer Testimonial</h2>
                    <p className="leading-8 tracking-[.11em] text-lg px-[2.4rem]">
                        Everybody is different, which is why we offer styles for
                        every body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                        dignissimos facilis neque nulla earum.
                    </p>
                    <span className="inline-block h-1 w-8 rounded bg-red-500 mt-8 mb-6" />

                    <div className="ml-52 object-center items-center h-full w-64 flex justify-center  p-4 ">
                        <div >
                            <Image alt="team" className="w-16 h-16 bg-red-100 object-cover object-center flex-shrink-0 rounded-full" src={image3} />
                        </div>
                        <div className="flex-grow items-center">
                            <span className="text-gray-900 title-font font-medium">Petey Curise</span>
                            <p className="text-gray-500">Desinger at Colorlip</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}



export default Contect