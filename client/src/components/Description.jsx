import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';



const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 px-6 md:px-16 lg:px-28"
      initial={{ opacity: 0.2, u:100 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 text-center leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Create Stunning AI Art in Seconds ✨
      </motion.h1>
      <motion.p
        className="text-gray-500 text-center mb-10 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Transform your words into breathtaking visuals. Discover the magic of AI art and bring your imagination to life effortlessly.
      </motion.p>

      {/* Content Section */}
      <motion.div
        className="flex flex-col gap-10 lg:gap-20 lg:flex-row items-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Image Section */}
        <motion.img
          src={assets?.sample_img_1 || 'fallback-image.png'}
          alt="AI Art Example"
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Text Section */}
        <motion.div
          className="max-w-lg text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 leading-tight">
            Your Ideas, Our AI Magic 🌟
          </h2>
          <motion.p
            className="text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Imagine describing your dream artwork and seeing it come to life instantly. Our AI turns your wildest ideas into captivating visuals. From marketing campaigns to social media posts, unleash your imagination with cutting-edge AI tools that simplify creation and amplify your brand's potential.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Whether you're creating for fun, work, or your next big project, let AI-powered design redefine what’s possible. Skyrocket your creativity today!
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            No design skills required! Just type and watch the magic unfold!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Description;
