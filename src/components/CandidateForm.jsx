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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (validateForm()) {
      // --- DATABASE SECTION START ---
      try {
        const response = await fetch('http://localhost:5000/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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
            setFormData({
              fullName: '',
              email: '',
              phoneNumber: '',
              designation: '',
              country: ''
            });
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
           // --- DATABASE SECTION END ---
    }
  };

  return (
    <div className="bg-CandidateForm min-h-screen w-full bg-cover bg-center overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        {formVisible ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-8 space-y-8"
          >
            <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-500">
              Candidate <span className="text-blue-500">Form</span>
            </h1>

            <div className="space-y-4 text-black">
              <div>
                <label htmlFor="fullName" className="block text-lg font-medium text-zinc-700 dark:text-black">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-black ${errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-zinc-700 dark:text-black">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-black ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-medium text-zinc-700 dark:text-black">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-black ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label htmlFor="designation" className="block text-lg font-medium text-zinc-700 dark:text-black">Designation</label>
                <select
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white text-black ${errors.designation? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
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
                <label htmlFor="country" className="block text-lg font-medium text-zinc-700 dark:text-black">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white text-black ${errors.country? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
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
              className="w-full bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 transition text-white font-semibold py-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              className="max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-8 text-center"
            >
              <p className="text-blue-600 text-2xl">{submissionMessage}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}