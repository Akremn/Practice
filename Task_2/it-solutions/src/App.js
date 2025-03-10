import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Features from "./components/Features";
import Prices from "./pages/Prices";  // Оновлений імпорт
import About from './pages/About';

function Home() {
    return (
        <>
            <Hero />
            <HowWeWork />
            <Features />
        </>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prices" element={<Prices />} /> {/* Додано маршрут для сторінки цін */}
				<Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;