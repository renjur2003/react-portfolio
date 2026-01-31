import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { StarryBackground } from "./components/StarryBackground";
import { AnimatedBackground } from "./components/AnimatedBackground";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <StarryBackground />
        <AnimatedBackground />

        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
