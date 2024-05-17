import React from 'react';

interface headerProps {
    children: string
}
const HeaderText: React.FC<headerProps> = ({ children }) => {

    return (
        <h2 style={{ fontSize: "1.7em", fontWeight: 'bolder' }}>
            {children}
        </h2>

    );
}

export default HeaderText;