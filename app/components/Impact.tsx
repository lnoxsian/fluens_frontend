export default function Impact() {
  const impactAreas = [
    {
      icon: '🤝',
      title: 'Social Inclusion',
      description: 'Breaking down communication barriers and fostering inclusive communities where everyone can participate equally.',
    },
    {
      icon: '💼',
      title: 'Employment Opportunities',
      description: 'Enabling better workplace communication and opening new career paths for the hearing-impaired community.',
    },
    {
      icon: '🏥',
      title: 'Healthcare Access',
      description: 'Improving patient-doctor communication in medical settings, ensuring better healthcare outcomes.',
    },
    {
      icon: '🎓',
      title: 'Educational Empowerment',
      description: 'Facilitating better learning experiences and classroom participation for deaf and hard-of-hearing students.',
    },
  ];

  const futurePlans = [
    {
      phase: 'Phase 1',
      title: 'Multilingual Sign Language Support',
      description: 'Expanding beyond American Sign Language to support international sign languages including ASL, BSL, and regional variants.',
      timeline: '6 months',
      color: 'blue',
    },
    {
      phase: 'Phase 2',
      title: 'Enhanced Portability & Efficiency',
      description: 'Developing a more compact design with improved battery life and faster processing capabilities.',
      timeline: '12 months',
      color: 'teal',
    },
    {
      phase: 'Phase 3',
      title: 'Real-time Multilingual Translation',
      description: 'Enabling translation between different spoken languages and sign languages in real-time.',
      timeline: '18 months',
      color: 'purple',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FLUENS is more than technology—it's a bridge to inclusive communication that transforms lives and communities
          </p>
        </div>

        {/* Current Impact */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Empowering Communication Today</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-blue-900 mb-4">For the Deaf and Hard-of-Hearing Community</h5>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduces dependence on human interpreters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Increases independence in daily communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Provides privacy in personal conversations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Available 24/7 without scheduling constraints</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-teal-900 mb-4">For the Broader Community</h5>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Promotes inclusive and accessible communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Educates about sign language and deaf culture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Creates more inclusive public spaces</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduces communication anxiety and barriers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Plans */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Future Development Roadmap</h3>
          
          <div className="space-y-8">
            {futurePlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.color === 'blue' ? 'border-l-4 border-blue-600' :
                plan.color === 'teal' ? 'border-l-4 border-teal-600' :
                'border-l-4 border-purple-600'
              }`}>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                        plan.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        plan.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {plan.phase}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">{plan.title}</h4>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      plan.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                      plan.color === 'teal' ? 'bg-teal-50 text-teal-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {plan.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Help us create a world where communication knows no barriers. Together, we can make inclusive technology accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Support Our Research
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}