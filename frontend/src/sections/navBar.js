import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import useScrollVisibility from '../functionality/useScrollVisibility';

function NavBar({ title }) {
    const isVisible = useScrollVisibility();

    return (
        <div className={`navBar ${isVisible ? 'visible' : 'hidden'}`}>
            <Banner title={title} link="/photography" />
            <NavigationButton title="About me" link="/about" />
            <NavigationButton title="Contact" link="/contact" />
        </div>
    );
}

/// A simple banner component. Mainly used for the main website banner.
function Banner({ title, link }) {
    return (
        <Link to={link} className="banner">
            {title}
        </Link>
    );
}

function NavigationButton({ title, link }) {
    return (
        <Link to={link} className="menuButton">
            {title}
        </Link>
    );
}

export default NavBar;