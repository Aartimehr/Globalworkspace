import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact-submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setFormSubmitted(true);
        setSubmissionMessage("We’ll call you shortly 🚀");

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setFormSubmitted(false);
          setSubmissionMessage(null);
        }, 6000);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Server not responding. Make sure backend is running.");
    }
  };

  return (
    <div className="bg-contactus min-h-screen w-full bg-cover bg-center flex items-center justify-center py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl mx-4"
      >
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-green-600">
              Thank You!
            </h2>
            <p className="text-lg text-gray-700">{submissionMessage}</p>
          </div>
        ) : (
          <form onSubmit={submitForm}>
            <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-300">
              Request <span className="text-blue-500">a call</span>
            </h1>

            {/* Name */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none`}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
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
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-blue-600 transition-all"
            >
              Request a Call
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
