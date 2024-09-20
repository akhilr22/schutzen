import "./navbar.css";
import Image from "next/image";
import schutzenImg from '@/app/assets/schutzen-img.png';
export default function Navbar() {
  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="nav-icon">
      <Image
        src={schutzenImg}
        alt="Schutzen Logo"
        width={150}
        height={50} // Adjust these values as needed
        priority // Optional: gives priority to loading this image
      />
      </div>

      {/* Centered nav items */}
      <div className="nav-list">
        <ul >
          <li >
            <span>Home</span>
          </li>
          <li>
            <span>Solutions</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Careers</span>
          </li>
          <li>
            <span>Contact us</span>
          </li>
        </ul>
      </div>

      <div className="demo-btn">
        <a>Request Demo</a>
      </div>
    </div>
  );
}
