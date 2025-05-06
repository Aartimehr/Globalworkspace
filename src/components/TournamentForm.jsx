import { useState } from "react";
// import axios from '../services/api'; // Todo: Uncomment when backend ready to deploy

const stepTitles = [
  "Tournament Details",
  "Match Configuration",
  "Guidelines",
  "Banner & Submit",
];

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
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          Host a <span className="text-yellow-500">Tournament</span>
        </h1>
      <div className="mb-4">
        <div className="relative flex justify-between items-center">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <div className="h-1 w-8 bg-indigo-400"></div>}
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white font-bold ${
                  index + 1 <= step ? "bg-indigo-500" : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <div className={`ml-2 text-sm font-semibold ${index + 1 <= step ? "text-indigo-500" : "text-gray-600"}`}>
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="mb-2">
            <label htmlFor="tournamentName" className="block text-gray-700 text-sm font-bold mb-2">Tournament Name</label>
            <input
              type="text"
              id="tournamentName"
              name="tournamentName"
              onChange={handleChange}
              placeholder="Enter tournament name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.tournamentName ? "border-red-500" : ""}`}
            />
            {errors.tournamentName && <p className="text-red-500 text-sm mt-1">{errors.tournamentName}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State</label>
              <input
                type="text"
                id="state"
                name="state"
                onChange={handleChange}
                placeholder="Enter state"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.state ? "border-red-500" : ""}`}
              />
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                placeholder="Enter city"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.city ? "border-red-500" : ""}`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="stadiumPark" className="block text-gray-700 text-sm font-bold mb-2">Stadium/Park</label>
            <input
              type="text"
              id="stadiumPark"
              name="stadiumPark"
              onChange={handleChange}
              placeholder="Enter stadium or park name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.stadiumPark ? "border-red-500" : ""}`}
            />
            {errors.stadiumPark && <p className="text-red-500 text-sm mt-1">{errors.stadiumPark}</p>}
          </div>
          <div className="mb-2">
            <label htmlFor="organizerName" className="block text-gray-700 text-sm font-bold mb-2">Organizer Name</label>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              onChange={handleChange}
              placeholder="Enter organizer name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.organizerName ? "border-red-500" : ""}`}
            />
            {errors.organizerName && <p className="text-red-500 text-sm mt-1">{errors.organizerName}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.startDate ? "border-red-500" : ""}`}
              />
              {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
            </div>
            <div>
              <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.endDate ? "border-red-500" : ""}`}
              />
              {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <select
              id="category"
              name="category"
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.category ? "border-red-500" : ""}`}
            >
              <option value="">Select Category</option>
              <option value="Open">Open</option>
              <option value="Corporate">Corporate</option>
              <option value="Regional">Regional</option>
              <option value="Under 19">Under 19</option>
              <option value="Under 17">Under 17</option>
              {/* add more options */}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="ballType" className="block text-gray-700 text-sm font-bold mb-2">Ball Type</label>
            <select
              id="ballType"
              name="ballType"
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ballType ? "border-red-500" : ""}`}
            >
              <option value="">Select Ball Type</option>
              <option value="Tennis">Tennis</option>
              <option value="Leather">Leather</option>
            </select>
            {errors.ballType && <p className="text-red-500 text-sm mt-1">{errors.ballType}</p>}
          </div>

          <div>
            <label htmlFor="matchStyle" className="block text-gray-700 text-sm font-bold mb-2">Match Style</label>
            <select
              id="matchStyle"
              name="matchStyle"
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.matchStyle ? "border-red-500" : ""}`}
            >
              <option value="">Select Match Style</option>
              <option value="T10">T10</option>
              <option value="T20">T20</option>
              <option value="ODI">ODI</option>
              <option value="Test">Test</option>
            </select>
            {errors.matchStyle && <p className="text-red-500 text-sm mt-1">{errors.matchStyle}</p>}
          </div>

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Back
            </button>
            <button onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="guidelines" className="block text-gray-700 text-sm font-bold mb-2">Guidelines (Optional) </label>
            <textarea
              id="guidelines"
              name="guidelines"
              placeholder="Tournament Guidelines (e.g., Code of Conduct, Player Eligibility)"
              value={formData.guidelines}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            />
          </div>

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Back
            </button>
            <button onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="banner" className="block text-gray-700 text-sm font-bold mb-2">Tournament Banner </label>
            <input type="file" id="banner" onChange={handleFileChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.banner ? "border-red-500" : ""}`} />
            {errors.banner && <p className="text-red-500 text-sm mt-1">{errors.banner}</p>}
            {formData.banner && (
              <div className="mt-2">
                <img src={URL.createObjectURL(formData.banner)} alt="Banner Preview" className="w-full h-auto rounded-md" />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Back
            </button>
            <button onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
