import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';

const Header = () => {
    return(
        <header className="header bg-blur">

        <Link to="Index.tsx">
            <h1 className="ttl ttl--main">Don't Roll Single</h1>
        </Link>
        <div className="hamburger">
            <Link to="#menu" id="hamburger-menu-icon">
                <img src="assets/img/hamburger.svg" alt="Menu Hamburger" />
            </Link>
        </div>
        <nav className="nav hamburger__menu" id="menu" aria-label="Navigation principale du site">
            <ul className="nav" id="nav-list">
                {/* <li className="nav__itm">
                    <Link to="index.php" className="nav__lnk">Accueil</Link>
                </li> 
                <li className="nav__itm">
                    <Link to="worldmap.php" className="nav__lnk">Carte du Monde</Link>
                </li>
                <li className="nav__itm">
                    <Link to="" className="nav__lnk">Se connecter</Link>
                </li> */}
            </ul>
        </nav>
    </header>
    );
};

export default Header;