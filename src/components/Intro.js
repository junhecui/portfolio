import React from 'react';

const Intro = () => (
  <section id="intro" className="py-16 bg-primary flex items-center">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Jun He"
          className="h-auto w-3/4 object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">Hello, I'm Jun He!</h1>
        <p className="text-lg mb-4">Computer Science Student @ UBC</p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <a href="https://github.com/junhecui" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-10 w-10"/>
          </a>
          <a href="https://linkedin.com/in/junhecui" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-10 w-10"/>
          </a>
        </div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I'm a full stack web developer and a third-year Computer Science student at UBC! My current interests include Natural Language Processing, Machine Learning, and Unity Game Development; in my free time, I am likely bouldering, surfing, snowboarding, or listening to some music!
        </p>
      </div>
    </div>
  </section>
);

export default Intro;