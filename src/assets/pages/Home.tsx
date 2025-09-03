"use client"

import Header from "../../components/sections/Header"
import Hero from "../../components/sections/Hero"
import Skills from "../../components/sections/Skills"
import AboutMe from "../../components/sections/AboutMe"
import Experience from "../../components/sections/Experience"
import Footer from "../../components/sections/Footer"
// import other sections like About, Projects, Contact, etc.

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Skills />
      <AboutMe />
      <Experience />
      <Footer />
      {/* Add About, Projects, Contact here */}
    </div>
  )
}
