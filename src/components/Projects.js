import React from 'react';

const projects = [
  {
    name: 'WeChat Chatbot',
    image: `${process.env.PUBLIC_URL}/chatbot.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    ],
    github: 'https://github.com/junhecui/chatbot',
  },
  {
    name: 'SiteSpark',
    image: `${process.env.PUBLIC_URL}/sitespark.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    ],
    github: 'https://github.com/junhecui/sitespark',
  },
  {
    name: 'PreMedTalk',
    image: `${process.env.PUBLIC_URL}/premedtalk.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    ],
    github: 'https://github.com/junhecui/premedtalk',
    logo: 'https://www.premedtalk.com',
    logoIcon: `${process.env.PUBLIC_URL}/premedtalk-icon.png`,
  },
  {
    name: 'Vita',
    image: `${process.env.PUBLIC_URL}/vita.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    ],
    github: 'https://github.com/jaydenpiao/vita',
    logo: 'https://devpost.com/software/vita-paxt8v',
    logoIcon: `${process.env.PUBLIC_URL}/devpost.svg`,
  },
  {
    name: 'AviHavoc',
    image: `${process.env.PUBLIC_URL}/avihavoc.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    ],
    github: 'https://github.com/junhecui/avihavoc',
    logo: 'https://devpost.com/software/avihavoc',
    logoIcon: `${process.env.PUBLIC_URL}/devpost.svg`,
  },
  {
    name: 'Budget App',
    image: `${process.env.PUBLIC_URL}/budget.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    ],
    github: 'https://github.com/junhecui/budget-app',
    logo: 'https://youtu.be/JloSne-92Ew',
    logoIcon: `${process.env.PUBLIC_URL}/youtube.png`,
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-primary">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.name} className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pt-[100%]">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src={project.image} alt={project.name} className="w h object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-50" />
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-900 bg-opacity-75 p-4">
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <div className="flex space-x-4 mb-12">
                {project.languages.map((icon, index) => (
                  <img key={index} src={icon} alt="Language Icon" className="h-10 w-10" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 md:gap-4">
                {project.skills && project.skills.map((icon, index) => (
                  <img key={index} src={icon} alt="Skill Icon" className="h-10 w-10" />
                ))}
              </div>
              <div className={`flex space-x-4 ${!project.logo && 'justify-center'}`}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white">
                  <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.74.5 12c0 5.08 3.29 9.38 7.88 10.89.58.1.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.21.7-3.89-1.54-3.89-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.28 3.4.98.1-.75.41-1.28.75-1.58-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.31 1.18-3.12-.12-.3-.51-1.52.11-3.16 0 0 .97-.31 3.18 1.2.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.2-1.51 3.18-1.2 3.18-1.2.63 1.64.24 2.86.12 3.16.74.81 1.18 1.85 1.18 3.12 0 4.45-2.7 5.43-5.27 5.72.42.36.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.29 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.26-5.24-11.5-12-11.5z"/>
                  </svg>
                </a>
                {project.logo && (
                  <a href={project.logo} target="_blank" rel="noopener noreferrer" className="text-white">
                    <img src={project.logoIcon} alt="Live Demo" className="h-10 w-10 fill-current" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;