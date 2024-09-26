import Navbar from "@/components/_partials/navbar/Navbar";
import { data } from "./data/Data";

export default function Home() {
  return (
    <>
      <div className=" bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#53d3cc] via-[#61a51d] to-[#000000] rounded-b-[40px] sm:mx-12">
        <Navbar />
        <div className="w-3/4 md:w-3/5 mx-auto justify-center py-14">
          <div className="bg-[#2ea666] min-h-60 rounded-3xl text-center">banner image or video to run</div>
          <div className="text-center mx-auto py-32 sm:py-36 md:py-40 lg:py-44">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">{data.home_h1_text1}</h1>
            <span className="block mx-auto max-w-xl ">
              <p>{data.home_p_text1}</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center min-h-fit sm:mt-14  ">
        <div className="w-full sm:w-4/6 h-fit md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[980px]">
          <div className="sm:flex h-full">
            <div className="sm:w-1/2 w-full flex flex-col h-full">
              <div className="p-4 flex-grow-[6]">
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white  w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full ">
                      <div className="h-1/2  bg-black dark:bg-[#171616] flex-1 rounded-md p-20 sm:p-0">screen</div>
                      <div className="h-1/2 flex-1 mt-3">
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
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
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
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
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
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
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
          <div className="w-full  rounded-3xl bg-gradient-to-r from-[#000000] to-[#3bc2d6] m-2 xl:mr-12 flex  ">
            <div className=" xl:w-1/2 h-full  p-6 dark:text-white pt-44 ">
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
        <h1 className="font-bold sm:text-xl md:text-2xl xl:text-4xl py-2">Wireless Vital Signs Monitoring</h1>
        <div className="mx-auto text-center w-1/3 mt-3">
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
          </span>
        </div>

        <div>
          <div className=" min-h-4 min-w-4 mx-auto">



          </div>
        </div>
      </div>
    </>
  );
}
