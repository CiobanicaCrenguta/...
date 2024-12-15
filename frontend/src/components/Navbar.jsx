import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importăm iconițele pentru meniul hamburger și închidere

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Starea pentru a controla deschiderea meniului

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Comută starea meniului deschis/închis
    };

    return (
        <>
            <header className="fixed-nav-bar w-nav">
                <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
                    {/* Linkuri Desktop (vizibile doar pe ecrane mari) */}
                    <ul className="nav__links desktop-nav-links">
                        <li className="link"><Link to="/">Pagina Principală</Link></li>
                        <li className="link"><Link to="/Magazin">Magazin</Link></li>
                        <li className="link"><Link to="/politica-retur">Politica de Retur</Link></li>
                        <li className="link"><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* Logo */}
                    <div className="nav__logo">
                        <Link to="/">Tutungerie</Link>
                    </div>

                    {/* Iconul pentru căutare */}
                    <div className="nav__icons">
                        <Link to="search">
                            <i className="ri-search-line"></i>
                        </Link>
                    </div>

                    {/* Iconul pentru meniul hamburger */}
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        {menuOpen ? (
                            <FaTimes style={{ fontSize: '2rem', color: '#D32F2F' }} />
                        ) : (
                            <FaBars style={{ fontSize: '2rem', color: '#D32F2F' }} />
                        )}
                    </div>
                </nav>
            </header>

            {/* Meniul mobil (se afișează doar când menuOpen este true) */}
            {menuOpen && (
                <div className="mobile-menu">
                    <ul className="nav__links mobile-nav-links">
                        <li className="link">
                            <Link to="/" onClick={toggleMenu}>Pagina Principală</Link>
                        </li>
                        <li className="link">
                            <Link to="/Magazin" onClick={toggleMenu}>Magazin</Link>
                        </li>
                        <li className="link">
                            <Link to="/politica-retur" onClick={toggleMenu}>Politica de Retur</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Stiluri pentru mobil și desktop */}
            <style jsx>{`
                /* Stiluri de bază pentru nav */
                .nav__links {
                    display: flex;
                    gap: 20px;
                    list-style: none;
                    padding: 0;
                }

                .nav__logo a {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #333;
                    text-decoration: none;
                }

                .nav__icons a {
                    font-size: 1.5rem;
                }

                /* Meniul Desktop (vizibil pe ecrane mai mari de 768px) */
                @media (min-width: 769px) {
                    .desktop-nav-links {
                        display: flex; /* Linkuri orizontale pe ecrane mari */
                    }

                    .mobile-menu-icon {
                        display: none; /* Ascunde iconul hamburger */
                    }

                    .mobile-menu {
                        display: none; /* Asigură-te că meniul mobil nu este vizibil pe ecrane mari */
                    }
                }

                /* Meniul Mobil (vizibil pe ecrane mai mici de 768px) */
                @media (max-width: 768px) {
                    /* Ascunde link-urile desktop */
                    .desktop-nav-links {
                        display: none;
                    }

                    /* Arată iconul hamburger */
                    .mobile-menu-icon {
                        display: block;
                        cursor: pointer;
                    }

                    .mobile-menu {
                        position: fixed; /* Fixează meniul mobil */
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%; /* Meniul mobil acoperă întreaga înălțime a ecranului */
                        background-color: rgba(252, 247, 247, 1); /* Fundal opac */
                        z-index: 1000; /* Asigură-te că meniul este deasupra altor elemente */
                        padding: 20px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        justify-content: center;
                        align-items: center;
                    }

                    .mobile-menu ul {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        list-style: none;
                        padding: 0;
                    }

                    .mobile-menu a {
                        display: block;
                        margin-bottom: 10px;
                        font-size: 1.3rem;
                        font-weight: bold;
                        color: #D32F2F;
                        text-decoration: none;
                    }

                    .mobile-menu a:hover {
                        color: #C2185B;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
