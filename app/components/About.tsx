export default function About() {
  const teamMembers = [
    'Leno Simon Anand',
    'Liya Jos',
    'Pulikkal Eby Dominic',
    'Seon Jipson'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About FLUENS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Communication is a fundamental human right. FLUENS bridges the gap between the hearing and speech-impaired using Hall effect sensors, machine learning, and text-to-speech technology.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">The Challenge</h3>
                <p className="text-blue-800">
                  Millions rely on sign language but face barriers in communication and accessibility. Traditional interpretation methods are limited and not always available.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-900 mb-3">Our Vision</h3>
                <p className="text-teal-800">
                  To make communication accessible for everyone through wearable, real-time translation technology that empowers independence and inclusion.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Team</h3>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-gray-800">Team Members</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                    <span className="font-medium text-gray-800">{member}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Guide</h4>
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="font-medium text-blue-900">Ms. Chinchu Jose</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "To create technology that doesn't just connect devices, but connects hearts and minds, breaking down barriers and building bridges to a more inclusive world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}