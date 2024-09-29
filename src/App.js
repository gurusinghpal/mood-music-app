// src/App.js
import React, { useState } from 'react';
import MoodInput from './components/MoodInput';
import Playlist from './components/Playlist';

function App() {
    const [mood, setMood] = useState('');
    const [language, setLanguage] = useState('en'); // Default language is English

    return (
        <div>
            <h1>Mood-Based Music Recommendation</h1>
            <MoodInput setMood={setMood} setLanguage={setLanguage} />
            {mood && <Playlist mood={mood} language={language} />}
        </div>
    );
}

export default App;
