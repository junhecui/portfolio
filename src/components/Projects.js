import React from 'react';

const Projects = () => (
  <section id="projects" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p>Project description goes here.</p>
          </div>
        </div>
        {/* Repeat for more projects */}
      </div>
    </div>
  </section>
);

export default Projects;
