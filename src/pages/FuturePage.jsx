import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CollaborationForm from '../components/CollaborationForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import FutureHeroSection from '../components/FutureHeroSection ';
import SoftwareSection from '../components/SoftwareSection';
import ServicesGrid from "../components/ServiceGrid";

const FuturePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black">
            <Container className=" pt-25 md:pt-36">
                <FutureHeroSection />
                <SoftwareSection />
                <ServicesGrid />
            </Container>
        </div>
    );
};

export default FuturePage;
