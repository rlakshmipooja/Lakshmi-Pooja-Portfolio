import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import About from './components/About/About';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
