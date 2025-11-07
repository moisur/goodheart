import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductShowcase from '../components/ProductShowcase';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <ProductShowcase />
            <About />
        </>
    );
};

export default HomePage;
