import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import {AppContext} from '../context/AppContext'
import {motion} from 'framer-motion';


const BuyCredit = () => {

  const {user} = useContext(AppContext)


  
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 py-10 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 text-sm lg:text-base mt-4">
          Select a plan that suits your needs and start creating effortlessly.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              {plan.id}
            </h2>
            <p className="text-gray-600 text-sm lg:text-base mb-6">
              {plan.desc}
            </p>
            <div className="text-4xl font-bold text-blue-500 mb-4">
              ${plan.price}
            </div>
            <p className="text-gray-600 text-sm lg:text-base mb-6">
              {plan.credits} Credits
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform">
              {user? 'Buy Now' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
