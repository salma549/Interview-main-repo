import React from 'react';
import HomeCarousel from '../pages/HomeCarousel';


const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-500 text-white h-[600px] flex items-center justify-center">
  <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
      Master Your Interviews with AI-Powered Preparation
    </h1>
    <p className="text-lg md:text-xl font-light mb-8 max-w-lg mx-auto">
      Upload your resume and generate personalized interview questions based on your skills or enter a topic to generate relevant Q&A.
    </p>
    <div className="space-x-4">
      <button className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-2 md:py-4 px-4 md:px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
        Upload Your Resume
      </button>
      <button className="bg-white text-purple-700 py-2 md:py-4 px-4 md:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 mt-2">
        Generate Questions
      </button>
    </div>
  </div>
</section>


  <HomeCarousel/>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6">How It Works</h2>
          <p className="text-lg font-light text-gray-600 mb-12">
            Our platform uses AI to provide tailored interview questions and expert insights based on your resume or specific topics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Upload Your Resume</h3>
              <p className="text-gray-600">
                Simply upload your resume, and our system will extract your skills and generate relevant questions to help you prepare.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Enter a Topic</h3>
              <p className="text-gray-600">
                Choose any topic, and our AI will generate comprehensive questions and answers to help you master it.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 hover:cursor-pointer">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Get Expert Insights</h3>
              <p className="text-gray-600">
                Along with personalized questions, we provide tips and insights from industry experts on how to answer them effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-4xl font-extrabold mb-6">What Our Users Say</h2>
          <p className="text-lg font-light text-gray-600 mb-12">
            Thousands of users have aced their interviews with our AI-driven platform. Here’s what they say:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg  hover:scale-105 hover:cursor-pointer">
              <p className="text-gray-600 italic">
                "I was able to tailor my preparation for the exact role I was applying for. The questions were spot on!"
              </p>
              <h4 className="text-lg font-bold mt-4">- Sarah, Software Developer</h4>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg hover:scale-105 hover:cursor-pointer">
              <p className="text-gray-600 italic">
                "This platform helped me practice with real questions based on my resume. I felt much more confident."
              </p>
              <h4 className="text-lg font-bold mt-4">- John, Data Scientist</h4>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg hover:scale-105 hover:cursor-pointer">
              <p className="text-gray-600 italic">
                "The expert tips were invaluable. They helped me refine my answers and stand out from other candidates."
              </p>
              <h4 className="text-lg font-bold mt-4">- Emily, Marketing Manager</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">Get Started Today</h2>
          <p className="text-xl font-light mb-8">
            Whether it's a new job or a promotion, we’re here to help you succeed. Start preparing with personalized questions now.
          </p>
          <button className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 px-8 rounded-full shadow-lg transform hover:scale-105">
            Upload Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
