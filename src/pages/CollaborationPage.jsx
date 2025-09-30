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

        <div className="w-full mx-auto  max-w-[100vw] lg:max-w-[90rem] lg:px-10 px-2 md:px-[3.75rem] text-white t max-w-[100vw]lg:pl-0 pt-18">
            <CollaborationForm />
        </div>
        </div>
    );
};

export default CollaborationPage;
