import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Acheivement from './pages/Acheivement';
import Header from './Header';
import { themes } from "./theme/schema";
import scrollAnimation from "./style/scrollAnimation";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    scrollAnimation();
  }, []);


  return (
    <div className="App">
      <Header></Header>
      <Home pageTheme={themes.data.white} ></Home>
      <About pageTheme={themes.data.black} ></About>
      <WorkExperience pageTheme={themes.data.white}></WorkExperience>
      <Skills pageTheme={themes.data.black} ></Skills>
      <Projects pageTheme={themes.data.white} ></Projects>
      <Acheivement pageTheme={themes.data.black} ></Acheivement>
      <Contact pageTheme={themes.data.black} ></Contact>
    </div>

  );
}

export default App;
