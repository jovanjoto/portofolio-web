import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import backgroundImage from '../assets/experience-background.jpeg'

function Experience() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      title: "Languages",
      items: ["Java", "Python", "JavaScript", "C++", "SQL", "HTML/CSS"],
      icon: "💻",
    },
    {
      title: "Framework / Libraries",
      items: ["React", "Flask", "FastAPI", "Tailwind", "SQLAlchemy", "Pandas"],
      icon: "🛠️",
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "Conda Env", "Figma"],
      icon: "🔧",
    },
    {
      title: "Areas Of Expertise",
      items: [
        "Web Development",
        "API Development",
        "Machine Learning",
        "Agile",
      ],
      icon: "🚀",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-10 pt-24 min-h-screen flex flex-col gap-y-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="experience"
    >
      <motion.div
        className="flex flex-col pt-8 gap-y-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lg text-gray-300 tracking-widest">Explore my</h1>
        <h1 className="text-5xl text-white font-bold tracking-wider">
          Experience
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-gray-600"
            whileHover={{ scale: 1.03, rotate: 1 }}
            onHoverStart={() => setHoveredSection(index)}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <div className="p-6 h-full">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{section.icon}</span>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="bg-white rounded-lg p-2 text-black font-bold text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            {hoveredSection === index && (
              <motion.div
                className="absolute inset-0 bg-white opacity-10 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-20 ">
        <motion.div
          className="relative transform -translate-x-1/2 bottom-10 "
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown
            className="text-white text-3xl cursor-pointer"
            onClick={() => {
              const projectSection = document.getElementById("projects");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
