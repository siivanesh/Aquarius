import React from 'react';

export const Compatibility = () => {
  return (
    <section id="compatibility" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">Compatibility Guide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { sign: "Gemini", compatibility: "Excellent", description: "Perfect intellectual match" },
            { sign: "Libra", compatibility: "Excellent", description: "Strong mental connection" },
            { sign: "Aries", compatibility: "Good", description: "Exciting and dynamic" },
            { sign: "Sagittarius", compatibility: "Good", description: "Adventure and freedom" },
            { sign: "Leo", compatibility: "Moderate", description: "Creative but challenging" },
            { sign: "Taurus", compatibility: "Challenging", description: "Different approaches to life" }
          ].map((match) => (
            <div key={match.sign} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{match.sign}</h3>
              <div className="mb-2">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  match.compatibility === 'Excellent' ? 'bg-green-100 text-green-800' :
                  match.compatibility === 'Good' ? 'bg-blue-100 text-blue-800' :
                  match.compatibility === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {match.compatibility}
                </span>
              </div>
              <p className="text-gray-700">{match.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}