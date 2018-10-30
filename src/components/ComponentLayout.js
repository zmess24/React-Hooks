import React from 'react';
import Header from './Header';

export default({ children, headerText }) => {
    return (
        <div>
            <Header text={headerText}/>
            <div className="row">
                <div className="column" style={{ textAlign: "center" }}>
                    {children}
                </div>
            </div>
        </div>
    )
};