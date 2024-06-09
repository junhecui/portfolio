import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-center py-4">
    <div className="container mx-auto">
      <p className="text-sm text-black">
        &copy; {new Date().getFullYear()} Jun He Cui. All Rights Reserved.
      </p>
      <div className="flex justify-center mt-2">
        <a href="https://github.com/junhecui" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6"/>
        </a>
        <a href="https://linkedin.com/in/junhecui" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-6 w-6"/>
        </a>
        {}
      </div>
    </div>
  </footer>
);

export default Footer;