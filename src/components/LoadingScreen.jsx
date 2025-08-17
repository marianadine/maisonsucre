import React from 'react';
import mslogo from '../imgs/mslogo.png';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <img src={mslogo} alt="Maison Sucré Logo" className="logo" />
            <div className="loading-text">
                Loading<span className="dots"></span>
            </div>
        </div>
    );
};

export default LoadingScreen;
