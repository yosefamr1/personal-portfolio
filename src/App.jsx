import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#171717] via-[#1f1f1f] to-[#0d0d0d]  text-white min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}
