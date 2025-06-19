// src/components/CategoryGrid.jsx
import React from 'react';

const categories = [
  { name: 'Men', image: '/assets/images/men.jpg' },
  { name: 'Women', image: '/assets/images/women.jpg' },
  { name: 'Accessories', image: '/assets/images/accessories.jpg' },
];

const CategoryGrid = () => {
  return (
    <section className="my-12 px-4 md:px-12">
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="relative group overflow-hidden rounded shadow-lg">
            <img src={cat.image} alt={cat.name} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
