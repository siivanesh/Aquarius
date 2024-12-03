import React from 'react';
import { Star, Heart, Gem, Flower2 } from 'lucide-react';

export const AstrologicalFacts = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">Astrological Facts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Star className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Element</h3>
            <p className="text-gray-700">Air - Intellectual and communicative</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-700">Fixed - Determined and reliable</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Gem className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ruling Planet</h3>
            <p className="text-gray-700">Uranus - Innovation and rebellion</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Flower2 className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lucky Colors</h3>
            <p className="text-gray-700">Electric blue, turquoise, silver</p>
          </div>
        </div>
      </div>
    </section>
  );
}