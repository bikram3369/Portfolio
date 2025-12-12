import React from "react";
import { projects } from "../../constants"; // Import the projects data

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-4"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">MY WORK</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of projects and applications I've built, demonstrating my skills and passion for development
        </p>
      </div>

      {/* Work Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - only visible on larger screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden lg:block"></div>

        {/* Project Entries */}
        {projects.map((project, index) => (
          <div key={project.id} className="mb-16 relative">
            {/* Timeline Circle - only on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-900 border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={project.image}
                alt={project.title}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  
                  {/* Project Image */}
                  <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-4">
                    <h5 className="font-medium text-white text-sm mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-full border border-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 flex-1 justify-center"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.webapp && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#8245ec] hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 flex-1 justify-center"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;