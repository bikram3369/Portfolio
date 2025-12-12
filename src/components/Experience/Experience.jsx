import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - only visible on larger screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden lg:block"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className="mb-16 relative">
            {/* Timeline Circle - only on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-900 border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  {/* Flex container for image and text */}
                  <div className="flex items-start space-x-4">
                    {/* Company Logo/Image */}
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Role, Company Name, and Date */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white truncate">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm text-gray-300 truncate">
                        {experience.company}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {experience.desc}
                  </p>
                  
                  <div className="mt-4">
                    <h5 className="font-medium text-white text-sm mb-2">Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-full border border-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;