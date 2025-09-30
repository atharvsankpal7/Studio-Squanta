import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CollaborationForm from '../components/CollaborationForm';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';

const CollaborationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black w-full">

        <Container className="px-4 sm:px-6 md:px-[3.75rem] lg:pl-0 pt-18">
            <CollaborationForm />
        </Container>
        </div>
    );
};

export default CollaborationPage;
