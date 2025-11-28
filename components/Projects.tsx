"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Segmentation for Marketing",
      category: "Data Mining",
      description:
        "Machine learning project using K-Means clustering algorithm to segment customers for targeted marketing campaigns.",
      stack: ["Python", "K-Means", "Pandas", "Scikit-learn"],
      sourceCode: "https://github.com/abd_abdil",
      documentation: "https://github.com/abd_abdil",
    },
    {
      title: "Wheelify",
      category: "Machine Learning & Cloud",
      description:
        "Vehicle Classification Mobile App using TensorFlow for image recognition, deployed on Google Cloud Platform. Capstone project for Bangkit Academy 2024.",
      stack: ["TensorFlow", "Google Cloud Platform", "Kotlin", "API"],
      sourceCode: "https://github.com/abd_abdil",
      documentation: "https://github.com/abd_abdil",
    },
    {
      title: "SIPUD",
      category: "Web Development",
      description:
        "Village Product Website - A web platform for showcasing and managing local village products with admin dashboard.",
      stack: ["HTML", "PHP", "MySQL", "CSS"],
      sourceCode: "https://github.com/abd_abdil",
      documentation: "https://github.com/abd_abdil",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Modern portfolio website with cyberpunk glassmorphism design, built with Next.js 15 and Tailwind CSS.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      sourceCode: "https://github.com/abd_abdil",
      documentation: "https://github.com/abd_abdil",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Check out my recent work
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Category */}
                <span className="text-xs text-purple-400 font-semibold mb-2">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 glass rounded text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - CRITICAL */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Github
                      className="text-cyan-400 group-hover:scale-110 transition-transform"
                      size={16}
                    />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <ExternalLink
                      className="text-purple-400 group-hover:scale-110 transition-transform"
                      size={16}
                    />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
