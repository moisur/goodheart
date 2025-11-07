import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductReviews from '../components/ProductReviews';

interface ProductPageProps {
  productId: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
  const product = products.find(p => p.id === productId);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const [notification, setNotification] = useState('');

  console.log("Product ID:", productId);
  console.log("Found Product:", product);

  if (!product) {
    return <div className="container mx-auto px-6 py-20 text-center">Product not found for ID: {productId}</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setNotification(`${product.name} (${selectedSize}) has been added to your cart!`);
    setTimeout(() => setNotification(''), 3000);
  };
  
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      {notification && (
        <div className="fixed top-24 right-6 bg-brand-dark text-brand-off-white py-3 px-6 shadow-lg animate-fade-in-out">
          {notification}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img 
              src={product.images[selectedImageIndex].url} 
              alt={product.images[selectedImageIndex].alt}
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-24 h-auto p-1 border ${selectedImageIndex === index ? 'border-brand-dark' : 'border-transparent'}`}
              >
                <img src={image.url} alt={image.alt} className="w-full object-cover aspect-[4/5]" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:sticky top-28">
            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-3xl mb-6">${product.price.toFixed(2)}</p>
            <p className="text-brand-dark/80 mb-8">{product.description}</p>

            <div className="mb-6">
                <label htmlFor="size" className="block text-sm font-medium mb-2">Size</label>
                <select 
                    id="size" 
                    name="size" 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border border-gray-300 p-3 bg-transparent focus:border-brand-dark focus:ring-0"
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>X-Large</option>
                </select>
            </div>
            
             <div className="mb-8">
                <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
                 <input 
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="w-24 border border-gray-300 p-3 text-center bg-transparent focus:border-brand-dark focus:ring-0"
                 />
            </div>

            <button
                onClick={handleAddToCart}
                className="w-full bg-brand-dark text-brand-off-white font-bold py-4 px-10 hover:bg-brand-dark/80 transition-colors duration-300 mb-6"
            >
              Add to Cart
            </button>

            {/* Trust Badges - Compact et discret */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="flex items-center">
                  <span className="mr-1 text-black">🚚</span>
                  <span>{product.shipping}</span>
                </div>
                <div className="h-4 w-px bg-gray-300 mx-2"></div>
                <div className="flex items-center">
                  <span className="mr-1 text-black">🔒</span>
                  <span>{product.payment}</span>
                </div>
                <div className="h-4 w-px bg-gray-300 mx-2"></div>
                <div className="flex items-center">
                  <span className="mr-1 text-black">✓</span>
                  <span>{product.warranty}</span>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Reviews and Features Section */}
      <ProductReviews product={product} />
    </div>
  );
};

export default ProductPage;
