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
        <Container>
            <CollaborationForm />
        </Container>
    );
};

export default CollaborationPage;
