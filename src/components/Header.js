import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
  <header className="bg-gray-800 text-white fixed w-full z-10 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <Link className="mx-4 cursor-pointer" to="about" smooth={true} duration={500}>About</Link>
        <Link className="mx-4 cursor-pointer" to="projects" smooth={true} duration={500}>Projects</Link>
        <Link className="mx-4 cursor-pointer" to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
