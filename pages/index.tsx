/* eslint-disable react/no-unescaped-entities */
import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Head>
        <title>Manidev's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experiences */}

      {/* Skills */}

      {/* Projects  */}

      {/* Contact me */}
    </div>
  )
}

export default Home