import React, {Children, useState} from 'react';
// import PropTypes from 'prop-types';

import './NavBar.css';
import NavBarLink from "./NavBarLink";

// NavBar.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
//     onSelect: PropTypes.func
// };

function NavBar({children, onSelect}) {
    const [selected, setSelected] = useState(() => {
        let res = null;
        Children.forEach(children, child => {
            if (child.type === NavBarLink && child.props.selected) {
                res = child.key;
            }
        })
        return res;
    });

    return (
        <div className="NavBar">
            {Children.map(children, child => {
                return React.cloneElement(child, {
                    selected: selected === child.key,
                    onSelect: () => setSelected(child.key)
                })
            })}
        </div>
    )
}

export default NavBar;


