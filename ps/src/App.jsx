import React, { useState } from 'react';
import ProblemCard from './components/ProblemCard';
import { motion } from 'framer-motion';

const problems = [
  { title: 'Social Media App to Find Surrounding People to Match', problemStatement: 'People often find it difficult to connect...', description: 'A social media app that uses geolocation to identify...' },
  { title: 'Package Tracking System', problemStatement: 'Managing and tracking packages across various logistics...', description: 'A centralized package tracking system that allows both businesses and consumers...' },
  { title: 'ERP Model', problemStatement: 'Many businesses struggle with disconnected systems...', description: 'A customizable ERP (Enterprise Resource Planning) model that allows businesses...' },
  { title: 'Instrumental Learning Material', problemStatement: 'Musicians and learners find it difficult to access structured learning materials...', description: 'A platform that provides structured learning material for various instruments...' },
  { title: 'E-commerce Website for eBooks, Templates, Plugins', problemStatement: 'Creators of digital content struggle to find a marketplace...', description: 'An e-commerce platform specifically designed for selling digital goods like eBooks...' },
  { title: 'Able Mind', problemStatement: 'Mental health services are not always accessible...', description: 'A mental health and mindfulness app that provides guided meditation...' },
  { title: 'Start-Up Techniques by AI Bot', problemStatement: 'Entrepreneurs often lack access to personalized guidance...', description: 'An AI-powered chatbot that helps entrepreneurs with step-by-step guidance...' },
  { title: 'Astrology AI Bot', problemStatement: 'Many people are interested in astrology but do not have the time...', description: 'An AI-powered bot that provides personalized astrological readings...' },
  { title: 'Astrology Image Processing through Hand', problemStatement: 'Palm reading (chiromancy) is a traditional method of astrology...', description: 'An app that uses image processing technology to read and interpret...' },
  { title: 'Astrology App Prediction from Birth Date, Planets, and Direction', problemStatement: 'Accurate astrological predictions require knowledge...', description: 'An app that generates personalized astrological predictions...' },
  { title: 'Business Intelligence for Ideas', problemStatement: 'Entrepreneurs and businesses often struggle...', description: 'A business intelligence platform that helps users evaluate...' },
  { title: 'Start-Up Documentation: Steps and Package for HR and Management', problemStatement: 'Start-ups often lack a structured approach...', description: 'A comprehensive documentation package that provides start-ups with the tools...' },
  { title: 'Smart Home Energy Management System', problemStatement: 'Many households struggle with high energy consumption...', description: 'A smart home energy management system that tracks energy usage in real-time...' },
  { title: 'AI-Based Resume Screening Tool', problemStatement: 'Hiring managers often receive hundreds of resumes...', description: 'An AI-powered resume screening tool that uses machine learning to analyze resumes...' },
  { title: 'Blockchain-Based Voting System', problemStatement: 'Traditional voting systems can be prone to fraud...', description: 'A blockchain-based voting platform that ensures secure, transparent elections...' },
  { title: 'AI-Powered Content Generator for Blogs', problemStatement: 'Content creators and bloggers often struggle to consistently generate fresh ideas...', description: 'An AI-powered content generator that helps bloggers create SEO-optimized articles...' },
  { title: 'Personalized Nutrition and Meal Planner App', problemStatement: 'People find it challenging to maintain healthy eating habits...', description: 'An AI-based nutrition app that creates personalized meal plans...' },
  { title: 'AI-Based Language Learning Platform', problemStatement: 'Many language learners struggle with finding personalized learning methods...', description: 'An AI-powered platform that adapts to a learner’s language proficiency level...' }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const problemsPerPage = 5;

  // Filtered and paginated problems
  const filteredProblems = problems.filter(problem =>
    problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
    problem.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);

  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  const handleNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const handlePrevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Animated Problem Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentProblems.map((problem, index) => (
          <ProblemCard
            key={index}
            title={problem.title}
            problemStatement={problem.problemStatement}
            description={problem.description}
          />
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center max-w-4xl mx-auto mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-700"} transition duration-300`}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-700"} transition duration-300`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

