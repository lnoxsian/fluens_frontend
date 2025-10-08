export default function Research() {
  return (
    <section id="research" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Methodology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive research approach combines social impact studies with cutting-edge technical innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Problem Statements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Problem Statements</h3>
              
              <div className="space-y-6">
                <div className="bg-red-900/50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">Social Problem</h4>
                  <p className="text-red-200 leading-relaxed">
                    Over 466 million people worldwide have hearing disabilities, with many relying on sign language for communication. 
                    However, the majority of the hearing population doesn't understand sign language, creating significant barriers in 
                    education, employment, healthcare, and social interactions.
                  </p>
                </div>

                <div className="bg-orange-900/50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">Technical Problem</h4>
                  <p className="text-orange-200 leading-relaxed">
                    Existing sign language recognition systems rely heavily on computer vision, which faces challenges with 
                    varying lighting conditions, background interference, and privacy concerns. These limitations make them 
                    impractical for real-world, everyday use.
                  </p>
                </div>
              </div>
            </div>

            {/* System Design */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">System Design Approach</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Data Collection & Processing</h4>
                  <p className="text-blue-200 text-sm">
                    Hall effect sensors capture magnetic field variations caused by hand movements, providing precise gesture data that's independent of environmental conditions.
                  </p>
                </div>

                <div className="bg-green-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Machine Learning Pipeline</h4>
                  <p className="text-green-200 text-sm">
                    Custom ML models trained on gesture patterns to recognize and classify sign language movements with high accuracy and low latency.
                  </p>
                </div>

                <div className="bg-violet-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-violet-300 mb-2">Real-time Processing</h4>
                  <p className="text-violet-200 text-sm">
                    Optimized algorithms ensure minimal delay between gesture input and speech output, enabling natural conversation flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Emphasis */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">Research Focus</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  Real-time gesture recognition with sub-second latency
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  Inclusive design prioritizing user comfort and accessibility
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  Privacy-first approach with optional offline processing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  Cost-effective solution for widespread adoption
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - System Diagram */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 text-center">System Architecture</h3>
              
              {/* System Flow Diagram */}
              <div className="space-y-6">
                {/* Input Layer */}
                <div className="bg-gray-700 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl mb-2">🤏</div>
                  <div className="font-semibold text-gray-200">Hall Effect Sensors</div>
                  <div className="text-sm text-gray-400">Gesture Detection</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-2xl text-gray-500">↓</div>
                </div>

                {/* Processing Layer */}
                <div className="bg-gray-700 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl mb-2">📡</div>
                  <div className="font-semibold text-gray-200">ESP32 Microcontroller</div>
                  <div className="text-sm text-gray-400">Data Transmission</div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-2xl text-gray-500">↓</div>
                </div>

                {/* ML Processing */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-800 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">☁️</div>
                    <div className="font-semibold text-blue-200 text-sm">Cloud ML</div>
                  </div>
                  <div className="bg-violet-800 p-4 rounded-lg text-center">
                    <div className="text-xl mb-2">🥧</div>
                    <div className="font-semibold text-violet-200 text-sm">Raspberry Pi</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="text-2xl text-gray-500">↓</div>
                </div>

                {/* Output Layer */}
                <div className="bg-gray-700 p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl mb-2">🔊</div>
                  <div className="font-semibold text-gray-200">Speech Output</div>
                  <div className="text-sm text-gray-400">Text-to-Speech</div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 pt-6 border-t border-gray-600">
                <h4 className="font-semibold text-gray-200 mb-4">Key Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency:</span>
                    <span className="font-medium text-gray-200">&lt; 500ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="font-medium text-gray-200">&gt; 95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Battery Life:</span>
                    <span className="font-medium text-gray-200">8+ hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Range:</span>
                    <span className="font-medium text-gray-200">10 meters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}