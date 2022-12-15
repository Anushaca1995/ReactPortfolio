
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <div className="app">
       <NavBar className="app__nav"/>
       <h1 className="app__header">Software Developer Trainee</h1>
       <Skills/>
       <Projects/>
       <About/>
    </div>
  );
}

export default App;
