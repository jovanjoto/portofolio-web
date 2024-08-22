import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import backgroundImage from "../assets/hero-background.jpeg";

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [typed, setTyped] = useState("");
  const fullText = "Hi, I'm Jovan.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    controls.start({ y: scrollY * 0.5 });
  }, [scrollY, controls]);

  return (
    <section
      className="hero-container relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="top"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-full flex items-center justify-center"
      >
        <div className="z-10 flex flex-col md:flex-row items-center gap-y-10 md:gap-x-20 justify-center w-full px-4 md:px-0">
          <motion.div
            className="flex flex-col items-center justify-center text-center text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.section className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg py-12 px-8 md:px-24 hover:bg-opacity-40"
              whileHover={{ scale: 1.05 }
            }
            >
              <motion.div>
                <h1
                  className="text-4xl md:text-6xl font-bold text-gray-100 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {typed}
                  {showCursor && <span className="animate-pulse">|</span>}
                </h1>
                <motion.p
                  className="text-xl font-bold text-gray-200 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  aspiring software engineer.
                </motion.p>
                <section className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="../assets/Jovan_Resume.pdf"
                    download={true}
                    className="bg-white hover:bg-gray-300 text-black border-[px] border-black rounded-full font-bold py-2 px-4 transition duration-300"
                  >
                    Download CV
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="bg-first hover:bg-black text-white rounded-full font-bold py-2 px-4 transition duration-300"
                  >
                    Contact Info
                  </motion.a>
                </section>
              </motion.div>
              <div className="flex gap-x-4 mt-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/jovanjoto"
                  className="bg-gray-200 text-blue-600 rounded-full p-2 shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/jovanjoto"
                  className="bg-gray-200 text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-800 hover:text-white transition duration-300"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </motion.section>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="Jovan"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaChevronDown
          className="text-white text-3xl cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        />
      </motion.div>
    </section>
  );
}

export default Hero;
