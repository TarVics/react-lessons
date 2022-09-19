function DataRow({header, caption, children}) {
    return (
        <>
            {header &&
            <div className="layout-header">
                <div className="layout-value">{header || '\u00A0'}</div>
            </div>}
            <div className="layout-row">
                {caption && <div className="layout-caption">{caption}</div>}
                <div className="layout-value">{children}</div>
            </div>
        </>
    )
}

export { DataRow }