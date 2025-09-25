import React from 'react';

const SoftwareSection = () => {
    // Static data array for the software cards
    const softwareData = [
        {
            id: 1,
            image: '/Squanta Assets/ChatGPT.png',
            title: 'ChatGPT',
            description: 'Brainstorming Ideas'
        },
        {
            id: 2,
            image: '/Squanta Assets/Adobe Photoshop.png',
            title: 'Adobe Photoshop',
            description: 'Image Editing & Design'
        },
        {
            id: 3,
            image: '/Squanta Assets/Adobe Illustrator.png',
            title: 'Adobe Illustrator',
            description: 'Vector Graphics & Logos'
        },
        {
            id: 4,
            image: '/Squanta Assets/Adobe After Effects.png',
            title: 'After Effects',
            description: 'Motion Graphics & Animation'
        },
        {
            id: 5,
            image: '/Squanta Assets/Adobe Premiere Pro.png',
            title: 'Premiere Pro',
            description: 'Video Editing & Production'
        },
        {
            id: 6,
            image: '/Squanta Assets/Figma.png',
            title: 'Figma',
            description: 'UI/UX Design & Prototyping'
        },
        {
            id: 7,
            image: '/Squanta Assets/Framer.png',
            title: 'Framer',
            description: 'Interactive Design & Development'
        },
        {
            id: 8,
            image: '/Squanta Assets/Notion.png',
            title: 'Notion',
            description: 'Project Management & Documentation'
        },
        {
            id: 9,
            image: '/Squanta Assets/Midjourney.png',
            title: 'Midjourney',
            description: 'AI Image Generation'
        },
        {
            id: 10,
            image: '/Squanta Assets/Adobe Firefly.png',
            title: 'Adobe Firefly',
            description: 'AI Creative Tools'
        },
        {
            id: 11,
            image: '/Squanta Assets/Disney Plus.png',
            title: 'Disney Plus',
            description: 'Entertainment & Media'
        },
        {
            id: 12,
            image: '/Squanta Assets/Google.png',
            title: 'Google Workspace',
            description: 'Productivity & Collaboration'
        }
    ];

    return (
        <div className="bg-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90rem] mx-auto">
                {/* Responsive grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {softwareData.map((item) => (
                        <div
                            key={item.id}
                            className="relative mx-auto w-full max-w-[25.625rem]"
                            style={{
                                height: 'clamp(14rem, 16vw, 18rem)',
                                flexShrink: 0,
                                background: 'linear-gradient(0deg, #1C1C1C 0%, #1C1C1C 100%), #1C1C1C',
                                borderRadius: '0.5rem'
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
                                className="absolute font-rogbold"
                                style={{
                                    bottom: 'clamp(3rem, 6vw, 4.56rem)',
                                    left: '1rem',
                                    color: '#FFF',
                                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                                    fontWeight: '400',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.05rem'
                                }}
                            >
                                {item.title}
                            </div>

                            {/* Secondary text */}
                            <div
                                className="absolute font-montserrat"
                                style={{
                                    bottom: 'clamp(1rem, 2.5vw, 2.31rem)',
                                    left: '1rem',
                                    color: '#FFF',
                                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                                    fontWeight: '400',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.04rem'
                                }}
                            >
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareSection;
