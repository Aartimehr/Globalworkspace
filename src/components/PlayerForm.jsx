import { useState } from 'react';

export default function PlayerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    teamName: '',
    phoneNumber: '',
    jerseySize: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  const submitForm = () => {
    console.log('Player form submitted', formData);
    
    // Todo: Send to backend when ready
    /*
    try {
      await axios.post('/api/players', formData);
      console.log('Player registered successfully!');
    } catch (error) {
      console.error('Error submitting player:', error);
    }
    */
  };

  return (
    <div className="space-y-4">
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email Address"
        className="w-full p-2 border rounded"
      />
      <input
        name="teamName"
        value={formData.teamName}
        onChange={handleChange}
        placeholder="Team Name"
        className="w-full p-2 border rounded"
      />
      <input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        type="tel"
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
      />
      <select
        name="jerseySize"
        value={formData.jerseySize}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Jersey Size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">XL</option>
      </select>

      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-2 border rounded"
      />
      {formData.profilePicture && (
        <img
          src={URL.createObjectURL(formData.profilePicture)}
          alt="Profile Preview"
          className="w-24 h-24 object-cover rounded-full"
        />
      )}

      <button
        onClick={submitForm}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Submit
      </button>
    </div>
  );
}
