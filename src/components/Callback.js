import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let code = null;

        if (hash) {
            const params = new URLSearchParams(hash.replace('#', '?'));
            code = params.get('code');
        }

        if (code) {
            localStorage.setItem('authCode', code);
            setLoading(false);
            navigate('/'); // Redirect to your main page
        } else {
            setLoading(false);
            setError('Authorization code not found. Please try again.');
        }
    }, [navigate]);

    return (
        <div>
            <h2>Callback Component</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={() => navigate('/')}>Go to Home</button>
                </>
            )}
        </div>
    );
};

export default Callback;
