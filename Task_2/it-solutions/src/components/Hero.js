function Hero() {
    return (
        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px", backgroundColor: "#1a1b3a", color: "white" }}>
            <div style={{ flex: 1, textAlign: "left" }}>
                <h1>Інноваційні IT-рішення для вашого бізнесу</h1>
                <p>Ми створюємо ефективні технологічні рішення, які допомагають вам розвиватися та досягати нових висот.</p>
                <button style={{ backgroundColor: "#ffb400", color: "black", padding: "10px 20px", borderRadius: "5px", fontWeight: "600", border: "none" }}>Дізнатися більше</button>
            </div>
            <div style={{ flex: 1, textAlign: "right" }}>
                <img src="/hero-image.png" alt="IT Solutions" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
        </section>
    );
}

export default Hero;