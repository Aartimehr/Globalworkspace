import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    designation: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          designation: formData.designation,
          country: formData.country,
          source: 'candidateform'
        }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setSubmissionMessage('All the best! Your application has been saved.');
        setFormVisible(false);
        setTimeout(() => {
          setFormData({ fullName: '', email: '', phoneNumber: '', designation: '', country: '' });
          setFormVisible(true);
          setSubmissionMessage(null);
        }, 6000);
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Database connection error:', error);
      alert('Could not connect to the database. Please ensure your local server is running.');
    }
  };

  // Animation variants for steps and form
  const fadeSlide = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-CandidateForm min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        {formVisible ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeSlide}
            className="w-full h-full md:h-auto max-w-none bg-white/90 backdrop-blur-md shadow-xl flex flex-col justify-start p-8 md:p-20 overflow-y-auto"
          >

            {/* ================= STEPS SECTION ================= */}
            <motion.div
              className="mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">How to Apply</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-blue-50 p-4 rounded-lg shadow">
                  <span className="text-2xl font-bold text-blue-500">1</span>
                  <p className="mt-2 text-gray-700">Fill Your Personal Details</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow">
                  <span className="text-2xl font-bold text-blue-500">2</span>
                  <p className="mt-2 text-gray-700">Choose Your Designation & Country</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow">
                  <span className="text-2xl font-bold text-blue-500">3</span>
                  <p className="mt-2 text-gray-700">Submit Form for Review</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow">
                  <span className="text-2xl font-bold text-blue-500">4</span>
                  <p className="mt-2 text-gray-700">Get Confirmation & Next Steps</p>
                </div>
              </div>
            </motion.div>

            {/* ================= FORM SECTION ================= */}
            <div className="space-y-6 text-black max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 text-blue-500">
                Candidate <span className="text-blue-500">Form</span>
              </h1>

              <div>
                <label htmlFor="fullName" className="block text-lg font-medium text-zinc-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black ${errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-zinc-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-medium text-zinc-700">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label htmlFor="designation" className="block text-lg font-medium text-zinc-700">Designation</label>
                <select
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${errors.designation ? "border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                >
                  <option value=""></option>
                  <option value="Construction Worker">Construction Worker</option>
                  <option value="General Labourer">General Labourer</option>
                  <option value="Cleaner">Cleaner</option>
                  <option value="Minibus Driver">Minibus Driver</option>
                  <option value="Warehouse/General Worker">Warehouse/General Worker</option>
                </select>
                {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
              </div>

              <div>
                <label htmlFor="country" className="block text-lg font-medium text-zinc-700">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black ${errors.country ? "border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                >
                  <option value=""></option>
                  <option value="Europe">Europe Countries</option>
                  <option value="Gulf Countries">Gulf Countries</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={submitForm}
              className="mt-10 w-full md:w-1/2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register Now
            </motion.button>
          </motion.div>
        ) : (
          submissionMessage && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-10 text-center"
            >
              <p className="text-blue-600 text-3xl">{submissionMessage}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
