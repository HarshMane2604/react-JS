import React from 'react'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-emerald-400 mb-6">📞 Contact Us</h1>
      <form className="w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-2 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs