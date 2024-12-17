import React from 'react';
import { motion } from 'framer-motion';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        How it works
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Transform words into stunning images
      </motion.p>

      {/* Steps */}
      <motion.div
        className="space-y-4 w-full max-w-3xl text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-105 transition-transform duration-300 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.2, // Stagger animation for each step
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            
            <img src={item.icon} alt={`Step ${index + 1} Icon`} />
            <div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;
