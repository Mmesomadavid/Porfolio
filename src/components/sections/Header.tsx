"use client";

import { ArrowRight, Mail, File } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="w-full border-none bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 flex-col md:flex-row gap-4 md:gap-0">
        {/* Left: Logo */}
        <div className="font-bold tracking-tight text-black text-center md:text-left">
          <Logo/>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0 text-sm font-medium text-black w-full md:w-auto">
          {/* Reach me via mail button */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full md:w-auto"
          >
            <a href="mailto:mmesomadavid1@yahoo.com" className="block w-full">
              <Button
                variant="ghost"
                className="border flex items-center justify-center gap-2 w-full md:w-auto text-xs sm:text-sm"
              >
                <Mail className="h-4 w-4" />
                Reach me via mail
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          {/* Download my CV button */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full md:w-auto"
          >
            <a href="/cv.pdf" download className="block w-full">
              <Button
                variant="ghost"
                className="border h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center gap-2 w-full md:w-auto text-xs sm:text-sm hover:bg-gray-900/90 hover:text-white"
              >
                <File className="h-4 w-4" />
                Download my CV
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
