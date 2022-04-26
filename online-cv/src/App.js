import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Skills from './Components/Skills/Skills';
import Hr from './Components/Hr/Hr';
import Portfolio from './Components/Portfolio/Portfolio';
import Education from './Components/Education/Education';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Main></Main>
    <Hr/>
    <Skills></Skills>
    <Hr/>
    <Portfolio></Portfolio>
    <Hr/>
    <Education></Education>
    </>
  );
}

export default App;
