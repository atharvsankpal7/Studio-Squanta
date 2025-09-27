import React from 'react';

const SoftwareSection2 = () => {
    // Static data array for the software cards
    const softwareData = [
        {
            id: 1,
            image: '/Squanta Assets/ss1.png',
            title: 'Finora',
            description: ['Marketing']
        },
        {
            id: 2,
            image: '/Squanta Assets/ss2.png',
            title: 'Off-Thrd',
            description: ['Branding']
        },
        {
            id: 3,
            image: '/Squanta Assets/ss3.png',
            title: 'T3 CAFE',
            description: ['Rebranding']
        },
        {
            id: 4,
            image: '/Squanta Assets/ss4.png',
            title: 'FIREFIT',
            description: ['Iconography', 'Illustration', 'App Design']
        },
        {
            id: 5,
            image: '/Squanta Assets/ss5.png',
            title: 'Wellnest Health',
            description: ['Rebranding', 'App Design (UI/UX)']
        },
        {
            id: 6,
            image: '/Squanta Assets/ss6.png',
            title: 'Cafe 10',
            description: ['Rebranding', 'Digital', 'Marketing']
        },

    ];

    return (
        <div className="bg-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto overflow-hidden">
                {/* Responsive grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[1.88rem] gap-y-[0.75rem] justify-center">
                    {softwareData.map((item) => (
                        <div
                            key={item.id}
                            className="relative mx-auto w-[26.25rem] h-[18rem]"
                            style={{
                                flexShrink: 0,
                                background: 'linear-gradient(0deg, #1C1C1C 0%, #1C1C1C 100%), #1C1C1C',
                            }}
                        >
                            {/* Image at top left corner */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-0 lg:left-0"
                                style={{
                                    width: 'clamp(4rem, 8vw, 6.25rem)',
                                    height: 'clamp(4rem, 8vw, 6.25rem)',
                                    flexShrink: 0,
                                    objectFit: 'contain'
                                }}
                            />

                            {/* Main text */}
                            <div
                                className="absolute font-alan-sans"
                                style={{
                                    bottom: 'clamp(3rem, 6vw, 4.56rem)',
                                    left: '1rem',
                                    color: '#FFF',
                                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                                    fontWeight: '400',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.05rem'
                                }}
                            >
                                {item.title}
                            </div>

                            {/* Secondary text rendered as array */}
                            <div
                                className="absolute font-alan-sans"
                                style={{
                                    bottom: 'clamp(1rem, 2.5vw, 2.31rem)',
                                    left: '1rem',
                                    color: '#FFF',
                                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                                    fontWeight: '400',
                                    lineHeight: '1.5rem',
                                }}
                            >
                                {item.description.map((word, index) => (
                                    <span key={index} style={{ marginRight: '1rem' }}>{word}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareSection2;
