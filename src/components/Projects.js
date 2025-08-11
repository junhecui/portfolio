import React from 'react';

const projects = [
  {
    name: 'Debug.Me',
    description: 'A machine learning-powered debugging assistant that learns from your coding mistakes and provides personalized debugging guidance.',
    image: `${process.env.PUBLIC_URL}/debugme.jpg`,
    github: 'https://github.com/junhecui/debug-me',
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    ]
  },
  {
    name: 'WeChat Assistant Chatbot',
    image: `${process.env.PUBLIC_URL}/chatbot.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg'
    ],
    github: 'https://github.com/junhecui/wechat-chatbot',
    description: 'Automatic WeChat chatbot using Wechaty library with vectorized queries and tuned language model for FAQ in English and Chinese'
  },
  {
    name: 'SiteSpark',
    image: `${process.env.PUBLIC_URL}/sitespark.png`,
    languages: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    ],
    github: 'https://github.com/junhecui/sitespark',
    description: 'Interactive low-code website builder enabling web designers to create websites without coding expertise, integrated with Neo4j graph database'
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
    github: 'https://github.com/jaydenpiao/Vita',
    logo: 'https://devpost.com/software/vita-paxt8v',
    logoIcon: `${process.env.PUBLIC_URL}/devpost.svg`,
    description: 'ECG monitor to detect patient heart attacks using MappedIn SDK and TensorFlow model with 93% CNN accuracy'
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
    description: 'Educational platform for pre-medical students with interactive learning modules'
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
    description: 'Aviation safety simulation game with real-time physics and multiplayer support'
  }
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className={`w-full h-48 object-cover ${project.name === 'PreMedTalk' || project.name === 'Avihavoc' ? 'pt-17' : ''}`}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{project.name}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.languages.map((lang, idx) => (
                  <img key={idx} src={lang} alt="Language" className="h-8 w-8" />
                ))}
              </div>
              <div className="flex gap-3 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-5 w-5 mr-2" />
                  View Project
                </a>
                {project.logo && (
                  <a
                    href={project.logo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <img src={project.logoIcon} alt="External Link" className="h-5 w-5 mr-2" />
                    {project.logo.includes('devpost') ? 'DevPost' :
                     project.logo.includes('youtu') ? 'Demo' : 'Live Demo'}
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