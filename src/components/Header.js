import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jun He Cui</h1>
          <nav className="hidden md:flex">
            <Link className="mx-4 cursor-pointer text-black hover:text-blue-600 transition-colors" to="intro" smooth={true} duration={500}>About</Link>
            <Link className="mx-4 cursor-pointer text-black hover:text-blue-600 transition-colors" to="experience" smooth={true} duration={500}>Experience</Link>
            <Link className="mx-4 cursor-pointer text-black hover:text-blue-600 transition-colors" to="education" smooth={true} duration={500}>Education</Link>
            <Link className="mx-4 cursor-pointer text-black hover:text-blue-600 transition-colors" to="skills" smooth={true} duration={500}>Skills</Link>
            <Link className="mx-4 cursor-pointer text-black hover:text-blue-600 transition-colors" to="projects" smooth={true} duration={500}>Projects</Link>
          </nav>
          <button 
            onClick={toggleSideNav}
            className="md:hidden text-black hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Side Navigation Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Navigation</h2>
            <button 
              onClick={closeSideNav}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-4">
            <Link 
              className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer" 
              to="intro" 
              smooth={true} 
              duration={500}
              onClick={closeSideNav}
            >
              About
            </Link>
            <Link 
              className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer" 
              to="experience" 
              smooth={true} 
              duration={500}
              onClick={closeSideNav}
            >
              Experience
            </Link>
            <Link 
              className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer" 
              to="education" 
              smooth={true} 
              duration={500}
              onClick={closeSideNav}
            >
              Education
            </Link>
            <Link 
              className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer" 
              to="skills" 
              smooth={true} 
              duration={500}
              onClick={closeSideNav}
            >
              Skills
            </Link>
            <Link 
              className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer" 
              to="projects" 
              smooth={true} 
              duration={500}
              onClick={closeSideNav}
            >
              Projects
            </Link>
            <a href="https://drive.google.com/file/d/19jNCxDkffC_aO3D8CEvggGwOG01BAcFH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer">Resume</a>
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/junhecui" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8"/>
              </a>
              <a href="https://linkedin.com/in/junhecui" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-8 w-8"/>
              </a>
            </div>
            <a 
              href="/Jun He Cui Resume.pdf" 
              download 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSideNavOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSideNav}
        />
      )}
    </>
  );
};

export default Header;