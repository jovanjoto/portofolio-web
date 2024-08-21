import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>
);
