import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-6">Your cart is currently empty.</p>
          <a href="#/" className="text-lg font-semibold border-b-2 border-brand-dark hover:text-brand-dark/70">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="hidden md:grid grid-cols-6 gap-4 font-bold uppercase text-sm text-brand-dark/60 pb-4 border-b">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>
            {cartItems.map(item => (
              <div key={item.id + item.size} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-6 border-b">
                {/* Product Info */}
                <div className="col-span-1 md:col-span-3 flex items-center space-x-4">
                  <a href={`#/product/${item.id}`} className="w-24 h-32 flex-shrink-0 bg-white">
                    <img src={item.images[0].url} alt={item.images[0].alt} className="w-full h-full object-cover" />
                  </a>
                  <div>
                    <a href={`#/product/${item.id}`} className="font-bold text-lg hover:underline">{item.name}</a>
                    <p className="text-sm text-brand-dark/70">Size: {item.size}</p>
                    <button onClick={() => removeFromCart(item.id, item.size)} className="text-sm text-red-600 hover:underline mt-1">
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center md:text-base text-sm">
                   <span className="md:hidden font-bold">Price: </span>${item.price.toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="flex justify-center items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                    className="w-20 p-2 border text-center"
                  />
                </div>

                {/* Total */}
                <div className="text-right font-bold">
                   <span className="md:hidden">Total: </span>${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky top-28 h-fit bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-brand-dark/60 mb-6">
              Shipping & taxes calculated at checkout.
            </p>
            <a href="#/checkout" className="w-full block text-center bg-brand-dark text-brand-off-white font-bold py-4 px-10 hover:bg-brand-dark/80 transition-colors duration-300">
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
