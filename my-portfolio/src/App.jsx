import{ useState } from 'react'; 
import './App.css'
import { LoadingScreen } from './components/loadingScreen';
import { Navbar } from './components/Navbar';   
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/home';
import { About } from './components/sections/about';
import { Project} from './components/sections/Projects';
import { Contact } from './components/sections/contact';

import "./index.css";
function App() {
const [isLoaded, setIsLoaded] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
<div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  <Home/>
  <About />
  <Project/>
  <Contact />
</div>

    </>
  );
}

export default App
