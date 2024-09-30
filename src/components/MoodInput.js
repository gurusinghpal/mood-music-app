// src/components/MoodInput.js
import React from 'react';
import './MoodInput.css'; // Import CSS file for styling

const MoodInput = ({ setMood, setLanguage }) => {
  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="mood-input-wrapper">
      <div className="mood-input-group">
        <label htmlFor="mood" className="mood-input-label">Select your current mood:</label>
        <select id="mood" className="mood-select" onChange={handleMoodChange}>
          <option value="">--Choose Mood--</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="relaxed">Relaxed</option>
          <option value="energetic">Energetic</option>
        </select>
      </div>

      <div className="mood-input-group">
        <label htmlFor="language" className="mood-input-label">Select song language:</label>
        <select id="language" className="mood-select" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default MoodInput;
