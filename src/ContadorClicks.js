import React, { useState } from 'react';

export default function ContadorClicks() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div style={{ marginTop: '30px' }}>
            <h3>Contador de clics</h3>
            <button onClick={handleClick}>Haz clic</button>
            <p>Has hecho clic {count} veces</p>
        </div>
    );
}
