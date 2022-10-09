import css from './DataCard.module.css';

function DataLayout({ width, height, columns, className, padding, ...props }) {
    const classList = [ css['layout'] ];
    const style = {};

    if (className) classList.push(className);

    let name = css['width-' + width];
    if (name) {
        classList.push(name);
    } else {
        style.width = width;
    }

    if (padding) style.padding = padding;
    if (height) style.height = height;

    name = css['columns-' + columns];
    if (name) classList.push(name);

    return (
        <div style={ style } className={ classList.join(' ') } { ...props }>
            { props.children }
        </div>
    )
}

export { DataLayout }