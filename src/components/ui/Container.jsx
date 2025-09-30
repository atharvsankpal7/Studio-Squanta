import React from 'react';

/**
 * Container component with consistent horizontal padding
 * Uses 3.75rem padding on desktop, responsive on smaller screens
 */
const   Container = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  fullWidth = false,
  ...props 
}) => {
  const containerClasses = fullWidth 
    ? `w-full px-4 sm:px-6 md:px-[3.75rem] ${className}`
    : `w-full max-w-[90rem] mx-auto  ${className}`;

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  );
};

export default Container;
