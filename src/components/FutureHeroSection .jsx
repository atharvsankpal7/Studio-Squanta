import React from 'react';

const FutureHeroSection = () => {
    return (
        <div className="bg-black flex items-center justify-center  pt-[5.4rem]">
            <h1
                className="text-white font-alan-sans  leading-tight sm:leading-normal pt-14 pb-[8.25rem]"
                style={{
                    maxWidth: '82.5rem',
                    width: '100%',
                    fontSize: 'clamp(2rem, 8vw, 4rem)',
                    fontWeight: '700',
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
