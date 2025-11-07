import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductShowcase: React.FC = () => {
  return (
    <section id="collection" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">The Collection</h2>
            <p className="text-lg text-brand-dark/70 mt-2">Timeless designs for the modern individual.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;