import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';
import './_nav.scss';
import './_hamburger.scss';
import '../../styles/main.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="header bg-blur">
            <Link to="/">
                <h1 className="ttl ttl--main">Don't Roll Single</h1>
            </Link>

            <div className="hamburger">
                <button id="hamburger-menu-icon" onClick={toggleMenu} className={menuOpen ? 'close' : ''} aria-label="Ouvrir/fermer le menu">
                    <img src="../../assets/img/hamburger.svg" alt="Menu Hamburger" />
                </button>
            </div>

            <nav
                className={`nav hamburger__menu ${menuOpen ? 'overlay' : ''}`}
                id="menu"
                aria-label="Navigation principale du site"
            >
                <ul className="nav" id="nav-list">
                    <li className="nav__itm">
                        <Link to="/" className="nav__lnk">Accueil</Link>
                    </li>
                    <li className="nav__itm">
                        <Link to="/worldmap" className="nav__lnk">Carte du Monde</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
