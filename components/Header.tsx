import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const UnbuttonedCoLogo: React.FC = () => (
  <a href="#/" className="flex items-center space-x-3">
    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-dark">
      <path d="M5 1C5 0.447715 4.55228 0 4 0C3.44772 0 3 0.447715 3 1V3C3 10.732 9.26801 17 17 17H15C7.26801 17 1 10.732 1 3V1C1 0.447715 0.552285 0 0 0C-0.552285 0 -1 0.447715 -1 1V3C-1 11.8284 6.17157 19 15 19H17C25.8284 19 33 11.8284 33 3V1C33 0.447715 32.5523 0 32 0C31.4477 0 31 0.447715 31 1V3C31 10.732 24.732 17 17 17H15C22.732 17 29 10.732 29 3V1C29 0.447715 28.5523 0 28 0C27.4477 0 27 0.447715 27 1V3C27 9.62742 21.6274 15 15 15H17C23.6274 15 29 9.62742 29 3V35C29 35.5523 28.5523 36 28 36C27.4477 36 27 35.5523 27 35V3C27 8.52285 22.5228 13 17 13H15C9.47715 13 5 8.52285 5 3V35C5 35.5523 4.55228 36 4 36C3.44772 36 3 35.5523 3 35V3Z" fill="currentColor"/>
      <circle cx="12" cy="8" r="3" fill="currentColor"/>
      <circle cx="20" cy="8" r="3" fill="currentColor"/>
      <path d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75C11.5858 8.75 11.25 8.41421 11.25 8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#F8F8F8"/>
      <path d="M20 7.25C20.4142 7.25 20.75 7.58579 20.75 8C20.75 8.41421 20.4142 8.75 20 8.75C19.5858 8.75 19.25 8.41421 19.25 8C19.25 7.58579 19.5858 7.25 20 7.25Z" fill="#F8F8F8"/>
       <path d="M12.5303 7.46967C12.2374 7.17678 11.7626 7.17678 11.4697 7.46967C11.1768 7.76256 11.1768 8.23744 11.4697 8.53033L12.5303 7.46967ZM11.4697 8.53033L12.5303 9.591L13.591 8.53033L12.5303 7.46967L11.4697 8.53033Z" fill="#F8F8F8"/>
        <path d="M20.5303 7.46967C20.2374 7.17678 19.7626 7.17678 19.4697 7.46967C19.1768 7.76256 19.1768 8.23744 19.4697 8.53033L20.5303 7.46967ZM19.4697 8.53033L20.5303 9.591L21.591 8.53033L20.5303 7.46967L19.4697 8.53033Z" fill="#F8F8F8"/>
    </svg>
    <span className="text-xl font-bold tracking-wider">The Unbuttoned Co.</span>
  </a>
);

const CartIcon: React.FC = () => {
    const { cartItems } = useCart();
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <a href="#/cart" className="relative hover:text-opacity-70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-brand-dark text-brand-off-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                 </span>
            )}
        </a>
    );
};


const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-off-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <UnbuttonedCoLogo />
                <div className="hidden md:flex items-center space-x-8">
                    <a href="/#collection" className="hover:text-opacity-70 transition-colors">Shop</a>
                    <a href="/#about" className="hover:text-opacity-70 transition-colors">About</a>
                    <a href="#/contact" className="hover:text-opacity-70 transition-colors">Contact</a>
                </div>
                <div className="flex items-center space-x-4">
                     <CartIcon />
                    <button className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;