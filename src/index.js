import React from 'react';
import './App.css';
import MyButton from './MyButton'; // 👈 Asegúrate de importar tu componente

function App() {
    return (
        <div className="App">
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

export default App;
