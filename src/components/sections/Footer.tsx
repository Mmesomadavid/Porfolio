"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, LucideChevronRight, XIcon } from "lucide-react";

const Footer = () => {
  const [hired, setHired] = React.useState(false);

  const handleClick = () => {
    setHired(true);
    window.open(
      "https://calendly.com/chukwunoyelummesoma1/interview-recruiters-and-potential-clients",
      "_blank"
    );
  };

  return (
    <footer className="bg-[#111] text-white">
      {/* Connect Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <h2 className="text-4xl md:text-7xl font-semibold leading-tight">
          Let‘s Connect <br /> There
        </h2>

        {/* Hire Button */}
        <div
          onClick={handleClick}
          className={`relative w-48 h-14 flex items-center cursor-pointer rounded-full px-2 transition-colors duration-500 ${
            hired ? "bg-green-400" : "bg-gray-300"
          }`}
        >
          <motion.div
            layout
            initial={false}
            animate={{ x: hired ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 left-1 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center"
          >
            <LucideChevronRight className="text-black" />
          </motion.div>
          <span
            className={`ml-16 font-semibold transition-colors duration-300 ${
              hired ? "text-black" : "text-black"
            }`}
          >
            {hired ? "Hired!" : "Hire Me"}
          </span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Main Footer Content */}
      <div className="px-6 md:px-16 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10"
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold Bodoni">Mmesoma David</h2>
            <p className="text-sm max-w-xs text-gray-200">
              I specialize in designing and deploying scalable, secure, and efficient cloud-native systems while building intelligent AI/ML solutions that drive business growth. My expertise bridges modern DevOps practices, MLOps, and cloud infrastructure, enabling organizations to innovate faster with automation, data-driven insights, and production-ready AI.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://x.com/chukwunoyelu"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 transition"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mmesoma-david/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-200 space-y-2">
            <p className="font-semibold text-white">Email</p>
            <p>mmesomadavid1@yahoo.com</p>
            <span>-- or --</span>
            <p>chukwunoyelummesoma1@gmail.com</p>
          </div>

          
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6"
        >
          <p>© {new Date().getFullYear()} All rights reserved — Mmesoma David</p>

          <div className="flex gap-6 flex-wrap">
            <a href="#" className="hover:text-gray-300 transition">
              Portfolio
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Projects
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Blog
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
