const users = [
    {
        id: 1,
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    },
    {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'https://i.imgur.com/MK3eW3As.jpg',
        imageSize: 90,
    },
    {
        id: 3,
        name: 'Ada Lovelace',
        imageUrl: 'https://i.imgur.com/npXxJ25s.jpg',
        imageSize: 90,
    },
];

export default function Profile() {
    return (
        <div>
            <h2>Perfiles</h2>
            {users.map((user) => (
                <div key={user.id} style={{ marginBottom: '20px' }}>
                    <h3>{user.name}</h3>
                    <img
                        className="avatar"
                        src={user.imageUrl}
                        alt={'Foto de ' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize,
                            borderRadius: '50%',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
