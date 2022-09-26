import React, {Children, useEffect, useState} from 'react';

import {NavBarLink} from "./NavBarLink";
import css from './NavBar.module.css';

function NavBar({children, selected: rootSelected, onSelect}) {
    const [selected, setSelected] = useState(() => {
        if (rootSelected) return rootSelected;
        let res = null;
        Children.forEach(children, child => {
            if (child.type === NavBarLink && child.props.selected) {
                res = child.key;
            }
        })
        return res;
    });

    useEffect(() => {
        if (typeof onSelect === 'function') onSelect(selected)
    }, [selected, onSelect]);

    return (
        <div className={css.NavBar}>
            {Children.map(children, child => {
                return React.cloneElement(child, {
                    /* comments/6 === comments */
                    selected: selected.match('^' + child.key + '(/[^$]*)?$'),
                    onSelect: () => setSelected(child.key)
                })
            })}
        </div>
    )
}

export {NavBar}


