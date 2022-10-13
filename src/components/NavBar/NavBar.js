import React, {Children, useEffect, useState} from 'react';

import {NavBarLink} from "./NavBarLink";
import css from './NavBar.module.css';

function NavBar({children, selected: rootSelected, onSelect, className}) {
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

    let startIndex = -1;
    let endIndex = -1;

    return (
        <nav className={css.NavBar + (className ? ' ' + className : '')}>
            {
                Children.map(children, (child, index) => {
                    if (child.type === NavBarLink) {
                        if (startIndex === -1) startIndex = index;
                        endIndex = index;
                        return null;
                    }
                    return ~startIndex ? null : child;
                })
            }
            <ul>
                {
                    Children.map(children, child => {
                        return (child.type === NavBarLink) ?
                            React.cloneElement(child, {
                                /* comments/6 === comments */
                                selected: selected && selected.match('^' + child.key + '(/[^$]*)?$'),
                                onSelect: () => setSelected(child.key)
                            }) : null;
                    })
                }
            </ul>
            {
                Children.map(children, (child, index) =>
                    (child.type === NavBarLink || index <= endIndex) ? null : child
                )
            }
        </nav>
    )
}

export {NavBar}


