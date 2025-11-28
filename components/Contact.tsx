"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <Mail size={32} />,
      href: "mailto:abdillahyusuf1911@gmail.com",
      color: "text-cyan-400",
    },
    {
      name: "GitHub",
      icon: <Github size={32} />,
      href: "https://github.com/abdil19",
      color: "text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      href: "https://www.linkedin.com/in/abdillah-yusuf/",
      color: "text-pink-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      href: "https://instagram.com/abd_abdil",
      color: "text-cyan-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={32} />,
      href: "https://twitter.com/telureperidey",
      color: "text-purple-400",
    },
    {
      name: "Facebook",
      icon: <Facebook size={32} />,
      href: "https://www.facebook.com/share/14Q19EpgC8Q/",
      color: "text-pink-400",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Feel free to contact me if you have any questions or just want to
            say hi.
          </p>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div
                  className={`${link.color} group-hover:scale-110 transition-transform`}
                >
                  {link.icon}
                </div>
                <p className="font-semibold text-gray-300">{link.name}</p>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 text-center text-gray-400">
            <p className="flex items-center justify-center gap-2">
              © Made with <span className="text-red-500">❤</span> and dedication
              by <span className="gradient-text font-semibold">ABD</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
