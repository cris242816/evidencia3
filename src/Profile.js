// src/Profile.js
import React, { useState } from 'react';

const users = [
    {
        id: 1,
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    },
    {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'https://i.imgur.com/MK3eW3As.jpg',
        imageSize: 90
    },
    {
        id: 3,
        name: 'Ada Lovelace',
        imageUrl: 'https://i.imgur.com/npXxJ25s.jpg',
        imageSize: 90
    }
];

export default function Profile() {
    const [likes, setLikes] = useState(
        users.reduce((acc, user) => {
            acc[user.id] = 0;
            return acc;
        }, {})
    );

    const handleLike = (userId) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [userId]: prevLikes[userId] + 1
        }));
    };

    return (
        <div>
            <h2>Perfiles</h2>
            {users.map((user) => (
                <div key={user.id} style={{ marginBottom: '30px' }}>
                    <h3>{user.name}</h3>
                    <img
                        src={user.imageUrl}
                        alt={'Foto de ' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize,
                            borderRadius: '50%'
                        }}
                    />
                    <div style={{ marginTop: '10px' }}>
                        <button onClick={() => handleLike(user.id)}>❤️ Me gusta</button>
                        <span style={{ marginLeft: '10px' }}>
              Me gusta: {likes[user.id]}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
