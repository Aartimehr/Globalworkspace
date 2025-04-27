import { useState } from "react";
// import axios from '../services/api'; // Todo: Uncomment when backend ready to deploy

export default function TournamentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tournamentName: "",
    city: "",
    stadium: "",
    organizerName: "",
    startDate: "",
    endDate: "",
    category: "",
    ballType: "",
    matchStyle: "",
    predefinedRules: [],
    customRules: "",
    banner: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = async () => {
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
  };

  return (
    <div>
      {step === 1 && (
        <div className="space-y-4">
          <input name="tournamentName" onChange={handleChange} placeholder="Tournament Name" className="w-full p-2 border rounded" />
          <input name="city" onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" />
          <input name="stadium" onChange={handleChange} placeholder="Stadium" className="w-full p-2 border rounded" />
          <input name="organizerName" onChange={handleChange} placeholder="Organizer Name" className="w-full p-2 border rounded" />
          <input type="date" name="startDate" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="date" name="endDate" onChange={handleChange} className="w-full p-2 border rounded" />
          <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <select name="category" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Category</option>
            <option value="Open">Open</option>
            <option value="Corporate">Corporate</option>
            <option value="Under 19">Under 19</option>
            {/* add more options */}
          </select>

          <select name="ballType" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Ball Type</option>
            <option value="Tennis">Tennis</option>
            <option value="Leather">Leather</option>
          </select>

          <select name="matchStyle" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Match Style</option>
            <option value="T10">T10</option>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
            <option value="Test">Test</option>
          </select>

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
            <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block font-bold">Predefined Rules</label>
          {["Rule 1", "Rule 2", "Rule 3"].map((rule) => (
            <div key={rule}>
              <input
                type="checkbox"
                checked={formData.predefinedRules.includes(rule)}
                onChange={() => {
                  setFormData((prev) => ({
                    ...prev,
                    predefinedRules: prev.predefinedRules.includes(rule)
                      ? prev.predefinedRules.filter(r => r !== rule)
                      : [...prev.predefinedRules, rule],
                  }));
                }}
              />
              <label className="ml-2">{rule}</label>
            </div>
          ))}

          <textarea
            name="customRules"
            placeholder="Custom Rules"
            value={formData.customRules}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
            <button onClick={nextStep} className="bg-green-500 text-white p-2 rounded">Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <input type="file" onChange={(e) => setFormData((prev) => ({ ...prev, banner: e.target.files[0] }))} />
          {formData.banner && (
            <img src={URL.createObjectURL(formData.banner)} alt="Banner Preview" className="w-full h-auto" />
          )}
          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
            <button onClick={submitForm} className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
