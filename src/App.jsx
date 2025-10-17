import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-[#212121]  text-white h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}
