import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS for animations with a fixed duration
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="contact"
      className=" bg-gradient-to-b from-black to-slate-800 min-h-screen max-h-full w-full flex-col flex items-center justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="py-10 text-center font-bold">
          <h1 className=" sm:text-4xl text-3xl  border-b-4 border-gray-500 text-slate-100 inline">
            Contact
          </h1>
        </div>
        <div className="mt-8 w-full md:w-3/4 md:mx-auto">
          <form
            action="https://getform.io/f/53b7f828-f227-44df-aad3-59342b38081d"
            method="POST"
          >
            <input
              data-aos="slide-down"
              data-aos-easing="ease-in-sine"
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
              className="w-full p-2 rounded-md mb-4 focus:outline-yellow-400"
              required
            />
            <input
              data-aos="slide-down"
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              className="w-full p-2 rounded-md text-base mb-4 focus:outline-yellow-400"
              required
            />
            <input
              data-aos="slide-down"
              type="text"
              placeholder="Enter Your Subject"
              name="subject"
              className="w-full p-2 rounded-md text-base mb-4 focus:outline-yellow-400"
              required
            />
            <textarea
              data-aos="slide-down"
              name="message"
              className="w-full p-2 rounded-md text-base mb-4 h-40 resize-none focus:outline-yellow-400"
              required
              placeholder="Enter Your Message"
            ></textarea>
            <button
              data-aos="zoom-out-down"
              type="submit"
              className="w-full p-2 rounded-md bg-yellow-400 text-slate-900 text-lg font-bold border-2 border-yellow-500 hover:bg-white cursor-pointer duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
