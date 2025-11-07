import React from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd process the payment here.
    clearCart();
    window.location.hash = '#/confirmation';
  };
  
  // Redirect if cart is empty
  if (cartItems.length === 0) {
      window.location.hash = '#/cart';
      return null;
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Shipping & Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 border w-full" required />
              <input type="text" placeholder="Last Name" className="p-3 border w-full" required />
              <input type="email" placeholder="Email Address" className="p-3 border sm:col-span-2" required />
              <input type="text" placeholder="Address" className="p-3 border sm:col-span-2" required />
              <input type="text" placeholder="City" className="p-3 border" required />
              <input type="text" placeholder="Postal Code" className="p-3 border" required />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
             <div className="space-y-4">
               <input type="text" placeholder="Card Number" className="p-3 border w-full" required />
               <input type="text" placeholder="Name on Card" className="p-3 border w-full" required />
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="MM / YY" className="p-3 border w-full" required />
                 <input type="text" placeholder="CVC" className="p-3 border w-full" required />
               </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-brand-dark text-brand-off-white font-bold py-4 px-10 hover:bg-brand-dark/80 transition-colors duration-300">
            Pay ${subtotal.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-8 shadow-sm h-fit">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id + item.size} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src={item.images[0].url} alt={item.images[0].alt} className="w-16 h-20 object-cover" />
                    <div>
                        <p className="font-bold">{item.name} <span className="font-normal">x {item.quantity}</span></p>
                        <p className="text-sm text-brand-dark/70">Size: {item.size}</p>
                    </div>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t my-6 pt-6">
             <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p className="font-bold text-xl">${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
