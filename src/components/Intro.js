import React from 'react';

const Intro = () => (
  <section id="intro" className="py-16 bg-primary flex items-center">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
      <div className="mb-4 md:mb-0 md:mr-8">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Your Name"
          className="rounded-full h-32 w-32"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">Hello, I'm Jun He!</h1>
        <p className="text-lg mb-4">Computer Science Student @ UBC</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/junhecui" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6"/>
          </a>
          <a href="https://linkedin.com/in/junhecui" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-6 w-6"/>
          </a>
          {}
        </div>
      </div>
    </div>
  </section>
);

export default Intro;