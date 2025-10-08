export default function Technology() {
  const techSteps = [
    {
      step: 1,
      title: 'Gesture Detection',
      description: 'Hall effect sensors capture hand and finger movements with precision',
      icon: '🤏',
    },
    {
      step: 2,
      title: 'Data Transmission',
      description: 'ESP32 microcontroller sends gesture data wirelessly in real-time',
      icon: '📡',
    },
    {
      step: 3,
      title: 'Processing',
      description: 'Machine learning model interprets gestures and converts them into text',
      icon: '🧠',
    },
    {
      step: 4,
      title: 'Speech Output',
      description: 'Text-to-speech technology converts processed text into audible speech',
      icon: '🔊',
    },
  ];

  const operationModes = [
    {
      title: 'Cloud-Based Mode',
      description: 'Leverages cloud computing for complex ML processing and continuous model updates',
      features: ['High accuracy', 'Continuous learning', 'Remote updates', 'Scalable processing'],
      color: 'blue',
    },
    {
      title: 'Offline Mode',
      description: 'Raspberry Pi 5 enables local processing for privacy and reliability',
      features: ['Privacy focused', 'No internet required', 'Low latency', 'Secure processing'],
      color: 'teal',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology Behind FLUENS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative approach combines cutting-edge hardware with advanced machine learning to create seamless communication
          </p>
        </div>

        {/* Technology Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modes of Operation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Modes of Operation</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {operationModes.map((mode, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${
                mode.color === 'blue' ? 'border-blue-600' : 'border-teal-600'
              }`}>
                <h4 className={`text-2xl font-bold mb-4 ${
                  mode.color === 'blue' ? 'text-blue-900' : 'text-teal-900'
                }`}>
                  {mode.title}
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{mode.description}</p>
                <div className="space-y-3">
                  {mode.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        mode.color === 'blue' ? 'bg-blue-600' : 'bg-teal-600'
                      }`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Why Hall Effect Sensors */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Why Hall Effect Sensors?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Works in any lighting conditions and background environments</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Compact design enabling comfortable wearable integration</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Low-cost solution making technology accessible</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Energy-efficient for extended battery life</span>
              </div>
            </div>
          </div>

          {/* Innovation Highlight */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Innovation Highlight</h3>
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">
                First-of-its-kind application of Hall effect sensors for sign language recognition
              </p>
              <p className="leading-relaxed">
                While others rely on cameras and computer vision, we've pioneered the use of magnetic field sensors to create a more reliable, privacy-friendly solution that works in any environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}