import "./navbar.css";
import Image from "next/image";
import schutzenImg from "@/app/assets/schutzen-img.png";
import schutzenLogo from "@/app/assets/schutzen-logo.png";
import MenuBtn from "@/components/buttons/MenuBtn";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
export default function Navbar() {
  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="nav-icon">
        <Image
          className="nav-logo  hidden sm:block"
          src={schutzenImg}
          alt="Schutzen Logo"
          width={150}
          height={50} // Adjust these values as needed
          priority // Optional: gives priority to loading this image
        />
        <Image
          className="nav-logo-sm block sm:hidden"
          src={schutzenLogo}
          alt="Schutzen Logo"
          width={40}
          height={50} // Adjust these values as needed
          priority // Optional: gives priority to loading this image
        />
      </div>

      {/* Centered nav items */}
      <div className="nav-list">
        <div className="gradient-border">
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Solutions</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li className="hidden sm:block">
              <span>Careers</span>
            </li>
            <li className="hidden sm:block">
              <span>Contact us</span>
            </li>
          </ul>
        </div>
      </div>

      <ReqDemoBtn/>

      <MenuBtn />
    </div>
  );
}
