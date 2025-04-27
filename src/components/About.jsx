// import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-register min-h-screen w-full bg-cover bg-center overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-5xl mx-4 md:mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
          About <span className="text-yellow-500">CricFolio</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-10 leading-relaxed text-center">
          Welcome to CricFolio — your ultimate destination for everything cricket!  
          Whether you are a passionate fan, an aspiring player, or simply someone who loves the game, we bring you the best updates, tutorials, and community experiences.
        </p>

        <div className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is to promote cricket by providing comprehensive resources, real-time updates, 
              and an inclusive community for cricket enthusiasts around the world. 
              We bridge the gap between fans and the sport they love.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 space-y-3">
              <li>🏆 Latest news and updates about cricket tournaments</li>
              <li>📊 Player statistics and performance profiles</li>
              <li>📚 Guides, drills, and tutorials for upcoming players</li>
              <li>🗓️ Event registration and tournament management tools</li>
              <li>🤝 A vibrant community forum for discussions and networking</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Become a part of the CricFolio family and experience cricket like never before!  
              Whether you&apos;re here to compete, learn, or celebrate the spirit of cricket,  
              we&apos;re excited to have you with us.  
              Let&apos;s make cricket accessible, exciting, and community-driven!
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
