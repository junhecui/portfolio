import React from 'react';

const Intro = () => (
  <section id="intro" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center min-h-screen">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Jun He Cui"
            className="relative h-auto w-3/4 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
          Hello, I'm Jun He Cui!
        </h1>
        <p className="text-xl mb-6 text-indigo-600 font-semibold">Machine Learning Intern & Computer Science Student @ UBC</p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://github.com/junhecui" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <div className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8"/>
            </div>
          </a>
          <a href="https://linkedin.com/in/junhecui" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <div className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-8 w-8"/>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/19jNCxDkffC_aO3D8CEvggGwOG01BAcFH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <div className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <svg className="h-8 w-8" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.4-4.5 1.2z" fill="#00832d"/>
                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.4 4.5-1.2z" fill="#2684fc"/>
                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
              </svg>
            </div>
          </a>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">About Me</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          I'm a passionate Computer Science student at UBC with a strong focus on Machine Learning and AI. Currently interning at Marr Labs (YC W24) as a Machine Learning Intern, where I'm developing LLM-powered frameworks and improving AI agent reliability for systems handling 20,000+ daily calls.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          My technical expertise spans across machine learning, deep learning, and full-stack development. I'm actively involved in research at UBC MINT, working on EEG signal processing and transfer learning. I also serve as a Teaching Assistant for Applied Machine Learning, helping 100+ students master ML concepts and tools.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;