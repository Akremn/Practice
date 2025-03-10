import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#16172d' }}>
                    <div className="logo" style={{ fontSize: '1.5em',color: "white", fontWeight: 600 }}>IT Solutions</div>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Головна</Link></li>
                        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>Про нас</Link></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 400 }}>Послуги</a></li>
                        <li><Link to="/prices" style={{ color: "white", textDecoration: "none" }}>Ціни</Link></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 400 }}>Блог</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 400 }}>Контакти</a></li>
                    </ul>
                    <button className="contact" style={{ backgroundColor: '#4e51e8', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', fontWeight: 600 }}>
                        Зв'яжіться з нами
                    </button>
                </nav>
            </header>
    );
}

export default Navbar;