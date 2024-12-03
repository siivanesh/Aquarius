import React from 'react';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { Horoscope } from './components/Horoscope';
import { Compatibility } from './components/Compatibility';
import { FamousAquarians } from './components/FamousAquarians';
import { AstrologicalFacts } from './components/AstrologicalFacts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Overview />
        <Horoscope />
        <Compatibility />
        <AstrologicalFacts />
        <FamousAquarians />
      </main>
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Aquarius Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;