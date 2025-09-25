import React from 'react';

const TeamImage = () => {
    return (
        <div className="bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 md:mt-32 lg:mt-40 mb-10 sm:mb-16 md:mb-32 lg:mb-40">
            <img
                src="/Squanta Assets/team.png"
                alt="Team"
                className="w-full h-auto object-cover"
                style={{
                    maxWidth: '82.5rem',
                    height: 'auto',
                    aspectRatio: '82.5 / 38.8125',
                    flexShrink: 0
                }}
            />
        </div>
    );
};

export default TeamImage;
