import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import AllRecipe from "../components/AllRecipe"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
          src="../assets/images/manchurian.jpeg"
          alt="manchurian"
          className="hero-img"
          placeholder="tracedSVG"
          Layout="fullWidth"
          >

          </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simple recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
      <AllRecipe/>
    </Layout>
  )
}
