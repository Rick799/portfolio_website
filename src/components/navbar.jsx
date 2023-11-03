// Import required icons for the navbar
import {
  AiOutlineDatabase,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-10 border-b border-slate-400 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div data-aos="slide-down" className="hidden md:block ">
        <div className="flex justify-around font-medium w-10/12 xl:w-9/12 mx-auto">
          <a
            href="main"
            className="flex w-28 items-center justify-evenly  p-3 cursor-pointer hover:scale-105 duration-300"
          >
            <AiOutlineHome color="" size={20} />
            Home
          </a>
          <a
            href="#experience"
            className="flex w-32 items-center justify-evenly p-3 cursor-pointer hover:scale-105 duration-500"
          >
            <AiOutlineDatabase color="" size={20} />
            Experience
          </a>
          <a
            href="#projects"
            className="flex w-28 items-center justify-evenly p-3 cursor-pointer hover:scale-105 duration-500"
          >
            <AiOutlineProject color="" size={20} />
            Projects
          </a>
          <a
            href="#blogs"
            className="flex w-28 items-center justify-evenly p-3 cursor-pointer hover:scale-105 duration-500"
          >
            <FaBlog color="" size={20} />
            Blogs
          </a>
          <a
            href="#contact"
            className="flex w-28 items-center justify-evenly p-3 cursor-pointer hover:scale-105 duration-500"
          >
            <AiOutlineMail color="" size={20} />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
