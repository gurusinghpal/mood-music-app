// src/App.js
import React, { useState } from 'react';
import MoodInput from './components/MoodInput';
import Playlist from './components/Playlist';
import './App.css'; // Import the global styles

function App() {
    const [mood, setMood] = useState('');
    const [language, setLanguage] = useState('en'); // Default language is English

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Mood-Based Music Recommendation</h1>
                <MoodInput setMood={setMood} setLanguage={setLanguage} />
            </header>
            <main className="app-content">
                {mood && <Playlist mood={mood} language={language} />}
            </main>
        </div>
    );
}

export default App;
