import React, { FunctionComponent } from 'react';
import './style.css';

const Loader: FunctionComponent = () => {
    return (
        <div className="center">
            <div className="dot-1" />
            <div className="dot-2" />
            <div className="dot-3" />
        </div>
    );
};

export default Loader;
