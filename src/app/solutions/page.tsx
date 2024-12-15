import Image from 'next/image'
import React from 'react'

 import cornerImg from "@/app/assets/box-icon-preview.png";
 import footerImg from "@/app/assets/Schutzen Website.pdf-image-002.jpg";
export default function page() {
  return (
    <div className='my-40'>


        <div className="footer ">
          <div className="flex scroll_animate">
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute right-0 w-[15px]">
                  <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
                </div>
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0">
                  <div className="bg-black w-full h-full"></div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0">
                  <div className="bg-black w-full h-full">
                    <div className="h-2/6 "></div>
                    <div className="h-4/6  p-4">
                      <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                        <div className="bg-black w-full h-full rounded-full "></div>
                      </div>
  
                      <div className="text-start mb-5">
                        <h1 className="font-bold text-md w-5/6 my-3">
                          Hospitals (Medical, Surgical, and Specialty Care Units)
                        </h1>
                        <p className="text-sm ">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                          the industry standard dummy
                        </p>
                      </div>
  
                      <span className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                        {"Load More >>>"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 ">
                  <div className="bg-black w-full h-full">
                    <div className="h-2/6 "></div>
                    <div className="h-4/6  p-4">
                      <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                        <div className="bg-black w-full h-full rounded-full "></div>
                      </div>
  
                      <div className="text-start mb-5">
                        <h1 className="font-bold text-md w-5/6 my-3">
                          Hospitals (Medical, Surgical, and Specialty Care Units)
                        </h1>
                        <p className="text-sm ">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                          the industry standard dummy
                        </p>
                      </div>
  
                      <span className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                        {"Load More >>>"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pr-0">
                  <div className="absolute left-0 w-[15px]">
                    <Image
                      src={cornerImg}
                      alt="Description"
                      style={{ objectFit: "contain" }}
                      className="transform rotate-180"
                    />
                  </div>
                  <div className="bg-black w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
  
           {/* next section  */}
  
  <div className="flex scroll_animate">
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute right-0 w-[15px]">
                  <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
                </div>
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pt-0 ">
                  <div className="bg-black w-full h-full"></div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pt-0">
                  <div className="bg-black w-full h-full">
                    <div className="h-2/6 "></div>
                    <div className="h-4/6  p-4">
                      <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                        <div className="bg-black w-full h-full rounded-full "></div>
                      </div>
  
                      <div className="text-start mb-5">
                        <h1 className="font-bold text-md w-5/6 my-3">
                          Hospitals (Medical, Surgical, and Specialty Care Units)
                        </h1>
                        <p className="text-sm ">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                          the industry standard dummy
                        </p>
                      </div>
  
                      <span className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                        {"Load More >>>"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pt-0">
                  <div className="bg-black w-full h-full">
                    <div className="h-2/6 "></div>
                    <div className="h-4/6  p-4">
                      <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                        <div className="bg-black w-full h-full rounded-full "></div>
                      </div>
  
                      <div className="text-start mb-5">
                        <h1 className="font-bold text-md w-5/6 my-3">
                          Hospitals (Medical, Surgical, and Specialty Care Units)
                        </h1>
                        <p className="text-sm ">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                          the industry standard dummy
                        </p>
                      </div>
  
                      <span className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                        {"Load More >>>"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="h-full flex-1 footer-box">
              <div className="w-full h-[500px] mx-auto relative">
                <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pr-0 pt-0">
                  <div className="absolute left-0 w-[15px]">
                    <Image
                      src={cornerImg}
                      alt="Description"
                      style={{ objectFit: "contain" }}
                      className="transform rotate-180"
                    />
                  </div>
                  <div className="bg-black w-full h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className=" sm:text-2xl md:text-3xl xl:text-4xl font-bold my-12 text-center scroll_animate">
          <span>Patient Monitoring for Hospitals and Beyond</span>
        </div>
  
        <div className="flex scroll_animate w-full">
         {/* Left Box  */}
          <div className="h-full basis-1/4 flex-grow footer-box">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute right-0 w-[15px]">
                <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
              </div>
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0">
                <div className="bg-black w-full h-full"></div>
              </div>
            </div>
          </div>
  
         {/* Middle Box - Takes double the width  */}
          <div className="h-full basis-2/4 flex-grow footer-box">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0">
                <div className="bg-black w-full h-full flex p-5">
                  <div className=" w-2/3 scroll_animate">
                    <Image src={footerImg} alt="Description" style={{ objectFit: "contain" }} className="rounded-2xl" />
                  </div>
                  <div className=" w-1/3 pl-3 scroll_animate overflow-hidden xl:overflow-visible">
                    <span className="font-bold text-sm scroll_animate">
                      {" "}
                      Hospitals (Medical, Surgical, and Specialty Care Units)
                    </span>
                    <p className="text-xs my-3 scroll_animate">
                      {" "}
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using Content here, content here, making it look like
                      readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    </p>
                    <p className="text-xs my-3 scroll_animate">
                      default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                      humour and the like).
                    </p>
                    <p className="text-xs my-3 scroll_animate">
                      It is a long established fact that a reader will d over the years, sometimes by accident, sometimes
                      on purpose (injected humour and the like).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
         {/* Right Box  */}
          <div className="h-full basis-1/4 flex-grow footer-box">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0 pr-0">
                <div className="absolute left-0 w-[15px]">
                  <Image
                    src={cornerImg}
                    alt="Description"
                    style={{ objectFit: "contain" }}
                    className="transform rotate-180"
                  />
                </div>
                <div className="bg-black w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
  
  


  </div>
  )
}
