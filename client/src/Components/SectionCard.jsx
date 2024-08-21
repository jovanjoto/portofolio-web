import { motion } from "framer-motion";

function SectionCard({ className, logo, title, children }) {
  return (
    <motion.section
      whileHover={{ scale: 1.03, rotate: 1 }}
      className={`py-10 px-10 border-third border-[4px] rounded-3xl  bg-gray-100 flex flex-col items-center text-black ${className}`}
      style={{ width: "400px", height: "200px" }} // Fixed width and height
      >
      {logo}
      <div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}

export default SectionCard;
