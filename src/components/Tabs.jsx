import { title } from 'motion/react-client';
import React, { useState } from 'react';

const tabs = [
    {
        id: 'strategy',
        name: "Strategy",
        title: (
            <>
                <span style={{ color: '#000' }}>Strategic solutions</span>
                <span style={{ color: '#5B5B5B' }}> designed to accelerate progress and maximize impact.</span>
            </>
        ),
    },
    {
        id: 'engineering',
        name: "Engineering",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Building technology that's </span>
                <span style={{ color: '#000' }}>scalable, dependable</span>
                <span style={{ color: '#5B5B5B' }}>, and designed for impact.</span>
            </>
        ),
    },
    {
        id: 'cybersecurity',
        name: "Cyber Security",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Powering safe growth with </span>
                <span style={{ color: '#000' }}>seamless, enterprise-grade</span>
                <span style={{ color: '#5B5B5B' }}> cybersecurity.</span>
            </>
        ),
    },
    {
        id: 'talentAcquisition',
        name: "Talent Acquisition",
        title: (
            <>
                <span style={{ color: '#5B5B5B' }}>Powering your business with </span>
                <span style={{ color: '#000' }}>the right talent</span>
                <span style={{ color: '#5B5B5B' }}>, at the right time.</span>
            </>
        ),
    },
];

const Tabs = ({ activeTab, onTabChange }) => {

    return (
        <div className="bg-white font-sans">
            <div className="">
                <div
                    className="
                        flex flex-wrap lg:flex-nowrap justify-start items-center
                        gap-2 sm:gap-3 md:gap-4 lg:gap-[1.31rem]
                        mb-6 sm:mb-7 md:mb-8
                        px-2 sm:px-0
                    "
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`
                                transition-all duration-300 cursor-pointer whitespace-nowrap
                                font-montserrat font-semibold
                                text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.24663rem]
                                px-3 sm:px-4 md:px-5 lg:px-[1.35rem]
                                py-2 sm:py-2.5 md:py-2.5 lg:py-[0.625rem]
                                rounded-[3.5625rem]
                                border-2
                                min-w-max
                                ${activeTab === tab.id
                                    ? 'text-white bg-[#1d1d1d] border-[#C8C8C8]'
                                    : 'text-[#8A8A8A] bg-white border-[#C8C8C8] hover:bg-[#f5f5f5]'
                                }
                            `}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="relative my-10">
                    <hr className="w-full border-gray-900" style={{
                        background: 'linear-gradient(to right, transparent, #b6b6b6, transparent)',
                        height: '2px',
                        border: 'none',
                    }} />
                </div>
                <div className="">
                    <h2
                        className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-montserrat font-semibold text-black leading-tight md:leading-normal mb-8 md:mb-12 lg:mb-[6.62rem] max-w-full md:max-w-[40rem] lg:max-w-[52rem]"
                    >
                        {tabs.find(tab => tab.id === activeTab)?.title || ''}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
