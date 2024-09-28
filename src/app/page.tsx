import Navbar from "@/components/_partials/navbar/Navbar";
import { data } from "./data/Data";
import "@/app/css/home.css";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import Image from "next/image";

import cornerimg from "@/app/assets/box-icon-preview.png";

import webImg from "@/app/assets/SchutzenWebsite-000.png";
export default function Home() {
  return (
    <>
      <div className="dashboard rounded-b-[40px] sm:mx-12">
        <Navbar />
        <div className="w-3/4 md:w-3/5 mx-auto justify-center py-14">
          <div className="bg-[#000000] min-h-60 rounded-3xl text-center border-green-500">
            banner image or video to run
          </div>
          <div className="text-center mx-auto py-32 sm:py-36 md:py-40 lg:py-44">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">{data.home_h1_text1}</h1>
            <span className="block mx-auto max-w-xl ">
              <p>{data.home_p_text1}</p>
            </span>
          </div>
          <div className="justify-center flex mx-auto">
            <ReqDemoBtn />
          </div>
        </div>
      </div>

      <div className="flex justify-center min-h-fit sm:mt-14  ">
        <div className="w-full sm:w-4/6 h-fit md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[980px]">
          <div className="sm:flex h-full">
            <div className="sm:w-1/2 w-full flex flex-col h-full">
              <div className="p-4 flex-grow-[6]">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white  w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full ">
                      <div className="h-1/2  bg-black dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1 mt-3">
                        easy
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[5]">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-  mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-1/2 w-full flex flex-col h-full">
              <div className="p-4 flex-grow-[5]">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <h1>Easy to use</h1>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[6]">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black   dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:mx-12 xl:mx-0">
        <div className="flex w-full xl:w-5/6 ">
          <div className="load-more-banner w-full  rounded-3xl m-2 xl:mr-12 flex mt-11 ">
            <div className=" xl:w-1/2 h-auto  p-6 sm:p-0 dark:text-white pt-5 md:pt-14 xl:pt-36 ">
              <div>
                <h1 className="text-5xl font-bold pb-4">{data.home_h1_text2}</h1>
              </div>
              <div className="pb-4">
                <p>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries,
                  </span>
                </p>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-2">
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

                <div className="w-1/2 mr-2">
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
              <span className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] bg-clip-text text-transparent">
                {"Load More >>>"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black to-green-500 h-1 w-2/3 mx-auto rounded-full my-5"></div>

      <div className="text-center justify-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl py-2">Wireless Vital Signs Monitoring</h1>
        <div className="mx-auto text-center md:w-2/5 mt-3 px-6">
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
          </span>
        </div>
        <div>
          <div className="sm:mx-auto h-auto py-20 mx-2">
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto">
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
            </div>
            <div className="h-auto  mb-9 flex xl:w-3/5  justify-around  mx-auto">
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <div className="w-20 h-20 sm:w-36 sm:h-36 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-lg">
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-two h-auto pt-20 sm:px-15 md:px-25 mx-2 sm:mx-6 md:mx-12 rounded-2xl ">
        <div className="flex   ">
          <div className="w-5/12 pl-3 sm:pl-5 md:pl-7 xl:pl-20 pr-3">
            <div className="bg-white h-96 my-7  rounded-xl"></div>
          </div>
          <div className="w-7/12">
            <div className="text-start p-4 w-full sm:w-9/12 font-bold text-xl sm:text-2xl xl:text-4xl">
              <span>Webinar Event: Leveraging Technology to Reduce Post-Acute Care Re-hospitalizations</span>
            </div>
            <div className="text-start pl-4 w-10/12 md:w-8/12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div>
              <Image src={webImg} alt="no image" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex">
        <div className="w-24 sm:w-64 h-96 mx-auto relative">
          <div className="absolute right-0 w-[15px]">
            <Image src={cornerimg} alt="Description" layout="fixed" />
          </div>
          <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
            <div className="bg-black w-full h-full"></div>
          </div>
        </div>
        <div className="w-24 sm:w-64 h-96 mx-auto relative">
          <div className="absolute right-0 w-[15px]">
            <Image src={cornerimg} alt="Description" layout="fixed" />
          </div>
          <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
            <div className="bg-black w-full h-full"></div>
          </div>
        </div>
        <div className="w-24 sm:w-64 h-96 mx-auto relative">
          <div className="absolute right-0 w-[15px]">
            <Image src={cornerimg} alt="Description" layout="fixed" />
          </div>
          <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
            <div className="bg-black w-full h-full"></div>
          </div>
        </div>
        <div className="w-24 sm:w-64 h-96 mx-auto relative">
          <div className="absolute right-0 w-[15px]">
            <Image src={cornerimg} alt="Description" layout="fixed" />
          </div>
          <div className="absolute top-[14px] w-full h-full bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-[1px]">
            <div className="bg-black w-full h-full"></div>
          </div>
        </div>
      </div>
      
    </>
  );
}
