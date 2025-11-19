import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users, Trophy, Clock } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: "15+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "2",
      label: "Companies Worked"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "100%",
      label: "Client Satisfaction"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Passionate Frontend Developer
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a dedicated Frontend Developer with over 5 years of experience in building 
                responsive, scalable, and performant web applications using React.js, Next.js, 
                and Tailwind CSS. My expertise spans across modern JavaScript frameworks, with 
                particular strength in React.js and Next.js ecosystems.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with diverse industries 
                including eCommerce, EdTech, and Manufacturing. I have strong domain expertise 
                in these areas and thrive in Agile environments with a proven ability to collaborate 
                across teams and deliver high-quality features consistently.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for user experience, 
                ensuring that every application I build not only performs well but also provides 
                an intuitive and engaging experience for users. I'm proficient in modern JavaScript 
                (ES6+), state management solutions, and comprehensive testing methodologies.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Strengths:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Modern JavaScript (ES6+) & TypeScript
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  React.js & Next.js Development
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  UI Libraries (Tailwind CSS, Chakra UI, Material UI)
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  State Management (Redux Toolkit, Context API)
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Testing (Jest, React Testing Library)
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  API Integration & Performance Optimization
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg text-center border border-blue-100"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
