import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlayerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    teamName: '',
    phoneNumber: '',
    jerseySize: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [formVisible, setFormVisible] = useState(true); // State to control form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined })); // Clear error on change
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
      setErrors(prevErrors => ({ ...prevErrors, profilePicture: undefined }));
    }
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
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {  //basic 10 digit phone number check
      newErrors.phoneNumber = 'Invalid phone number';
    }
    if (!formData.jerseySize) {
      newErrors.jerseySize = 'Jersey Size is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = () => {
    if (validateForm()) {
      console.log('Player form submitted', formData);
      setSubmissionMessage('All the best!'); // added message
      setFormVisible(false); // Hide the form
      // TODO: Add backend call
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          teamName: '',
          phoneNumber: '',
          jerseySize: '',
          profilePicture: null,
        });
        setFormVisible(true);
        setSubmissionMessage(null);
      }, 6000);

    }
  };

  return (
    <div className="bg-register min-h-screen w-full bg-cover bg-center overflow-hidden flex items-center justify-center">
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
            <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
              Player <span className="text-yellow-500">Registration</span>
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
                <label htmlFor="teamName" className="block text-lg font-medium text-zinc-700 dark:text-black">Team Name (Optional)</label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Enter your team's name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-white dark:text-black"
                />
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
                <label htmlFor="jerseySize" className="block text-lg font-medium text-zinc-700 dark:text-black">Jersey Size</label>
                <select
                  id="jerseySize"
                  name="jerseySize"
                  value={formData.jerseySize}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-black ${errors.jerseySize ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-zinc-700"}`}
                >
                  <option value="">Select Jersey Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">XL</option>
                </select>
                {errors.jerseySize && <p className="text-red-500 text-sm mt-1">{errors.jerseySize}</p>}
              </div>

              <div>
                <label htmlFor="profilePicture" className="block text-lg font-medium text-zinc-700 dark:text-black">Profile Picture (Optional)</label>
                <input
                  type="file"
                  id="profilePicture"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-white text-white dark:text-black"
                />
                {formData.profilePicture && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 flex justify-center"
                  >
                    <img
                      src={URL.createObjectURL(formData.profilePicture)}
                      alt="Profile Preview"
                      className="w-24 h-24 object-cover rounded-full border-2 border-yellow-500 shadow-sm"
                    />
                  </motion.div>
                )}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={submitForm}
              className="w-full bg-yellow-600 hover:bg-yellow-700 focus:bg-yellow-700 transition text-black font-semibold py-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
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
              <p className="text-yellow-500 text-2xl">{submissionMessage}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
