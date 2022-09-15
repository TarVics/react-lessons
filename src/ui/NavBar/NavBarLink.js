import React from 'react';

import './NavBar.css';

import PropTypes from 'prop-types';

NavBarLink.propTypes = {
    onSelect: PropTypes.func
};

function NavBarLink({selected, onSelect, children}) {
    return (
        <a href="#" onClick={onSelect} className={selected ? 'selected' : ''}>
            {children}
        </a>
    )
}

export default NavBarLink;