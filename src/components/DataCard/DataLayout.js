import css from './DataCard.module.css';

function DataLayout({width, columns, className, children, ...props}) {
    const classList = [css['layout']];
    const style = {};

    if (className) classList.push(className);

    let name = css['width-' + width];
    if (name) {
        classList.push(name);
    } else {
        style.width = width;
    }

    name = css['columns-' + columns];
    if (name) classList.push(name);

    return (
        <div style={style} className={classList.join(' ')} {...props}>
            {children}
        </div>
    )
}

export {DataLayout}