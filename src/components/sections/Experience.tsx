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
    title: "Junior DevOps Engineer",
    company: "@KalKey",
    duration: "2022 - 2022",
    description:
      "During a few-month internship, I was assigned and successfully completed multiple DevOps projects. Responsibilities included building and automating cloud infrastructure on AWS, developing and maintaining CI/CD pipelines with GitLab, and managing deployments with Docker and Kubernetes. I also implemented Terraform-based infrastructure provisioning, set up Prometheus/Grafana monitoring, and delivered solutions that improved system reliability and optimized operational costs.",
  },
  {
    title: "Software Developer & Chief Technology Officer",
    company: "@Suwk",
    duration: "2022 - 2023",
    description:
      "Worked at Suwk Africs, where I helped build a platform aimed at giving people in less-privileged areas access to free skill-elevating resources and also a space to trade their skills for income.",
  },
]

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleExperience = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-20 py-10 sm:py-20 bg-background">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Experience
      </h2>
      <h3 className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-10">
        A yearly snapshot of my growth
      </h3>

      <motion.div
        className="grid gap-4 sm:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            onClick={() => toggleExperience(i)}
            layout
            className="p-4 sm:p-6 rounded-xl cursor-pointer bg-zinc-100 hover:bg-zinc-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {exp.title}
                </h4>
                <p className="text-gray-500 text-sm sm:text-base">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-lg sm:text-2xl font-bold text-black">
                  {exp.duration}
                </span>
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
              className="overflow-hidden mt-2 sm:mt-4"
            >
              <p className="text-gray-600 text-sm sm:text-base">{exp.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
