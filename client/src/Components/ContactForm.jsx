import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm({ formData, setFormData, handleSubmit }) {
  const [currentField, setCurrentField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (field) => {
    setCurrentField(field);
  };

  const handleBlur = () => {
    setCurrentField(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit();
    setIsSubmitting(false);
  };

  return (
    <div className="relative flex items-center justify-center p-4">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" bg-opacity-50 rounded-xl shadow-2xl p-8 w-full max-w-md"
        onSubmit={onSubmit}
      >
        <div className="space-y-6 k">
          {["name", "email", "message"].map((field) => (
            <motion.div
              key={field}
              initial={false}
              animate={currentField === field ? { scale: 1.05 } : { scale: 1 }}
              className="relative"
            >
              <label
                className="block text-gray-300 text-sm font-bold mb-2 capitalize"
                htmlFor={field}
              >
                {field}
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="w-full px-3 py-2 text-black bg-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field)}
                  onBlur={handleBlur}
                  required
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  rows="4"
                  className="w-full px-3 py-2 text-black bg-white border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => handleFocus(field)}
                  onBlur={handleBlur}
                  required
                ></textarea>
              )}
              <AnimatePresence>
                {currentField === field && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-0 mt-2 mr-2 text-white"
                  >
                    ✓
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg mt-6 hover:bg-gray-200 transition-all duration-300"
          disabled={isSubmitting}
          type="submit"
          // onClick={() => {
          //   setIsSubmitting(true);

          //   setIsSubmitting(false);
          // }}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-t-2 border-black border-solid rounded-full mx-auto"
            ></motion.div>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>
    </div>
  );
}

export default ContactForm;
