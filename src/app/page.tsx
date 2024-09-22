import Navbar from "@/components/_partials/navbar/Navbar";
import Banner from "@/components/ui/home-banner/Banner";
import { data } from "./data/Data";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";

export default function Home() {
  return (
    <>
    <div className="min-h-[118vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#040b2b] via-[#619b28] to-[#3bc2d6] rounded-b-3xl sm:mx-7 ">
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

      <div className="h-60 bg-lime-600">

      </div>
    </>
  );
}
