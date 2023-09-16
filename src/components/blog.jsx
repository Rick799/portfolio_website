import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import react from "../assets/React-Basics.avif";
import events from "../assets/DOMEvents.avif";
import status from "../assets/HTTP-Status-Codes.avif";
import tailwind from "../assets/tailwindCSS.avif";
import hooks from "../assets/ReactHooks.avif";
import canvas from "../assets/CanvasTag.avif";

function Blogs() {
  const blogs = [
    {
      id: 1,
      src: events,
      text: "DOM Events",
      link: "https://rajsarkar.hashnode.dev/dom-events",
    },
    {
      id: 2,
      src: react,
      text: "React Basics: A Beginner's Guide",
      link: "https://rajsarkar.hashnode.dev/react-basics-a-beginners-guide",
    },
    {
      id: 3,
      src: status,
      text: "HTTP Status Codes And SEO Impact",
      link: "https://rajsarkar.hashnode.dev/http-status-codes-and-seo-impact",
    },
    {
      id: 4,
      src: tailwind,
      text: "Install Tailwind CSS with Vite using React in 2 minutes",
      link: "https://rajsarkar.hashnode.dev/install-tailwind-css-with-vite-using-react-in-2-minutes",
    },
    {
      id: 5,
      src: hooks,
      text: "Exploring React Hooks:Prologue",
      link: "https://rajsarkar.hashnode.dev/exploring-react-hooks-prologue",
    },
    {
      id: 6,
      src: canvas,
      text: "HTML Canvas Tag",
      link: "https://rajsarkar.hashnode.dev/html-canvas-tag",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="blogs"
      className="text-center bg-gradient-to-b from-slate-800 to-black w-full text-white md:h-screen"
    >
      <div className=" p-4 mx-auto w-full h-full max-w-6xl flex flex-col justify-center ">
        <div className="py-10">
          <p className="text-4xl p-2 font-bold border-b-4 border-gray-500 inline">
            Blogs
          </p>
          <p data-aos="flip-down" className="py-6">
            Blogs I have written
          </p>
        </div>

        <div className="px-12 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogs.map(({ id, src, text, link }) => (
            <div
              data-aos="zoom-in-up"
              key={id}
              className=" rounded-lg shadow-md shadow-gray-600 cursor-pointer"
            >
              <div className="hover:scale-110 duration-300">
                <img className="rounded-md" src={src} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 opacity-0 transition-opacity flex justify-center items-center hover:opacity-100 ">
                  <h2 className="text-white text-lg tracking-widest mx-4 ">
                    {text}
                  </h2>
                </div>
              </div>
              <div className="text-center">
                <div data-aos="fade-up">
                  <button className="w-1/2 px-6 py-1 m-3 hover:scale-110 duration-300">
                    <a href={link} target="_blank">
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
