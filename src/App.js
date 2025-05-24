import React, { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import Profile from './Profile';

function App() {
    const [showProfile, setShowProfile] = useState(true);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className="App">
            <h1>Welcome to my app</h1>

            <MyButton />

            <button onClick={toggleProfile} style={{ marginTop: '20px' }}>
                {showProfile ? 'Ocultar perfil' : 'Mostrar perfil'}
            </button>

            {showProfile && <Profile />}
        </div>
    );
}

export default App;
