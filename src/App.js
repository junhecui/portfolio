import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './tailwind.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
