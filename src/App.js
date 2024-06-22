import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './tailwind.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
