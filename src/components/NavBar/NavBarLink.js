import React from 'react';

import './NavBar.css';

function NavBarLink({selected, onSelect, children}) {
    return (
        <li onClick={onSelect} className={selected ? 'selected' : ''}>
            {children}
        </li>
    )
}

export { NavBarLink }