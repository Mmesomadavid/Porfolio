"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Zap, Star, Plus } from "lucide-react"
import meImg from "../../assets/images/mex.jpg"

const Hero = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Banner */}
      <div className="relative w-full h-40 sm:h-52 md:h-64 bg-slate-200">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D16AQGRAZwNmO40JA/profile-displaybackgroundimage-shrink_350_1400/B4DZh7daPbHwAY-/0/1754417966074?e=1762387200&v=beta&t=xDoNgEk0ANQy_e3Oeu-isVf0kISNbZILIF1Cw_YGoe0"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Profile Avatar */}
        <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 sm:left-6 transform -translate-x-1/2 sm:translate-x-0 flex items-center">
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-white shadow-lg">
            <AvatarImage src={meImg} className="object-cover h-full w-full" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 sm:mt-20 px-4 sm:px-6 md:px-12 max-w-5xl w-full mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center sm:text-left">
          Mmesoma David
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 text-center sm:text-left">
          Cloud Infrastructure & Machine Learning Engineer | MlOps
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Button className="gap-2 px-6 h-11 sm:h-12 rounded-full">
            <Zap className="h-5 w-5 fill-white" />
            Get in touch
          </Button>
          <Button
            variant="outline"
            className="border-black/50 h-11 sm:h-12 rounded-full"
          >
            <Plus />
            Follow
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-6">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">$10k+</div>
            <div className="text-xs text-slate-500">Earned</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">7x</div>
            <div className="text-xs text-slate-500">Hired</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-lg sm:text-xl font-bold text-slate-900">
              <Star className="h-5 w-5 fill-current" />
              5.00
            </div>
            <div className="text-xs text-slate-500">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-slate-900">66</div>
            <div className="text-xs text-slate-500">Followers</div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">About</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-justify sm:text-left">
            I am a passionate Cloud Infrastructure & Machine Learning Engineer
            with expertise in designing scalable cloud solutions, implementing
            DevOps pipelines, and building AI-powered systems. My background
            spans backend engineering, MLOps, automation, and data-driven
            problem solving — enabling me to bridge the gap between software
            engineering, infrastructure, and applied artificial intelligence.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "TensorFlow",
              "PyTorch",
              "Keras",
              "Hugging Face Transformers",
              "LangChain",
              "OpenAI API",
              "MLflow",
              "Weights & Biases (W&B)",
              "Jupyter Notebooks",
              "Data Visualization (Matplotlib, Seaborn, Plotly)",
              "Feature Engineering",
              "Supervised Learning",
              "Unsupervised Learning",
              "Deep Learning",
              "NLP",
              "Computer Vision",
              "Reinforcement Learning",
              "Generative AI",
              "MLOps",
              "Model Deployment",
              "Vector Databases (Pinecone, Weaviate, FAISS)",
              "Linux",
              "Bash/Shell Scripting",
              "Git & GitHub/GitLab",
              "CI/CD (GitHub Actions, GitLabCI, Jenkins)",
              "Docker",
              "Kubernetes",
              "Helm",
              "Terraform",
              "Ansible",
              "Prometheus",
              "Grafana",
              "AWS (EC2, S3, Lambda, EKS, SageMaker)",
              "Google Cloud (GCP)",
              "Azure",
              "NGINX",
              "Networking & Security",
              "Monitoring & Logging (ELK, Loki, Datadog)",
              "ArgoCD",
              "Service Mesh (Istio, Linkerd)",
              "Cloudflare",
              "Databases (PostgreSQL, MongoDB, Redis)",
              "API Development",
              "Serverless Frameworks",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
