import React from 'react';

/**
 * A wrapper component to identify the first section of a page
 * Used by the Navbar component to determine when to show/hide based on scroll position
 */
const FirstSectionWrapper = ({ children, className = "", ...props }) => {
    return (
        <div id="first-section" className={className} {...props}>
            {children}
        </div>
    );
};

export default FirstSectionWrapper;