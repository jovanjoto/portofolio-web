import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaCertificate,
  FaChevronDown,
  FaLock,
  FaUnlock,
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
  const [unlockedSections, setUnlockedSections] = useState({});
  const [progress, setProgress] = useState(0);

  const logoStyles = "text justify-center text-3xl mb-2";
  const GraduationLogo = <FaGraduationCap className={logoStyles} />;
  const ExperienceLogo = <FaBriefcase className={logoStyles} />;
  const CertificateLogo = <FaCertificate className={logoStyles} />;

  const sections = [
    {
      id: "experience",
      logo: ExperienceLogo,
      title: "Experience",
      content: "asdasdasd" /* Your experience content */,
    },
    {
      id: "education",
      logo: GraduationLogo,
      title: "Education",
      content: "" /* Your education content */,
    },
    {
      id: "certifications",
      logo: CertificateLogo,
      title: "Awards & Certification",
      content: "" /* Your certifications content */,
    },
    {
      id: "interests",
      logo: CertificateLogo,
      title: "Interests & Skills",
      content: "" /* Your interests content */,
    },
  ];

  const unlockSection = (id) => {
    setUnlockedSections((prev) => ({ ...prev, [id]: true }));
    setProgress((prev) => prev + 25);
  };

  const LockIcon = ({ id }) =>
    unlockedSections[id] ? (
      <FaUnlock className="text-green-500 text-2xl" />
    ) : (
      <FaLock
        className="text-gray-500 text-2xl cursor-pointer"
        onClick={() => unlockSection(id)}
      />
    );

  return (
    <section
      className="p-20 min-h-screen flex flex-col about-me-container relative"
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
        <h1 className="text-lg text-gray-300 tracking-widest">
          Get to know more
        </h1>
        <h1 className="text-5xl text-white font-bold mb-4 tracking-wider">
          About Me
        </h1>

        <motion.div
          className="w-full bg-gray-700 h-2 mt-4 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white h-full rounded-full"></div>
        </motion.div>

        <section className="flex-row flex-grow flex items-center justify-center gap-x-20 mb-20 mt-10">
          <div className="grid grid-cols-2 justify-center gap-y-5 gap-x-5">
            {/* Experience */}

            {unlockedSections["experience"] ? (
              <SectionCard logo={ExperienceLogo} title="Experience">
                <div class="overflow-hidden w-60">
                  <ul className="flex animate-infinite-scroll mt-5">
                    {[...Array(2)].map((_, i) => (
                      <>
                        <li key={`java-${i}`} className="flex-shrink-0 mx-2">
                          <FaJava className="text-2xl text-red-500" />
                        </li>
                        <li key={`react-${i}`} className="flex-shrink-0 mx-2">
                          <FaReact className="text-2xl text-blue-500" />
                        </li>
                        <li key={`python-${i}`} className="flex-shrink-0 mx-2">
                          <FaPython className="text-2xl text-yellow-500" />
                        </li>
                        <li key={`pandas-${i}`} className="flex-shrink-0 mx-2">
                          <SiPandas className="text-2xl text-blue-500" />
                        </li>
                        <li key={`docker-${i}`} className="flex-shrink-0 mx-2">
                          <SiDocker className="text-2xl text-blue-500" />
                        </li>
                        <li key={`github-${i}`} className="flex-shrink-0 mx-2">
                          <FaGithub className="text-2xl text-black" />
                        </li>
                        <li key={`flask-${i}`} className="flex-shrink-0 mx-2">
                          <SiFlask className="text-2xl text-black" />
                        </li>
                        <li
                          key={`tailwind-${i}`}
                          className="flex-shrink-0 mx-2"
                        >
                          <SiTailwindcss className="text-2xl text-blue-500" />
                        </li>
                        <li key={`fastapi-${i}`} className="flex-shrink-0 mx-2">
                          <SiFastapi className="text-2xl text-green-500" />
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </SectionCard>
            ) : (
              <SectionCard className="flex items-center justify-center ">
                <div className="flex items-center justify-center h-full w-56  my-11">
                  <LockIcon id={"experience"} className="" />
                </div>
              </SectionCard>
            )}

            {/* Education */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              {unlockedSections["education"] ? (
                <SectionCard logo={GraduationLogo} title={"Education"}>
                  <p className="text-gray-500">B.Sc Bachelors Degree (2024) </p>
                  <p className="text-gray-500">University of Wollongong</p>
                </SectionCard>
              ) : (
                <SectionCard className="">
                  <div className="flex items-center justify-center h-full my-11">
                    <LockIcon id={"education"} />
                  </div>
                </SectionCard>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              {unlockedSections["certifications"] ? (
                <SectionCard
                  logo={CertificateLogo}
                  title={"Awards & Certification"}
                >
                  <ul className="text-gray-500 list-disc list-inside text-left">
                    <li className="text-gray-500">
                      AWS Certified Cloud Practitioner - 2024
                    </li>
                    <li className="text-gray-500">AI4I - Literacy In AI</li>
                  </ul>
                </SectionCard>
              ) : (
                <SectionCard className="">
                  <div className="flex items-center justify-center h-full my-11">
                    <LockIcon id={"certifications"} />
                  </div>
                </SectionCard>
              )}
            </motion.div>
            <motion.div>
              {unlockedSections["interests"] ? (
                <SectionCard
                  logo={CertificateLogo}
                  title={"Interests & Skills "}
                >
                  <div className="text-left ">
                    <p className="text-gray-500">
                      Languages : English, Mandarin, Indonesia
                    </p>
                    <p className="text-gray-500">
                      Hobbies : Studying, Gym, Reading
                    </p>
                  </div>
                </SectionCard>
              ) : (
                <SectionCard className="">
                  <div className="flex items-center justify-center h-full my-11">
                    <LockIcon id={"interests"} />
                  </div>
                </SectionCard>
              )}
            </motion.div>
          </div>
        </section>

        <motion.p
          className="mt-1 text-black text-center text-lg max-w-2xl mx-auto bg-gray-100 p-8 rounded-3xl border-[4px] border-third"
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
        className="flex justify-center pt-20 relative z-10"
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
