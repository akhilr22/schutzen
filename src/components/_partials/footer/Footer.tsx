import Image from "next/image";
import React from "react";
import schutzenImg from "@/app/assets/schutzen-img.png";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import "@/components/_partials/footer/footer.css";
import facebookImg from "@/app/assets/facebook.png";
import twitter from "@/app/assets/twitter.png";
import youtube from "@/app/assets/youtube.png";
import insta from "@/app/assets/instagram.png";
import footerBg from "@/app/assets/footer-bg.png";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className="mt-48">
      <div
        className="bg-cover bg-center "
        style={{
          backgroundImage: `url(${footerBg.src})`,

          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="footer-bottom">
          {/* Logo on the left */}
          <div className="nav-icon">
            <Image
              className="nav-logo hidden sm:block"
              src={schutzenImg}
              alt="Schutzen Logo"
              width={280}
              height={80}
              priority
            />
            <Image
              className="nav-logo-sm block sm:hidden"
              src={schutzenImg}
              alt="Schutzen Logo"
              width={150}
              height={50}
              priority
            />
          </div>

          {/* Centered nav items */}
          <div className="footer-nav-list">
            <div className="">
              <ul>
                <li>
                  <Link href="/">
                    {" "}
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <span>Solutions</span>
                </li>
                <li>
                 <Link href={'/about'}> <span>About</span> </Link>
                </li>
                <li>
                < Link href={'/careers'}>  <span>Careers</span></Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span>
                      Contact <span className="hidden custom-md:inline ">us</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-36 ml-28">
            <ReqDemoBtn />
          </div>
        </div>
        <div
          className="stripe_line mx-auto rounded-full my-5 scroll_animate overflow-x-hidden h-[2px] w-2/3"
          data-aos="fade-right"
        ></div>

        <div className="flex justify-center gap-5 h-20">
          <Image src={facebookImg} alt="Schutzen Logo" width={280} height={80} priority className="w-6 h-8" />
          <Image src={twitter} alt="Schutzen Logo" width={280} height={80} priority className="w-6 h-7 pt-1" />
          <Image src={youtube} alt="Schutzen Logo" width={280} height={80} priority className="w-6 h-9 pt-2" />
          <Image src={insta} alt="Schutzen Logo" width={280} height={80} priority className="w-6 h-7 pt-2" />
        </div>
      </div>
    </div>
  );
};
