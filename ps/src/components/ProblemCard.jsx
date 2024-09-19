import React from 'react';
import { motion } from 'framer-motion';

const ProblemCard = ({ title, problemStatement, description }) => {
  return (
    <motion.div
      className="p-6 bg-gray-800 text-white shadow-md rounded-lg mb-6 max-w-4xl mx-auto transform transition-transform duration-500"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: '1000px' }}
    >
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          <strong>Problem Statement: </strong>{problemStatement}
        </p>
        <p className="text-md md:text-lg text-gray-400">
          <strong>Description: </strong>{description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProblemCard;

