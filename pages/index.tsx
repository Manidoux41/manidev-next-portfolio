/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manidev's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects  */}

      {/* Contact me */}
    </div>
  )
}

export default Home