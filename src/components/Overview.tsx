import React from 'react';

export const Overview = () => {
  return (
    <section id="overview" className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">Aquarius Overview</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Aquarius, the Water Bearer, is the eleventh sign of the zodiac. Born between January 20 and February 18, 
              Aquarians are known for their progressive thinking, humanitarian nature, and intellectual approach to life.
            </p>
            <p className="text-lg text-gray-700">
              Ruled by Uranus, Aquarians are visionaries who value independence, innovation, and social justice. 
              Their forward-thinking mindset often puts them ahead of their time.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=800"
              alt="Aquarius constellation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}