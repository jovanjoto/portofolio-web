import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaCertificate,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiPandas,
  SiDocker,
  SiFlask,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si";
import { motion } from "framer-motion";
import backgroundImage from "../assets/about-background.jpeg";
import SectionCard from "./SectionCard";

function AboutMe() {
  const [progress, setProgress] = useState(100); // Set to 100 to always show the description

  const logoStyles = "text-3xl mb-2";
  const GraduationLogo = <FaGraduationCap className={logoStyles} />;
  const ExperienceLogo = <FaBriefcase className={logoStyles} />;
  const CertificateLogo = <FaCertificate className={logoStyles} />;

  return (
    <section
      className="p-4 sm:p-8 md:p-16 lg:p-20 min-h-screen flex flex-col about-me-container relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="about"
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10">
        <h1 className="text-base sm:text-lg text-gray-300 tracking-widest">
          Get to know more
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 tracking-wider">
          About Me
        </h1>



        <section className="flex flex-col items-center justify-center gap-y-6 sm:gap-y-8 mb-10 mt-6 sm:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 sm:gap-6 w-full max-w-4xl">
            <SectionCard logo={ExperienceLogo} title="Experience" >
              <div className="overflow-hidden w-full" style={{width : '300px', height: '400px'}}>
                <ul className="flex animate-infinite-scroll mt-5">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <li className="flex-shrink-0 mx-2">
                        <FaJava className="text-2xl text-red-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <FaReact className="text-2xl text-blue-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <FaPython className="text-2xl text-yellow-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <SiPandas className="text-2xl text-blue-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <SiDocker className="text-2xl text-blue-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <FaGithub className="text-2xl text-black" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <SiFlask className="text-2xl text-black" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <SiTailwindcss className="text-2xl text-blue-500" />
                      </li>
                      <li className="flex-shrink-0 mx-2">
                        <SiFastapi className="text-2xl text-green-500" />
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </SectionCard>

            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <SectionCard logo={GraduationLogo} title="Education">
                <p className="text-gray-500">B.Sc Bachelors Degree (2024) </p>
                <p className="text-gray-500">University of Wollongong</p>
              </SectionCard>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <SectionCard logo={CertificateLogo} title="Awards & Certification">
                <ul className="text-gray-500 list-disc list-inside text-left">
                  <li>AWS Certified Cloud Practitioner - 2024</li>
                  <li>AI4I - Literacy In AI</li>
                </ul>
              </SectionCard>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <SectionCard logo={CertificateLogo} title="Interests & Skills">
                <div className="text-left">
                  <p className="text-gray-500">
                    Languages: English, Mandarin, Indonesia
                  </p>
                  <p className="text-gray-500">
                    Hobbies: Studying, Gym, Reading
                  </p>
                </div>
              </SectionCard>
            </motion.div>
          </div>
        </section>

        <motion.p
          className="mt-1 text-black text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto bg-gray-100 p-4 sm:p-6 md:p-8 rounded-3xl border-[4px] border-third"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress === 100 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          I am a passionate software developer with hands-on experience in a
          variety of technologies, including Java, React, Python, and more. My
          educational background from the University of Wollongong has equipped
          me with a solid foundation in computer science, which I have applied
          to real-world projects, enhancing my skills in both frontend and
          backend development.
        </motion.p>
      </div>

      <motion.div
        className="flex justify-center pt-10 sm:pt-20 relative z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaChevronDown
          className="text-white text-3xl cursor-pointer"
          onClick={() => {
            const experienceSection = document.getElementById("experience");
            if (experienceSection) {
              experienceSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </motion.div>
    </section>
  );
}

export default AboutMe;