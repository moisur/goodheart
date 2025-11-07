import React from 'react';
import { Product } from '../types';

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Avis clients</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{review.author}</span>
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;