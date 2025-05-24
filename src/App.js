import React from 'react';
import './App.css';
import MyButton from './MyButton';
import Profile from './Profile'; // 👈 nuevo componente

function App() {
  return (
      <div className="App">
        <h1>Welcome to my app</h1>
        <MyButton />
        <Profile /> {/* 👈 insertamos el nuevo componente */}
      </div>
  );
}

export default App;
