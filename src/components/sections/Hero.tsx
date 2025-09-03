import { motion } from "framer-motion"
import { Handshake } from "lucide-react"
import { useEffect, useState } from "react"
import heroBg1 from "../../assets/images/gradient-cube.png" // adjust path
import heroBg2 from "../../assets/images/gradient-crystal.png" // adjust path

const commands = [
  "echo 'Deploying cloud infrastructure...'",
  "terraform init",
  "terraform plan",
  "terraform apply -auto-approve",
  "echo '✅ Deployment successful!'",
]

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [commandIndex, setCommandIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (commandIndex < commands.length) {
      if (charIndex < commands[commandIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + commands[commandIndex][charIndex])
          setCharIndex(charIndex + 1)
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentText("")
          setCharIndex(0)
          // loop back when reaching the end
          setCommandIndex((prev) =>
            prev + 1 < commands.length ? prev + 1 : 0
          )
        }, 1200)
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, commandIndex])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background blurred rocks */}
      <motion.img
        src={heroBg1}
        alt="gradient rock 1"
        className="absolute top-10 left-20 w-64 h-64 object-cover blur-2xl opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2 }}
      />
      <motion.img
        src={heroBg2}
        alt="gradient rock 2"
        className="absolute bottom-20 right-10 w-80 h-80 object-cover blur-2xl opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-black">
          Cloud <br /> Infrastructure
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-700">
          Hi, I’m David. A DevOps & Cloud Infrastructure Engineer
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 flex gap-3 py-3 rounded-full border border-black text-black font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Connect
            <Handshake />
          </motion.a>
        </div>
      </div>

      {/* Terminal UI */}
      <div className="absolute bottom-6 right-6 w-96 bg-black text-green-400 font-mono text-sm rounded-lg shadow-lg overflow-hidden border border-gray-800 z-20">
        <div className="flex items-center px-3 py-2 bg-gray-900 border-b border-gray-800">
          <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <p className="ml-4 text-gray-400 text-xs">bash</p>
        </div>
        <div className="px-3 py-2 h-40 overflow-y-auto">
          <p className="whitespace-pre-wrap code">{currentText}|</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
