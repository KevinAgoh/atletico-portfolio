import './App.css';
import Bio from './components/Bio/Bio.tsx';
import Dates from './components/Dates/Dates.tsx';
import Hero from './components/Hero/Hero.tsx';
import Music from './components/Music/Music.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Selecta from './components/Selecta/Selecta.tsx';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Bio />
      <Music />
      <Selecta />
      <Dates />
    </div>
  );
}

export default App;
