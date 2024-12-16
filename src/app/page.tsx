import { homePageData } from "./data/Data";
import "@/app/css/home.css";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import Image from "next/image";

import homeBg from "@/app/assets/home-bg.png";



import webImg from "@/app/assets/SchutzenWebsite-000.png";
export default function Home() {
  return (
    <>
      <div
        className="dashboard rounded-b-[40px] mx:0 sm:mx-12 overflow-x-hidden"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        
        <div className="w-3/4 md:w-3/5 mx-auto justify-center py-14">
          <div className="bg-[#000000] min-h-72 rounded-3xl text-center border-green-500 flex items-center justify-center">
            banner image or video to run
          </div>

          <div className="text-center mx-auto py-32 sm:py-36 md:py-40 lg:py-44">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
              {homePageData.banner.home_h1_text1}
            </h1>
            <span className="block mx-auto max-w-xl ">
              <p>{homePageData.banner.home_p_text1}</p>
            </span>
          </div>
          <div className="justify-center flex mx-auto">
            <ReqDemoBtn />
          </div>
        </div>
      </div>

      <div className="flex justify-center min-h-fit sm:mt-14 overflow-x-hidden">
        <div className="w-full sm:w-4/6 h-fit md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[980px]">
          <div className="sm:flex h-full">
            <div className="sm:w-1/2 w-full flex flex-col h-full">
              <div className="p-4 flex-grow-[6]" data-aos="fade-right">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white  w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full ">
                      <div className="h-1/2  bg-black dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1 mt-3">
                        <h1>{homePageData.whyChooseUs.title_1}</h1>
                        <p>{homePageData.whyChooseUs.desc_1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[5] " data-aos="fade-right">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-  mt-3">
                        <h1>{homePageData.whyChooseUs.title_2}</h1>
                        <p>{homePageData.whyChooseUs.desc_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-1/2 w-full flex flex-col h-full" data-aos="fade-left">
              <div className="p-4 flex-grow-[5]">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <h1>{homePageData.whyChooseUs.title_3}</h1>
                        <p>{homePageData.whyChooseUs.desc_3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[6] " data-aos="fade-left">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <h1>{homePageData.whyChooseUs.title_4}</h1>
                        <p>{homePageData.whyChooseUs.desc_4}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-end sm:mx-12 xl:mx-0 overflow-x-hidden" data-aos="zoom-in-up">
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
            <div className=" md:w-1/2 h-auto  p-6 sm:p-0 dark:text-white pt-5 md:pt-14 xl:pt-24 ">
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
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="stripe_line h-1 w-2/3 mx-auto rounded-full my-5 scroll_animate overflow-x-hidden"
        data-aos="fade-right"
      ></div> */}

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
      </div> */}

      {/* <div
        className=" h-auto pt-20 sm:px-15 md:px-25 mx-2 sm:mx-6 md:mx-12 rounded-2xl scroll_animate overflow-x-hidden "
        style={{
          backgroundImage: `url(${homeContent2.src})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
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

    
      
    </>
  );
}
