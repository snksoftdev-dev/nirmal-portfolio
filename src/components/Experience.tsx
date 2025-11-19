import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Enspirit Technology Services Pvt Ltd",
      previousName: "(Formerly EnterPi)",
      position: "Software Developer",
      duration: "Jul 2023 – Present",
      location: "Hyderabad",
      description: "Leading frontend development for multiple projects in eCommerce and health monitoring domains.",
      achievements: [
        "Developed responsive UI components using Next.js and Chakra UI for Gear Launch (POD eCommerce)",
        "Built health monitoring features for GritWell using Styled Components, React, Redux Toolkit",
        "Integrated REST APIs and implemented comprehensive state management solutions",
        "Wrote unit tests using Jest & React Testing Library ensuring code quality and reliability"
      ],
      technologies: ["Next.js", "React.js", "Chakra UI", "Styled Components", "Redux Toolkit", "Jest", "RTL"]
    },
    {
      company: "Bees Software Solutions Pvt. Ltd",
      position: "Software Developer",
      duration: "Mar 2020 – Jun 2023",
      location: "Hyderabad",
      description: "Developed and maintained multiple web applications across education and valuation domains.",
      achievements: [
        "Developed and maintained front-end features for Digital Valuation System using React.js and SQL Server",
        "Built education domain solutions (Cloudilya, BeeSERP) using .NET MVC and Bootstrap",
        "Integrated Paytm payment gateway and handled complex API integrations",
        "Managed deployment and maintenance on IIS web server ensuring optimal performance"
      ],
      technologies: ["React.js", ".NET MVC", "Bootstrap", "Material UI", "SQL Server", "jQuery", "AJAX", "VB.NET"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto lg:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-100 ${
                index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
              }`}>
                <div className="flex items-center gap-2 text-blue-600 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {exp.position}
                </h3>
                
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {exp.company}
                  {exp.previousName && (
                    <span className="text-sm text-gray-500 block">
                      {exp.previousName}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>

                <p className="text-gray-600 mb-4">
                  {exp.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Achievements:</h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
