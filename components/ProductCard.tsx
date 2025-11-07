import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a href={`#/product/${product.id}`} className="block group">
      <div className="bg-white p-4 shadow-sm h-full flex flex-col">
        <div className="overflow-hidden mb-4">
          <img
            src={product.images[0].url}
            alt={product.images[0].alt}
            className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mt-auto text-center">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="mt-1 text-md text-brand-dark/80">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
