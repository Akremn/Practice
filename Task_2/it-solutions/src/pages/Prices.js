import React from "react";

function Prices() {
    return (
        <section style={{ padding: "50px", textAlign: "center", backgroundColor: "white", color: "black" }}>
            <h2>Наші ціни</h2>
            <p>Ми пропонуємо гнучкі та прозорі ціни для різних видів послуг. Ознайомтесь із нашими тарифами, щоб знайти оптимальне рішення для вашого бізнесу.</p>

            <div style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h3 style={{ fontSize: "1.5em", marginBottom: "10px" }}>Базовий пакет</h3>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>Для малого бізнесу</p>
                    <div style={{ fontSize: "2em", color: "#4e51e8", fontWeight: "bold", marginBottom: "20px" }}>5,000 грн</div>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>Цей пакет включає основні послуги: створення сайту, налаштування SEO та базову підтримку.</p>
                </div>

                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h3 style={{ fontSize: "1.5em", marginBottom: "10px" }}>Стандартний пакет</h3>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>Для середнього бізнесу</p>
                    <div style={{ fontSize: "2em", color: "#4e51e8", fontWeight: "bold", marginBottom: "20px" }}>10,000 грн</div>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>У цьому пакеті додатково є інтеграції з CRM-системами, технічна підтримка 24/7 та аналітика.</p>
                </div>

                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h3 style={{ fontSize: "1.5em", marginBottom: "10px" }}>Преміум пакет</h3>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>Для великих підприємств</p>
                    <div style={{ fontSize: "2em", color: "#4e51e8", fontWeight: "bold", marginBottom: "20px" }}>20,000 грн</div>
                    <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>Уключає всі послуги попередніх пакетів та додаткові функції для автоматизації бізнес-процесів і розробку індивідуальних рішень.</p>
                </div>
            </div>
        </section>
    );
}

export default Prices;