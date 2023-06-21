import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative font-inter overflow-x-hidden">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Hero />
      <Section2 />
      <About />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
