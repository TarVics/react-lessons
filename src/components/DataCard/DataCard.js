import css from './DataCard.module.css';

function DataCard({ width, header, children, className, ...props }) {
    const style = {};
    const classList = [css['layout-card']];
    if (className) classList.push(className);

    if (width) style.width = width;

    return (
        <div style={style} className={css['layout-card'] + (className ? ' ' + className : '')} {...props}>
            <div className={css['layout-header']}>
                <div className={css['layout-value']}>{header || '\u00A0'}</div>
            </div>
            <div className={css['layout-body']}>
                {children}
            </div>
        </div>
    )
}

export {DataCard}