import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  </header>
);

export default Header;
