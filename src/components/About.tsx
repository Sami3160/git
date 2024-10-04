import React from 'react';

function AboutUs():React.ReactElement {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-gray-200 py-12 px-6 ">
       <h1 className=" text-center text-5xl font-extrabold text-indigo-700 mb-4 py-4 transition duration-300">
            About Us
          </h1>
          <hr className="border-t border-gray-800 my-4" /> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl   font-bold text-indigo-700 mb-4 transition duration-300">
            Gharda Institute of Technology (GIT)
          </h1>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            We are a leading engineering institution committed to fostering
            innovation, research, and excellence in education. Our mission is to
            prepare students for the challenges of the modern world through
            quality education and hands-on training.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105 font-semibold"
          >
            Explore GIT Programs
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.git-india.edu.in/git/images/slider/1.webp" // Replace with your actual image
            alt="GIT Campus"
            className="w-full rounded-lg shadow-lg md:shadow-2xl h-96 object-cover transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        <section className="flex flex-col items-center space-y-4 bg-white rounded-lg p-6 shadow-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-indigo-600">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            We provide high-quality education that empowers students to become
            leaders. We create an environment that encourages critical thinking,
            creativity, and ethical practices.
          </p>
        </section>
        <section className="flex flex-col items-center space-y-4 bg-white rounded-lg p-6 shadow-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-indigo-600">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            To be recognized as a leading engineering institution, known for our
            innovative curriculum, state-of-the-art facilities, and commitment to
            student development.
          </p>
        </section>
        <section className="flex flex-col items-center space-y-4 bg-white rounded-lg p-6 shadow-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-indigo-600">
            Why Choose GIT?
          </h2>
          <ul className="list-disc space-y-2 text-gray-700 text-sm">
            <li>Experienced Faculty</li>
            <li>Modern Infrastructure</li>
            <li>Industry Collaborations</li>
            <li>Comprehensive Curriculum</li>
            <li>Student-Centric Approach</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
