import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Gear Launch",
      subtitle: "POD eCommerce Platform",
      company: "Enspirit Technology Services Pvt Ltd",
      description: "A comprehensive Print-on-Demand eCommerce platform with responsive design and modern UI components. Built with performance and user experience in mind.",
      features: [
        "Responsive web UI using Chakra UI and Next.js",
        "Redux for state management",
        "REST API integration for backend communication",
        "Reusable components with consistent design",
        "Performance optimization and testing"
      ],
      technologies: ["Next.js", "Chakra UI", "Redux", "REST APIs", "TypeScript"],
      image: "/api/placeholder/600/400",
      category: "eCommerce"
    },
    {
      title: "GritWell Client App",
      subtitle: "Health Monitoring Platform",
      company: "Enspirit Technology Services Pvt Ltd",
      description: "A modern health monitoring application that tracks user wellness metrics and provides real-time insights with beautiful, responsive UI.",
      features: [
        "Responsive UI using Styled Components",
        "Redux Toolkit for state management",
        "Real-time API data integration",
        "Comprehensive unit testing",
        "Component stability and performance"
      ],
      technologies: ["React.js", "Styled Components", "Redux Toolkit", "Jest", "RTL"],
      image: "/api/placeholder/600/400",
      category: "Healthcare"
    },
    {
      title: "DVS – Digital Valuation System",
      subtitle: "Answer Sheet Evaluation Platform",
      company: "Bees Software Solutions Pvt. Ltd",
      description: "A sophisticated digital system for automated answer sheet evaluation with comprehensive tracking and reporting capabilities.",
      features: [
        "UI development using React.js and Material UI",
        "RESTful API integration with Axios",
        "Script tracking and marking system",
        "Automated report generation",
        "IIS web server deployment"
      ],
      technologies: ["React.js", "Material UI", "Bootstrap", "Axios", "SQL Server"],
      image: "/api/placeholder/600/400",
      category: "Education"
    },
    {
      title: "Cloudilya",
      subtitle: "College Management System",
      company: "Bees Software Solutions Pvt. Ltd",
      description: "A complete college management system with integrated payment gateway and comprehensive administrative features.",
      features: [
        "Responsive UI with HTML, CSS, Bootstrap",
        "Paytm Payment Gateway integration",
        "API integration with AJAX & jQuery",
        "Administrative dashboard",
        "Student and faculty management"
      ],
      technologies: [".NET MVC", "Bootstrap", "jQuery", "AJAX", "Paytm API"],
      image: "/api/placeholder/600/400",
      category: "Education"
    },
    {
      title: "BeeSERP",
      subtitle: "Educational ERP System",
      company: "Bees Software Solutions Pvt. Ltd",
      description: "A comprehensive Educational ERP system for managing institutional operations with user-friendly interfaces and robust backend.",
      features: [
        "User-friendly UI with HTML, CSS, Bootstrap",
        "SQL Server database management",
        "Comprehensive system testing",
        "Documentation and maintenance",
        "User feedback integration"
      ],
      technologies: ["VB.NET", "Bootstrap", "SQL Server", "HTML5", "CSS3"],
      image: "/api/placeholder/600/400",
      category: "Education"
    }
  ]

  const categories = ["All", "eCommerce", "Healthcare", "Education"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work across different domains and technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                {project.title}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'eCommerce' ? 'bg-green-100 text-green-800' :
                    project.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-600 text-sm mb-2">{project.subtitle}</p>
                <p className="text-gray-500 text-xs mb-3">{project.company}</p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-600 flex items-start gap-2">
                        <ArrowRight size={12} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded text-sm font-medium transition-colors flex items-center gap-2">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
