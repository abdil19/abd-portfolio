"use client";

import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      institution: 'UPN "Veteran" Jawa Timur',
      degree: "Bachelor of Information Systems",
      period: "2022 - Present",
      gpa: "3.67",
      logo: "/logos/upn.png",
      description:
        "Focusing on Data Management, Analytics, and Information System Development.",
    },
    {
      institution: "Khairunnas Islamic Boarding School",
      degree: "Senior High School - Science (IPA)",
      period: "2019 - 2022",
      gpa: null,
      logo: "/logos/khairunnas.png",
      description:
        "Built strong foundation in Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Academic background and achievements
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 glass rounded-xl overflow-hidden p-2 flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-gray-300">{edu.degree}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-300 text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
