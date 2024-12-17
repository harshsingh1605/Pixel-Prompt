import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext); // Import useContext
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result'); // Ensure route is valid
    } else {
      setShowLogin(true); // Ensure setShowLogin is defined
    }
  };

  
  return (
    <motion.div
      className="pb-16 text-center"
      initial={{ opacity: 0.2, y:100 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        See the magic. Try now
      </motion.h1>


      {/* Button */}
      <motion.button
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
        onClick={onClickHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        {assets.star_group && ( // Ensure the image exists before rendering
          <motion.img
            src={assets.star_group}
            alt="Star Group"
            className="h-6"
            whileHover={{ rotate: 20, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
