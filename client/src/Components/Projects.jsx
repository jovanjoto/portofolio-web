import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import backgroundImage from "../assets/project-background.jpeg";
import maizeTasselImage from "../assets/maizeTassel-image.png";
import propertyListingImage from "../../../meiji.png";
import financialLoanImage from "../../../streamlit-app.png";
import { Carousel } from "flowbite-react";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Maize Tassel Detection",
      description:
        "Developed a web application leveraging a deep neural network model to accurately detect and count maize tassels, achieving market-leading performance in agricultural image processing.",
      image: `${maizeTasselImage}`, // Replace with your project image
      githubLink: "https://github.com/JonathanBastineKho/Maize_Tassel_AI",
      tags: [
        "https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=white",
        "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
        "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      ],
    },
    {
      title: "UOB Financial Loan Analysis",
      description:
        "Conducted a comprehensive financial loan analysis for an external party at UOB, providing insights and recommendations based on the client's financial data.",
      image: `${financialLoanImage}`, // Replace with your project image
      githubLink:
        "https://github.com/GreyScaling/Financial-Loan-Sector-Analysis",
      tags: [
        "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
        "https://img.shields.io/badge/Huggingface-FF9900?style=for-the-badge&logo=huggingface&logoColor=white",
        "https://img.shields.io/badge/Transformers-FF9900?style=for-the-badge&logo=transformers&logoColor=white",
        "https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white",
      ],
    },
    {
      title: "Property Listing Website",
      description:
        "Developed a property listing website where I led both frontend and backend development, implementing Agile methodologies to ensure efficient team collaboration.",
      image: `${propertyListingImage}`, // Replace with your project image
      githubLink: "https://github.com/jovanjoto/Meiji-PropertyListing",
      tags: [
        "https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=white",
        "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
      ],
    },
  ];

  return (
    <section
      className="bg-black min-h-screen flex flex-col py-20 px-4 md:px-20"
      id="projects"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl text-white font-bold mb-4 tracking-wider">
          Projects
        </h1>
        3
        <p className="text-gray-300 text-xl">
          Showcasing my recent work and contributions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-gray-600"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-full h-56 ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
                style={{ objectFit: "cover" }}
              />
  
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-white font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  // <span
                  //   key={tagIndex}
                  //   className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
                  // >
                  //   {tag}
                  // </span>
                  <img key={tagIndex} src={tag} alt={tag} className="h-6" />
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-black hover:text-white hover:cursor-pointer inline-block bg-white text-black font-semibold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 "
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                View on Github
              </a>
            </div>
            {hoveredProject === index && (
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
      <div className="flex justify-center pt-48 ">
        <motion.div
          className="relative transform -translate-x-1/2 bottom-10 "
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown
            className="text-white text-3xl cursor-pointer"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
