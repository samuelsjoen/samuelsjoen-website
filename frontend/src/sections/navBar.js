import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import useScrollVisibility from "../functionality/useScrollVisibility";

function NavBar({ title }) {
<<<<<<< Updated upstream
    const isVisible = useScrollVisibility();

    return (
        <div className={`navBar ${isVisible ? 'visible' : 'hidden'}`}>
            <Banner title={title} link="/photography" />
            <NavigationButton title="About me" link="/about" />
            <NavigationButton title="Contact" link="/contact" />
        </div>
    );
=======
  const isVisible = useScrollVisibility();

  return (
    <div className={`navBar ${isVisible ? "visible" : "hidden"}`}>
      <Banner title={title} link="/about" />
      <NavigationButton title="Photos" link="/photography" />
      <NavigationButton title="Films" link="/filmography" />
      <NavigationButton title="Contact" link="/contact" />
    </div>
  );
>>>>>>> Stashed changes
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

import React, { useState } from "react";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu" onMouseLeave={closeDropdown}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
