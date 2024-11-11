'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Introduction Section */}
        <section className="text-center py-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Headlands Tech Application - Snehit Vaddi</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">
              As requested in the application, I've created a C++ program that calculates 
              and prints the square root of 42. Below you can find the code and its output.
            </p>
          </div>
        </section>

        {/* C++ Code Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Square Root of 42 Program</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Code:</h2>
              <Image 
                src="/Code.jpg"
                alt="C++ Code for Square Root of 42"
                width={500}
                height={300}
                className="w-full"
              />
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Output:</h2>
              <Image 
                src="/Result.jpg"
                alt="Program Output"
                width={500}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Recruiter Message Section */}
        <section className="text-center py-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p className="leading-relaxed">
              To provide you with a comprehensive view of my background and capabilities, 
              I've included a live preview of my portfolio below.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mt-4">
              <span className="px-3 py-1 bg-blue-50 rounded-full">🎓 Computer Science Graduate</span>
              <span className="px-3 py-1 bg-blue-50 rounded-full">💻 C++ Proficient</span>
              <span className="px-3 py-1 bg-blue-50 rounded-full">📊 Algorithm Enthusiast</span>
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">My Portfolio</h2>
            <div className="text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full flex items-center">
              <span className="animate-pulse mr-2">🟢</span>
              Live Preview
            </div>
          </div>
          
          {/* Website Preview Window */}
          <div className="border rounded-lg shadow-xl bg-white overflow-hidden">
            {/* Browser-like top bar */}
            <div className="bg-gray-100 p-3 border-b flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600">
                  snehitvaddi.com
                </div>
              </div>
            </div>
            
            <div className="w-full h-[600px] relative">
              <iframe 
                src="https://snehitvaddi.com"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
              
              <Link 
                href="https://snehitvaddi.com"
                target="_blank"
                className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full 
                          shadow-lg hover:bg-blue-700 transition-all duration-300 
                          hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              >
                <span>View Full Portfolio</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}