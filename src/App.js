import React, { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import Profile from './Profile';
import ContadorClicks from './ContadorClicks'; // ⬅️ Añadido

function App() {
    const [showProfile, setShowProfile] = useState(true);
    const [showCounter, setShowCounter] = useState(true); // ⬅️ Nuevo estado

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    const toggleCounter = () => {
        setShowCounter(!showCounter);
    };

    return (
        <div className="App">
            <h1>Welcome to my app</h1>

            <MyButton />

            <button onClick={toggleProfile} style={{ marginTop: '20px' }}>
                {showProfile ? 'Ocultar perfil' : 'Mostrar perfil'}
            </button>

            {showProfile && <Profile />}

            <button onClick={toggleCounter} style={{ marginTop: '20px' }}>
                {showCounter ? 'Ocultar contador' : 'Mostrar contador'}
            </button>

            {showCounter && <ContadorClicks />}
        </div>
    );
}

export default App;
