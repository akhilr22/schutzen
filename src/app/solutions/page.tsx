'use client'
import Image from "next/image";
import React, { useState } from "react";
// import { homePageData } from "./../data/Data";

import cornerImg from "@/app/assets/box-icon-preview.png";
import footerImg from "@/app/assets/Schutzen Website.pdf-image-002.jpg";
import homeContent1 from "@/app/assets/hompage-content1.png";
// import homeContent2 from "@/app/asse/ts/hompage-content2.png";

export default function page() {
  const [isOpen,setOpen] = useState({
    section1:false,
    section2:false
  })
  return (
    <div className="{my-40}">
      <div className=" sm:text-2xl md:text-3xl xl:text-4xl font-bold my-12 text-center scroll_animate ">
        <span>Patient Monitoring for Hospitals and Beyond</span>
      </div>

      <div className="footer ">
        <div className="flex scroll_animate">
          <div className="h-full flex-1 footer-box hidden md:block">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute right-0 w-[15px]">
                <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
              </div>
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] pl-0">
                <div className="bg-black w-full h-full"></div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box ml-2 md:ml-0">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]  md:pl-0 ">
                <div className="bg-black w-full h-full">
                  <div className="md:h-1/5 "></div>
                  <div className="h-4/6  p-4">
                    <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                      <div className="bg-black w-full h-full rounded-full "></div>
                    </div>

                    <div className="text-start mb-2">
                      <h1 className="font-bold text-sm md:text-md w-5/6 my-3">
                        Hospitals (Medical, Surgical, and Specialty Care Units)
                      </h1>
                      <p className="text-sm ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry standard dummy
                      </p>
                    </div>

                    <span onClick={()=>setOpen({...isOpen,section1:!isOpen.section1})} className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                      {"Load More >>>"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box mr-2 md:mr-0">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 ">
                <div className="bg-black w-full h-full">
                  <div className="md:h-1/5 "></div>
                  <div className="h-4/6  p-4">
                    <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                      <div className="bg-black w-full h-full rounded-full "></div>
                    </div>

                    <div className="text-start mb-2">
                      <h1 className="font-bold  text-sm md:text-md w-5/6 my-3">
                        Hospitals (Medical, Surgical, and Specialty Care Units)
                      </h1>
                      <p className="text-sm ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry standard dummy
                      </p>
                    </div>

                    <span onClick={()=>setOpen({...isOpen,section1:!isOpen.section1})} className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                      {"Load More >>>"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box hidden md:block ">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pr-0">
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
        { isOpen.section1 && <div className="flex scroll_animate w-full " >
        {/* Left Box  */}
        <div className="h-full basis-1/4 flex-grow footer-box hidden md:block">
          <div className="w-full h-[500px] mx-auto relative">
            <div className="absolute right-0 w-[15px]">
              <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
            </div>
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0">
              <div className="bg-black w-full h-full"></div>
            </div>
          </div>
        </div>

        {/* Middle Box - Takes double the width  */}
        <div className="h-full basis-2/4 flex-grow footer-box">
          <div className="w-full h-[650px] md:h-[500px] mx-auto relative">
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0">
              <div className="bg-black w-full h-full md:flex p-5">
                <div className=" md:w-2/3  scroll_animate">
                  <Image src={footerImg} alt="Description" style={{ objectFit: "contain" }} className="rounded-2xl" />
                </div>
                <div className=" md:w-1/3 pl-3 scroll_animate overflow-hidden xl:overflow-visible ">
                  <span className="font-bold text-sm scroll_animate">
                    {" "}
                    Hospitals (Medical, Surgical, and Specialty Care Units)
                  </span>
                  <p className="text-[12px] my-3 scroll_animate">
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
        <div className="h-full basis-1/4 flex-grow footer-box  hidden md:block">
          <div className="w-full h-[500px] mx-auto relative">
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pr-0">
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
      </div>}
        {/* next section  */}

        <div className="flex scroll_animate">
          <div className="h-full flex-1 footer-box hidden md:block ">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute right-0 w-[15px]">
                <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
              </div>
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pt-0 ">
                <div className="bg-black w-full h-full"></div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box ml-2 md:ml-0">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pt-0">
                <div className="bg-black w-full h-full">
                  <div className="md:h-1/5 "></div>
                  <div className="h-4/6  p-4">
                    <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                      <div className="bg-black w-full h-full rounded-full "></div>
                    </div>

                    <div className="text-start mb-2">
                      <h1 className="font-bold text-sm md:text-md w-5/6 my-3">
                        Hospitals (Medical, Surgical, and Specialty Care Units)
                      </h1>
                      <p className="text-sm ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry standard dummy
                      </p>
                    </div>

                    <span onClick={()=>setOpen({...isOpen,section2:!isOpen.section2})} className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                      {"Load More >>>"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box mr-2 md:mr-0">
            <div className="w-full h-[500px] mx-auto relative">
              <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pt-0">
                <div className="bg-black w-full h-full">
                  <div className="md:h-1/5 "></div>
                  <div className="h-4/6  p-4">
                    <div className="w-28 h-28 bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] rounded-full my-3">
                      <div className="bg-black w-full h-full rounded-full "></div>
                    </div>

                    <div className="text-start mb-2">
                      <h1 className="font-bold text-sm md:text-md w-5/6 my-3">
                        Hospitals (Medical, Surgical, and Specialty Care Units)
                      </h1>
                      <p className="text-sm ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry standard dummy
                      </p>
                    </div>

                    <span onClick={()=>setOpen({...isOpen,section2:!isOpen.section2})} className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate ">
                      {"Load More >>>"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full flex-1 footer-box hidden md:block">
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
      <div className="flex justify-end sm:mx-12 xl:mx-0 overflow-x-hidden" data-aos="zoom-in-up">
        <div className="flex w-full xl:w-5/6 ">
          <div
            className="load-more-banner w-full  rounded-3xl m-2 xl:mr-12 flex mt-11 mr-0 "
            style={{
              backgroundImage: `url(${homeContent1.src})`,
              backgroundSize: "cover", // Ensures the image covers the entire area
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents tiling
            }}
          >
            {/* <div className=" md:w-1/2 h-auto  p-6 sm:p-0 dark:text-white pt-5 md:pt-14 xl:pt-24 ">
              <div className="" data-aos="zoom-in-up">
                <h1 className="text-5xl font-bold pb-4">{homePageData.features.title}</h1>
              </div>
              <div className="pb-4 " data-aos="zoom-in-up">
                <p className="scroll_animate">
                  <span>{homePageData.features.desc}</span>
                </p>
              </div>
              <div className="flex scroll_animate">
                <div className="w-1/2 mr-2" data-aos="zoom-in-right">
                  <div className="py-2">
                    <h3 className="font-bold">Lorethxpsum</h3>
                    <p>
                      <span className="text-sm">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum{" "}
                      </span>
                    </p>
                  </div>
                  <div className="py-2">
                    <h3 className="font-bold">Lorethxpsum</h3>
                    <p>
                      <span className="text-sm">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-1/2 mr-2" data-aos="zoom-in-left">
                  <div className="py-2">
                    <h3 className="font-bold">Lorethxpsum</h3>
                    <p>
                      <span className="text-sm">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum{" "}
                      </span>
                    </p>
                  </div>
                  <div className="py-2">
                    <h3 className="font-bold">Lorethxpsum</h3>
                    <p>
                      <span className="text-sm">
                        {" "}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <span
                className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent scroll_animate"
                data-aos="zoom-in-up"
              >
                {"Load More >>>"}
              </span>
            </div> */}
          </div>
        </div>
      </div>


      { isOpen.section2 && <div className="flex scroll_animate w-full " >
        {/* Left Box  */}
        <div className="h-full basis-1/4 flex-grow footer-box hidden md:block">
          <div className="w-full h-[500px] mx-auto relative">
            <div className="absolute right-0 w-[15px]">
              <Image src={cornerImg} alt="Description" style={{ objectFit: "contain" }} />
            </div>
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0">
              <div className="bg-black w-full h-full"></div>
            </div>
          </div>
        </div>

        {/* Middle Box - Takes double the width  */}
        <div className="h-full basis-2/4 flex-grow footer-box">
          <div className="w-full h-[650px] md:h-[500px] mx-auto relative">
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0">
              <div className="bg-black w-full h-full md:flex p-5">
                <div className=" md:w-2/3  scroll_animate">
                  <Image src={footerImg} alt="Description" style={{ objectFit: "contain" }} className="rounded-2xl" />
                </div>
                <div className=" md:w-1/3 pl-3 scroll_animate overflow-hidden xl:overflow-visible ">
                  <span className="font-bold text-sm scroll_animate">
                    {" "}
                    Hospitals (Medical, Surgical, and Specialty Care Units)
                  </span>
                  <p className="text-[12px] my-3 scroll_animate">
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
        <div className="h-full basis-1/4 flex-grow footer-box  hidden md:block">
          <div className="w-full h-[500px] mx-auto relative">
            <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px] md:pl-0 pr-0">
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
      </div>}

      {/* <div
        className="stripe_line h-1 w-2/3 mx-auto rounded-full my-5 scroll_animate overflow-x-hidden"
        data-aos="fade-right"
      ></div> 
      {/* <div className="text-center justify-center scroll_animate overflow-x-hidden">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2" data-aos="zoom-in-up">
          Wireless Vital Signs Monitoring
        </h1>
        <div className="mx-auto text-center md:w-2/5 mt-3 px-6" data-aos="zoom-in-up">
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
          </span>
        </div>
        <div>
          <div className="sm:mx-auto h-auto py-20 mx-2 scroll_animate">
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto ">
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate "
                data-aos="fade-right"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-down-right"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-down-left"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-left"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
            </div>
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto">
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-right"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-up-right"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-up-left"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-left"
              >
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      {/* <div className=" sm:text-2xl md:text-3xl xl:text-4xl font-bold my-12 text-center scroll_animate">
        <span>Patient Monitoring for Hospitals and Beyond</span>
      </div> */}

    
    </div>
  );
}
