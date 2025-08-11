import React from 'react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'The University of British Columbia',
    duration: 'Sep 2023 – May 2027',
    location: 'Vancouver, BC',
    relevantCourses: [
      'Machine Learning (CPSC 330)',
      'Data Structures and Algorithms (CPSC 221)',
      'Object-Oriented Programming (CPSC 210)',
      'Linear Algebra (MATH 221)',
      'Computer Systems (CPSC 213)'
    ]
  }
];

const Education = () => (
  <section id="education" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-gradient-to-b from-indigo-500 to-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                <p className="text-xl text-indigo-600 font-semibold mb-1">{edu.school}</p>
                <p className="text-slate-600">{edu.location}</p>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0 bg-indigo-100 px-4 py-2 rounded-full">{edu.duration}</span>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3 text-center md:text-left">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.relevantCourses.map((course, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-indigo-500 mr-3">•</span>
                    <span className="text-slate-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
