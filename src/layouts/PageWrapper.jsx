import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageWrapper = ({ children }) => {
    return (
        <div >
            <Navbar />
            {children}
                <Footer />
            <div className='bg-black'>
            </div>
        </div>
    );
};

export default PageWrapper;
