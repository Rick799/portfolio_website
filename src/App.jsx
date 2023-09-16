import Blogs from "./components/blog";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Projects from "./components/projects";
import Sidenav from "./components/sidenav";

function App() {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Sidenav />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
