import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';

const ServicesSections = ({ sections }) => {
    const navigate = useNavigate();

    const handleLearnMoreClick = (sectionType) => {
        // Navigate to Know More page with the appropriate tab
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/know-more', { state: { activeTab: sectionType } });
    };

    return (
        <div className='w-full overflow-hidden'>
            <Section
                {...sections.strategy}
                onLearnMoreClick={() => handleLearnMoreClick('strategy')}
            />
            <Section
                {...sections.engineering}
                onLearnMoreClick={() => handleLearnMoreClick('engineering')}
            />
            <Section
                {...sections.cybersecurity}
                onLearnMoreClick={() => handleLearnMoreClick('cybersecurity')}
            />
            <Section
                {...sections.talentAcquisition}
                onLearnMoreClick={() => handleLearnMoreClick('talentAcquisition')}
            />
        </div>
    );
};

export default ServicesSections;
