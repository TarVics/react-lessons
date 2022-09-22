import css from './DataCard.module.css';

function DataRow({ header, caption, children }) {
    return (
        <>
            {header && <div className={ css["layout-header"] }>{header}</div>}
            <div className={ css["layout-row"] }>
                {caption && <div className={ css["layout-caption"] }>{caption}</div>}
                <div className={ css["layout-value"] }>{children}</div>
            </div>
        </>
    )
}

export {DataRow}