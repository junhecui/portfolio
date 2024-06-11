import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header className="bg-primary text-black fixed w-full z-10 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <Link className="mx-4 cursor-pointer text-black" to="about" smooth={true} duration={500}>About</Link>
        <Link className="mx-4 cursor-pointer text-black" to="skills" smooth={true} duration={500}>Skills</Link>
        <Link className="mx-4 cursor-pointer text-black" to="projects" smooth={true} duration={500}>Projects</Link>
      </nav>
    </div>
  </header>
);

export default Header;