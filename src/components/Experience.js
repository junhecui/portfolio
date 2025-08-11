import React from 'react';

const experiences = [
  {
    company: 'Marr Labs (YC W24)',
    position: 'Machine Learning Intern',
    duration: 'Jan 2025 – Aug 2025',
    location: 'Remote | San Francisco, CA',
    description: [
      'Developed an LLM-powered framework to classify live call outcomes for a top US mortgage lender, boosting disposition accuracy from 90% to 99.7% and cutting retrieval time by 25%',
      'Resolved 40+ bugs in prompt logic, graph-based routing, and tool invocation for LLM agents and RAG pipeline, improving LLM agent reliability for systems handling 20,000+ daily calls with a <1% error rate',
      'Used GPT-4 and Python Instructor library to evaluate multilingual AI voice agents for response accuracy and call latency',
      'Built and deployed CI pipelines with Docker and GitHub Actions to continuously test agents, doubling availability window and eliminating the requirement for manual runs'
    ],
    technologies: ['Python', 'LLM', 'LangChain', 'Docker', 'GitHub Actions', 'RAG Pipeline']
  },
  {
    company: 'UBC Computer Science',
    position: 'Machine Learning Teaching Assistant',
    duration: 'May 2025 – Present',
    location: 'Vancouver, BC',
    description: [
      'Assisting in teaching Applied Machine Learning to 100+ students per semester through concept tutorials and office hours',
      'Guided students using Python, scikit-learn and pandas to build machine learning models such as SVMs, Random Forests, and XGBoost, as well as visualization tools such as matplotlib and SHAP'
    ],
    technologies: ['Python', 'scikit-learn', 'pandas', 'matplotlib', 'SHAP', 'Teaching']
  },
  {
    company: 'UBC MINT (Multifaced Innovations in Neurotechnology)',
    position: 'Deep Learning Engineer',
    duration: 'Sep 2024 – Present',
    location: 'Vancouver, BC',
    description: [
      'Adapting an 86% accuracy ECoG LightGBM model to EEG via transfer learning, targeting four-class motor imagery',
      'Built a 95.1% F1 score real-time EEG eye-blink detection model to ease the pre-processing of EEG data'
    ],
    technologies: ['Python', 'BCI']
  }
];

const Experience = () => (
  <section id="experience" className="py-16 bg-gradient-to-br from-white via-slate-50 to-blue-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.position}</h3>
                <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                <p className="text-slate-600">{exp.location}</p>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0 bg-slate-100 px-4 py-2 rounded-full">{exp.duration}</span>
            </div>
            <ul className="list-none space-y-3 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-slate-700 flex items-start text-center md:text-left">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
