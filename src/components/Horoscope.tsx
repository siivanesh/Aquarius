import React from 'react';
import { Stars, Sun, Moon } from 'lucide-react';

export const Horoscope = () => {
  return (
    <section id="horoscope" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">Daily Horoscope</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Sun className="h-6 w-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold">Today</h3>
            </div>
            <p className="text-gray-700">
              Your innovative ideas are particularly strong today. Trust your intuition and don't be afraid to think outside the box.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Moon className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Tomorrow</h3>
            </div>
            <p className="text-gray-700">
              Social connections will prove valuable. Network and collaborate with others to achieve your goals.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Stars className="h-6 w-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold">Weekly</h3>
            </div>
            <p className="text-gray-700">
              Focus on personal growth and learning. New opportunities for advancement are on the horizon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}