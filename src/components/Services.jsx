import { useState } from "react";
import { motion } from "framer-motion";



const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }
};

const Services = () => {
  const servicesData = [
    {
      title: "Fresh Updates on jobs",
      description:
        "Get the latest updates on job openings, industry trends, and career advice to stay ahead in your job search journey."
    },
    {
      title: "Guidance and Support",
      description:
        "Get real-time updates on job opportunities, career advice, and professional development resources."
    },
    {
      title: "Visa and Work Permit Assistance",
      description:
        "Receive expert guidance and support for visa applications and work permits, ensuring a smooth transition to your new job abroad."
    },
    {
      title: "Global Networking",
      description:
        "Connect with professionals and job seekers from around the world to expand your network and career opportunities."
    }
    
  ];

  return (
    <div className="bg-service min-h-screen w-full bg-cover bg-center flex items-center py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        className="services-container text-black max-w-6xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-12">
          <span className="text-blue-500">Services </span>
          <span className="text-blue-700">at Globalworkspace</span>
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
              <h3 className="text-3xl font-extrabold mb-4 text-white-500">{service.title}</h3>
              <p className="text-lg text-white-700 font-medium">
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
