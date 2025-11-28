"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I&apos;m <span className="gradient-text">Abdil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Information Systems Student | Data Mining Enthusiast
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              7th-semester student at UPN &quot;Veteran&quot; Jawa Timur,
              passionate about Data Analytics, Machine Learning, and Cloud
              Engineering. Currently exploring Web Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-semibold border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Photo - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 neon-glow">
              <Image
                src="/hero.jpg"
                alt="Abdillah Yusuf"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
