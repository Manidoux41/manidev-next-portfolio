/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import WorkExperience from "@/components/WorkExperience"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Manidev's Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact me */}
    </div>
  )
}

export default Home