// src/components/MusicSpectrum.js
import React from 'react';
import './MusicSpectrum.css'; // Import the CSS file for styling

const MusicSpectrum = () => {
    return (
        <div className="spectrum-container">
            <svg viewBox="0 0 100 20" className="spectrum">
                <rect className="bar bar1" x="5" y="0" width="5" height="20" />
                <rect className="bar bar2" x="15" y="0" width="5" height="15" />
                <rect className="bar bar3" x="25" y="0" width="5" height="18" />
                <rect className="bar bar4" x="35" y="0" width="5" height="12" />
                <rect className="bar bar5" x="45" y="0" width="5" height="14" />
                <rect className="bar bar6" x="55" y="0" width="5" height="17" />
                <rect className="bar bar7" x="65" y="0" width="5" height="10" />
                <rect className="bar bar8" x="75" y="0" width="5" height="16" />
                <rect className="bar bar9" x="85" y="0" width="5" height="19" />
                <rect className="bar bar10" x="95" y="0" width="5" height="13" />
            </svg>
        </div>
    );
};

export default MusicSpectrum;
