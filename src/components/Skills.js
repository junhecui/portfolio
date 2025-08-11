import React from 'react';

const skills = [
  // Languages (as listed in resume)
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },

  // Technologies (as listed in resume)
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'LangChain', icon: 'https://python.langchain.com/img/favicon.ico' },
  { name: 'WandB', icon: 'https://wandb.ai/favicon.ico' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Neo4j', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
];

const Skills = () => (
  <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-slate-100 hover:border-blue-200">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-4">
              <img src={skill.icon} alt={skill.name} className="h-16 w-16" />
            </div>
            <p className="text-sm font-semibold text-center text-slate-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;