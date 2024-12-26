// import Image from 'next/image'
import React from "react";
// import { homePageData } from "./../data/Data";

//  import cornerImg from "@/app/assets/box-icon-preview.png";
//  import footerImg from "@/app/assets/Schutzen Website.pdf-image-002.jpg";
import homeContent1 from "@/app/assets/hompage-content1.png";
import Image from "next/image";
// import homeContent2 from "@/app/asse/ts/hompage-content2.png";
// import bg from "@/app/assets/aboutUs_bg.png";
// import bg2 from "@/app/assets/aboutBg-2.png";
import boxIcon from "@/app/assets/box-cornner.png";
import heartRate from "@/app/assets/heartRate.png";
import respiratoryRate from "@/app/assets/respiratoryRate.png";
import bodyTemperature from "@/app/assets/bodyTemperature.png";
import bodyPosture from "@/app/assets/bodyPosture.png";
import fallDetection from "@/app/assets/fallDetection.png";
import activity from "@/app/assets/activity.png";
import bloodPressure from "@/app/assets/bloodPressure.png";
import oxygenSaturation from "@/app/assets/oxygenSaturation.png";





export default function page() {
  return (
    <div className="{my-40}">
      <div className="text-center justify-center scroll_animate overflow-x-hidden">
        <h1 className="font-bold text-2xl my-5 mx-2 sm:text-3xl md:text-4xl xl:text-5xl py-2" data-aos="zoom-in-up">
          Patient monitoring solutions
        </h1>
        <div className="mx-auto text-center md:w-2/5 mt-3 px-6" data-aos="zoom-in-up">
          <span className="">
          This solution is an advanced remote monitoring system that provides continuous and efficient visibility into a patient&#39;s health.
          </span>
        </div>
        <div></div>
      </div>

      {/* <div className="footer ">
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
        </div> */}
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
      <div
        className="stripe_line h-1 w-2/3 mx-auto rounded-full my-5 scroll_animate overflow-x-hidden"
        data-aos="fade-right"
      ></div>
      <div className="text-center justify-center scroll_animate overflow-x-hidden">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2" data-aos="zoom-in-up">
          Features
        </h1>
        <div className="mx-auto text-center md:w-2/5 mt-3 px-6" data-aos="zoom-in-up">
          <span className="">
          The following solution monitors different vital signs concurrently, as well as other features with the
          support of third-party devices
          </span>
        </div>
        <div>
          <div className="sm:mx-auto h-auto py-20 mx-2 scroll_animate">
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto ">
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate "
                data-aos="fade-right"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={heartRate} alt="heartRateIco"/>
                <span>Heart Rate</span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-down-right"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={respiratoryRate} alt="respiratoryRate"/>
                <span>Respiratory Rate</span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-down-left"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={bodyTemperature} alt="bodyTemperature"/>
                <span>Body Temperature </span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-left"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={bodyPosture} alt="bodyPosture"/>
                <span>Body Posture </span>

                </div>
              </div>
            </div>
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto">
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-right"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={fallDetection} alt="heartRateIco"/>
                <span>Fall Detection </span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-up-right"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={activity} alt="heartRateIco"/>
                <span>Activity</span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-up-left"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={bloodPressure} alt="heartRateIco"/>
                <span>Blood Pressure</span>

                </div>
              </div>
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg scroll_animate"
                data-aos="fade-left"
              >
                <div className="w-full h-full bg-black rounded-lg">
                <Image src={oxygenSaturation} alt="heartRateIco"/>
                <span>Oxygen Saturation</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="stripe_line h-1 w-2/3 mx-auto rounded-full my-5 scroll_animate overflow-x-hidden"
        data-aos="fade-right"
      ></div>

      <div className="text-center justify-center scroll_animate overflow-x-hidden">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2" data-aos="zoom-in-up">
          Usability
        </h1>
        <div className="mx-auto text-center md:w-2/5 mt-3 px-6" data-aos="zoom-in-up">
          <ul>
            <div className="flex justify-around text-start mt-10">
              {" "}
              <div className="italic text-sm md:text-[16px] text-[#2ccdb5] flex">
                <Image src={boxIcon} alt="boxImg" className="w-10 h-10 pb-3 mr-3" />
                <span>Personalized solutions to streamline operations and reduce workload</span>{" "}
              </div>
          
            </div>
    
            <div className="flex justify-center text-start ">
              {" "}
              <div className=" italic text-sm md:text-[16px] text-[#2ccdb5] flex my-5">
                <Image src={boxIcon} alt="boxImg" className="w-10 h-10 pb-3 mr-3" />
                <span>Advanced diagnostic and therapeutic technologies for improved patient outcomes</span>{" "}
              </div>
            </div>
         
            <div className="flex justify-around text-start ">
              {" "}
           
              <div className="italic text-sm md:text-[16px] text-[#2ccdb5] flex my-5">
                <Image src={boxIcon} alt="boxImg" className="w-10 h-10 pb-3 mr-3" />
                <span>Seamless integration with existing systems for effortless adoption</span>{" "}
              </div>
            </div>
          
          </ul>
        </div>
   
      </div>

      {/* <div className=" sm:text-2xl md:text-3xl xl:text-4xl font-bold my-12 text-center scroll_animate">
          <span>Patient Monitoring for Hospitals and Beyond</span>
        </div> */}

      {/* <div className="flex scroll_animate w-full">
       
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
        </div> */}

      {/* <div
        className="stripe_line h-1 w-2/3 mx-auto rounded-full my-5 scroll_animate overflow-x-hidden"
        data-aos="fade-right"
      ></div> */}

      {/* <div
        className=" h-auto pt-20 sm:px-15 md:px-25 mx-2 sm:mx-6 md:mx-12 rounded-2xl scroll_animate overflow-x-hidden "
        style={{
         
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
        }}
        data-aos="zoom-in-up"
      >
        <div className="flex   ">
          <div className="w-5/12 pl-3 sm:pl-5 md:pl-7 xl:pl-20 pr-3 scroll_animate" data-aos="zoom-in">
            <div className="bg-white h-96 my-7  rounded-xl"></div>
          </div>
          <div className="w-7/12">
            <div
              className="text-start p-4 w-full sm:w-9/12 font-bold text-xl sm:text-2xl xl:text-4xl scroll_animate"
              data-aos="zoom-in-left"
            >
              <span>Webinar Event: Leveraging Technology to Reduce Post-Acute Care Re-hospitalizations</span>
            </div>
            <div className="text-start pl-4 w-10/12 md:w-8/12 scroll_animate" data-aos="zoom-in-left">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className="scroll_animate" data-aos="zoom-in-left">
               <Image src={webImg} alt="no image" /> 
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
