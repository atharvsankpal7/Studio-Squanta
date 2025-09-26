import React from 'react';

const FutureHeroSection = () => {
    return (
        <div className="bg-black flex items-center justify-center  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <h1
                className="text-white font-alan-sans  leading-tight sm:leading-normal"
                style={{
                    maxWidth: '82.5rem',
                    width: '100%',
                    fontSize: 'clamp(2rem, 8vw, 6.0425rem)',
                    fontWeight: '400',
                    lineHeight: 'clamp(1.1, 1.2, normal)'
                }}
            >
                We harness{' '}
                <span style={{ color: '#00FF26' }}>cutting edge</span>{' '}
                technology to streamline workflows and supercharge creativity.
            </h1>
        </div>
    );
};

export default FutureHeroSection;
