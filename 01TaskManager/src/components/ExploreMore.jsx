import React from 'react'

import { Link } from "react-router-dom";

const ExploreMore = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-400 mb-6">🔍 Explore More</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <Link to="/features" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition text-center">
          <h2 className="text-xl font-semibold">🚀 Features</h2>
          <p className="text-gray-400">See what this app can really do.</p>
        </Link>
        <Link to="/faq" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition text-center">
          <h2 className="text-xl font-semibold">❓ FAQ</h2>
          <p className="text-gray-400">Got questions? We've got answers.</p>
        </Link>
        <Link to="/blog" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition text-center">
          <h2 className="text-xl font-semibold">📚 Blog</h2>
          <p className="text-gray-400">Tips & tricks to slay productivity.</p>
        </Link>
      </div>
    </div>
  );
};

export default ExploreMore