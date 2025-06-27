function ModelCard({ model }) {
    return (
        <div className="model-card">
            <img src={model.image} alt={model.name} />
            <h3>{model.name}</h3>
            <p>{model.description}</p>
        </div>
    );
}

function App() {
    const models = [
        { name: 'Samantha', image: 'https://placekitten.com/300/200', description: 'Fun and flirty brunette.' },
        { name: 'Ashley', image: 'https://placekitten.com/300/201', description: 'Energetic redhead who loves to chat.' },
        { name: 'Jade', image: 'https://placekitten.com/300/202', description: 'Sultry blonde with a playful attitude.' },
    ];

    return (
        <div>
            <header>
                <h1>Naughty Cam Boss</h1>
                <p>Explore live cam models</p>
            </header>
            <main>
                {models.map(model => (
                    <ModelCard key={model.name} model={model} />
                ))}
            </main>
        </div>
    );
}
export default App;
