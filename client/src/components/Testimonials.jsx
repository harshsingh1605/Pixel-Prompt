import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData, assets } from '../assets/assets';



const Testimonials = () => {
  return (
    <motion.div
      className="my-24 px-6 md:px-16 lg:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        What Our Users Say
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Delays between each grid item's animation
            },
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Profile Image */}
            <motion.img
              src={testimonial.image || assets.profile_icon}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Name and Role */}
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {Array(testimonial.stars)
                .fill('')
                .map((_, starIndex) => (
                  <motion.img
                    key={starIndex}
                    src={assets.rating_star}
                    alt="Star"
                    className="w-5 h-5"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gr ay-600 leading-relaxed">{testimonial.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
