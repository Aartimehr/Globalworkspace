import { motion } from "framer-motion";
// import React from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }
};

const Services = () => {
  const servicesData = [
    {
      title: "Tournament Registration",
      description:
        "Register for upcoming cricket tournaments easily through our platform. We provide a hassle-free process for organizers and participants."
    },
    {
      title: "Live Match Scores",
      description:
        "Get real-time updates on cricket matches, including live scores, commentary, and statistics."
    },
    {
      title: "Cricket Analytics",
      description:
        "Access in-depth analytics for player and team performances to help improve strategies and gameplay."
    },
    {
      title: "News & Updates",
      description:
        "Stay updated with the latest cricket news, schedules, and upcoming tournaments from around the world."
    },
    {
      title: "Leaderboard",
      description:
        "Find your local heroes on the rise. Track top-performing players and teams in your region."
    },
    {
      title: "Team Allocation",
      description:
        "Running solo? No problem — we'll help you find the right team to showcase your skills."
    }
  ];

  return (
    <div className="bg-contactus min-h-screen w-full bg-cover bg-center flex items-center py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        className="services-container text-black max-w-6xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-12">
          <span className="text-black">Services </span>
          <span className="text-yellow-500">at CricFolio</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="service-item border border-gray-200 p-8 rounded-2xl shadow-md bg-white/80 backdrop-blur-md cursor-pointer hover:shadow-lg"
            >
              <h3 className="text-3xl font-extrabold mb-4 text-yellow-500">{service.title}</h3>
              <p className="text-lg text-gray-700 font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
