import React from 'react';

export const FamousAquarians = () => {
  const celebrities = [
    {
      name: "Harry Styles",
      occupation: "Singer, Actor",
      image: "https://images.unsplash.com/photo-1706003036587-1ad4338f5511?auto=format&fit=crop&w=400",
      birthDate: "February 1, 1994"
    },
    {
      name: "Jennifer Aniston",
      occupation: "Actress",
      image: "https://images.unsplash.com/photo-1705849756393-d7cc7c6ad75d?auto=format&fit=crop&w=400",
      birthDate: "February 11, 1969"
    },
    {
      name: "The Weeknd",
      occupation: "Singer",
      image: "https://images.unsplash.com/photo-1706003036587-1ad4338f5511?auto=format&fit=crop&w=400",
      birthDate: "February 16, 1990"
    }
  ];

  return (
    <section id="famous" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">Famous Aquarians</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {celebrities.map((celebrity) => (
            <div key={celebrity.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={celebrity.image} 
                alt={celebrity.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{celebrity.name}</h3>
                <p className="text-gray-600 mb-2">{celebrity.occupation}</p>
                <p className="text-sm text-gray-500">{celebrity.birthDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}