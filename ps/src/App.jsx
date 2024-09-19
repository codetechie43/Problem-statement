import React, { useState } from 'react';
import ProblemCard from './components/ProblemCard';
import { motion } from 'framer-motion';

const problems = [
  {
    title: "Social Media App to Find Surrounding People to Match",
    problemStatement: "People often find it difficult to connect with like-minded individuals in their immediate surroundings. There's no efficient way to discover people with shared interests nearby.",
    description: "A social media app that uses geolocation to identify and match individuals based on their interests, hobbies, or professional needs within a specific radius. Users can meet new friends, collaborators, or professional contacts who are close by."
  },
  {
    title: "Package Tracking System",
    problemStatement: "Managing and tracking packages across various logistics channels can be complicated and lacks transparency.",
    description: "A centralized package tracking system that allows both businesses and consumers to easily track packages across multiple carriers in real-time. It integrates with shipping services to provide detailed package status, estimated delivery time, and notifications."
  },
  {
    title: "ERP Model",
    problemStatement: "Many businesses struggle with disconnected systems that fail to manage resources, finances, and operations in an integrated way.",
    description: "A customizable ERP (Enterprise Resource Planning) model that allows businesses to manage their processes, including finance, supply chain, HR, and operations, under one system. The system is modular, so businesses can pick and choose functionalities based on their needs."
  },
  {
    title: "Instrumental Learning Material",
    problemStatement: "Musicians and learners find it difficult to access structured learning materials to practice their instruments in a progressive way.",
    description: "A platform that provides structured learning material for various instruments. It includes sheet music, video tutorials, practice exercises, and performance tracking to help learners progress at their own pace."
  },
  {
    title: "E-commerce Website for eBooks, Templates, Plugins",
    problemStatement: "Creators of digital content struggle to find a marketplace to sell their eBooks, templates, and plugins.",
    description: "An e-commerce platform specifically designed for selling digital goods like eBooks, design templates, and software plugins. Sellers can create storefronts, while buyers can easily browse and purchase digital content in one place."
  },
  {
    title: "Able Mind",
    problemStatement: "Mental health services are not always accessible, and many people struggle with mindfulness and emotional well-being.",
    description: "A mental health and mindfulness app that provides guided meditation, cognitive behavioral therapy (CBT) exercises, and journaling prompts. It helps users track their mental health and provides personalized insights based on their mood and behavior."
  },
  {
    title: "Start-Up Techniques by AI Bot",
    problemStatement: "Entrepreneurs often lack access to personalized guidance when starting a business, leading to errors and inefficiencies.",
    description: "An AI-powered chatbot that helps entrepreneurs with step-by-step guidance on starting a business. The bot provides personalized advice on everything from ideation to marketing, funding, and scaling, based on the user's specific needs."
  },
  {
    title: "Astrology AI Bot",
    problemStatement: "Many people are interested in astrology but do not have the time or knowledge to fully understand and interpret astrological charts.",
    description: "An AI-powered bot that provides personalized astrological readings and insights. Users can input their birth details, and the bot will generate a detailed report based on their zodiac sign, planetary positions, and other astrological factors."
  },
  {
    title: "Astrology Image Processing through Hand",
    problemStatement: "Palm reading (chiromancy) is a traditional method of astrology that lacks integration with modern technology.",
    description: "An app that uses image processing technology to read and interpret the lines and shapes on a person’s hand. The app analyzes the palm and provides personalized astrological insights based on palmistry principles."
  },
  {
    title: "Astrology App Prediction from Birth Date, Planets, and Direction",
    problemStatement: "Accurate astrological predictions require knowledge of a person's birth details and planetary positions, which can be difficult for people to calculate.",
    description: "An app that generates personalized astrological predictions based on a user’s birth date, time, and location. It uses data about planetary movements, celestial directions, and astrological charts to provide insights into career, relationships, and personal development."
  },
  {
    title: "Business Intelligence for Ideas",
    problemStatement: "Entrepreneurs and businesses often struggle to assess the feasibility and market potential of new ideas.",
    description: "A business intelligence platform that helps users evaluate the potential success of their ideas. It analyzes market trends, customer demand, competition, and other factors to provide actionable insights into whether an idea is worth pursuing."
  },
  {
    title: "Start-Up Documentation: Steps and Package for HR and Management",
    problemStatement: "Start-ups often lack a structured approach to setting up HR and management systems, leading to inefficiencies and disorganization.",
    description: "A comprehensive documentation package that provides start-ups with the tools they need to set up HR and management functions. It includes templates, policies, workflows, and compliance guidelines to help companies structure their operations from the start."
  },
  {
    title: "Smart Home Energy Management System",
    problemStatement: "Many households struggle with high energy consumption and inefficiency, lacking the tools to manage energy use effectively.",
    description: "A smart home energy management system that tracks energy usage in real-time. It optimizes energy consumption by controlling appliances and providing actionable insights to reduce electricity costs and improve energy efficiency."
  },
  {
    title: "AI-Based Resume Screening Tool",
    problemStatement: "Hiring managers often receive hundreds of resumes, making it difficult to find the best candidates efficiently.",
    description: "An AI-powered resume screening tool that uses machine learning to analyze resumes and match the most qualified candidates with job requirements. The tool highlights key skills, experiences, and qualifications to streamline the hiring process."
  },
  {
    title: "Blockchain-Based Voting System",
    problemStatement: "Traditional voting systems can be prone to fraud, inefficiency, and lack of transparency.",
    description: "A blockchain-based voting platform that ensures secure, transparent, and tamper-proof elections. It allows citizens to vote remotely while providing a transparent and auditable voting process that cannot be manipulated."
  },
  {
    title: "AI-Powered Content Generator for Blogs",
    problemStatement: "Content creators and bloggers often struggle to consistently generate fresh and engaging ideas for their audience.",
    description: "An AI-powered content generator that helps bloggers create SEO-optimized articles. The tool analyzes current trends, generates outlines, and drafts full articles based on targeted keywords and audience preferences."
  },
  {
    title: "Personalized Nutrition and Meal Planner App",
    problemStatement: "People find it challenging to maintain healthy eating habits due to a lack of personalized meal planning based on dietary needs.",
    description: "An AI-based nutrition app that creates personalized meal plans based on an individual's dietary preferences, health goals, and fitness activities. It provides recipes, shopping lists, and integrates with fitness trackers to monitor progress."
  },
  {
    title: "AI-Based Language Learning Platform",
    problemStatement: "Many language learners struggle with finding personalized, effective ways to improve their language skills outside of traditional classroom settings.",
    description: "An AI-powered platform that adapts to a learner's language proficiency level. It offers personalized lessons, conversational practice with chatbots, and feedback on pronunciation, grammar, and fluency, allowing users to learn at their own pace."
  },
  {
    title: "Smart Waste Management System",
    problemStatement: "Cities often struggle with inefficient waste collection and disposal, leading to environmental pollution.",
    description: "A smart waste management system that uses IoT sensors to monitor trash levels in bins. The system optimizes waste collection routes and schedules, reducing costs and environmental impact."
  },
  {
    title: "VR-Based Educational Platform for Skill Training",
    problemStatement: "Traditional education and skill training methods can be limited in their ability to provide hands-on experience.",
    description: "A virtual reality (VR) platform that offers immersive, hands-on training experiences in various fields such as medical, engineering, and arts. It allows learners to practice real-world skills in a safe, controlled environment."
  }
];


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const problemsPerPage = 7;

  // Filter problems based on search query
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
            serialNumber={indexOfFirstProblem + index + 1} // Add serial number
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