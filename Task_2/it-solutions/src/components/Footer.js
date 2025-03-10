import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style={{ textAlign: "center", padding: "30px", backgroundColor: "#16172d", color: "white", marginTop: "50px" }}>
            <p>Email: <a href="mailto:contact@website.com" style={{ color: "#4e51e8", textDecoration: "none" }}>contact@website.com</a></p>
            <p>Телефон: 0927 6277 28525</p>
            <p>&copy; 2022 IT Solutions | <Link to="/" style={{ color: "#4e51e8" }}>Головна</Link> | <Link to="/about" style={{ color: "#4e51e8" }}>Про нас</Link> | <Link to="/prices" style={{ color: "#4e51e8" }}>Послуги</Link></p>
        </footer>
    );
}

export default Footer;