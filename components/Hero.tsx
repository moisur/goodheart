import React from 'react';

const GoodHandGoodFingersLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 70 C 15 50, 25 40, 40 45 S 50 65, 50 65 L 52 55 C 53 50, 58 45, 62 50 S 70 68, 70 68 L 72 58 C 73 53, 78 48, 82 53 S 90 70, 90 70 L 92 60 C 93 55, 98 50, 102 55 S 110 75, 110 75" stroke="black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 190 30 C 185 50, 175 60, 160 55 S 150 35, 150 35 L 148 45 C 147 50, 142 55, 138 50 S 130 32, 130 32 L 128 42 C 127 47, 122 52, 118 47 S 108 28, 105 30 C 100 35, 100 45, 108 52 S 130 65, 140 60" stroke="black" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const Hero: React.FC = () => {
    return (
      <section className="container mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center">
        <GoodHandGoodFingersLogo className="w-full max-w-lg h-auto mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          GOOD Heart
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          GooD Fingers
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/80 mb-10">
          Connection | <em>refinement</em> |{" "}
          <strong>explicit content</strong>, <br />
          Let your <em> imagination </em>do the rest.
        </p>
        <a
          href="#collection"
          className="bg-brand-dark text-brand-off-white font-bold py-4 px-10 hover:bg-brand-dark/80 transition-colors duration-300"
        >
          Discover The Collection
        </a>
      </section>
    );
};

export default Hero;
