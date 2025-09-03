"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  duration: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    title: "Graphic Designer",
    company: "Dewa-Dewi Tech",
    duration: "2015 - 2017",
    description:
      "Designed creative and functional visual designs to support brands and digital products.",
  },
  {
    title: "UI/UX Designer",
    company: "Odama Studio",
    duration: "2017 - 2019",
    description:
      "Created interactive and engaging digital experiences through UI/UX design principles.",
  },
  {
    title: "UX Researcher",
    company: "Korsa Studio",
    duration: "2018 - 2021",
    description:
      "Conducted user research, interviews, and testing to inform effective design solutions.",
  },
  {
    title: "Product Designer",
    company: "Apple, Inc",
    duration: "2021 - Now",
    description:
      "Lead design of end-to-end products ensuring intuitive UX, visual consistency, and high-quality delivery.",
  },
]

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleExperience = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="mx-auto px-20 py-20 bg-zinc-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
      <h3 className="text-lg text-gray-600 mb-10">
        A yearly snapshot of my growth
      </h3>

      <motion.div
        className="grid gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            onClick={() => toggleExperience(i)}
            layout
            className="p-6 rounded-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-2xl md:text-3xl font-semibold">{exp.title}</h4>
                <p className="text-gray-500">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-black">{exp.duration}</span>
                {activeIndex === i ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === i ? "auto" : 0,
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
