function Features() {
    return (
        <section style={{ textAlign: "center", padding: "50px", backgroundColor: "#f8f8f8", color: "black" }}>
            <h3>Наші переваги</h3>
            <h2>Чому обирають саме нас?</h2>
			<div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Сучасні технології</h3>
                    <p>Використовуємо лише новітні технологічні рішення.</p>
                </div>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Індивідуальний підхід</h3>
                    <p>Розробляємо унікальні рішення для кожного клієнта.</p>
                </div>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>Підтримка 24/7</h3>
                    <p>Завжди готові допомогти у будь-який момент.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
