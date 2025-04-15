import React from 'react';

import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 600 },
  { id: 3, name: 'Watch', price: 200 },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {dummyProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex justify-end">
        
      </div>
    </div>
  );
};

export default Home;
  