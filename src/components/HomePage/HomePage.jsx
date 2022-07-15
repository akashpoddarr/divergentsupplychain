import React from 'react'
import Download2 from '../Download2'
import Features from '../Features'
import Features2 from '../Features2'
import Footer from '../Footer'
import HeroBanner from '../HeroBanner'
import Navbar from '../Navbar'
import Services from '../Services'
import "../../styles/styles.css"

export default function HomePage() {
  return (
   <>
       <Navbar />
      <main>
        <HeroBanner />
        <Features />
        <Services />
        <Features2 />
        {/* <Pricing /> */}
        <Download2 />
        {/* <Download /> */}
      </main>
      <Footer />

   </>
  )
}
