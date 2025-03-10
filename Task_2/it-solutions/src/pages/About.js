// src/pages/About.js
import React from 'react';

function About() {
    return (
        <div style={{ backgroundColor: '#1a1b3a', color: 'white' }}>
            <section className="about-content" style={{ padding: '50px', textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
                <h2>Про нашу компанію</h2>
                <p>IT Solutions — це компанія, яка спеціалізується на розробці інноваційних технологічних рішень для вашого бізнесу. Ми допомагаємо клієнтам вийти на нові ринки, покращити ефективність роботи та вирішити складні завдання.</p>

                <h3>Наша команда</h3>
                <p>Наша команда складається з висококваліфікованих спеціалістів, кожен з яких має унікальний досвід і вміння. Разом ми створюємо рішення, які відповідають найвищим стандартам якості та інноваційності.</p>

                <div className="team-section" style={{ marginTop: '50px' }}>
                    <h3>Знайомтесь з нашими лідерами</h3>
                    <div className="team-members" style={{ display: 'flex', justifyContent: 'space-around', gap: '30px', marginTop: '20px' }}>
                        <div className="team-member" style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '10px', width: '250px', textAlign: 'center' }}>
                            <img src="team-member1.jpg" alt="Член команди 1" style={{ width: '100%', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} />
                            <h4>Олександр Іванов</h4>
                            <p>Генеральний директор</p>
                            <p>Олександр має понад 10 років досвіду у сфері інформаційних технологій, керуючи проектами та створюючи інноваційні рішення.</p>
                        </div>
                        <div className="team-member" style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '10px', width: '250px', textAlign: 'center' }}>
                            <img src="team-member2.jpg" alt="Член команди 2" style={{ width: '100%', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} />
                            <h4>Марія Коваль</h4>
                            <p>Технічний директор</p>
                            <p>Марія відповідає за технічні аспекти проектів та забезпечує найвищу якість розробки на всіх етапах.</p>
                        </div>
                        <div className="team-member" style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '10px', width: '250px', textAlign: 'center' }}>
                            <img src="team-member3.jpg" alt="Член команди 3" style={{ width: '100%', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} />
                            <h4>Ігор Петров</h4>
                            <p>Менеджер з продукту</p>
                            <p>Ігор керує розробкою продуктів, визначаючи стратегію і напрямки розвитку кожного проекту.</p>
                        </div>
                    </div>
                </div>

                <h3>Наші погляди</h3>
                <p>Ми віримо, що технології повинні служити людині. Наш підхід — це інновації, які орієнтовані на результат і допомагають компаніям досягати нових висот. Ми прагнемо бути не просто постачальниками рішень, а партнерами, що допомагають кожному клієнту досягти успіху.</p>
            </section>
        </div>
    );
}

export default About;
