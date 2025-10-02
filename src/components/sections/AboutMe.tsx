"use client"

import { motion } from "framer-motion"
import type { Variants, Transition } from "framer-motion"
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import MeImg from '../../assets/images/me.jpg'

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  },
}

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column: Info */}
        <motion.div variants={itemVariant} className="flex flex-col justify-start">
          <span className="text-sm uppercase text-gray-500 mb-2 tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            DevOps & Cloud Infrastructure Engineer
          </h2>
          <p className="text-gray-600 mb-6">
            I am a DevOps and Cloud Infrastructure Engineer with 3–4 years of experience in designing, deploying, and maintaining scalable systems. I am also a tech blogger and a rising voice in the technology space, sharing insights and engaging with the tech community on LinkedIn.
          </p>

          {/* Image container */}
          <div className="mb-6 w-full h-96 overflow-hidden rounded-3xl">
            <img
              src={MeImg}
              alt="About me"
              className="w-full h-full object-cover object-center"
              draggable="false"
            />
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2 h-14 bg-gray-900 text-white mt-4 md:mt-6 rounded-full uppercase  hover:bg-gray-900/90 hover:text-white transition-all w-max"
          >
            <span>Follow Me</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Right Column: Cards Grid */}
        <motion.div
          variants={containerVariant}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card Template */}
          {[
            {
              title: "Infrastructure Automation",
              desc: "Building scalable and resilient cloud infrastructure with IaC and automation tools.",
              isDark: false,
            },
            {
              title: "CI/CD Pipelines",
              desc: "Implementing continuous integration and delivery pipelines for faster and reliable deployments.",
              isDark: false,
            },
            {
              title: "Tech Blogging & Community",
              desc: "Sharing insights and contributing to the tech community as a blogger and LinkedIn tech voice.",
              isDark: true,
            },
            {
              title: "Cloud Optimization",
              desc: "Optimizing cloud resources for performance, cost-efficiency, and scalability.",
              isDark: false,
            },
          ].map((card, i) => (
            <motion.div key={i} variants={itemVariant}>
              <Card
                className={`relative hover:shadow-lg transition-shadow rounded-xl ${
                  card.isDark ? "bg-gray-900 text-white" : "border border-gray-200"
                } w-full h-64`}
              >
                {/* Ribbon for dark card */}
                {card.isDark && (
                  <div className="absolute top-0 right-0 bg-red-500 w-24 h-6 transform rotate-12 origin-top-right"></div>
                )}

                <CardContent className="flex flex-col justify-end h-full pb-6">
                  {/* Top line above title */}
                  <div
                    className={`h-[2px] w-10 mb-2 ${
                      card.isDark ? "bg-white" : "bg-black"
                    }`}
                  ></div>

                  {/* Card Title */}
                  <CardTitle className="text-xl md:text-2xl mb-1">{card.title}</CardTitle>

                  {/* Description */}
                  <CardDescription className={`text-sm ${card.isDark ? "text-gray-200" : "text-gray-600"} mb-3`}>
                    {card.desc}
                  </CardDescription>

                  {/* Arrow */}
                  {card.isDark ? (
                    <motion.div
                      whileHover={{ scale: 1.5, x: 20, y: -20 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-end cursor-pointer"
                    >
                      <ArrowRight className="h-5 w-5 rotate-45 text-gray-900" />
                    </motion.div>
                  ) : (
                    <ArrowRight className="h-5 w-5 mt-2 self-end text-gray-400" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe
