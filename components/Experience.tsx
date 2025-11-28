"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<"internship" | "organization">(
    "internship"
  );

  const internships = [
    {
      title: "Cloud Computing Cohort",
      organization: "Bangkit Academy 2024 (Batch 2)",
      period: "Sep 2024 - Jan 2025",
      location: "Remote",
      description: [
        "Participated in intensive Cloud Computing learning path",
        "Gained hands-on experience with Google Cloud Platform (GCP)",
        "Developed and deployed APIs for machine learning applications",
        "Collaborated on Capstone Project: Wheelify - Vehicle Classification App",
      ],
    },
  ];

  const organizations = [
    {
      title: "Vice Chairman of Social Community Department",
      organization: "HIMASIFO UPNVJT",
      period: "Mar 2024 - Feb 2025",
      location: "Surabaya, Indonesia",
      description: [
        "Leading social community initiatives and programs",
        "Coordinating team activities and community engagement events",
        "Building partnerships with external organizations",
        "Managing departmental projects and team development",
      ],
    },
    {
      title: "Public Relations (Humas)",
      organization: "UKKI UPN Jatim",
      period: "2025",
      location: "Surabaya, Indonesia",
      description: [
        "Managing communications and public relations activities",
        "Creating content for organizational branding",
        "Coordinating events and external relations",
        "Building network with stakeholders and partners",
      ],
    },
  ];

  const currentExperiences =
    activeTab === "internship" ? internships : organizations;

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Professional and organizational journey
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("internship")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "internship"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50"
                  : "glass hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                Internship
              </div>
            </button>
            <button
              onClick={() => setActiveTab("organization")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "organization"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50"
                  : "glass hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2">
                <Users size={20} />
                Organization
              </div>
            </button>
          </div>

          {/* Experience Cards */}
          <div className="w-full space-y-6">
            {currentExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 w-full"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-4 glass rounded-xl">
                    {activeTab === "internship" ? (
                      <Briefcase className="text-cyan-400" size={32} />
                    ) : (
                      <Users className="text-purple-400" size={32} />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-4">
                      {exp.organization}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
