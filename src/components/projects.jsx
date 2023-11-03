import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import accordion from "../assets/Accordion.png";
import birthday from "../assets/Birthday.png";
import lorem from "../assets/Lorem.png";
import restaurant from "../assets/Restaurant.png";
import tour from "../assets/Tours.png";
import review from "../assets/Review.png";

function Projects() {
  // Data for project entries
  const portfolios = [
    {
      id: 1,
      src: birthday,
      text: "Birthday Reminder",
    },
    {
      id: 2,
      src: accordion,
      text: "Accordion Project",
    },
    {
      id: 3,
      src: lorem,
      text: "Paragraph Generator",
    },
    {
      id: 4,
      src: restaurant,
      text: "Restaurant Menu",
    },
    {
      id: 5,
      src: tour,
      text: "Tours Project",
    },
    {
      id: 6,
      src: review,
      text: "Review Project",
    },
  ];

  useEffect(() => {
    // Initialize AOS library with a fixed duration
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="projects"
      className=" text-center bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen"
    >
      <div className="p-4 mx-auto w-full h-full max-w-6xl flex flex-col justify-center ">
        <div className="py-10">
          <p className="text-4xl p-2 font-bold border-b-4 border-gray-500 inline">
            Projects
          </p>
          <p data-aos="flip-down" className="py-6">
            Projects I have worked on
          </p>
        </div>

        <div className="px-12 md:px-0 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {portfolios.map(({ id, src, text }) => (
            <div
              data-aos="zoom-out-down"
              key={id}
              className=" rounded-lg shadow-md shadow-gray-600 cursor-pointer"
            >
              <div className="hover:scale-110 duration-300">
                <img className="h-40 rounded-md  " src={src} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity flex justify-center items-center hover:opacity-100 ">
                  <h2 className="text-white text-lg tracking-widest ">
                    {text}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div data-aos="slide-right">
                  <button className=" px-6 py-1 m-3 hover:scale-110 duration-300 ">
                    Demo
                  </button>
                </div>
                <div data-aos="slide-left">
                  <button className=" px-6 py-1 m-3 hover:scale-110 duration-300 ">
                    Code
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

export default Projects;
