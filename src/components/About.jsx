import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-About min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-10 md:p-16 max-w-4xl md:max-w-5xl w-full mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-blue-500">
          About <span className="text-blue-600">Globalworkspace</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-black mb-10 leading-relaxed text-center">
          Welcome to Globalworkspace, your ultimate destination to connect with top-tier job opportunities and showcase your professional journey.  
          We are dedicated to empowering job seekers and employers alike by providing a dynamic platform that fosters growth, collaboration, and success.  
          Whether you are an aspiring professional looking to land your dream job or an employer seeking exceptional talent, Globalworkspace is here to bridge the gap and create meaningful connections.
        </p>

        <div className="space-y-10">
          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-500 mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
              Our mission is to revolutionize the job search experience by providing a user-friendly platform that connects talented individuals with their ideal career opportunities.  
              We strive to create a vibrant community where job seekers can showcase their skills, connect with industry leaders, and access resources that empower them to achieve their professional goals.  
              At Globalworkspace, we are committed to fostering a supportive environment that promotes growth, diversity, and success for all our users.
            </p>
          </motion.section>

          {/* Worldwide Opportunities */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-500 mb-4">
              We Offer Opportunities Worldwide
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-black space-y-2 md:space-y-3">
              <li>Work Permit</li>
              <li>Visa Assistance</li>
              <li>Free Consultations</li>
              <li>Job Opportunities</li>  
            </ul>
          </motion.section>

          {/* Join Our Journey */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-500 mb-4">
              Join Our Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
              Become a part of our growing community and take the next step in your career journey.  
              Whether you're a job seeker looking for your dream role or an employer seeking exceptional talent, Globalworkspace is here to support you every step of the way.  
              Join us today and let's create a brighter future together!
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
