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
  const logoStyles = "text justify-center text-3xl mb-2";

  const GraduationLogo = <FaGraduationCap className={logoStyles} />;
  const ExperienceLogo = <FaBriefcase className={logoStyles} />;
  const CertificateLogo = <FaCertificate className={logoStyles} />;

  return (
    <section
      className="p-20 min-h-screen flex flex-col about-me-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      id="about"
    >
      <div className=" bg-black bg-opacity-50"></div>
      <h1 className="text-lg text-gray-300 tracking-widest">
        Get to know more
      </h1>
      <h1 className="text-5xl text-white font-bold mb-4 tracking-wider">
        About Me
      </h1>
      <section className="flex-row flex-grow flex items-center justify-center gap-x-20 mb-40 ">
        <div className="flex flex-col mt-10">
          <div className="grid grid-cols-2 justify-center gap-y-5 gap-x-5">
            {/* Experience */}
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
                      <li key={`tailwind-${i}`} className="flex-shrink-0 mx-2">
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
            {/* Education */}
            <SectionCard logo={GraduationLogo} title={"Education"}>
              <p className="text-gray-500">B.Sc Bachelors Degree (2024) </p>
              <p className="text-gray-500">University of Wollongong</p>
            </SectionCard>
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
            <SectionCard logo={CertificateLogo} title={"Interests & Skills "}>
              <div className="text-left ">
                <p className="text-gray-500">
                  Languages : English, Mandarin, Indonesia{" "}
                </p>
                <p className="text-gray-500">
                  Skills : Teamwork, Communication, Problem Solving{" "}
                </p>
                <p className="text-gray-500">Hobbies : Gym, Studying </p>
              </div>
            </SectionCard>
          </div>
          <p className="mt-3 text-black text-center text-lg max-w-2xl mx-auto bg-gray-100 p-8 rounded-3xl border-[4px] border-third">
            I am a passionate software developer with hands-on experience in a
            variety of technologies, including Java, React, Python, and more. My
            educational background from the University of Wollongong has
            equipped me with a solid foundation in computer science, which I
            have applied to real-world projects, enhancing my skills in both
            frontend and backend development.
          </p>
        </div>
      </section>
      <div className="flex justify-center pt-20 ">
        <motion.div
          className="relative transform -translate-x-1/2 bottom-10 "
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
      </div>
    </section>
  );
}

export default AboutMe;