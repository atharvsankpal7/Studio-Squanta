import React from 'react';
import CareersPage from '../components/CareersPage';
import ApplyForm from '../components/ApplyForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import FirstSectionWrapper from "../components/FirstSectionWrapper";
import TeamImage from '../components/TeamImage';
import CarrersHero from '../components/CarrersHero';

const CareersPageContainer = () => {
    return (
        <div className="bg-black">
            <Container>
                <FirstSectionWrapper>
                <CarrersHero />
                </FirstSectionWrapper>
                <TeamImage />
                    <CareersPage />
                <ApplyForm />
            </Container>
        </div>
    );
};

export default CareersPageContainer;
