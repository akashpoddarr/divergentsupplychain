import React from "react";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Download from "./components/Download";
import Download2 from "./components/Download2";
import Footer from "./components/Footer";
import Features2 from "./components/Features2";

export default function App() {
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
  );
}
