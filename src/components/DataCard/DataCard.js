import css from './DataCard.module.css';

function DataCard({ width, header, className, ...props }) {

    return (
        <div style={ width ? {width} : {} }
             className={ css['layout-card'] + (className ? ' ' + className : '') }
             { ...props }>
            {header &&
                <div className={ css['layout-header'] }>
                    <div className={ css['layout-value'] }>{header || '\u00A0'}</div>
                </div>
            }
            <div className={ css['layout-body'] }>
                { props.children }
            </div>
        </div>
    )
}

export { DataCard }