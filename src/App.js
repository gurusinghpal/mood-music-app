// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlist from './components/Playlist';
import Callback from './components/Callback';
import MoodInput from './components/MoodInput'; // Ensure this component exists

const App = () => {
  const [mood, setMood] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <Router>
      <div>
        <h1>Mood-Based Music Recommendation</h1>
        <MoodInput setMood={setMood} setLanguage={setLanguage} />
        {mood && <Playlist mood={mood} language={language} />}
      </div>
      <Routes>
        {/* <Route path="/" element={<Playlist />} /> */}
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
};

export default App;
