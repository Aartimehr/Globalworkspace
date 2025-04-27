import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormSubmitted(true);

    // todo: IWhen backend is setup, send the data via API POST
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className="bg-contactus min-h-screen w-full bg-cover bg-center flex items-center justify-center py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl mx-4"
      >
        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-green-600">Thank You!</h2>
            <p className="text-lg text-gray-700">We’ll call you shortly 🚀</p>
          </motion.div>
        ) : (
          <form onSubmit={submitForm}>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-center mb-8"
            >
              Request a Call
            </motion.h2>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                required
                placeholder="Your full name"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                required
                placeholder="Your phone number"
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                rows="4"
                placeholder="Additional details (optional)"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-yellow-600 transition-all"
            >
              Request a Call
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
