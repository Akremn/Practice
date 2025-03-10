function HowWeWork() {
    return (
        <section style={{ textAlign: "center", padding: "50px", backgroundColor: "white", color: "black" }}>
            <h2>Як ми працюємо</h2>
            <p>Наш процес роботи складається з кількох важливих етапів.</p>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>01 Аналіз</h3>
                    <p>Ми детально аналізуємо ваш бізнес та його потреби.</p>
                </div>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>02 Проєктування</h3>
                    <p>Створюємо ефективну стратегію та прототипи.</p>
                </div>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>03 Розробка</h3>
                    <p>Реалізовуємо проєкт, використовуючи сучасні технології.</p>
                </div>
                <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
                    <h3>04 Тестування</h3>
                    <p>Перевіряємо якість та ефективність роботи продукту.</p>
                </div>
            </div>
        </section>
    );
}

export default HowWeWork;
