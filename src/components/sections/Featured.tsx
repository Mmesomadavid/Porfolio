"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

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
    title: "Cloud Automation with Terraform & AWS",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/b1/df/8db1df3e-e2f4-752e-3664-545c217b73d6/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/1200x630wa.png",
    description:
      "End-to-end infrastructure deployment system using Terraform, AWS, Docker, and CI/CD pipelines. Automated scaling and monitoring included.",
    skills: ["Terraform", "AWS", "CI/CD", "Docker", "Kubernetes", "Monitoring"],
  },
  {
    id: 2,
    title: "MLOps Pipeline for Model Deployment",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBpcGVsaW5lfGVufDB8fDB8fHww",
    description:
      "Built an automated MLOps pipeline to train, test, and deploy ML models on Kubernetes with monitoring and auto-scaling.",
    skills: ["Python", "MLflow", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    id: 3,
    title: "Jarvis-Lite AI Assistant",
    image: "https://plus.unsplash.com/premium_photo-1701113010437-1709c96aa539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Personal AI assistant with speech-to-text, text-to-speech, memory via vector DB, and LLM-powered chat. Deployed using Docker and CI/CD.",
    skills: ["LLMs", "Whisper", "FastAPI", "Vector DB", "Docker", "DevOps"],
  },
  {
    id: 4,
    title: "Monitoring & Observability Dashboard",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv77yy73dn8y58ix23rz1.png",
    description:
      "Built monitoring system using Prometheus, Grafana, and Alertmanager for real-time infrastructure observability.",
    skills: ["Prometheus", "Grafana", "Alertmanager", "DevOps"],
  },
  {
    id: 5,
    title: "AI-Powered Resume/Docs Q&A Bot",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDA%3D",
    description:
      "Implemented Retrieval-Augmented Generation (RAG) chatbot to answer queries from resumes and technical documents.",
    skills: ["LangChain", "ChromaDB", "OpenAI", "Next.js"],
  },
  {
    id: 6,
    title: "CI/CD System with GitHub Actions",
    image: "https://www.researchgate.net/publication/331131851/figure/fig1/AS:757080780705793@1557513532658/CI-CD-Architecture-using-Docker.ppm",
    description:
      "Automated build, test, and deployment workflows for fullstack apps using GitHub Actions, Docker, and cloud hosting.",
    skills: ["CI/CD", "Docker", "GitHub Actions", "Kubernetes"],
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
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Featured</h2>
        <Button variant="outline" className="rounded-full">
          View all
        </Button>
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
                        <h3 className="mt-4 text-xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                          {project.description}
                        </p>

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
                    <p className="text-sm text-slate-600 mt-2">
                      {project.description}
                    </p>
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
