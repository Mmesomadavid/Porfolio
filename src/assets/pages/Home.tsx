"use client"

import Header from "../../components/sections/Header"
import Hero from "../../components/sections/Hero"
import TabNavigation from "../../components/sections/TabNavigation"
import Featured from "../../components/sections/Featured"
import AboutMe from "../../components/sections/AboutMe"
import Experience from "../../components/sections/Experience"
import Footer from "../../components/sections/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <section id="overview">
        <Hero />
      </section>
      <TabNavigation />
      <section id="work">
        <Featured />
      </section>
      <section id="reviews">
        {/* Reviews Component */}
      </section>
      <section id="services">
        {/* Services Component */}
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <Experience />
      <Footer />
    </div>
  )
}
