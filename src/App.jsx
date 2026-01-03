import Particle from "./pages/Particle";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import {BrowserRouter} from "react-router-dom"
import {HashRouter} from "react-router-dom"

function App(){
  return(
    <>
    <HashRouter>
    <Particle/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </HashRouter>
    


    </>
  ) 
};

export default App;