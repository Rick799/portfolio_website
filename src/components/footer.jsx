import "aos/dist/aos.css";

const Footer = () => {
  // Get the current year for copyright information
  let date = new Date();
  let copyrightDate = date.getFullYear();
  return (
    <div
      data-aos=""
      className="bg-gradient-to-b from-slate-800 to-black py-6 border-t border-slate-400 border-slate-900 tracking-widest "
    >
      <div className="text-xs sm:text-base text-center text-white flex justify-around">
        <h2>Copyright &copy; {copyrightDate}</h2>
        <h2>Rajarshi Sarkar</h2>
        <h2>All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
