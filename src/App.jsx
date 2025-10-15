import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-[#212121]  text-white h-screen">
      <Navbar />
      <Hero/>
    </div>
  );
}
