import React from 'react';
import './GlobalStyles.css';

interface GlobalStylesProp {
    children: React.ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProp> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyles;
