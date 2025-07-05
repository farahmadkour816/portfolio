import React from "react";

const WhyMe = () => {
  return (
    <div className="mt-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        My "Why Me" Video
      </h2>
      <p className="text-gray-300 text-lg mb-6 text-center max-w-3xl mx-auto">
        This video shares my personal journey, what drives me as a software engineering student, and how my co-op experiences and goals reflect my passion for using technology to create impact — especially in the healthcare and data systems space.
      </p>
      <div className="flex justify-center">
        <a
          href="https://your-video-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default WhyMe;
