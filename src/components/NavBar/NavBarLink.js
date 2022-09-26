import css from './NavBar.module.css';

function NavBarLink({selected, onSelect, ...props}) {
    return (
        <li onClick={onSelect} className={selected ? css.selected : ''}>
            {props.children}
        </li>
    )
}

export { NavBarLink }