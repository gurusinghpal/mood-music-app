// src/components/MoodInput.js
import React from 'react';

const MoodInput = ({ setMood, setLanguage }) => {
    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <label>Select your current mood:</label>
            <select onChange={handleMoodChange}>
                <option value="">--Choose Mood--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="relaxed">Relaxed</option>
                <option value="energetic">Energetic</option>
            </select>

            <label>Select language:</label>
            <select onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="hi">Hindi</option> {/* Add Hindi option */}
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                {/* Add more language options as needed */}
            </select>
        </div>
    );
};

export default MoodInput;
