import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CandidateForm from "./CandidateForm";

export default function Landing() {
  const [showForm, setShowForm] = useState(false);
  const [showJobs, setShowJobs] = useState(false);

  const jobs = [
    "Cleaner",
    "Warehouse Helper",
    "Sweeper",
    "Factory Labour",
  ];

  const whyChooseUs = [
    "Trusted International Recruitment Network",
    "Fast & Transparent Hiring Process",
    "Verified Employers Across Europe & Gulf",
    "Legal Documentation & Visa Assistance",
    "On-time Placement Support",
    "24/7 Candidate Assistance",
  ];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showForm || showJobs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm, showJobs]);
 const Country = ({ name, code }) => (
  <div className="flex items-center gap-3 hover:scale-105 transition">
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={name}
      className="w-8 h-6 object-cover rounded shadow"
    />
    <span>{name}</span>
  </div>
);

  return (
    <div className="w-full overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="h-[80vh] relative">
        <img
          src="/landingpage.png"
          alt="Landing"
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center items-end h-full px-8 md:px-20 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          >
            Trusted Pathways to International Jobs
          </motion.h2>

          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition hover:scale-105"
            >
              Get Started
            </button>

            <button
              onClick={() => setShowJobs(true)}
              className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* ================= REGISTER MODAL ================= */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white w-[95%] md:w-[500px] max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-2xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4 text-black text-center">
                Candidate Registration
              </h2>

              <CandidateForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= JOB LIST MODAL ================= */}
      <AnimatePresence>
        {showJobs && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-gray-50 w-[90%] md:w-[400px] p-6 rounded-2xl shadow-2xl relative"
            >
              <button
                onClick={() => setShowJobs(false)}
                className="absolute top-4 right-4 text-gray-50 hover:text-black text-xl font-bold"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6 text-amber-600 text-center">
                Available Jobs
              </h2>

              <ul className="space-y-3">
                {jobs.map((job, index) => (
                  <li
                    key={index}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-amber-100 transition cursor-pointer text-center font-medium"
                  >
                    {job}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= COUNTRIES SECTION ================= */}
      <section className="py-16 px-6 md:px-20 bg-blue-400">
        <h2 className="text-3xl font-bold text-black text-center mb-10">
          Countries We Serve
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
              Europian Countries
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              
        <Country name="Serbia" code="rs"/>
        <Country name="Romania" code="ro"/>
        <Country name="Portugal" code="pt"/>
        <Country name="Bulgaria" code="bg"/>
        <Country name="Poland" code="pl"/>
        <Country name="Czech Republic" code="cz"/>
      </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
              Gulf Countries
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <Country name="UAE" code="ae" />
        <Country name="Saudi Arabia" code="sa" />
        <Country name="Oman" code="om" />
        <Country name="Qatar" code="qa" />
        <Country name="Kuwait" code="kw" />
        <Country name="Bahrain" code="bh" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US SLIDER ================= */}
      <section className="py-16 bg-blue-500 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Why Choose Globalworkspace?
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...whyChooseUs, ...whyChooseUs].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white shadow-xl rounded-xl p-6 text-center font-medium text-black"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
{/* ================= ADDITIONAL LANDING SECTIONS ================= */}
<section className="max-w-6xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-200 pb-2">How You Can Earn</h2>
  <p className="text-lg mb-4">
    Discover multiple ways to boost your income. Whether through remote jobs, freelancing, or project-based opportunities, we provide the guidance and resources to maximize your earning potential globally.
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Freelance opportunities in IT, design, and marketing</li>
    <li>Project-based assignments with global clients</li>
    <li>Remote job placements with international companies</li>
  </ul>
</section>

<section className="max-w-6xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-200 pb-2">Life Outside Your Country</h2>
  <p className="text-lg mb-4">
    Experience new cultures, better pay, and career growth opportunities. Working abroad opens doors to diverse experiences, professional networking, and a higher standard of living.
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Explore new cultures and languages</li>
    <li>Higher earning potential</li>
    <li>Professional growth and global networking</li>
  </ul>
</section>

<section className="max-w-6xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-200 pb-2">How US GlobalWorkspace Can Help You</h2>
  <p className="text-lg mb-4">
    We connect talent to global opportunities, streamline job applications, and provide mentorship to succeed internationally.
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Guidance on international job applications</li>
    <li>Resume and profile optimization for global employers</li>
    <li>Mentorship and career advice from experienced professionals</li>
  </ul>
</section>

<section className="max-w-6xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-lg text-center">
  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-200 pb-2">Connect With Us</h2>
  <div className="flex justify-center gap-4 flex-wrap">
    <a href="https://www.linkedin.com" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">LinkedIn</a>
    <a href="https://twitter.com" target="_blank" className="bg-blue-400 text-white px-6 py-3 rounded-full shadow hover:bg-blue-500 transition">Twitter</a>
    <a href="https://www.facebook.com" target="_blank" className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Facebook</a>
    <a href="https://www.instagram.com" target="_blank" className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition">Instagram</a>
  </div>
</section>

<section className="max-w-6xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-200 pb-2">Opportunities in Europe & Gulf Countries</h2>
  <p className="text-lg mb-4">
    Explore remote and on-site job openings in top international markets:
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>
      <a href="https://www.google.com/search?q=jobs+in+Europe" target="_blank" className="text-blue-600 hover:underline">Europe Jobs</a>
    </li>
    <li>
      <a href="https://www.google.com/search?q=jobs+in+Gulf+Countries" target="_blank" className="text-blue-600 hover:underline">Gulf Countries Jobs</a>
    </li>
  </ul>
</section>

    </div>
    
  );
}
