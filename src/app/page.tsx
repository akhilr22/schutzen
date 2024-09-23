import Navbar from "@/components/_partials/navbar/Navbar";
import { data } from "./data/Data";

export default function Home() {
  return (
    <>
      <div className="min-h-[118vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#040b2b] via-[#619b28] to-[#3bc2d6] rounded-b-[80px] sm:mx-7 ">
        <Navbar />
        <div className="w-3/4 md:w-3/5 mx-auto justify-center py-14">
          <div className="bg-[#1c9ca5] min-h-60 rounded-3xl text-center">banner image or video to run</div>
          <div className="text-center mx-auto py-32 sm:py-36 md:py-40 lg:py-44">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">{data.home_h1_text1}</h1>
            <span className="block mx-auto max-w-xl ">
              <p>{data.home_p_text1}</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center min-h-screen sm:mt-14">
        <div className="w-full sm:w-5/6 h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[980px]">
          <div className="sm:flex h-full">
            <div className="sm:w-1/2 w-full flex flex-col h-full">
              <div className="p-4 flex-grow-[6]">
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black flex-1">screen</div>
                      <div className="h-1/2 flex-1 mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[5]">
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black flex-1">screen</div>
                      <div className="h-1/2 flex-  mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's
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
                  <div className="bg-[#fefaf5] w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black flex-1">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow-[6]">
                <div className="p-[2px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full">
                  <div className="bg-[#fefaf5] w-full h-full rounded-[26px] p-4 flex flex-col">
                    <div className="flex flex-col h-full">
                      <div className="h-1/2 bg-black flex-1">screen</div>
                      <div className="h-1/2 flex-1  mt-3">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's
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
    </>
  );
}
