import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">
       <NavBar className="app__nav"/>
       <h1 className="app__header">Software Developer Trainee</h1>
       <Skills/>
      
    </div>
  );
}

export default App;
