import { useEffect, useState } from "react";
import {
  AiOutlineDatabase,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        data-aos="slide-left"
        className="md:hidden fixed top-[30%] z-10 bg-transparent"
      >
        <div className="flex flex-col ">
          <a
            href="main"
            className="bg-slate-100 flex items-center justify-between rounded-r-lg w-32 ml-[-90px] hover:ml-[5px] my-3 p-3 cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900"
          >
            Home
            <AiOutlineHome color="" size={20} />
          </a>
          <a
            href="#experience"
            className="bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3 cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900"
          >
            Experience
            <AiOutlineDatabase color="" size={20} />
          </a>
          <a
            href="#projects"
            className="bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3 cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900"
          >
            Projects
            <AiOutlineProject color="" size={20} />
          </a>
          <a
            href="#blogs"
            className="bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3 cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900"
          >
            Blogs
            <FaBlog color="" size={20} />
          </a>
          <a
            href="#contact"
            className="bg-slate-100 flex items-center justify-between rounded-r-lg  w-32  ml-[-90px] hover:ml-[5px] my-3 p-3 cursor-pointer shadow-md hover:shadow-slate-500 hover:scale-105 duration-500 border-r-2 border-slate-900"
          >
            Contact
            <AiOutlineMail color="" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
