// src/components/Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        let code = null;
        if (hash) {
            const params = new URLSearchParams(hash.replace('#', '?'));
            code = params.get('code');
        }

        if (code) {
            // Save the code to local storage or state management for later use
            localStorage.setItem('authCode', code);
            navigate('/'); // Redirect to your main page
        }
    }, [navigate]); // Change from history to navigate

    return (
        <div>
            <h2>Callback Component</h2>
            {/* Example of using navigate */}
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};

export default Callback;
