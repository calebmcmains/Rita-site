import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImRita from "../components/ImRita";
import WhatImAbout from "../components/WhatImAbout";

import { HelmetProvider } from "react-helmet-async";
// import Favs from "../components/Favs";
import Footer from "../components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <HelmetProvider>
        <div
          className={`mx-auto max-w-full text-primary-chocolate ${
            isOpen ? "h-svh overflow-hidden" : "overflow-x-hidden"
          }`}
        >
          <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />

          <main>
            <Hero />
            <ImRita />
            <WhatImAbout />
            {/* <Favs /> */}
          </main>

          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
}
