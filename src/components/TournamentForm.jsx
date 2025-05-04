import { useState } from "react";
// import axios from '../services/api'; // Todo: Uncomment when backend ready to deploy

export default function TournamentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tournamentName: "",
    state: "",
    city: "",
    stadiumPark: "",
    organizerName: "",
    startDate: "",
    endDate: "",
    category: "",
    ballType: "",
    matchStyle: "",
    guidelines: "",
    banner: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, banner: e.target.files[0] }));
    setErrors((prevErrors) => ({ ...prevErrors, banner: "" }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.tournamentName.trim()) newErrors.tournamentName = "Tournament Name is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.stadiumPark.trim()) newErrors.stadiumPark = "Stadium/Park is required";
      if (!formData.organizerName.trim()) newErrors.organizerName = "Organizer Name is required";
      if (!formData.startDate) newErrors.startDate = "Start Date is required";
      if (!formData.endDate) newErrors.endDate = "End Date is required";
    } else if (step === 2) {
      if (!formData.category) newErrors.category = "Category is required";
      if (!formData.ballType) newErrors.ballType = "Ball Type is required";
      if (!formData.matchStyle) newErrors.matchStyle = "Match Style is required";
    } else if (step === 4 && !formData.banner) {
      newErrors.banner = "Banner is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = async () => {
    if (validateStep()) {
      console.log("Tournament form submitted", formData);
      // Todo: Send to backend when ready
      /*
      try {
        await axios.post('/api/tournaments', formData);
        console.log('Tournament registered successfully!');
      } catch (error) {
        console.error('Error submitting tournament:', error);
      }
      */
    }
  };

  return (
    <div>
      {step === 1 && (
        <div className="space-y-4">
          <input
            name="tournamentName"
            onChange={handleChange}
            placeholder="Tournament Name"
            className={`w-full p-2 border rounded ${errors.tournamentName ? "border-red-500" : ""}`}
          />
          {errors.tournamentName && <p className="text-red-500 text-sm">{errors.tournamentName}</p>}
          <input
            name="state"
            onChange={handleChange}
            placeholder="State"
            className={`w-full p-2 border rounded ${errors.state ? "border-red-500" : ""}`}
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          <input
            name="city"
            onChange={handleChange}
            placeholder="City"
            className={`w-full p-2 border rounded ${errors.city ? "border-red-500" : ""}`}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          <input
            name="stadiumPark"
            onChange={handleChange}
            placeholder="Stadium/Park"
            className={`w-full p-2 border rounded ${errors.stadiumPark ? "border-red-500" : ""}`}
          />
          {errors.stadiumPark && <p className="text-red-500 text-sm">{errors.stadiumPark}</p>}
          <input
            name="organizerName"
            onChange={handleChange}
            placeholder="Organizer Name"
            className={`w-full p-2 border rounded ${errors.organizerName ? "border-red-500" : ""}`}
          />
          {errors.organizerName && <p className="text-red-500 text-sm">{errors.organizerName}</p>}
          <label className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.startDate ? "border-red-500" : ""}`}
          />
          {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
          <label className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.endDate ? "border-red-500" : ""}`}
          />
          {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
          <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            name="category"
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.category ? "border-red-500" : ""}`}
          >
            <option value="">Select Category</option>
            <option value="Open">Open</option>
            <option value="Corporate">Corporate</option>
            <option value="Regional">Regional</option>
            <option value="Under 19">Under 19</option>
            <option value="Under 17">Under 17</option>
            {/* add more options */}
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

          <label className="block text-gray-700 text-sm font-bold mb-2">Ball Type</label>
          <select
            name="ballType"
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.ballType ? "border-red-500" : ""}`}
          >
            <option value="">Select Ball Type</option>
            <option value="Tennis">Tennis</option>
            <option value="Leather">Leather</option>
          </select>
          {errors.ballType && <p className="text-red-500 text-sm">{errors.ballType}</p>}

          <label className="block text-gray-700 text-sm font-bold mb-2">Match Style</label>
          <select
            name="matchStyle"
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.matchStyle ? "border-red-500" : ""}`}
          >
            <option value="">Select Match Style</option>
            <option value="T10">T10</option>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
            <option value="Test">Test</option>
          </select>
          {errors.matchStyle && <p className="text-red-500 text-sm">{errors.matchStyle}</p>}

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Guidelines</label>
          <textarea
            name="guidelines"
            placeholder="Tournament Guidelines (e.g., Code of Conduct, Player Eligibility)"
            value={formData.guidelines}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
          />

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tournament Banner (Optional)</label>
          <input type="file" onChange={handleFileChange} className={`w-full p-2 border rounded ${errors.banner ? "border-red-500" : ""}`} />
          {errors.banner && <p className="text-red-500 text-sm">{errors.banner}</p>}
          {formData.banner && (
            <img src={URL.createObjectURL(formData.banner)} alt="Banner Preview" className="w-full h-auto" />
          )}
          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
              Back
            </button>
            <button onClick={submitForm} className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}