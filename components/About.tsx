"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Database, Users } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      title: "Tech Stack",
      icon: <Code2 className="text-cyan-400" size={24} />,
      skills: [
        "Python",
        "SQL",
        "PHP",
        "Next.js",
        "Tailwind CSS",
        "Java",
        "Kotlin",
      ],
    },
    {
      title: "Data & Tools",
      icon: <Database className="text-purple-400" size={24} />,
      skills: [
        "Data Mining",
        "Machine Learning",
        "MySQL",
        "Figma",
        "Google Cloud Platform (GCP)",
        "TensorFlow",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-pink-400" size={24} />,
      skills: [
        "Leadership",
        "Teamwork",
        "Problem-solving",
        "Communication",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Get to know more about who I am
          </p>

          <div className="glass rounded-2xl p-8 md:p-12">
            {/* Bio */}
            <p className="text-gray-300 leading-relaxed mb-6">
              I am{" "}
              <span className="text-cyan-400 font-semibold">
                M. Sa&apos;aduddin Abdillah Yusuf
              </span>
              , a dedicated student with a strong foundation in Data Management
              and Analytics. Throughout my academic journey, I&apos;ve developed
              expertise in various programming languages and frameworks, with a
              particular focus on data mining techniques and machine learning
              algorithms. I&apos;m currently exploring the exciting world of Web
              Development while actively participating in Bangkit Academy 2024
              as a Cloud Computing learner, where I&apos;m gaining hands-on
              experience with modern cloud technologies and API deployment
              strategies.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 mb-8">
              <MapPin className="text-cyan-400" size={20} />
              <span>Surabaya, Indonesia</span>
            </div>

            {/* Skills Section */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold mb-6">
                My <span className="gradient-text">Skills</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 glass rounded-lg">
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-semibold">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 glass rounded-lg text-xs hover:bg-white/10 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
