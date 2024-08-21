import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    // event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!", { position: "bottom-right" });
      return;
    }
    console.log(formData);
    try {
      const response = await axios.post("/api/send-email", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, {
        timeouts : 10000,
      });
      console.log(response.data);
      toast.success("Message sent successfully!", { position: "bottom-right" });
    } catch (error) {
      console.log(error);
      toast.error("Message failed to send!", { position: "bottom-right" });
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="px-5 py-20 bg-black">
      <div className="mx-auto px-6 md:w-[50%] text-white">
        <h2 className="text-3xl font-bold text-center mb-4 pb-2 border-b-[4px] border-white w-48 mx-auto ">
          Contact Me
        </h2>

        <div>
          <p className="text-center pb-5">
            I'm always open to new opportunities, collaborations, and
            conversations. Whether you have a project in mind, or just want to
            chat, feel free to reach out. I'm passionate about software
            development and love connecting with like-minded individuals. Drop
            me a message, and let's create something amazing together!
          </p>
        </div>
        <section className="flex flex-col  gap-y-5 items-center">
          <div className="backdrop-blur-md rounded-md shadow-lg w-[70%] mx-auto items-center ">
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </div>
          <h2 className="text-3xl font-bold text-center w-48 mx-auto ">Or</h2>
          <div className="flex flex-col items-center gap-y-3">
            <div className="flex flex-row bg-gray-500 gap-x-8 bg-opacity-20 backdrop-blur-md rounded-md p-4 shadow-lg w-full md:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="flex flex-row gap-x-2">
                <FaEnvelope className="text-xl text-white" />
                <a className="hover:underline text-white hover:text-gray-100">
                  jovanjoto24@gmail.com
                </a>
              </p>
              <p className="flex flex-row gap-x-2">
                <FaPhone className="text-xl text-white" />
                <a className="hover:underline text-white hover:text-gray-100 mr-5">
                  +65 82639750
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
