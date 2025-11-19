import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "MCA",
      fullDegree: "Master of Computer Applications",
      institution: "Mother Teresa PG College",
      location: "Hyderabad",
      duration: "2009 – 2012",
      percentage: "69.9%",
      description: "Comprehensive program covering advanced computer science concepts, software development, and system analysis.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "B.Sc (M.P.C)",
      fullDegree: "Bachelor of Science - Mathematics, Physics, Chemistry",
      institution: "Shalivahana Degree College",
      location: "Hyderabad",
      duration: "2005 – 2008",
      percentage: "60%",
      description: "Foundation in mathematical and scientific principles with focus on analytical thinking.",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Intermediate (M.P.C)",
      fullDegree: "Intermediate - Mathematics, Physics, Chemistry",
      institution: "Sai Goutami Junior College",
      location: "Hyderabad",
      duration: "2002 – 2004",
      percentage: "62.3%",
      description: "Higher secondary education with specialization in science and mathematics.",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "SSC",
      fullDegree: "Secondary School Certificate",
      institution: "Siddartha High School",
      location: "Hyderabad",
      duration: "2002",
      percentage: "81.3%",
      description: "Secondary education with strong academic performance and foundation building.",
      icon: <Award className="w-6 h-6" />
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Timeline dot for larger screens */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 shadow-lg border border-blue-100">
                    {/* Mobile timeline dot */}
                    <div className="lg:hidden flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                      <div className="flex items-center text-blue-600 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-blue-600 mt-1">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {edu.fullDegree}
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          {edu.institution}
                        </p>
                        <p className="text-gray-500 text-sm mb-2">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    {/* Desktop duration */}
                    <div className="hidden lg:flex items-center text-blue-600 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {edu.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Grade:</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {edu.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other half */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              I regularly participate in online courses, workshops, and tech communities to enhance my skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React Advanced Patterns",
                "TypeScript Mastery",
                "Modern CSS Techniques",
                "Performance Optimization",
                "Testing Best Practices",
                "Agile Methodologies"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
