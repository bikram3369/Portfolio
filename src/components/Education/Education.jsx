import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line - only visible on larger screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden lg:block"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div key={edu.id} className="mb-16 relative">
            {/* Timeline Circle - only on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-900 border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10 hidden lg:flex">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  {/* Flex container for image and text */}
                  <div className="flex items-start space-x-4">
                    {/* School Logo/Image */}
                    <div className="flex-shrink-0 w-20 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Degree, School Name, and Date */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-300 mt-1">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-400 font-bold text-sm">
                      Grade: {edu.grade}
                    </p>
                    <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
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

export default Education;