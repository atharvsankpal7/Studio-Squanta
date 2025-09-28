import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CollaborationForm from '../components/CollaborationForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import FutureHeroSection from '../components/FutureHeroSection ';
import SoftwareSection from '../components/SoftwareSection';
import ServicesGrid2 from "../components/ServiceGrid2";
import MotionButton from '../components/ui/MotionButton';

const FuturePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black">
            <Container className="">
                <FutureHeroSection />
                <SoftwareSection />
                <ServicesGrid2 />
                <MotionButton className="xl:pt-[0rem]"/>
            </Container>
        </div>
    );
};

export default FuturePage;
