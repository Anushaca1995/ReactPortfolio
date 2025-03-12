
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import GetInTouch from './components/GetInTouch/GetInTouch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route path="*" element={<><NavBar className="app__nav"/><h1 className="app__header">Seasoned Software Developer</h1><Skills/><Projects/><About/><GetInTouch/></>} />
        <Route path="/skills" element={<><NavBar className="app__nav"/><Skills/></>} />
        <Route path="/projects" element={<><NavBar className="app__nav"/><Projects/></>} />
        <Route path="/about" element={<><NavBar className="app__nav"/><About/></>} />
        <Route path="/getInTouch" element={<><NavBar className="app__nav"/><GetInTouch/></>} />
       </Routes>
       </Router>   
    </div>
  );
}

export default App;
