"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

// Example featured project type
type Project = {
  id: number
  title: string
  image: string
  description: string
  skills: string[]
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Cloud Automation System",
    image: "/project1.png",
    description: "Infrastructure as Code deployment using Terraform and AWS.",
    skills: ["Terraform", "AWS", "CI/CD", "Docker", "Kubernetes", "Monitoring"],
  },
  {
    id: 2,
    title: "AI Model Deployment",
    image: "/project2.png",
    description: "Deployed NLP model with FastAPI, Docker & K8s.",
    skills: ["Python", "FastAPI", "Docker", "Kubernetes"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/project3.png",
    description: "Personal site with Next.js, Tailwind, and shadcn/ui.",
    skills: ["Next.js", "Tailwind", "Framer Motion", "shadcn/ui"],
  },
  {
    id: 4,
    title: "Monitoring Dashboard",
    image: "/project4.png",
    description: "Built Grafana dashboards integrated with Prometheus for monitoring.",
    skills: ["Grafana", "Prometheus", "Alertmanager", "DevOps"],
  },
  {
    id: 5,
    title: "AI Chatbot",
    image: "/project5.png",
    description: "Conversational AI with RAG pipeline deployed on cloud.",
    skills: ["LangChain", "Pinecone", "OpenAI", "Next.js"],
  },
]

const ITEMS_PER_PAGE = 3

const Featured = () => {
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Project | null>(null)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(sampleProjects.length / ITEMS_PER_PAGE)
  const paginatedProjects = sampleProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) // simulate loading
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Featured</h2>
        <Button variant="outline" className="rounded-full">View all</Button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="p-4">
                  <Skeleton className="h-40 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4 mt-4" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-6 w-12 rounded-full" />
                    <Skeleton className="h-6 w-12 rounded-full" />
                  </div>
                </Card>
              ))
          : paginatedProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card
                      className="cursor-pointer overflow-hidden"
                      onClick={() => setSelected(project)}
                    >
                      <CardContent className="p-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-40 object-cover"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-100 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {project.skills.length > 3 && (
                            <span className="px-2 py-1 bg-slate-200 text-xs rounded-full">
                              +{project.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>

                  {/* Hover Details */}
                  <HoverCardContent className="w-80">
                    <h4 className="font-bold">{project.title}</h4>
                    <p className="text-sm text-slate-600 mt-2">{project.description}</p>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="flex justify-center mt-10 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>
          <span className="px-3 py-1 text-sm font-medium">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}

      {/* Dialog for full project */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.title}</DialogTitle>
          </DialogHeader>
          <img
            src={selected?.image}
            alt={selected?.title}
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <p className="text-slate-700">{selected?.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {selected?.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Featured
