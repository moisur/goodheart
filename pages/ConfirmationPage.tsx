import React from 'react';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 md:py-32 text-center">
      <div className="max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto mb-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold mb-4">Thank You For Your Order!</h1>
        <p className="text-lg text-brand-dark/80 mb-8">
          Your purchase was successful. A confirmation email has been sent to you with the details of your order.
        </p>
        <a 
          href="#/" 
          className="bg-brand-dark text-brand-off-white font-bold py-4 px-10 hover:bg-brand-dark/80 transition-colors duration-300"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default ConfirmationPage;
