import React, {Children, useEffect, useState} from 'react';

import './NavBar.css';
import {NavBarLink} from "./NavBarLink";

function NavBar({children, selected:rootSelected, onSelect}) {
    const [selected, setSelected] = useState(() => {
        if(rootSelected) return rootSelected;
        let res = null;
        Children.forEach(children, child => {
            if (child.type === NavBarLink && child.props.selected) {
                res = child.key;
            }
        })
        return res;
    });

    useEffect(() => {
        if(typeof onSelect === 'function') onSelect(selected)
    }, [selected, onSelect]);

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

export { NavBar }


