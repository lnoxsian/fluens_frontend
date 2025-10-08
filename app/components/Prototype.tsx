'use client';

import { useState } from 'react';

export default function Prototype() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Placeholder gallery images - can be replaced with actual prototype photos
  const galleryImages = [
    {
      src: '/placeholder-glove-1.jpg',
      alt: 'FLUENS Glove Prototype - Front View',
      caption: 'Complete glove prototype with embedded sensors'
    },
    {
      src: '/placeholder-glove-2.jpg',
      alt: 'FLUENS Glove Prototype - Sensor Detail',
      caption: 'Hall effect sensors integrated into fingertips'
    },
    {
      src: '/placeholder-circuit.jpg',
      alt: 'Circuit Board and ESP32',
      caption: 'ESP32 microcontroller and processing unit'
    },
    {
      src: '/placeholder-demo.jpg',
      alt: 'Demo Setup',
      caption: 'Complete system demonstration setup'
    }
  ];

  return (
    <section id="prototype" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prototype & Demo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our working prototype in action and explore the hardware that makes FLUENS possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prototype Gallery</h3>
            
            {/* Main Image Display */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                {/* Placeholder for main image */}
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">📷</div>
                  <p className="text-gray-500">{galleryImages[selectedImage].caption}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-gray-400">📷</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Video Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Live Demo</h3>
            
            {/* Video Player Placeholder */}
            <div className="bg-black rounded-xl shadow-lg overflow-hidden aspect-video mb-6">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <h4 className="text-xl font-semibold mb-2">FLUENS Demo Video</h4>
                  <p className="text-gray-300">Watch our prototype in action</p>
                </div>
              </div>
            </div>

            {/* Demo Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Demo Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Real-time gesture recognition and speech output</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Common sign language phrases and alphabet</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Wireless connectivity demonstration</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Both cloud and offline mode operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Prototype Specifications</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl text-blue-600 mb-3">⚡</div>
              <h4 className="font-semibold text-gray-800 mb-2">Power</h4>
              <p className="text-gray-600">3.7V Li-Po Battery<br/>8+ hours operation</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-teal-600 mb-3">📡</div>
              <h4 className="font-semibold text-gray-800 mb-2">Connectivity</h4>
              <p className="text-gray-600">WiFi 802.11 b/g/n<br/>Bluetooth 4.2</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-purple-600 mb-3">🔧</div>
              <h4 className="font-semibold text-gray-800 mb-2">Sensors</h4>
              <p className="text-gray-600">5x Hall Effect Sensors<br/>16-bit resolution</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl text-orange-600 mb-3">⚖️</div>
              <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
              <p className="text-gray-600">Lightweight: 150g<br/>Comfortable fit</p>
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold mb-4">Explore the Code</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Our project is open source! Check out our code, documentation, and contribute to making communication more accessible.
            </p>
            <a
              href="https://github.com/lnoxsian/fluens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View Project on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}