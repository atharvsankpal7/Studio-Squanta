import React from 'react';
import CareersPage from '../components/CareersPage';
import ApplyForm from '../components/ApplyForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const CareersPageContainer = () => {
    return (
        <Container>
            <FirstSectionWrapper>
                <CareersPage />
            </FirstSectionWrapper>
            <ApplyForm />
        </Container>
    );
};

export default CareersPageContainer;
